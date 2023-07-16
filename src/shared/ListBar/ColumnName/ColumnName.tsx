import React, { FC, useEffect, useState } from 'react';
import { isDesktop, isTablet } from 'react-device-detect';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import styles from './ColumnName.module.scss';

interface IColumnName {
    value?: string;
    keys?: string;
    direction: { direction: string; value: string };
    handleClick?: (value: string) => void;
}

const ColumnName: FC<IColumnName> = ({ value, handleClick, keys, direction }) => {
    const [isPatameter, setParametr] = useState<string>('');

    const width = useAppSelector((state) => state.main.width);

    useEffect(() => {
        if (!width) return;
        setParametr(keys);
    }, [width, keys]);

    return (
        <>
            {keys !== 'advantages' ? (
                <div
                    onClick={() => {
                        handleClick(keys);
                    }}
                    className={styles.columnName}
                >
                    <div className={styles.columnName__content}>
                        {value}
                        <div className={styles.columnName__arrows}>
                            <svg
                                className={styles.columnName__arrow}
                                width='10'
                                height='7'
                                viewBox='0 0 10 7'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    opacity={direction.value === isPatameter && direction.direction === 'desc_' ? '1' : '0.2'}
                                    d='M1 6L5 2L9 6'
                                    stroke={direction.value === isPatameter && direction.direction === 'desc_' ? '#ce9270' : '#24292E'}
                                    strokeWidth='1.5'
                                />
                            </svg>
                            <svg
                                className={styles.columnName__arrowRev}
                                width='10'
                                height='7'
                                viewBox='0 0 10 7'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    opacity={direction.value === isPatameter && direction.direction === 'asc_' ? '1' : '0.2'}
                                    d='M1 6L5 2L9 6'
                                    stroke={direction.value === isPatameter && direction.direction === 'asc_' ? '#ce9270' : '#24292E'}
                                    strokeWidth='1.5'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : (
                <>{isDesktop && !isTablet && <div className={styles.columnName}>{value}</div>}</>
            )}
        </>
    );
};

export default ColumnName;
