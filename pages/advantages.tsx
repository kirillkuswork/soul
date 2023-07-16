import XL from '../src/assets/images/advantages/top/XL.webp';
import BG from '../src/assets/images/advantages/top/BG.webp';
import MD from '../src/assets/images/advantages/top/MD.webp';
import XS from '../src/assets/images/advantages/top/XS.webp';

import articleBG from '../src/assets/images/advantages/article/BG.webp';
import articleMD from '../src/assets/images/advantages/article/MD.webp';
import articleXS from '../src/assets/images/advantages/article/XS.webp';

import xs from '../src/assets/images/advantages/contacts/xs.webp';
import md from '../src/assets/images/advantages/contacts/md.webp';
import bg from '../src/assets/images/advantages/contacts/bg.webp';

import styles from '../styles/AdvantagesPage.module.scss';
import React, { useEffect, useRef } from 'react';
import Article from '../src/widgets/Article/Article';
import { AppState } from '../src/entities/store';
import 'swiper/css';
import { advantagesArticle } from '../src/assets/data/main';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '../src/hooks/useIsomorphicLayoutEffect';
import { advantagesData, advantagesPageCards } from '../src/assets/data/advantages';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { handleHeaderColor } from '../src/entities/mainSlice';
import CardSlider from '../src/features/Sliders/CardSlider/CardSlider';
import TopScreen from '../src/shared/TopScreen/TopScreen';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';

const AdvantagesPage = () => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const images = [xs, md, bg, bg];
    const imagesTop = [XS.src, MD.src, BG.src, XL.src];
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });
    const timeline = gsap.timeline();
    const articleRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        if (!inView) return;
        timeline.fromTo(
            articleRef.current,
            { translateY: (300 / 1600) * width },
            {
                translateY: 0,
                duration: 0.8,
                onComplete: () => {
                    timeline.kill();
                },
            },
        );
        return () => {
            timeline.kill();
        };
    }, [inView, timeline, width]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'Преимущества квартир квартала Soul'} title={'Преимущества квартир квартала Soul'} />
            <main className={styles.main}>
                <h2 className={styles.main_title} dangerouslySetInnerHTML={{ __html: advantagesData[0].title }}></h2>
                <p className={styles.main_info} dangerouslySetInnerHTML={{ __html: advantagesData[0].text }}></p>
                <div ref={articleRef}>
                    <div ref={ref}></div>
                    <Article
                        imgArray={[articleXS.src, articleMD.src, articleBG.src, articleBG.src]}
                        title={advantagesData[0].articleTitle}
                        text={advantagesArticle}
                        imgAlt={'Квартира Soul'}
                    />
                </div>

                <h3 className={styles.main_subtitle} dangerouslySetInnerHTML={{ __html: advantagesData[0].subtitle }}></h3>
                <CardSlider arr={advantagesPageCards} noTop />
            </main>
            <BottomScreen formNameData={'advantagesForm'} imgArray={images} width={width} />
        </div>
    );
};

export default AdvantagesPage;
