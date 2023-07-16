import React, { FC } from 'react';
import { IFilterRooms, IFlat } from '../../../assets/data/interfaces';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import changeEnding from '../../../tools/_change-ending';
import changeDateNumber from '../../../tools/_change_date_number';
import formatLongPrice from '../../../tools/_format-long-price';
import VisualModalTable from '../VisualModalTable/VisualModalTable';
import styles from './VisualModal.module.scss';

interface IVisualModal {
    position: {
        left: number;
        top: number;
    };
    filtered: IFlat[];
}

const VisualModal: FC<IVisualModal> = ({ position, filtered }) => {
    const filterRooms = useAppSelector((state) => state.catalog.filterRooms);
    const flatsArray = useAppSelector((state) => state.catalog.sectionsPage);
    const minPrice = useAppSelector((state) => state.catalog.floorsPage.minPrice);

    return (
        <div>
            <div style={{ left: position.left, top: position.top }} className={styles.visualModal}>
                <div className={styles.visualModal__top}>
                    <h6 className={styles.visualModal__title}>Корпус №{filtered[0]?.bulk.number}</h6>
                    <div className={styles.visualModal__description}>
                        <p className={styles.visualModal__name}>Ключи до</p>
                        <span className={styles.visualModal__amount}>{changeDateNumber(filtered[0]?.bulk?.keyDate)}</span>
                    </div>
                    <div className={styles.visualModal__description}>
                        <p className={styles.visualModal__name}>Этажность</p>
                        {filtered[0]?.bulk.number === 1 ? (
                            <span className={styles.visualModal__amount}>20 - 21 этаж</span>
                        ) : (
                            <span className={styles.visualModal__amount}>
                                {filtered[0].section.floorsCount} {changeEnding('floor', filtered[0].section.floorsCount)}
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.visualModal__bottom}>
                    <p className={styles.visualModal__name}>{filtered.length} квартир в продаже</p>
                    {filterRooms.map((item: IFilterRooms) => {
                        return (
                            <VisualModalTable
                                key={item.value}
                                room={item.name}
                                amountFlat={flatsArray[item.array].length}
                                amountPrice={formatLongPrice(minPrice[item.array])}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VisualModal;
