import React, { FC, useCallback, useEffect, useRef } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import SVG from 'react-inlinesvg';

import styles from './FloorPageMiddle.module.scss';
import getBulkId from '../../../tools/_get_bulk_id';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AppState, useAppDispatch } from '../../../entities/store';
import { handleLoadSvgFlat } from '../../../entities/componentsSlice';
import { useSelector } from 'react-redux';

interface IFloorMiddle {
    houseId: string | string[];
    floorId: string | string[];
    filteredByFloor: IFlat[];
    labels: { label: string, side: string }[];
}

const FloorPageMiddle: FC<IFloorMiddle> = ({ houseId, floorId, filteredByFloor, labels }) => {
    const filtered = useRef(null);
    const router = useRouter();
    const width = useSelector<AppState, number>((state) => state.main.width);
    const dispatch = useAppDispatch();

    const setLabels = () => {
        const flatScheme = document.getElementById('floor-svg')
        if (flatScheme) {
            const {left: planLeft, top: planTop, height: planHeight, width: planWidth} = flatScheme.getBoundingClientRect();
            const leftViewLabel = document.getElementById(`left-view-label`);
            const rightViewLabel = document.getElementById(`right-view-label`);
            const topViewLabel = document.getElementById(`top-view-label`);
            const bottomViewLabel = document.getElementById(`bottom-view-label`);

            const topPositionForVerticalLabels = `${window.scrollY + planTop + planHeight / 2}px`;
            const leftPositionForHorizontalLabels = `${planLeft + planWidth / 2}px`;

            if (leftViewLabel) {
                leftViewLabel.style.top = topPositionForVerticalLabels;
                leftViewLabel.style.left = `${planLeft - 40}px`;
                leftViewLabel.style.transform = `translateX(-${leftViewLabel.clientWidth/2}px) rotate(-90deg)`;
                leftViewLabel.style.opacity = '1';
            }
            if (rightViewLabel) {
                rightViewLabel.style.top = topPositionForVerticalLabels;
                rightViewLabel.style.left = `${planLeft + planWidth + 40}px`;
                rightViewLabel.style.transform = `translateX(-${rightViewLabel.clientWidth/2}px) rotate(-90deg)`;
                rightViewLabel.style.opacity = '1';
            }
            if (bottomViewLabel) {
                bottomViewLabel.style.left = leftPositionForHorizontalLabels;
                bottomViewLabel.style.top = `${window.scrollY + planTop + planHeight + 20}px`;
                bottomViewLabel.style.transform = `translateX(-50%)`;
                bottomViewLabel.style.opacity = '1';
            }
            if (topViewLabel) {
                topViewLabel.style.left = leftPositionForHorizontalLabels;
                topViewLabel.style.top = `${window.scrollY + planTop - 40}px`;
                topViewLabel.style.transform = `translateX(-50%)`;
                topViewLabel.style.opacity = '1';
            }
        }
    }

    useEffect(() => {
        setLabels()
    }, [labels])

    const beforeSvgInjection = useCallback(() => {
        if (document.getElementById(`floor-svg`)) {
            //Получаем все элементы
            const genplanElements = Array.from(document.getElementById(`flats`)?.childNodes);
            //Выбираем из них те, у кого в id есть флаг "fl" - это квартиры
            const flats = genplanElements
                .filter((item: HTMLElement) => item.id.includes('fl'))
                .filter((elem: HTMLElement) => !elem.id.includes('flats'));
            //По дефолту назначаем квартирам стадартные стили для этого элемента +
            //стиль, как у зарезервированной квартиры

            flats.forEach((item: HTMLElement) => {
                item.classList.add(`floor__reserve`);
            });

            //Если есть отфильтрованные квартиры, то перебираем их

            if (filteredByFloor.length !== 0) {
                filteredByFloor?.forEach((elem: IFlat) => {
                    //Находим область с id текущей квартиры
                    const flat = document.getElementById(`fl${elem.number}`);
                    const id = flat?.id.replace('fl', '');

                    flat?.classList.remove(`floor__reserve`);
                    flat?.setAttribute('data-flat', elem.number);
                    flat?.classList.add(`floor__page`);
                    flat?.addEventListener('click', () => {
                        router.push(`/visual/${houseId}/${floorId}/${id}`);
                    });
                    flat?.addEventListener('mouseenter', () => {
                        flat?.classList.add(`active__label`);
                        changeRoom(elem?.number);
                    });
                    flat?.removeEventListener('mouseenter', () => {
                        flat?.classList.add(`active__label`);
                        changeRoom(elem?.number);
                    });
                    flat?.addEventListener('mouseleave', () => {
                        flat?.classList.remove(`active__label`);
                        hideRoom(elem?.number);
                    });
                    flat?.removeEventListener('mouseleave', () => {
                        flat?.classList.remove(`active__label`);
                        hideRoom(elem?.number);
                    });

                    const label = document.getElementById(elem?.number);
                    if (label) {
                        //Располагаем лейбл посередине области текущей квартиры
                        const striker = document.getElementById(`s-fl${elem.number}`);
                        const rect: DOMRect = striker?.getBoundingClientRect();
                        filtered.current = filteredByFloor[0].id;
                        label.style.left = `${rect?.left}px`;
                        label.style.top = `${rect?.top}px`;
                        label.style.display = 'flex';
                        dispatch(handleLoadSvgFlat(true));
                    }
                });
            }
        }
    }, [dispatch, filteredByFloor, floorId, houseId, router, width]);

    const changeRoom = (id: string) => {
        const label = document.getElementById(id);
        label.classList.add(`active__label`);
        const modalFlat = document.getElementById(`${id}__modalinfo`);
        modalFlat?.classList?.add('modalflat__active');
    };

    const hideRoom = (id: string) => {
        const label = document.getElementById(id);
        label.classList.remove(`active__label`);
        const modalFlat = document.getElementById(`${id}__modalinfo`);
        modalFlat?.classList?.remove('modalflat__active');
    };

    useEffect(() => {
        if (filtered.current !== filteredByFloor[0]?.id) dispatch(handleLoadSvgFlat(false));
        beforeSvgInjection();
    }, [beforeSvgInjection, dispatch, filteredByFloor, floorId, houseId]);

    return (
        <div className={styles.floorPageMiddle}>
            <div className={styles.floorPageMiddle__container}>
                <Image
                    className={styles.floorPageMiddle__floorFurnished}
                    alt={'Команда Soul'}
                    src={`/plans/${getBulkId(houseId)}/floors/fl${floorId}.png`}
                    fill
                    unoptimized
                />
                {filteredByFloor?.length !== 0 && (
                    <SVG
                        src={`/plans/${getBulkId(houseId)}/floors/fl${floorId}.svg`}
                        className={styles.floorPageMiddle__floor}
                        onLoad={() => {
                            beforeSvgInjection();
                            setLabels();
                        }}
                        id={'floor-svg'}
                    />
                )}
            </div>
        </div>
    );
};

export default FloorPageMiddle;
