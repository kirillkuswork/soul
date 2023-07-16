import React from 'react';
import { resetList } from '../../../entities/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import styles from './FavoriteLeftTop.module.scss';

const FavoriteLeftTop = () => {
    const favoriteFlats = useAppSelector((state) => state.favorite.showedList);
    const dispatch = useAppDispatch();

    const reset = () => {
        dispatch(resetList());
    };

    return (
        <div className={styles.favoriteLeftTop}>
            <div className={styles.favoriteLeftTop__names}>
                <h6 className={styles.favoriteLeftTop__name}>Избранное</h6>
                <span className={styles.favoriteLeftTop__amount}>({favoriteFlats?.length})</span>
            </div>
            <button onClick={() => reset()} className={styles.favoriteLeftTop__clear}>
                Очистить
            </button>
        </div>
    );
};

export default FavoriteLeftTop;
