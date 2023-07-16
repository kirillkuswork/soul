import React, { FC } from 'react';
import { IFlat } from '../../../assets/data/interfaces';

import CatalogListItem from '../../../shared/CatalogListItem/CatalogListItem';

import styles from './FavoriteFlatsRender.module.scss';

interface IFLatFavorites {
    showedList: IFlat[];
}

const valuePropsAreEqual: (prevValue: IFLatFavorites, nextValue: IFLatFavorites) => boolean = (prevValue, nextValue) => {
    return prevValue.showedList === nextValue.showedList;
};

const FavoriteFlatsRender: FC<IFLatFavorites> = ({ showedList }) => {
    const flatElementsList = showedList?.map((flat: IFlat) => {
        if (flat.status === 'free') return <CatalogListItem favorite={true} list='list' flat={flat} key={flat.id} />;
    });

    return (
        <div className={styles.favoriteFlatsRender}>
            <div className={styles.favoriteFlatsRender__container}>{flatElementsList}</div>
        </div>
    );
};

export default React.memo(FavoriteFlatsRender, valuePropsAreEqual);
