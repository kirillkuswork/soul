import React, { useEffect } from 'react';
import { setShowedList } from '../../../entities/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import ListBar from '../../../shared/ListBar/ListBar';
import NoSuitableFlats from '../../../shared/NoSuitableFlats/NoSuitableFlats';
import FavoriteFlatsRender from '../FavoriteFlatsRender/FavoriteFlatsRender';
import FavoriteLeftBottom from '../FavoriteLeftBottom/FavoriteLeftBottom';
import FavoriteLeftTop from '../FavoriteLeftTop/FavoriteLeftTop';

import styles from './FavoriteLeft.module.scss';

const FavoriteLeft = () => {
    const favoriteList = useAppSelector((state) => state.favorite.favoriteList);
    const showedList = useAppSelector((state) => state.favorite.showedList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (showedList?.length === 0) {
            dispatch(setShowedList(favoriteList));
        }
    }, [favoriteList, showedList, dispatch]);

    return (
        <div className={styles.favoriteLeft}>
            <FavoriteLeftTop />
            <ListBar sort={'showedList'} />
            {showedList.length === 0 ? (
                <NoSuitableFlats favorite={'favorite'} />
            ) : (
                <>
                    <FavoriteFlatsRender showedList={showedList} />
                    <FavoriteLeftBottom />
                </>
            )}
        </div>
    );
};

export default FavoriteLeft;
