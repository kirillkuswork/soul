import React, { FC } from 'react';
import CatalogListItem from '../../../shared/CatalogListItem/CatalogListItem';
import styles from './ListFlatsRenderFlats.module.scss';
import NoSuitableFlats from '../../../shared/NoSuitableFlats/NoSuitableFlats';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { IFlat } from '../../../assets/data/interfaces';

interface IListRender {
    flats: IFlat[];
}

const valuePropsAreEqual: (prevValue: IListRender, nextValue: IListRender) => boolean = (prevValue, nextValue) => {
    return prevValue.flats === nextValue.flats;
};

const ListFlatsRenderFlats: FC<IListRender> = ({ flats }) => {
    const status = useAppSelector((state) => state.catalog.urls.getResidential.status);

    const flatElementsList = flats?.map((flat: IFlat) => {
        if (flat.status === 'free') return <CatalogListItem list='list' flat={flat} key={flat.id} />;
    });

    return (
        <div className={styles.listRender}>
            <div className={styles.listRender__container}>
                {flats.length === 0 && status === true ? <NoSuitableFlats /> : <> {flatElementsList}</>}
            </div>
        </div>
    );
};

export default React.memo(ListFlatsRenderFlats, valuePropsAreEqual);
