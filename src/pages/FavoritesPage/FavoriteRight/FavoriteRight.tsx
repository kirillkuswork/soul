import Link from 'next/link';
import React from 'react';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import styles from './FavoriteRight.module.scss';

const FavoriteRight = () => {
    return (
        <div className={styles.favoriteRight}>
            <div className={styles.favoriteRight__container}>
                <h6 className={styles.favoriteRight__name}>Условия покупки</h6>
                <p className={styles.favoriteRight__description}>Мы уже позаботились об одобрении вашей ипотеки</p>
            </div>
            <Link href={'/purchase-terms/mortgage'}>
                <ButtonArrow type='button' description='Подробнее'>
                    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M1.9 13.5L0.5 12.1L10.1 2.5H1.5V0.5H13.5V12.5H11.5V3.9L1.9 13.5Z' fill='black' />
                    </svg>
                </ButtonArrow>
            </Link>
        </div>
    );
};

export default FavoriteRight;
