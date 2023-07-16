import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import Form from '../../../features/Form/Form';
import FormEmail from '../../../features/FormEmail/FormEmail';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';

import styles from './FavoriteLeftBottom.module.scss';

const FavoriteLeftBottom = () => {
    const [isOpenEmailForm, setIsOpenEmailForm] = useState(false);
    const [isForm, setIsForm] = useState(false);
    const wrapperForm = useRef(null);
    const button = useRef(null);

    const handleClick = useCallback((): void => {
        setIsOpenEmailForm(!isOpenEmailForm);
    }, [isOpenEmailForm]);

    const handleWrapperClick = (event) => {
        if (wrapperForm.current && !wrapperForm.current.contains(event.target)) {
            setIsOpenEmailForm(false);
        }
    };

    const wrapper = useRef(null);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    useEffect(() => {
        isOpenEmailForm ? disableBodyScroll() : enableBodyScroll();
    });

    let flatsIdsString = '';

    if (localStorage.getItem('favoriteList')) {
        const localStorageArray = JSON.parse(localStorage.getItem('favoriteList'));
        localStorageArray.forEach((item) => {
            flatsIdsString += item.id + '|';
        });
        flatsIdsString = flatsIdsString.slice(0, -1);
    }

    const numbers = JSON.parse(localStorage.getItem('favoriteList')).map((el: IFlat) => el.number);

    return (
        <>
            <div className={styles.favoriteLeftBottom}>
                <div className={styles.favoriteLeftBottom__buttons}>
                    <ButtonArrow description='Скачать одним файлом' href={'/flats.pdf?ids=' + flatsIdsString} type='link'>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                            <line x1='3' y1='17.25' x2='17' y2='17.25' stroke='#24292E' strokeWidth='1.5' />
                            <path d='M10 2L10 13M10 13L6 8.58146M10 13L14 8.58146' stroke='#24292E' strokeWidth='1.5' />
                        </svg>
                    </ButtonArrow>
                    <div id='buttonLink' ref={button} onClick={() => handleClick()}>
                        <ButtonArrow type='button' description='Поделиться по email'></ButtonArrow>
                    </div>
                    {isOpenEmailForm && (
                        <div
                            onClick={(e) => {
                                handleWrapperClick(e);
                            }}
                            className={styles.favoriteLeftBottom__wrapper}
                        >
                            <div ref={wrapperForm} className={styles.favoriteLeftBottom__form}>
                                <FormEmail handleClose={handleClick} />
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={() => setIsForm(true)} className={styles.favoriteLeftBottom__request}>
                    Оставить заявку
                </button>
            </div>

            {isForm && (
                <div onClick={(e) => handleClose(e)} className={styles.favoriteLeftBottom__wrapper}>
                    <div ref={wrapper} className={styles.favoriteLeftBottomt__form}>
                        <Form formMessage={true} numbers={numbers} formNameData='favoritesForm' setIsForm={setIsForm} modalForm={true}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default FavoriteLeftBottom;
