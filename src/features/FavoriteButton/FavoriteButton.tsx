import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { addApartmentToFavorites, removeApartmentById } from '../../entities/favoriteSlice';

import styles from './FavoriteButton.module.scss';
import { IFlat } from '../../assets/data/interfaces';

const FavoriteButton = ({ flat }) => {
    const [isActive, setIsActive] = useState(false);
    const favoriteList = useAppSelector((state) => state.favorite.favoriteList);

    useEffect(() => {
        favoriteList.find((apartment: IFlat) => apartment?.id === flat?.id) ? setIsActive(true) : setIsActive(false);
    }, [flat, favoriteList]);

    const dispatch = useAppDispatch();

    const addToFavorite = () => {
        setIsActive(true);
        dispatch(addApartmentToFavorites(flat));
    };

    const removeFromFavorite = () => {
        setIsActive(false);
        dispatch(removeApartmentById(flat.id));
    };
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                if (isActive) {
                    removeFromFavorite();
                } else {
                    addToFavorite();
                }
            }}
            className={styles.heart}
        >
            <svg width='16' height='15' viewBox='0 0 16 15' fill={isActive ? '#ce9270' : '#24292E'} xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M7.60977 2.48404L7.99991 2.97079L8.39006 2.48404C8.78113 1.99613 9.26444 1.49132 9.80267 1.11208C10.3424 0.731774 10.9051 0.5 11.4667 0.5C14.1033 0.5 15.8804 2.69648 15.4308 5.41851C15.3282 6.03921 14.8395 6.92347 14.0755 7.95183C13.3271 8.95921 12.3681 10.0359 11.4154 11.0288C10.4642 12.0201 9.52725 12.9196 8.82749 13.5717C8.48593 13.89 8.20138 14.149 7.9999 14.3303C7.7984 14.149 7.51382 13.89 7.17223 13.5717C6.47241 12.9196 5.53539 12.0201 4.58417 11.0288C3.63142 10.0359 2.67239 8.9592 1.92404 7.95183C1.1601 6.92348 0.671457 6.03925 0.569081 5.41862C0.120036 2.69639 1.89668 0.5 4.53309 0.5C5.09469 0.5 5.65742 0.731774 6.19716 1.11208C6.73538 1.49132 7.21869 1.99613 7.60977 2.48404Z'
                    stroke='none'
                />
            </svg>
        </div>
    );
};

export default FavoriteButton;
