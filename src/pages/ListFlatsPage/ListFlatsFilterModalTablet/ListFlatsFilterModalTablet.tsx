import React, { useState } from 'react';
import { resetFilters } from '../../../entities/catalogSlice';
import { handleTabletMenuFilters } from '../../../entities/componentsSlice';
import ModalSort from '../../../features/ModalSort/ModalSort';
import RadioSwitch from '../../../features/RadioSwitch/RadioSwitch';
import RangeSlider from '../../../features/RangeSlider/RangeSlider';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';

import styles from './ListFlatsFilterModalTablet.module.scss';

const ListFlatsFilterModalTablet = () => {
    const filterParameters = useAppSelector((state) => state.catalog.filterParameters);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isKey, setKey] = useState({
        inputFloor: Math.random(),
        inputArea: Math.random(),
        inputPrice: Math.random(),
    });

    const dispatch = useAppDispatch();

    const reset = () => {
        setKey({
            inputFloor: Math.random(),
            inputArea: Math.random(),
            inputPrice: Math.random(),
        });
        dispatch(resetFilters());
    };

    const handleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModal(!isModal);
    };

    const handleCloseModal = (e: React.MouseEvent) => {
        if (!e.currentTarget) {
            setIsModal(false);
        }
    };

    return (
        <div className={styles.listRight}>
            <div
                onClick={() => {
                    dispatch(handleTabletMenuFilters(false));
                }}
                className={styles.listRight__close}
            >
                <svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.99976 4L25.213 25.2132' stroke='#24292E' strokeWidth='3' />
                    <path d='M3.99976 25L25.213 3.7868' stroke='#24292E' strokeWidth='3' />
                </svg>
            </div>
            <h4 className={styles.listRight__title}>Параметры</h4>
            <div className={styles.listRight__container}>
                <div className={styles.listRight__left}>
                    <RadioSwitch params={filterParameters.byCheckbox.rooms} type={'buttons'} id={'switch-rooms'} />
                    <RangeSlider
                        key={isKey.inputFloor}
                        description='Этаж'
                        min={filterParameters.slidersExtremeValues.floor[0]}
                        max={filterParameters.slidersExtremeValues.floor[1]}
                        start={filterParameters.slidersValues.floor[0]}
                        end={filterParameters.slidersValues.floor[1]}
                        startInput={filterParameters.inputsValues.floor[0]}
                        endInput={filterParameters.inputsValues.floor[1]}
                        slider={'floor'}
                        sup={false}
                    />
                    <RangeSlider
                        key={isKey.inputPrice}
                        description='Цена, млн. ₽'
                        min={filterParameters.slidersExtremeValues.price[0]}
                        max={filterParameters.slidersExtremeValues.price[1]}
                        start={filterParameters.slidersValues.price[0]}
                        end={filterParameters.slidersValues.price[1]}
                        startInput={filterParameters.inputsValues.price[0]}
                        endInput={filterParameters.inputsValues.price[1]}
                        slider={'price'}
                        sup={false}
                    />
                </div>
                <div className={styles.listRight__right}>
                    <div className={styles.listRight__modal}>
                        <div onClick={(e) => handleModal(e)} className={styles.listRight__accordion__item}>
                            <p className={styles.listRight__accordion__name}>Корпус</p>
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
                        min={filterParameters.slidersExtremeValues.area[0]}
                        max={filterParameters.slidersExtremeValues.area[1]}
                        start={filterParameters.slidersValues.area[0]}
                        end={filterParameters.slidersValues.area[1]}
                        startInput={filterParameters.inputsValues.area[0]}
                        endInput={filterParameters.inputsValues.area[1]}
                        slider={'area'}
                        sup={true}
                    />
                    <RadioSwitch params={filterParameters.byCheckbox.redPrice} type={'checkboxes'} id={'red-price'} />
                </div>
            </div>
            <div className={styles.listRight__advantages}>
                <div className={styles.listRight__advantage__item}>
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
                <RadioSwitch params={filterParameters.byCheckbox.advantages} type={'checkboxes'} id={'switch-check'} />
            </div>
            <div className={styles.listRight__buttons}>
                <button
                    onClick={() => {
                        dispatch(handleTabletMenuFilters(false));
                    }}
                    className={styles.listRight__submit}
                >
                    Применить
                </button>
                <button onClick={() => reset()} className={styles.listRight__clean}>
                    Сбросить
                </button>
            </div>
        </div>
    );
};

export default ListFlatsFilterModalTablet;
