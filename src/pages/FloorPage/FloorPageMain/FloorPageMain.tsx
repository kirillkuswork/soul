import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IFlat } from '../../../assets/data/interfaces';
import {generateLabels} from '../../../tools/_generate-labels';
import { filterByFloor, setActiveFloors } from '../../../entities/catalogSlice';
import { useAppDispatch } from '../../../entities/store';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import FloorPageLeft from '../FloorPageLeft/FloorPageLeft';
import FloorPageMiddle from '../FloorPageMiddle/FloorPageMiddle';
import FloorPagePin from '../FloorPagePin/FloorPagePin';
import FloorPageRight from '../FloorPageRight/FloorPageRight';

import styles from './FloorPageMain.module.scss';

const FloorPageMain = () => {
    const dispatch = useAppDispatch();
    const flats = useAppSelector((state) => state.catalog.flats);
    const activeFloors = useAppSelector((state) => state.catalog.activeFloors);
    const filteredByFloor = useAppSelector((state) => state.catalog.floorPage.filteredByFloor);
    const activeSectionId = useAppSelector((state) => state.catalog.sectionsPage.activeSectionId);

    const pathname = useRouter();

    const houseId: string | string[] = pathname.query.houseId;
    const floorId: string | string[] = pathname.query.floorId;

    const [labels, setLabels] = useState(generateLabels(houseId));

    useEffect(() => {
        dispatch(setActiveFloors({ houseId }));
    }, [dispatch, houseId, floorId, flats.length, activeFloors.length]);

    useEffect(() => {
        if (filteredByFloor) {
            dispatch(filterByFloor({ houseId, floorId }));
        }
    }, [dispatch, houseId, floorId, filteredByFloor.length, flats.length, filterByFloor]);

    useEffect(() => {
        setLabels(generateLabels(+houseId));
    }, [houseId])

    return (
        <>
            <Wrapper>
                <div className={styles.floorPage}>
                    <FloorPageLeft flat={flats[0]} flatSection={activeSectionId} floor={floorId} />
                    <FloorPageMiddle filteredByFloor={filteredByFloor} floorId={floorId} houseId={houseId} labels={labels}/>
                    <FloorPageRight flatSection={activeSectionId} />
                </div>
                {
                    labels.map(({label, side}) =>
                        <div
                            key={label + side}
                            className={`${styles.floorPage__label} ${styles.floorPage__label__ + side}`}
                            id={side + "-view-label"}>
                            {label}
                        </div>
                    )
                }
                {filteredByFloor?.map((item: IFlat) => {
                    return <FloorPagePin floorId={floorId} houseId={houseId} key={item.number} item={item} />;
                })}
            </Wrapper>
        </>
    );
};

export default FloorPageMain;
