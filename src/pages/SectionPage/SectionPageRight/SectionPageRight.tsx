import React, { useCallback, useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useRouter } from 'next/router';
import styles from './SectionPageRight.module.scss';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { filterByFloor, filterByRoom } from '../../../entities/catalogSlice';
import { useAppDispatch } from '../../../entities/store';
import { IFilterRooms } from '../../../assets/data/interfaces';
import VisualModalTable from '../../VisualPage/VisualModalTable/VisualModalTable';
import changeEnding from '../../../tools/_change-ending';
import formatLongPrice from '../../../tools/_format-long-price';

const SectionPageRight = () => {
    const [maxFloor, setMaxFloor] = useState(null);
    const [minFloor, setMinFloor] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [_, setFloorsArray] = useState<[]>([]);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const houseId: string | string[] = router.query.houseId;
    const floorId: string | string[] = router.query.floorId;

    const activeFloors = useAppSelector((state) => state.catalog.activeFloors);
    const filteredByFloor = useAppSelector((state) => state.catalog.floorPage.filteredByFloor);
    const sectionId = useAppSelector((state) => state.catalog.sectionsPage.activeSectionId);
    const filtered = useAppSelector((state) => state.catalog.floorsPage);
    const filterRooms = useAppSelector((state) => state.catalog.filterRooms);
    const minPrice = useAppSelector((state) => state.catalog.floorsPage.minPrice);

    const handleFloorFlats = useCallback(
        (id: string) => {
            dispatch(filterByFloor({ houseId, floorId: id }));
            dispatch(filterByRoom({ id, houseId }));
        },
        [dispatch, houseId],
    );
    const beforeSvgInjection = useCallback(() => {
        if (document.getElementById('floors')) {
            const floors = document.getElementById('floors').childNodes;
            if (floors.length) {
                floors.forEach((item: HTMLElement) => {
                    if (item.id.includes('floor')) {
                        const id = item.id.replace('floor', '');
                        if (floorId === id) {
                            item.classList.add('floor__visible');
                            item.classList.remove('floor__unvisible');
                        } else {
                            item.classList.add('floor__unvisible');
                            item.classList.remove('floor__visible');
                            if (!(id <= maxFloor && id >= minFloor)) {
                                item.classList.add('floor__disabled');
                                item.classList.remove('floor__unvisible');
                                item.classList.remove('floor__visible');
                            }
                        }
                    }
                });
            }
            activeFloors.forEach((floor) => {
                const idfloor = document.getElementById(`floor${floor?.id}`);
                if (!floor?.disabled) {
                    idfloor?.classList.remove('floor__disabled');
                    idfloor.addEventListener('click', () => {
                        router.push(`/visual/${houseId}/${floor?.id}`);
                    });
                    idfloor.addEventListener('mouseenter', () => {
                        handleFloorFlats(floor?.id);
                        setIsModal(true);
                    });
                    idfloor.addEventListener('mouseleave', () => {
                        setIsModal(false);
                    });
                } else {
                    idfloor?.classList.add('floor__disabled');
                    idfloor?.classList.remove('floor__unvisible');
                }
            });
        }
    }, [activeFloors, floorId, handleFloorFlats, houseId, maxFloor, minFloor, router]);

    useEffect(() => {
        if (activeFloors.length > 0) {
            setMaxFloor(activeFloors[activeFloors.length - 1].id);
            setMinFloor(activeFloors[0].id);
            //Получаем список этажей
            const floors = [];
            for (let i = 0; i < activeFloors.length; i++) {
                floors.push(activeFloors[i].id);
            }

            //Вычисляем индекс текущего этажа
            const index = floors.indexOf(+floorId);

            if (activeFloors.length > 1) {
                if (activeFloors.length - index > 3 && activeFloors.length - index <= activeFloors.length - 3) {
                    setFloorsArray(activeFloors.slice(index - 3, index + 4).reverse());
                } else if (activeFloors.length - index > 3 && activeFloors.length - index > activeFloors.length - 3) {
                    setFloorsArray(activeFloors.slice(0, 7).reverse());
                } else if (activeFloors.length - index < 3 && activeFloors.length - index < activeFloors.length - 3) {
                    setFloorsArray(activeFloors.slice(activeFloors.length - 7, activeFloors.length).reverse());
                }
            }
        }
    }, [activeFloors, floorId, activeFloors.length]);

    useEffect(() => {
        if (sectionId === houseId) {
            beforeSvgInjection();
        }
    }, [beforeSvgInjection, houseId, sectionId]);

    return (
        <>
            <div className={styles.sectionPageRight}>
                <div className={styles.sectionPageRight__container}>
                    <SVG
                        className={styles.sectionPageRight__image}
                        src={`/plans/sections/k${houseId}.svg`}
                        onLoad={() => beforeSvgInjection()}
                        id={'floors-section'}
                    />
                </div>

                {isModal && (
                    <div className={styles.sectionPageRight__modal}>
                        <h6 className={styles.sectionPageRight__modal__title}>Этаж {filteredByFloor[0].floor}</h6>
                        <p className={styles.sectionPageRight__modal__amount}>
                            {filteredByFloor.length} {changeEnding('flat', +filteredByFloor.length)}
                        </p>
                        {filterRooms.map((item: IFilterRooms) => {
                            return (
                                <VisualModalTable
                                    key={item.value}
                                    room={item.name}
                                    amountFlat={filtered?.arrays[item.array].length}
                                    amountPrice={formatLongPrice(minPrice[item.array])}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default SectionPageRight;
