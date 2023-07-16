import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import FavoriteButton from '../../../features/FavoriteButton/FavoriteButton';
import Form from '../../../features/Form/Form';

import SharedFlat from '../../../shared/SharedFlat/SharedFlat';
import editRoomsLabel from '../../../tools/_edit-rooms-label';
import formatLongPrice from '../../../tools/_format-long-price';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';

import FlatAdvantages from '../FlatAdvantages/FlatAdvantages';
import FlatInfoBlock from '../FlatInfoBlock/FlatInfoBlock';
import styles from './FlatInfoRight.module.scss';

interface IFlatInfoRight {
    flat: IFlat;
}

const valuePropsAreEqual: (prevValue: IFlatInfoRight, nextValue: IFlatInfoRight) => boolean = (prevValue, nextValue) => {
    return prevValue.flat === nextValue.flat;
};

const FlatInfoRight: FC<IFlatInfoRight> = ({ flat }) => {
    const rooms = editRoomsLabel(flat);
    const [isActive, setActive] = useState(false);
    const [isForm, setIsForm] = useState(false);

    const handleClick = useCallback((e) => {
        e.stopPropagation();
        e.currentTarget.id === 'buttonLink' ? setActive(true) : setActive(false);
    }, []);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const wrapper = useRef(null);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [handleClick]);

    return (
        <>
            <div className={styles.flatInfoRight}>
                <div className={styles.flatInfoRight__titlebox}>
                    <h3 className={styles.flatInfoRight__title}>Квартира №{flat?.number}</h3>
                    <FavoriteButton flat={flat} />
                </div>
                <p className={styles.flatInfoRight__deadline}>Ввод в эксплуатацию до 30.09.2025. Ключи до 30.12.2025</p>
                <div className={styles.flatInfoRight__box}>
                    <FlatInfoBlock description='Количество спален' amount={rooms?.rooms} />
                    <FlatInfoBlock description='Площадь' amount={flat?.area} />
                    {/* <FlatInfoBlock description='Количество санузлов' amount={1} /> */}
                    <FlatInfoBlock description='Этаж' amount={flat?.floor} />
                    <FlatInfoBlock description='Корпус' amount={flat?.bulk?.number} />
                    {/* <FlatInfoBlock description='Балкон' amount={flat?.attributes?.balcony} /> */}
                </div>
                <div className={styles.flatInfoRight__parameters}>
                    <p className={styles.flatInfoRight__parametersTitle}>Дополнительные параметры</p>
                    {flat && <FlatAdvantages flat={flat} />}
                </div>
                {flat?.currentPrice && flat?.redPrice ? (
                    <div className={styles.flatInfoRight__priceBlock}>
                        <p className={styles.flatInfoRight__price}>{formatLongPrice(flat?.currentPrice)} ₽</p>
                        <p className={styles.flatInfoRight__price}>{flat?.price} Зачеркнутая цена</p>
                    </div>
                ) : (
                    flat?.currentPrice && (
                        <div className={styles.flatInfoRight__priceBlock}>
                            <p className={styles.flatInfoRight__price}>{formatLongPrice(flat?.currentPrice)} ₽</p>
                        </div>
                    )
                )}

                <div className={styles.flatInfoRight__take}>
                    <ButtonArrow href={`/flats.pdf?ids=${flat?.id}`} type='link' description='Скачать планировку'>
                        <svg className={styles.flatInfoRight__arrowIcon} width='20' height='20' viewBox='0 0 20 20' fill='none'>
                            <line x1='3' y1='17.25' x2='17' y2='17.25' stroke='#24292E' strokeWidth='1.5' />
                            <path d='M10 2L10 13M10 13L6 8.58146M10 13L14 8.58146' stroke='#24292E' strokeWidth='1.5' />
                        </svg>
                    </ButtonArrow>
                    <div id='buttonLink' onClick={(e: React.MouseEvent<HTMLDivElement>): void => handleClick(e)}>
                        <ButtonArrow handleClick={() => setActive(!isActive)} type='button' description='Поделиться'>
                            <svg className={styles.flatInfoRight__iconshared} width='20' height='20' viewBox='0 0 20 20' fill='none'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M15.3333 6.4C16.8061 6.4 18 5.19117 18 3.7C18 2.20883 16.8061 1 15.3333 1C13.8606 1 12.6667 2.20883 12.6667 3.7C12.6667 3.83506 12.6765 3.9678 12.6954 4.09754L8.12233 7.50882C7.47519 6.82545 6.56444 6.4 5.55556 6.4C3.59188 6.4 2 8.01178 2 10C2 11.9882 3.59188 13.6 5.55556 13.6C6.43067 13.6 7.23194 13.2799 7.85138 12.749L12.6879 15.958C12.6739 16.07 12.6667 16.1842 12.6667 16.3C12.6667 17.7912 13.8606 19 15.3333 19C16.8061 19 18 17.7912 18 16.3C18 14.8088 16.8061 13.6 15.3333 13.6C14.6215 13.6 13.9748 13.8824 13.4966 14.3426L8.88001 11.2795C9.02934 10.8819 9.11111 10.4506 9.11111 10C9.11111 9.68637 9.0715 9.38211 8.99707 9.09207L13.543 5.70103C14.0162 6.13538 14.6443 6.4 15.3333 6.4ZM15.3333 4.6C15.8243 4.6 16.2222 4.19706 16.2222 3.7C16.2222 3.20294 15.8243 2.8 15.3333 2.8C14.8424 2.8 14.4444 3.20294 14.4444 3.7C14.4444 4.19706 14.8424 4.6 15.3333 4.6ZM15.3333 17.2C15.8243 17.2 16.2222 16.7971 16.2222 16.3C16.2222 15.8029 15.8243 15.4 15.3333 15.4C14.8424 15.4 14.4444 15.8029 14.4444 16.3C14.4444 16.7971 14.8424 17.2 15.3333 17.2ZM7.33333 10C7.33333 10.9941 6.5374 11.8 5.55556 11.8C4.57372 11.8 3.77778 10.9941 3.77778 10C3.77778 9.00589 4.57372 8.2 5.55556 8.2C6.5374 8.2 7.33333 9.00589 7.33333 10Z'
                                    fill='#24292E'
                                />
                            </svg>
                        </ButtonArrow>
                    </div>

                    <SharedFlat active={isActive} />
                </div>
                <div className={styles.flatInfoRight__purchase}>
                    <a
                        href={`https://booking.forma.ru/booking?id=${flat?.guid}`}
                        target='_blank'
                        rel='noreferrer'
                        className={`${styles.flatInfoRight__purchaseBtn} ${styles.flatInfoRight__purchaseBtnBlack}`}
                    >
                        Купить
                    </a>
                    <button onClick={() => setIsForm(true)} className={`${styles.flatInfoRight__purchaseBtn}`}>
                        Оставить заявку
                    </button>
                </div>
            </div>
            {isForm && (
                <div onClick={(e) => handleClose(e)} className={styles.flatInfoRight__wrapper}>
                    <div ref={wrapper} className={styles.flatInfoRight__form}>
                        <Form formMessage={true} formNameData='flatForm' numbers={[flat.number]} setIsForm={setIsForm} modalForm={true} />
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(FlatInfoRight, valuePropsAreEqual);
