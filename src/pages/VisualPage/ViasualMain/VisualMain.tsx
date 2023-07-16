import React, { useEffect } from 'react';
import { fetchCatalog } from '../../../entities/catalogSlice';
import { useAppDispatch } from '../../../entities/store';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import VisualComplex from '../VisualComplex/VisualComplex';
import VisualDescription from '../VisualDescription/VisualDescription';
import styles from './VisualMain.module.scss';

const VisualMain = () => {
    const dispatch = useAppDispatch();
    const flats = useAppSelector((state) => state.catalog.flats);

    useEffect(() => {
        if (!flats.length) {
            dispatch(fetchCatalog());
        }
    }, [dispatch, flats.length]);

    return (
        <Wrapper>
            <div className={styles.visualmain}>
                <VisualDescription />
                <VisualComplex />
            </div>
        </Wrapper>
    );
};

export default VisualMain;
