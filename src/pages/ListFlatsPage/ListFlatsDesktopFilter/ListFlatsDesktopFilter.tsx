import React, { useState } from 'react';
import { resetFilters } from '../../../entities/catalogSlice';
import ModalSort from '../../../features/ModalSort/ModalSort';
import RadioSwitch from '../../../features/RadioSwitch/RadioSwitch';
import RangeSlider from '../../../features/RangeSlider/RangeSlider';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { editSectionNames } from '../../../tools/_edit_section_number';
import styles from './ListFlatsDesktopFilter.module.scss';
import ROUTES from '../../../data/routes';
import { useRouter } from 'next/router';

const ListFlatsDesktopFilter = () => {
    const filterParameters = useAppSelector((state) => state.catalog.filterParameters);
    const red = useAppSelector((state) => state.catalog.filterParameters.redFlats);
    const sectionParameters = useAppSelector((state) => state.catalog.filterParameters.byCheckbox.sections);
    const [isModal, setIsModal] = useState<boolean>(false);
    const router = useRouter();

    const dispatch = useAppDispatch();

    const [isKey, setKey] = useState({
        inputFloor: Math.random(),
        inputArea: Math.random(),
        inputPrice: Math.random(),
    });

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

    const reset = () => {
        setKey({
            inputFloor: Math.random(),
            inputArea: Math.random(),
            inputPrice: Math.random(),
        });

        // Сбрасываем фильтры выборщика при нажатии и чистим url
        dispatch(resetFilters());
        router.push(ROUTES.flats.list);
    };

    return (
        <div className={styles.listRight}>
            <div className={styles.listRight__container}>
                <div className={styles.listRight__accordion}>
                    <RadioSwitch params={filterParameters.byCheckbox.rooms} type={'buttons'} id={'switch-rooms'} />
                    <div className={styles.listRight__modal}>
                        <div onClick={(e) => handleModal(e)} className={styles.listRight__accordion__item}>
                            <p className={styles.listRight__accordion__name}>
                                {sectionParameters === undefined || sectionParameters.filter(section => section.active).length === 0
                                    ? 'Корпус'
                                    : editSectionNames(sectionParameters)}
                            </p>
                            <svg
                                className={
                                    isModal
                                        ? `${styles.listRight__accordion__icon} ${styles.listRight__accordion__revert}`
                                        : styles.listRight__accordion__icon
                                }
                                width='14'
                                height='8'
                                viewBox='0 0 14 8'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M13 1.2002L7 6.8002L1 1.20019' stroke={isModal ? '#ce9270' : '#24292E'} strokeWidth='1.5' />
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
                </div>
                <RangeSlider
                    key={isKey.inputFloor}
                    description='Этаж'
                    slider={'floor'}
                    sup={false}
                />
                <RangeSlider
                    key={isKey.inputArea}
                    description='Площадь, м'
                    slider={'area'}
                    sup={true}
                />
                <RangeSlider
                    key={isKey.inputPrice}
                    description='Цена, млн. ₽'
                    slider={'price'}
                    sup={false}
                />
                {red && <RadioSwitch params={filterParameters.byCheckbox.redPrice} type={'checkboxes'} id={'red-price'} />}
                <div className={styles.listRight__advantages}>
                    <h6 className={styles.listRight__advantages__name}>Дополнительные параметры</h6>
                    <RadioSwitch params={filterParameters.byCheckbox.advantages} type={'checkboxes'} id={'switch-check'} />
                </div>

                <button
                    onClick={() => {
                        reset();
                    }}
                    className={`${styles.listRight__purchaseBtn}`}
                >
                    Cбросить
                </button>
            </div>
        </div>
    );
};

export default ListFlatsDesktopFilter;
