//SliderArtFactory
import img1 from '../../../assets/images/landing/artFactory/slider/1.webp';
import img2 from '../../../assets/images/landing/artFactory/slider/2.webp';
import img3 from '../../../assets/images/landing/artFactory/slider/3.webp';
import img4 from '../../../assets/images/landing/artFactory/slider/4.webp';
import img5 from '../../../assets/images/landing/artFactory/slider/5.webp';

import styles from './ArtFactory.module.scss';
import { sliderArtFactory } from '../../../assets/data/main';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { handleAnchor } from '../../../entities/mainSlice';
import RectangleSlider from '../../../features/Sliders/RectangleSlider/RectangleSlider';
import { widePlusScrollbar } from '../../../assets/data/swiper';
import { AppState } from '../../../entities/store';
import { Anchor } from '../../../assets/data/enums';
import { artFactorySectionText } from '../../../assets/data/main';

const ArtFactory = () => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const images = [img1.src, img2.src, img3.src, img4.src, img5.src];
    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.ARTFACTORY, value: Anchor.ARTFACTORY }));
    }, [inView, dispatch]);

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.desc}>
                <p className={styles.title} dangerouslySetInnerHTML={{ __html: artFactorySectionText[0].text }}></p>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: artFactorySectionText[0].title }}></p>
            </div>
            <RectangleSlider data={sliderArtFactory} breakpoints={widePlusScrollbar(width)} images={images} setScrollbar />
        </div>
    );
};

export default ArtFactory;
