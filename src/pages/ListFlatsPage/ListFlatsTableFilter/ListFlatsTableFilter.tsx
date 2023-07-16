import React, { useEffect, useState } from 'react';
import { resetFilters } from '../../../entities/catalogSlice';
import ModalSort from '../../../features/ModalSort/ModalSort';
import RadioSwitch from '../../../features/RadioSwitch/RadioSwitch';
import RangeSlider from '../../../features/RangeSlider/RangeSlider';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { editSectionNames } from '../../../tools/_edit_section_number';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import { useRouter } from 'next/router';
import ROUTES from '../../../data/routes';
import styles from './ListFlatsTableFilter.module.scss';

const ListFlatsTableFilter = () => {
    const filterParameters = useAppSelector((state) => state.catalog.filterParameters);
    const sectionParameters = useAppSelector((state) => state.catalog.filterParameters.selectedParams.sections);
    const red = useAppSelector((state) => state.catalog.filterParameters.redFlats);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [addClass, setAddClass] = useState<boolean>(false);
    const router = useRouter();

    const [isKey, setKey] = useState({
        inputFloor: Math.random(),
        inputArea: Math.random(),
        inputPrice: Math.random(),
    });

    const dispatch = useAppDispatch();

    const handleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModal(!isModal);
    };

    const reset = () => {
        setKey({
            inputFloor: Math.random(),
            inputArea: Math.random(),
            inputPrice: Math.random(),
        });
        dispatch(resetFilters());
        router.push(ROUTES.flats.list);
    };

    const handleCloseModal = (e: React.MouseEvent) => {
        if (!e.currentTarget) {
            setIsModal(false);
        }
    };

    useEffect(() => {
        addClass ? disableBodyScroll() : enableBodyScroll();
    }, [addClass]);

    return (
        <div className={addClass ? styles.listFilterWrapper : ''}>
            <div className={styles.listRightAdaptive}>
                <h4 className={styles.listRightAdaptive__title}>Параметры</h4>
                {!addClass && (
                    <button
                        onClick={() => {
                            reset();
                        }}
                        className={styles.listRightAdaptive__clear}
                    >
                        Cбросить
                    </button>
                )}
            </div>
            <div className={styles.listRight}>
                {addClass && (
                    <div
                        onClick={() => {
                            setAddClass(false);
                        }}
                        className={styles.listRight__close}
                    >
                        <svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M3.99976 4L25.213 25.2132' stroke='#24292E' strokeWidth='3' />
                            <path d='M3.99976 25L25.213 3.7868' stroke='#24292E' strokeWidth='3' />
                        </svg>
                    </div>
                )}
                <div className={styles.listRight__left}>
                    <RadioSwitch params={filterParameters.byCheckbox.rooms} type={'buttons'} id={'switch-rooms'} />
                    <RangeSlider
                        key={isKey.inputFloor}
                        description='Этаж'
                        slider={'floor'}
                        sup={false}
                    />
                    <RangeSlider
                        key={isKey.inputPrice}
                        description='Цена, млн. ₽'
                        slider={'price'}
                        sup={false}
                    />
                </div>
                <div className={styles.listRight__right}>
                    <div className={styles.listRight__modal}>
                        <div onClick={(e) => handleModal(e)} className={styles.listRight__accordion__item}>
                            <p className={styles.listRight__accordion__name}>
                                {sectionParameters === '' || sectionParameters === undefined
                                    ? 'Корпус'
                                    : editSectionNames(sectionParameters)}
                            </p>
                            <svg
                                className={styles.listRight__accordion__icon}
                                width='14'
                                height='8'
                                viewBox='0 0 14 8'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M13 1.2002L7 6.8002L1 1.20019' stroke='#24292E' strokeWidth='1.5' />
                            </svg>
                        </div>
                        {isModal && (
                            <ModalSort
                                handleClose={handleCloseModal}
                                params={filterParameters.byCheckbox.sections}
                                id={'switch-sections'}
                            />
                        )}
                    </div>
                    <RangeSlider
                        key={isKey.inputArea}
                        description='Площадь, м'
                        slider={'area'}
                        sup={true}
                    />
                    {red && <RadioSwitch params={filterParameters.byCheckbox.redPrice} type={'checkboxes'} id={'red-price'} />}
                </div>
            </div>
            <div className={styles.listRight__advantages}>
                <div onClick={() => setAddClass(true)} className={styles.listRight__advantage__item}>
                    <p className={styles.listRight__advantage__name}>Дополнительные параметры</p>
                    <svg
                        className={styles.listRight__advantage__icon}
                        width='14'
                        height='8'
                        viewBox='0 0 14 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M13 1.2002L7 6.8002L1 1.20019' stroke='#24292E' strokeWidth='1.5' />
                    </svg>
                </div>
                {addClass && <RadioSwitch params={filterParameters.byCheckbox.advantages} type={'checkboxes'} id={'switch-check'} />}
            </div>
            {addClass && (
                <div className={styles.listRight__buttons}>
                    <button onClick={() => setAddClass(false)} className={styles.listRight__submit}>
                        Применить
                    </button>
                    <button onClick={() => reset()} className={styles.listRight__clean}>
                        Сбросить
                    </button>
                </div>
            )}
        </div>
    );
};

export default ListFlatsTableFilter;
