import React, { useEffect } from 'react';
import { setLocalFlats } from '../../../entities/favoriteSlice';
import { useAppDispatch } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import FavoriteLeft from '../FavoriteLeft/FavoriteLeft';
import FavoriteRight from '../FavoriteRight/FavoriteRight';
import styles from './FavoriteMain.module.scss';

const FavoriteMain = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const favoriteLocal = (typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('favoriteList'))) || [];
        dispatch(setLocalFlats(favoriteLocal));
    }, [dispatch]);

    return (
        <Wrapper>
            <div className={styles.favoriteMain}>
                <FavoriteLeft />
                <FavoriteRight />
            </div>
        </Wrapper>
    );
};

export default FavoriteMain;
