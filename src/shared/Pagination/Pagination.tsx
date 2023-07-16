import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { IActiveFloors } from '../../assets/data/interfaces';
import styles from './Pagination.module.scss';

interface IPagination {
    floorsArray: { id: number; disabled: boolean }[];
    maxFloor: number;
    minFloor: number;
    buttonNext: () => void;
    buttonPrev: () => void;
}

const Pagination: FC<IPagination> = ({ floorsArray, buttonNext, buttonPrev, maxFloor, minFloor }) => {
    const router = useRouter();
    const houseId = router.query.houseId;
    const floorId = router.query.floorId;
    return (
        <div className={styles.pagination}>
            <button disabled={maxFloor === +floorId} className={styles.pagination__top} onClick={() => buttonNext()}>
                <svg width='10' height='21' viewBox='0 0 10 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4.99883 21L4.99883 1.8M4.99883 1.8L0.798827 6.49045M4.99883 1.8L9.19883 6.49045'
                        stroke='#24292E'
                        strokeWidth='1.8'
                    />
                </svg>
            </button>

            <div className={styles.pagination__numbers}>
                {floorsArray?.map((el: IActiveFloors) => {
                    return (
                        <button
                            onClick={() => router.push(`/visual/${houseId}/${el.id}`)}
                            className={`${styles.pagination__number} ${+floorId === el.id && styles.pagination__active} ${
                                el?.disabled && styles.pagination__disabled
                            }`}
                            key={el.id}
                            disabled={el.disabled}
                        >
                            {el.id}
                        </button>
                    );
                })}
            </div>

            <button disabled={minFloor === +floorId} onClick={() => buttonPrev()} className={styles.pagination__bottom}>
                <svg width='10' height='21' viewBox='0 0 10 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4.99883 1.83588e-07L4.99883 19.2M4.99883 19.2L0.798827 14.5096M4.99883 19.2L9.19883 14.5096'
                        stroke='#24292E'
                        strokeWidth='1.8'
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
