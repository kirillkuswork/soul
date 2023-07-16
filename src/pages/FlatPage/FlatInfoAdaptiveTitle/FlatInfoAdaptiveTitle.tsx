import React, { FC, useCallback, useEffect, useState } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import FavoriteButton from '../../../features/FavoriteButton/FavoriteButton';

import SharedFlat from '../../../shared/SharedFlat/SharedFlat';
import styles from './FlatInfoAdaptiveTitle.module.scss';

const valuePropsAreEqual: (prevValue: IFlatInfoRight, nextValue: IFlatInfoRight) => boolean = (prevValue, nextValue) => {
    return prevValue.flat === nextValue.flat;
};

interface IFlatInfoRight {
    flat: IFlat;
}

const FlatInfoAdaptiveTitle: FC<IFlatInfoRight> = ({ flat }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = useCallback((e) => {
        e.stopPropagation();
        e.currentTarget.id === 'buttonLink' ? setActive(true) : setActive(false);
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [handleClick]);

    return (
        <div className={styles.flatInfoAdaptiveTitle}>
            <h3 className={styles.flatInfoAdaptiveTitle__title}>Квартира №{flat?.number}</h3>
            <div className={styles.flatInfoAdaptiveTitle__buttons}>
                <ButtonArrow href={`/flats.pdf?ids=${flat?.id}`} type='link'>
                    <svg className={styles.flatInfoRight__arrowIcon} width='20' height='20' viewBox='0 0 20 20' fill='none'>
                        <line x1='3' y1='17.25' x2='17' y2='17.25' stroke='#24292E' strokeWidth='1.5' />
                        <path d='M10 2L10 13M10 13L6 8.58146M10 13L14 8.58146' stroke='#24292E' strokeWidth='1.5' />
                    </svg>
                </ButtonArrow>
                <div id='buttonLink' onClick={(e: React.MouseEvent<HTMLDivElement>): void => handleClick(e)}>
                    <ButtonArrow handleClick={() => setActive(!isActive)} type='button'>
                        <svg className={styles.flatInfoRight__iconshared} width='20' height='20' viewBox='0 0 20 20' fill='none'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M15.3333 6.4C16.8061 6.4 18 5.19117 18 3.7C18 2.20883 16.8061 1 15.3333 1C13.8606 1 12.6667 2.20883 12.6667 3.7C12.6667 3.83506 12.6765 3.9678 12.6954 4.09754L8.12233 7.50882C7.47519 6.82545 6.56444 6.4 5.55556 6.4C3.59188 6.4 2 8.01178 2 10C2 11.9882 3.59188 13.6 5.55556 13.6C6.43067 13.6 7.23194 13.2799 7.85138 12.749L12.6879 15.958C12.6739 16.07 12.6667 16.1842 12.6667 16.3C12.6667 17.7912 13.8606 19 15.3333 19C16.8061 19 18 17.7912 18 16.3C18 14.8088 16.8061 13.6 15.3333 13.6C14.6215 13.6 13.9748 13.8824 13.4966 14.3426L8.88001 11.2795C9.02934 10.8819 9.11111 10.4506 9.11111 10C9.11111 9.68637 9.0715 9.38211 8.99707 9.09207L13.543 5.70103C14.0162 6.13538 14.6443 6.4 15.3333 6.4ZM15.3333 4.6C15.8243 4.6 16.2222 4.19706 16.2222 3.7C16.2222 3.20294 15.8243 2.8 15.3333 2.8C14.8424 2.8 14.4444 3.20294 14.4444 3.7C14.4444 4.19706 14.8424 4.6 15.3333 4.6ZM15.3333 17.2C15.8243 17.2 16.2222 16.7971 16.2222 16.3C16.2222 15.8029 15.8243 15.4 15.3333 15.4C14.8424 15.4 14.4444 15.8029 14.4444 16.3C14.4444 16.7971 14.8424 17.2 15.3333 17.2ZM7.33333 10C7.33333 10.9941 6.5374 11.8 5.55556 11.8C4.57372 11.8 3.77778 10.9941 3.77778 10C3.77778 9.00589 4.57372 8.2 5.55556 8.2C6.5374 8.2 7.33333 9.00589 7.33333 10Z'
                                fill='#24292E'
                            />
                        </svg>
                    </ButtonArrow>
                </div>

                <FavoriteButton flat={flat} />
                <SharedFlat active={isActive} />
            </div>
        </div>
    );
};

export default React.memo(FlatInfoAdaptiveTitle, valuePropsAreEqual);
