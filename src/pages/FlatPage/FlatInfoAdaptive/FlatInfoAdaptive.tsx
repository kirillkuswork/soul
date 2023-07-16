import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import FlatInfoAdaptiveTitle from '../FlatInfoAdaptiveTitle/FlatInfoAdaptiveTitle';
import FlatInfoBottomAdaptive from '../FlatInfoBottomAdaptive/FlatInfoBottomAdaptive';
import FlatInfoTopAdaptive from '../FlatInfoTopAdaptive/FlatInfoTopAdaptive';
import styles from './FlatInfoAdaptive.module.scss';

interface IFlatInfo {
    flat: IFlat;
}

const FlatInfoAdaptive: FC<IFlatInfo> = ({ flat }) => {
    const router = useRouter();
    return (
        <div className={styles.flatInfo}>
            <ButtonArrow
                type='backroute'
                routerBack={router.back}
                description='Назад'
            >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M20 10H4M4 10L7.90871 6.5M4 10L7.90871 13.5' stroke='#24292E' strokeWidth='1.5' />
                    <path d='M1 5L1 15' stroke='#24292E' strokeWidth='1.5' />
                </svg>
            </ButtonArrow>
            <FlatInfoAdaptiveTitle flat={flat} />
            <FlatInfoTopAdaptive flat={flat} floor={flat?.floor} flatSection={flat?.bulk?.name} flatNumber={flat?.number} />
            <FlatInfoBottomAdaptive flat={flat} />
        </div>
    );
};

export default FlatInfoAdaptive;
