import Link from 'next/link';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { addApartmentToFavorites, removeApartmentById, setShowedList } from '../../entities/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import editRoomsLabel from '../../tools/_edit-rooms-label';
import ShowFlatDescription from '../../features/ShowFlatDescription/ShowFlatDescription';
import ButtonsHideAmount from '../ButtonsHideAmount/ButtonsHideAmount';
import styles from './CatalogListItem.module.scss';
import { isTablet } from 'react-device-detect';
import { IFlat } from '../../assets/data/interfaces';
import CatalogListItemMobile from '../CatalogListItemMobile/CatalogListItemMobile';
import ModalFullPage from '../../pages/ModalFullPage/ModalFullPage';
import formatLongPrice from '../../tools/_format-long-price';
import { handleShowFlatDescription } from '../../entities/componentsSlice';

interface ICatalogListItem {
    list?: string;
    flat: IFlat;
    favorite?: boolean;
}

const CatalogListItem: FC<ICatalogListItem> = ({ flat, list, favorite }) => {
    const rooms = editRoomsLabel(flat);
    const favoriteList = useAppSelector((state) => state.favorite.favoriteList);
    const width = useAppSelector((state) => state.main.width);
    const [isBack, setIsBack] = useState(false);
    const isShowFlatDescription = useAppSelector((state) => state.component.showFlatDescription);
    const dispatch = useAppDispatch();
    const [isActive, setActive] = useState<boolean>(false);
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
    const [isAdaptiveM, setIsAdaptiveM] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    useEffect(() => {
        if (!width) return;
        (isTablet || width <= 1024) && setIsAdaptive(true);
        width < 600 && setIsAdaptiveM(true);
    }, [width]);

    useEffect(() => {
        if (favoriteList.filter((apartment: IFlat) => apartment.id === flat.id).length) {
            setActive(true);
        }
    }, [flat, favoriteList]);

    const handleBackFavorite = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (favorite) {
            setIsBack(false);
            addToFavorite();
        }
    };

    const handleShow = (value: boolean, event: MouseEvent) => {
        event.stopPropagation();
        setShow(value);
        dispatch(handleShowFlatDescription(value));
    };

    const handleIsModal = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        setIsModal(true);
    };

    const handleClickHeart = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        isActive ? removeFromFavorite() : addToFavorite();
        setTimeout(() => {
            dispatch(setShowedList([]));
        }, 10000);
    };

    const addToFavorite = () => {
        if (favorite) {
            setIsBack(false);
        }
        setActive(true);
        dispatch(addApartmentToFavorites(flat));
    };

    const removeFromFavorite = () => {
        if (favorite) {
            setIsBack(true);
        }
        setActive(false);
        dispatch(removeApartmentById(flat.id));
    };

    return (
        <>
            {isAdaptiveM ? (
                <CatalogListItemMobile favorites={favorite} flat={flat} list={list} />
            ) : (
                <>
                    <Link className={styles.link} href={`/visual/${flat.bulk.number}/${flat.floor}/${flat.number}`}>
                        {/* {favorite && !isActive && <div className={styles.link__wrapper}></div>} */}
                        <div className={list ? styles.catalogListItem__listPage : styles.catalogListItem}>
                            {isAdaptiveM ? (
                                <p className={styles.catalogListItem__text}>{flat?.number}</p>
                            ) : (
                                <p className={styles.catalogListItem__text}>№{flat?.number}</p>
                            )}
                            <div
                                className={styles.catalogListItem__multi}
                                style={{ color: rooms?.color, border: `1px solid ${rooms?.color}` }}
                            >
                                {rooms?.rooms}
                            </div>
                            <div className={styles.catalogListItem__textBold}>
                                {flat?.area} м<sup>2</sup>
                            </div>
                            <div className={styles.catalogListItem__text}>{flat?.bulk.number}</div>
                            <div className={styles.catalogListItem__text}>{flat?.floor}</div>
                            {!isAdaptive && (
                                <div className={styles.catalogListItem__advantages}>
                                    <ButtonsHideAmount flat={flat} amount={3} />
                                </div>
                            )}
                            <div className={styles.catalogListItem__textBold}>
                                {favorite && isBack ? (
                                    <div
                                        onClick={(e) => {
                                            handleBackFavorite(e);
                                        }}
                                        className={styles.catalogListItem__textback}
                                    >
                                        Вернуть
                                    </div>
                                ) : (
                                    <>
                                        {isAdaptiveM ? (
                                            <div className={styles.catalogListItem__textBold}>
                                                {(Math.trunc(flat?.currentPrice) / 1000000).toFixed(2)} ₽
                                            </div>
                                        ) : (
                                            <div className={styles.catalogListItem__textBold}>{formatLongPrice(flat?.currentPrice)} ₽</div>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className={styles.catalogListItem__icons}>
                                <div
                                    className={styles.catalogListItem__button}
                                    onClick={(e) => {
                                        handleClickHeart(e);
                                    }}
                                >
                                    <svg
                                        className={styles.catalogListItem__buttonHeart}
                                        width='16'
                                        height='15'
                                        viewBox='0 0 16 15'
                                        fill={isActive ? '#ce9270' : '#003A50'}
                                    >
                                        <path
                                            d='M7.60977 2.48404L7.99991 2.97079L8.39006 2.48404C8.78113 1.99613 9.26444 1.49132 9.80267 1.11208C10.3424 0.731774 10.9051 0.5 11.4667 0.5C14.1033 0.5 15.8804 2.69648 15.4308 5.41851C15.3282 6.03921 14.8395 6.92347 14.0755 7.95183C13.3271 8.95921 12.3681 10.0359 11.4154 11.0288C10.4642 12.0201 9.52725 12.9196 8.82749 13.5717C8.48593 13.89 8.20138 14.149 7.9999 14.3303C7.7984 14.149 7.51382 13.89 7.17223 13.5717C6.47241 12.9196 5.53539 12.0201 4.58417 11.0288C3.63142 10.0359 2.67239 8.9592 1.92404 7.95183C1.1601 6.92348 0.671457 6.03925 0.569081 5.41862C0.120036 2.69639 1.89668 0.5 4.53309 0.5C5.09469 0.5 5.65742 0.731774 6.19716 1.11208C6.73538 1.49132 7.21869 1.99613 7.60977 2.48404Z'
                                            stroke={isActive ? '#ce9270' : '#003A50'}
                                        />
                                    </svg>
                                </div>
                                <div
                                    onClick={(e) => {
                                        isAdaptive && handleIsModal(e);
                                    }}
                                    className={styles.catalogListItem__button}
                                >
                                    <svg
                                        className={styles.catalogListItem__flatIcon}
                                        width='24'
                                        height='19'
                                        viewBox='0 0 24 19'
                                        fill='none'
                                        onMouseMove={(e) => handleShow(true, e)}
                                        onMouseLeave={(e) => handleShow(false, e)}
                                    >
                                        <path
                                            d='M23 18.5V0.5L1 0.5V18.0135H17.5M16.5 9.25676H23M13 0.5V9.25676V13.6351M1 9.25676H4.5'
                                            stroke='#24292E'
                                        />
                                    </svg>
                                    <div className={styles.catalogListItem__lighter}></div>
                                </div>
                            </div>

                            {show && !isAdaptive && isShowFlatDescription && (
                                <ShowFlatDescription
                                    advantages={flat.attributes}
                                    image={`/plans/${flat?.bulk_id}/flats/furnished-plan/${flat?.number}.svg`}
                                />
                            )}
                        </div>
                    </Link>

                    {isModal && isAdaptive && isShowFlatDescription && (
                        <ModalFullPage grey={true} handleClose={() => setIsModal(false)}>
                            <ShowFlatDescription
                                grey={true}
                                advantages={flat.attributes}
                                image={`/plans/${flat?.bulk_id}/flats/furnished-plan/${flat?.number}.svg`}
                            />
                        </ModalFullPage>
                    )}
                </>
            )}
        </>
    );
};

export default CatalogListItem;
