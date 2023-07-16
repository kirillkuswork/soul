import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import DisplayOnMiniGenPlan from '../../../shared/DisplayOnMiniGenPlan/DisplayOnMiniGenPlan';
import changeDate from '../../../tools/_change_date';
import Link from 'next/link';
import styles from './SectionPageLeft.module.scss';
import ROUTES from '../../../data/routes';

const SectionPageLeft = () => {
    const pathname = useRouter();
    const houseId: string | string[] = pathname.query.houseId;
    const filteredByFloor = useAppSelector((state) => state.catalog.sectionsPage.filteredBySection);

    return (
        <div className={styles.sectionPageLeft}>
            <div className={styles.sectionPageLeft__top}>
                <Link href={ROUTES.visual}>
                    <ButtonArrow type='route' description='К выбору корпуса'>
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
                <h2 className={styles.sectionPageLeft__title}>Корпус №{houseId}</h2>
                <div className={styles.sectionPageLeft__description}>
                    <p className={styles.sectionPageLeft__name}>Этажность</p>
                    {houseId === '1' ? (
                        <p className={styles.sectionPageLeft__amount}>20 - 21 этаж</p>
                    ) : (
                        <p className={styles.sectionPageLeft__amount}>{filteredByFloor[0]?.section?.floorsCount}</p>
                    )}
                </div>
                <div className={styles.sectionPageLeft__description}>
                    <p className={styles.sectionPageLeft__name}>Квартир в продаже</p>
                    <p className={styles.sectionPageLeft__amount}>{filteredByFloor?.length}</p>
                </div>
                <div className={styles.sectionPageLeft__descriptions}>
                    <p className={styles.sectionPageLeft__descript}>{changeDate(filteredByFloor[0]?.bulk?.settlement_date)}</p>
                    <p className={styles.sectionPageLeft__descript}>{changeDate(filteredByFloor[0]?.bulk?.keyDate, 'Ключи до')}</p>
                </div>
            </div>
            <div className={styles.sectionPageLeft}>
                <DisplayOnMiniGenPlan flatSection={houseId} />
            </div>
        </div>
    );
};

export default SectionPageLeft;
