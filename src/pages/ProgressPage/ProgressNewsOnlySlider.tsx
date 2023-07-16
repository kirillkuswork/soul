import styles from '../../../styles/ProgressNewsTopic.module.scss';
import formatGalleryLength from '../../utils/formatGalleryLength';
import SliderWithScale from '../../features/Sliders/SliderWithScale/SliderWithScale';
import { narrowBreakpoints } from '../../assets/data/swiper';
import React from 'react';

const ProgressNewsOnlySlider = ({progress, isAdaptive}) => {
    return (
        <section className={styles.slider}>
            <p className={styles.slider_length}>{`${progress.fileUrl.length} ${formatGalleryLength(progress.fileUrl)}`}</p>
            <SliderWithScale
                alt={'Ход строительства SOUL'}
                imgArray={progress.fileUrl}
                breakpoints={narrowBreakpoints}
                isAdaptive={isAdaptive}
            />
        </section>
    );
};

export default ProgressNewsOnlySlider;
