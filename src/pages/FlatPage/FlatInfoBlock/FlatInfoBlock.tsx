import React, { FC } from 'react';
import styles from './FlatInfoBlock.module.scss';

interface IFlatInfoBlock {
    description: string;
    amount?: string | number;
    advantage?: boolean;
}

const FlatInfoBlock: FC<IFlatInfoBlock> = ({ description, amount, advantage }) => {
    return (
        <div className={advantage ? styles.flatInfoBlock__info__advantage : styles.flatInfoBlock__info}>
            <p className={styles.flatInfoBlock__desc}>{description}</p>

            {typeof amount === 'boolean' ? (
                <p className={styles.flatInfoBlock__num}>Есть</p>
            ) : (
                <p className={styles.flatInfoBlock__num}>
                    {amount}
                    {description === 'Площадь' && (
                        <>
                            м <sup>2</sup>
                        </>
                    )}
                </p>
            )}
        </div>
    );
};

export default FlatInfoBlock;
