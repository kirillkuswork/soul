import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import {
    sortFlats,
    updateInputValues,
    updateSliderValues,
} from '../../entities/catalogSlice';
import Nouislider from '../../../node_modules/nouislider-react';
import 'nouislider/distribute/nouislider.css';
import styles from './RangeSlider.module.scss';
import { FC } from 'react';
import editPriceInMillions from '../../tools/_edit-price-in-millions';

interface IRangeSlider {
    min?: string;
    max?: string;
    start?: number;
    startInput?: number;
    endInput?: number;
    end?: number;
    description: string;
    slider: string;
    sup: boolean;
}

const RangeSlider: FC<IRangeSlider> = ({ description, slider, sup }) => {
    const inForm = useAppSelector((state) => state.catalog.inForm);
    const sortParameters = useAppSelector((state) => state.catalog.sortParameters);
    const {inputsValues, slidersValues, slidersExtremeValues, inactiveSliders } = useAppSelector((state) => state.catalog.filterParameters);
    const dispatch = useAppDispatch();

    const onChangeSlider = (values: string[]) => {
        dispatch(updateSliderValues({ values, slider }));
        dispatch(
            sortFlats({
                value: sortParameters.value,
                placeCall: inForm,
                array: 'flats',
            }),
        );
    };

    const onSlideSlider = (slider: string, values: string[]) => {
        dispatch(updateInputValues({ slider, values }));
    };

    return (
        <div className={`${styles.rangeSlider} ${inactiveSliders[slider] ? styles.disabled : ""}`}>
            <div className={styles.rangeSlider__description}>
                <p className={styles.rangeSlider__name}>
                    {description}
                    {sup && <sup>2</sup>}
                </p>
                <div className={styles.rangeSlider__amounts}>
                    <span>{slider === 'price'
                        ? Math.floor(editPriceInMillions(Number(inputsValues[slider][0])))
                        : Math.floor(Number(inputsValues[slider][0]))}</span>
                    <span className={styles.rangeSlider__def}></span>
                    <span>{slider === 'price'
                        ? Math.ceil(editPriceInMillions(Number(inputsValues[slider][1])))
                        : Math.ceil(Number(inputsValues[slider][1]))}</span>
                </div>
            </div>
            <div className={styles.rangeSlider__container}>
                <Nouislider
                    range={{ min: +slidersExtremeValues[slider][0], max: +slidersExtremeValues[slider][1] }}
                    step={1}
                    start={[+slidersValues[slider][0], +slidersValues[slider][1]]}
                    onSlide={(values) => onSlideSlider(slider, values)}
                    onChange={(values) => onChangeSlider(values)}
                    disabled={inactiveSliders[slider]}
                    connect
                />
            </div>
        </div>
    );
};

export default RangeSlider;
