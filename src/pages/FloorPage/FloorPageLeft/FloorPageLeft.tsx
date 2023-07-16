import Link from 'next/link';
import React, { FC } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import DisplayOnMiniGenPlan from '../../../shared/DisplayOnMiniGenPlan/DisplayOnMiniGenPlan';
import changeDate from '../../../tools/_change_date';
import styles from './FloorPageLeft.module.scss';

interface IFloorLeft {
    flatSection: string;
    floor: string | string[];
    flat: IFlat;
}

const FloorPageLeft: FC<IFloorLeft> = ({ flatSection, floor, flat }) => {
    return (
        <div className={styles.floorPageLeft}>
            <div className={styles.floorPageLeft__top}>
                <Link href={`/visual/${flatSection}`}>
                    <ButtonArrow type='route' description='К выбору этажа'>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M20 10H4M4 10L7.90871 6.5M4 10L7.90871 13.5' stroke='#24292E' strokeWidth='1.5' />
                            <path d='M1 5L1 15' stroke='#24292E' strokeWidth='1.5' />

                            <defs>
                                <clipPath id='clip0_3018_37862'>
                                    <rect width='20' height='20' fill='white' transform='matrix(-1 0 0 1 20 0)' />
                                </clipPath>
                            </defs>
                        </svg>
                    </ButtonArrow>
                </Link>
                <h2 className={styles.floorPageLeft__title}>Этаж {floor}</h2>
                <div className={styles.floorPageLeft__descriptions}>
                    <p className={styles.floorPageLeft__description}>Отделка White Box</p>
                    <p className={styles.floorPageLeft__description}>{changeDate(flat?.bulk?.settlement_date)}</p>
                    <p className={styles.floorPageLeft__description}> {changeDate(flat?.bulk?.keyDate, 'Ключи до')}</p>
                </div>
            </div>
            <div className={styles.floorPageLeft}>
                <DisplayOnMiniGenPlan flatSection={flatSection} showTooltip/>
            </div>
        </div>
    );
};

export default FloorPageLeft;
