import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { fetchCatalog, setActiveFloors } from '../../../entities/catalogSlice';
import { useAppDispatch } from '../../../entities/store';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import SectionPageLeft from '../SectionPageLeft/SectionPageLeft';
import SectionPageRight from '../SectionPageRight/SectionPageRight';
import styles from './SectionPageMain.module.scss';

const SectionPageMain = () => {
    const dispatch = useAppDispatch();
    const flats = useAppSelector((state) => state.catalog.flats);
    const activeFloors = useAppSelector((state) => state.catalog.activeFloors);
    const pathname = useRouter();

    const houseId: string | string[] = pathname.query.houseId;
    const floorId: string | string[] = pathname.query.floorId;

    useEffect(() => {
        if (!flats.length) {
            dispatch(fetchCatalog());
        }
    }, [dispatch, flats.length]);

    useEffect(() => {
        dispatch(setActiveFloors({ houseId }));
    }, [dispatch, houseId, floorId, flats.length, activeFloors.length]);

    return (
        <Wrapper>
            <div className={styles.sectionPageMain}>
                <SectionPageLeft />
                <SectionPageRight />
            </div>
        </Wrapper>
    );
};

export default SectionPageMain;
