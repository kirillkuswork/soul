import ReactSlider from 'react-slider';
import {useState, useEffect} from "react";
import styles from './Slider.module.scss';

interface ISlider {
  unitType: string;
  min: number;
  max: number;
  step: number;
  value: number;
  disabled: boolean;
  onChange: (value) => void;
  renderLabel: (value) => string;
}

const Slider = (props: ISlider) => {
  const { min, max, step, value, onChange, disabled, renderLabel } = props;
  const [sliderValue, setSliderValue] = useState(value || min);

  useEffect(() => {
    setSliderValue(value || min);
  }, [min, value]);

  const handleChange = (newValue) => {
    const value = Math.min(newValue, max);
    onChange ? onChange(value) : setSliderValue(value);
  };

  return (
    <>
      <ReactSlider
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        disabled={disabled}
        className={styles.container}
        thumbClassName={`${styles.thumb} ${disabled ? styles.thumb_disabled : 'undefined'}`}
        trackClassName={`${styles.track} ${disabled ? styles.track_disabled : 'undefined'}`}
      />

      <div className={styles.range}>
          <div className={styles.range_num}>{`${renderLabel(min)}${!props.unitType ? ' млн ₽' : ''}`}</div>
          <div className={styles.range_num}>{`${renderLabel(max)}${!props.unitType ? ' млн ₽' : ''}`}</div>
      </div>
    </>
  );
};

export default Slider;
