import Slider from '../Slider/Slider';
import { useEffect, useState } from 'react';
import formatPrice from '../../../utils/formatPrice';
import numberOfYearsToString from '../../../utils/numberOfYearsToString';
import styles from './CalculatorSlider.module.scss';
import { GREY } from '../../../assets/data/consts';

interface ICalculatorSlider {
    label: string;
    value: number;
    unitType?: string;
    minValue: number;
    maxValue: number;
    onChange: (value) => void;
    onChangeSliderValue: (value) => void;
    minSliderValue: number;
    maxSliderValue: number;
    sliderValue: number;
    readOnly?: boolean;
    withCurrency?: boolean;
}

const CalculatorSlider = (props: ICalculatorSlider) => {
    const {
        label,
        value,
        onChange,
        readOnly,
        minValue = 0,
        maxValue = 0,
        unitType = 'plain',
        sliderValue,
        maxSliderValue = 0,
        minSliderValue = 0,
        onChangeSliderValue,
    } = props;

    const [inputValue, setInputValue] = useState('');
    const [inputWidth, setInputWidth] = useState(0);

    useEffect(() => {
        setInputWidth(String(value).length + 1);
        setInputValue(formatPrice(value, false));
    }, [value]);

    const changeValue = (value) => {
        onChange(+String(value).replace(/\s/g, ''));
    };

    const changeSliderValue = (value) => {
        onChangeSliderValue(parseInt(value));
    };

    const handleBlur = (event) => {
        if (!event.target.value) {
            setInputValue(formatPrice(value, false));
            setInputWidth(String(value).length);
            return;
        }

        const number = parseInt(event.target.value.replace(/\s/g, ''));

        if (isNaN(number)) {
            changeValue(value);
        } else if (number < minValue || number > maxValue) {
            setInputValue(formatPrice(value, false));
            setInputWidth(String(value).length);
        } else {
            changeValue(number);
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleBlur(event);
        } else {
            if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
                setInputWidth(event.target.value.length + 1);
            } else if (event.keyCode === 8 || event.keyCode === 46) {
                setInputWidth(event.target.value.length - 1);
            }
        }
    };

    const renderLabel = (value) => {
        let stringValue = String(value).replace('.', ',');
        if (unitType === 'plain') {
            stringValue = formatPrice(Math.floor(value / 1000000), false);
        } else if (unitType === 'percent') {
            stringValue += '%';
        } else if (unitType === 'year') {
            stringValue = numberOfYearsToString(stringValue, true);
        }
        return stringValue;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.title}>{label}</span>
                <div className={styles.container_inner}>
                    <input
                        disabled={!!props.label.match('Сумма кредита')}
                        value={inputValue}
                        style={{
                            width: `${inputWidth <= 2 ? 2 : inputWidth}ch`,
                            marginRight: `${props.label.match('Срок кредита') ? 0 : '3px'}`,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        readOnly={readOnly}
                        className={`${styles.input} ${readOnly ? styles.input_disabled : 'undefined'}`}
                        onKeyDown={handleKeyDown}
                    />
                    {props.label !== 'Срок кредита' && <p style={{ color: props.label.match('Сумма кредита') && GREY }}>₽</p>}
                </div>
            </div>
            <Slider
                unitType={props.unitType}
                min={minSliderValue}
                max={maxSliderValue}
                step={1}
                value={sliderValue}
                onChange={changeSliderValue}
                disabled={readOnly}
                renderLabel={renderLabel}
            />
        </div>
    );
};

export default CalculatorSlider;
