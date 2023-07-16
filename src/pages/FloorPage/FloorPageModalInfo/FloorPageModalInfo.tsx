import React, { FC, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import formatLongPrice from '../../../tools/_format-long-price';
import FlatAdvantages from '../../FlatPage/FlatAdvantages/FlatAdvantages';
import styles from './FloorPageModalInfo.module.scss';

const valueEqual = (prev: IFLoorPageModal, next: IFLoorPageModal) => {
    return prev.item.id !== next.item.id;
};

interface IFLoorPageModal {
    item: IFlat;
}

const FloorPageModalInfo: FC<IFLoorPageModal> = ({ item }) => {
    const modal = useRef(null);
    const [difference, setIsdifference] = useState<number>();
    const isLoadSvg = useAppSelector((state) => state.component.isLoadSvgFlat);
    const rect: DOMRect = modal?.current?.getBoundingClientRect();

    useEffect(() => {
        if (modal.current !== null && rect?.y !== undefined && rect?.height && isLoadSvg) {
            if (window.innerHeight < rect?.y + rect?.height) {
                setIsdifference(-rect?.height / 1.2);
            } else {
                setIsdifference(0);
            }
        }
    }, [rect?.height, rect?.y, isLoadSvg]);

    return (
        <>
            <div id={`${item?.number}__modalinfo`} style={{ top: difference }} ref={modal} className={styles.pin__modal}>
                <h6 className={styles.pin__modal__title}>Квартира №{item.number}</h6>
                <div className={styles.pin__modal__area}>
                    <p className={styles.pin__modal__areaName}>Площадь</p>
                    <p className={styles.pin__modal__areaAmount}>
                        {item.area}м <sup>2</sup>
                    </p>
                </div>
                <p className={styles.pin__modal__advantagesTitle}>Дополнительные параметры</p>
                <div className={styles.pin__modal__advantagesItems}>{item && <FlatAdvantages white={'white'} flat={item} />}</div>
                <p className={styles.pin__modal__price}>{formatLongPrice(item.currentPrice)} ₽</p>
            </div>
        </>
    );
};

export default React.memo(FloorPageModalInfo, valueEqual);
