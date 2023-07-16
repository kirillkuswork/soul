import { useRouter } from 'next/router';
import React, { FC, useCallback, useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { IActiveFloors } from '../../../assets/data/interfaces';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import Pagination from '../../../shared/Pagination/Pagination';
import styles from './FloorPageRight.module.scss';

interface IFloorPageRight {
    flatSection: string;
}

const FloorPageRight: FC<IFloorPageRight> = ({ flatSection }) => {
    const router = useRouter();
    const houseId = router.query.houseId;
    const floorId = router.query.floorId;

    const activeFloors = useAppSelector((state) => state.catalog.activeFloors);

    const [maxFloor, setMaxFloor] = useState(null);
    const [minFloor, setMinFloor] = useState(null);
    const [floorsArray, setFloorsArray] = useState<[]>([]);

    const beforeSvgInjection = useCallback(() => {
        if (document.getElementById('floors')) {
            const floors = document.getElementById('floors').childNodes;
            if (!!floors.length) {
                floors.forEach((item: HTMLElement) => {
                    if (item.id.includes('floor')) {
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
                } else {
                    idfloor?.classList.add('floor__disabled');
                    idfloor?.classList.remove('floor__unvisible');
                }
            });
        }
    }, [activeFloors, floorId, houseId, maxFloor, minFloor, router]);

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

            //Если этажей больше 1
            if (floors.length > 1) {
                //если разница между индексом текущего этажа и количеством этажей больше 3 этажей (т.е. текущий этаж
                //как минимум 3 с конца)
                if (floors.length - index > 3) {
                    //и номер этажа >= 3 (т.е это минимум 3 этаж)
                    if((index >= 3)) {
                        //то ставим доступными для выбора 3 этажа до текущего, текущий этаж и 3 этажа после текущего
                        //пример: всего этажей 20, текущий этаж 10, то доступны этажи 7, 8, 9, 10, 11, 12, 13
                        setFloorsArray(activeFloors.slice(index - 3, index + 4).reverse());
                        //и номер этажа < 3 (т.е это максимум 2 этаж)
                    } else if((index < 3)) {
                        //то ставим доступными для выбора все этажи от 1 до 7 включительно
                        setFloorsArray(activeFloors.slice(0, 7).reverse());
                    }
                }
                    //иначе если разница между индексом текущего этажа и количеством этажей меньше 3 этажей (т.е. текущий этаж
                //как максимум 2 с конца) и индекс текущего этажа > 3 (т.е. текущий этаж как минимум 4 с начала)
                else if((floors.length - index <= 3) && (index > 3)) {
                    //то ставим доступными для выбора последний этаж и 6 этажей до него включительно
                    //пример: всего этажей 20, текущий этаж 19, то доступны этажи 14, 15, 16, 17, 18, 19, 20
                    setFloorsArray(activeFloors.slice(floors.length - 7, floors.length).reverse());
                }
            }
        }
    }, [activeFloors, floorId, router, activeFloors.length]);

    useEffect(() => {
        beforeSvgInjection();
    }, [beforeSvgInjection, floorId]);

    const buttonNext = () => {
        //Получаем список этажей
        const floors = [];
        for (let i = 0; i < activeFloors.length; i++) {
            floors.push(activeFloors[i].id);
        }

        //Вычисляем индекс текущего этажа
        const index = floors.indexOf(+floorId);
        const nextFloor = activeFloors.find((item: IActiveFloors) => item.id === +floorId + 1);

        if (nextFloor.disabled) {
            //Ищем следующий активный элемент
            const nextActive = activeFloors.slice(index + 1).find((item: IActiveFloors) => item.disabled === false);
            router.push(`/visual/${houseId}/${nextActive.id}`);
            // navigate(`${ROUTES.flats.visual.root}/${houseId}/${nextActive.id}`);
        } else {
            router.push(`/visual/${houseId}/${+floorId + 1}`);
            // navigate(`${ROUTES.flats.visual.root}/${houseId}/${+floorId + 1}`);
        }
    };

    const buttonPrev = () => {
        //Получаем список этажей
        const floors = [];
        for (let i = 0; i < activeFloors.length; i++) {
            floors.push(activeFloors[i].id);
        }

        //Вычисляем индекс текущего этажа
        const index = floors.indexOf(+floorId);
        const prevFloor = activeFloors.find((item: IActiveFloors) => item.id === +floorId - 1);

        if (prevFloor.disabled) {
            //Ищем следующий активный элемент
            const prevActive = activeFloors
                .slice(0, index - 1)
                .reverse()
                .find((item: IActiveFloors) => item.disabled === false);
            router.push(`/visual/${houseId}/${prevActive.id}`);
        } else {
            router.push(`/visual/${houseId}/${+floorId - 1}`);
        }
    };

    return (
        <div className={styles.floorPageRight}>
            <div className={styles.floorPageRight__contents}>
                <div className={styles.floorPageRight__section}>
                    <SVG src={`/plans/sections/k${flatSection}.svg`} onLoad={() => beforeSvgInjection()} id={'floors-section'} />
                </div>
                <Pagination
                    maxFloor={maxFloor}
                    minFloor={minFloor}
                    buttonNext={buttonNext}
                    buttonPrev={buttonPrev}
                    floorsArray={floorsArray}
                />
            </div>
        </div>
    );
};

export default FloorPageRight;
