import React, { FC } from 'react';
import changeEnding from '../../../tools/_change-ending';
import { rooms } from '../../../tools/_room-colors';
import styles from './VisualModalTable.module.scss';

interface IVisualTable {
    room: string | number;
    amountFlat?: string | number;
    amountPrice?: string | number;
}

const VisualModalTable: FC<IVisualTable> = ({ room, amountFlat, amountPrice }) => {
    const nameRoom = rooms<typeof room>(room);

    return (
        <>
            {typeof amountFlat === 'number' && amountFlat > 0 && (
                <div className={styles.visualModalTabble}>
                    <div
                        className={styles.visualModalTabble__room}
                        style={{ color: nameRoom.color, border: `1px solid ${nameRoom.color}` }}
                    >
                        {nameRoom.room}
                    </div>
                    <div className={styles.visualModalTabble__descr}>
                        <p className={styles.visualModalTabble__name}>
                            {amountFlat} {changeEnding('flat', +amountFlat)}
                        </p>
                        <p className={styles.visualModalTabble__amount}>
                            {amountPrice === 'не число' ? 'нет в наличии' : `От ${amountPrice} ₽`}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default VisualModalTable;
