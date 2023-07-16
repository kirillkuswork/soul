import React, { FC } from 'react';
import { IFeatureFlat } from '../../assets/data/interfaces';
import { useAppSelector } from '../../hooks/useReduxHooks';
import Link from 'next/link';
import styles from './ModalSort.module.scss';

interface IModalSort {
    params: IFeatureFlat[];
    id: string;
    handleClose?: (e: React.MouseEvent) => void;
}

const ModalSort: FC<IModalSort> = ({ params, id, handleClose }) => {
    const filtersByCheckbox = useAppSelector((state) => state.catalog.filterParameters.byCheckbox);
    const selectParameter = ( e: React.MouseEvent) => {
        handleClose(e);
    };

    const generateNewPath = (value) => {
        const searchParams = Object.keys(filtersByCheckbox)
            .map(key => {
                let activeItems = filtersByCheckbox[key]
                if (key === 'sections') {
                    activeItems = activeItems.map(item => {
                        if ((item.value !== value) && (value === "Все корпуса")) {
                            return { ...item, active: false }
                        } else if ((item.value === value) && (value !== 'Все корпуса')) {
                            return { ...item, active: !item.active }
                        }
                        return item
                    })
                }
                activeItems = activeItems.filter(item => item.active)
                if (activeItems.length > 0) {
                    return `${key}=${activeItems.map(item => item.value).join(',')}`
                }
            }).filter(item => !!item).join('&')

        return `/list${searchParams.length > 0 ? ("?" + searchParams) : ""}`
    }

    const buttonsElements = params?.map((item) => {
        return (
            <Link key={id + item.value} href={generateNewPath(item.value)}>
                <button
                    data-value={item.value}
                    className={`${
                        item.active
                            ? ` ${styles.modalSort__item} ${styles.modalSort__selected}`
                            : ` ${styles.modalSort__item} ${styles.modalSort__unSelected}`
                    } ${item.disabled && `${styles.modalSort__item} ${styles.modalSort__disabled}`}`}
                    onClick={(e) => {
                        selectParameter(e);
                    }}
                    disabled={item.disabled}
                >
                    {item.name}
                </button>
            </Link>
        );
    });

    return <div className={styles.modalSort}>{buttonsElements}</div>;
};

export default ModalSort;
