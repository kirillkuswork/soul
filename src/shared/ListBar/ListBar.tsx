import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { sortFlats } from '../../entities/catalogSlice';
import { sortByTableFlats } from '../../entities/favoriteSlice';
import ColumnName from './ColumnName/ColumnName';

import styles from './ListBar.module.scss';
import { ISortColumnsTypes } from '../../assets/data/interfaces';

interface IListBar {
    sort: string;
    color?: string;
}

const ListBar: FC<IListBar> = ({ sort, color }) => {
    const [sortColumns, setSortColumns] = useState<ISortColumnsTypes | object>({});
    const [sortParameters, setSortParameters] = useState({
        value: '',
        direction: '',
    });
    const [inTableHead, setInTableHead] = useState();

    const router = useRouter();
    const width = useAppSelector((state) => state.main.width);
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    const parameters = { ...sortColumns };

    useEffect(() => {
        if (sort === 'showedList') {
            setSortColumns(state.favorite.sortColumns);
            setSortParameters(state.favorite.sortParameters);
            setInTableHead(state.favorite.inTableHead);
        } else {
            setSortColumns(state.catalog.sortColumns);
            setSortParameters(state.catalog.sortParameters);
            setInTableHead(state.catalog.inTableHead);
        }
    }, [
        sort,
        state.catalog.inTableHead,
        state.catalog.sortColumns,
        state.catalog.sortParameters,
        state.favorite.inTableHead,
        state.favorite.sortColumns,
        state.favorite.sortParameters,
    ]);

    const sorting = (value) => {
        if (router.pathname.includes('/favorites')) {
            dispatch(
                sortByTableFlats({
                    value,
                    placeCall: inTableHead,
                    array: sort,
                }),
            );
        } else {
            dispatch(
                sortFlats({
                    value,
                    placeCall: inTableHead,
                    array: sort,
                }),
            );
        }
    };

    const columnElements = Object.entries(parameters).map(([key, value]) => {
        let direction = '';
        const sort = sortParameters.value === key;

        if (sort) {
            direction = sortParameters.direction;
        }

        let text = '';

        if (width <= 600) {
            text = value.replace('Номер', '№').replace('Cпальни', 'Тип').replace('Корпус', 'Корп.');
        } else {
            text = value;
        }

        return <ColumnName direction={sortParameters} key={key} keys={key} handleClick={sorting} value={text} />;
    });

    return <div className={color ? styles.listBar__blue : styles.listBar__orange}>{columnElements}</div>;
};

export default ListBar;
