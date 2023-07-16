import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import { sortFlats } from '../../../entities/catalogSlice';
import FlatSimilar from '../FlatSimilar/FlatSimilar';
import FlatInfoDesktop from '../FlatInfoDesktop/FlatInfoDesktop';
import { IFlat } from '../../../assets/data/interfaces';
import FlatInfoAdaptive from '../FlatInfoAdaptive/FlatInfoAdaptive';
import {getFlatCardLabels} from "../../../tools/_get_flat_card_labels"
import styles from './FlatInfo.module.scss';

interface IFlatInfo {
    flat: IFlat;
}

const valuePropsAreEqual = (prevValue: IFlatInfo, nextValue: IFlatInfo) => {
    return prevValue.flat === nextValue.flat;
};

const FlatInfo: FC<IFlatInfo> = ({ flat }) => {
    const sortParameters = useAppSelector((state) => state.catalog.sortParameters);
    const inForm = useAppSelector((state) => state.catalog.inForm);
    const width = useAppSelector((state) => state.main.width);
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const labels = getFlatCardLabels(+flat?.number || 0, +flat?.bulk?.number || 0)

    useEffect(() => {
        if (!width) return;
        width < 1023 && setIsAdaptive(true);
    }, [width]);

    useEffect(() => {
        dispatch(
            sortFlats({
                value: sortParameters.value,
                placeCall: inForm,
                array: 'similarFlats',
            }),
        );
    }, [flat, dispatch, sortParameters.value, inForm]);

    return (
        <div className={styles.flatInfo__container}>
            {labels && Object.keys(labels).map((key, index) =>
                labels[key] &&
                <div key={labels[key] + key + index} className={styles.flatInfo__label}
                     id={"flat-view-label-" + key}>{labels[key]}</div>)
            }
            <Wrapper>{isAdaptive ? <FlatInfoAdaptive flat={flat} /> : <FlatInfoDesktop flat={flat} />}</Wrapper>
            <FlatSimilar />
        </div>
    );
};

export default React.memo(FlatInfo, valuePropsAreEqual);
