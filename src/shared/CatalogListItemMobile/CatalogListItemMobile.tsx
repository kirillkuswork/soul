import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { AdvantageType } from '../../data/models/typesFlat';
import { addApartmentToFavorites, removeApartmentById, setShowedList } from '../../entities/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import editRoomsLabel from '../../tools/_edit-rooms-label';
import compas from '../../assets/images/unknown/icons/compas.svg';
import styles from './CatalogListItemMobile.module.scss';
import { IFlat } from '../../assets/data/interfaces';
import FlatInfoBlock from '../../pages/FlatPage/FlatInfoBlock/FlatInfoBlock';
import Image from 'next/image';

interface ICatalogListItem {
    list?: string;
    flat: IFlat;
    favorites?: boolean;
}

const CatalogListItemMobile: FC<ICatalogListItem> = ({ flat, list, favorites }) => {
    const rooms = editRoomsLabel(flat);
    const catalogAdvantages = useAppSelector((state) => state.catalog.filterParameters.byCheckbox.advantages);
    const favoriteList = useAppSelector((state) => state.favorite.favoriteList);
    const width = useAppSelector((state) => state.main.width);

    const dispatch = useAppDispatch();

    const [isActive, setActive] = useState<boolean>(false);
    const [isAccordion, setAccortdion] = useState<boolean>(false);
    const [isAdaptiveM, setIsAdaptiveM] = useState<boolean>(false);

    const advantagesItem = catalogAdvantages.map((item: AdvantageType) => {
        if (flat.attributes[item.value]) {
            return <FlatInfoBlock key={item.value} description={item.name} />;
        }
    });

    useEffect(() => {
        if (!width) return;
        if (width < 600) {
            setIsAdaptiveM(true);
        }
    }, [width]);

    useEffect(() => {
        if (favoriteList.filter((apartment: IFlat) => apartment.id === flat.id).length) {
            setActive(true);
        }
    }, [flat, favoriteList]);

    const addToFavorite = () => {
        setActive(true);
        dispatch(addApartmentToFavorites(flat));
    };

    const removeFromFavorite = () => {
        setActive(false);
        dispatch(removeApartmentById(flat.id));
    };

    const handleClickHeart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        isActive ? removeFromFavorite() : addToFavorite();

        setTimeout(() => {
            dispatch(setShowedList([]));
        }, 10000);
    };

    return (
        <div className={styles.catalogListItem}>
            <div
                onClick={() => {
                    setAccortdion(!isAccordion);
                }}
                className={list ? styles.catalogListItem__listPage : styles.catalogListItem__listPage}
            >
                {favorites && !isActive && <div className={styles.link__wrapper}></div>}
                {isAdaptiveM ? (
                    <p className={styles.catalogListItem__text}>{flat?.number}</p>
                ) : (
                    <p className={styles.catalogListItem__text}>№{flat?.number}</p>
                )}
                <div className={styles.catalogListItem__multi} style={{ color: rooms?.color, border: `1px solid ${rooms?.color}` }}>
                    {rooms?.rooms}
                </div>
                <div className={styles.catalogListItem__textBold}>
                    {flat?.area} м<sup>2</sup>
                </div>
                <div className={styles.catalogListItem__text__number}>{flat?.bulk.number}</div>
                <div className={styles.catalogListItem__text}>{flat?.floor}</div>
                <div className={styles.catalogListItem__textBold__price}>
                    <div className={styles.catalogListItem__textBold__price}>
                        {(Math.trunc(flat?.real_price) / 1000000).toFixed(2)} млн ₽
                    </div>
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
                    <div className={styles.catalogListItem__button}>
                        <svg className={styles.catalogListItem__flatIcon} width='24' height='19' viewBox='0 0 24 19' fill='none'>
                            <path
                                d='M23 18.5V0.5L1 0.5V18.0135H17.5M16.5 9.25676H23M13 0.5V9.25676V13.6351M1 9.25676H4.5'
                                stroke='#24292E'
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={!isAccordion ? styles.accordion : styles.accordion__opened}>
                <div
                    className={styles.accordion__button}
                    onClick={(e) => {
                        handleClickHeart(e);
                    }}
                >
                    <svg
                        className={styles.accordion__buttonHeart}
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
                <div className={styles.accordion__image}>
                    <Image src={`/plans/${flat?.bulk_id}/flats/furnished-plan/${flat?.number}.svg`} alt={'plans'} fill />
                </div>
                <div className={styles.accordion__compas}>
                    <Image src={compas.src} alt={'plans'} fill />
                </div>
                {advantagesItem}
                <p className={styles.accordion__deadline}>Ввод в эксплуатацию до 30.09.2025</p>{' '}
                <p className={styles.accordion__deadline}>Ключи до 30.12.2025</p>
                {favorites ? (
                    <>
                        {isActive ? (
                            <Link className={styles.accordion__link} href={`/visual/${flat.section.number}/${flat.floor}/${flat.number}`}>
                                Подробнее
                            </Link>
                        ) : (
                            <div
                                onClick={(e) => {
                                    handleClickHeart(e);
                                }}
                                className={styles.accordion__link}
                            >
                                Вернуть
                            </div>
                        )}
                    </>
                ) : (
                    <Link className={styles.accordion__link} href={`/visual/${flat.bulk.number}/${flat.floor}/${flat.number}`}>
                        Подробнее
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CatalogListItemMobile;
