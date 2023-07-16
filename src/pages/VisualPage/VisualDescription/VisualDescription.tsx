import Image from 'next/image';
import React from 'react';
import compas from '../../../assets/images/unknown/icons/compas.svg';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import formatLongPrice from '../../../tools/_format-long-price';
import styles from './VisualDescription.module.scss';

const VisualDescription = () => {
    const minPrice = useAppSelector((state) => state.catalog.filterParameters.slidersValues.price);

    return (
        <div className={styles.visualdescription}>
            <div className={styles.visualdescription__box}>
                <h1 className={styles.visualdescription__title}>Выберите корпус</h1>
                <p className={styles.visualdescription__desc}>Квартиры от:</p>
                <p className={styles.visualdescription__amount}>{formatLongPrice(minPrice[0])} ₽</p>
            </div>
            <div className={styles.visualdescription__compas}>
                <Image src={compas.src} alt={'compas'} fill />
            </div>
        </div>
    );
};

export default VisualDescription;
