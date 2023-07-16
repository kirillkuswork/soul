import React from 'react';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import ListFlatsInfoLeftTop from '../ListFlatsInfoLeftTop/ListFlatsInfoLeftTop';
import ListBar from '../../../shared/ListBar/ListBar';
import styles from './ListFlatsInfoLeft.module.scss';
import ListFlatsRenderFlats from '../ListFlatsRenderFlats/ListFlatsRenderFlats';

const ListFlatsInfoLeft = () => {
    const flats = useAppSelector((state) => state.catalog.flats);

    return (
        <div className={styles.listLeft}>
            <ListFlatsInfoLeftTop flats={flats} />
            <ListBar sort={'flats'} />
            <ListFlatsRenderFlats flats={flats} />
        </div>
    );
};

export default ListFlatsInfoLeft;
