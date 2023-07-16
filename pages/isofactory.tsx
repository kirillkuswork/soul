import topXS from '../src/assets/images/isoFactory/top/xs.webp';
import topMD from '../src/assets/images/isoFactory/top/md.webp';
import topBG from '../src/assets/images/isoFactory/top/bg.webp';
import topXL from '../src/assets/images/isoFactory/top/xl.webp';

import stripesOne from '../src/assets/images/isoFactory/threeImagesStripes/onebg.webp';
import stripesTwo from '../src/assets/images/isoFactory/threeImagesStripes/twobg.webp';
import stripesThree from '../src/assets/images/isoFactory/threeImagesStripes/threebg.webp';

import bottomXS from '../src/assets/images/isoFactory/bottom/xs.webp';
import bottomMD from '../src/assets/images/isoFactory/bottom/md.webp';
import bottomBG from '../src/assets/images/isoFactory/bottom/bg.webp';
import bottomXL from '../src/assets/images/isoFactory/bottom/xl.webp';

import styles from '../styles/IsoFactoryPage.module.scss';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import TermsPageSvg from '../src/shared/svgs/TermsPageSvg';
import React, { useCallback, useEffect, useRef } from 'react';
import { isoFactoryArticleText, isoFactoryBottomText, isoFactoryTextBlockData } from '../src/assets/data/isoFactory';
import ThreeImageStripes from '../src/features/ThreeImageStripes/ThreeImageStripes';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, wrapper } from '../src/entities/store';

//Images for BottomSection
import xs from '../src/assets/images/isoFactory/contacts/xs.webp';
import md from '../src/assets/images/isoFactory/contacts/md.webp';
import bg from '../src/assets/images/isoFactory/contacts/bg.webp';

import useHeaderHook from '../src/hooks/useHeaderHook';
import useMediaQuery from '../src/hooks/useMediaQuery';
import {
    getIsoFactoryFirstSlider,
    getIsoFactorySecondSlider,
    getIsoFactoryLastSlider,
    getRunningQueriesThunk,
} from '../src/entities/isofactorySlice';
import formatPhotosLength from '../src/tools/_format-photos-length';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '../src/hooks/useIsomorphicLayoutEffect';
import WhiteArrowBigSlider from '../src/shared/WhiteArrowBigSlider/WhiteArrowBigSlider';
import { narrowBreakpoints, swiperDefaultProps } from '../src/assets/data/swiper';
import { handleHeaderColor } from '../src/entities/mainSlice';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import TopScreen from '../src/shared/TopScreen/TopScreen';
import ImpactSection from '../src/pages/IsoFactory/ImpactSection';
import BottomSection from '../src/pages/IsoFactory/BottomSection';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getIsoFactoryFirstSlider.initiate(1));
    store.dispatch(getIsoFactorySecondSlider.initiate(1));
    store.dispatch(getIsoFactoryLastSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

const IsoFactoryPage = ({ initialState }) => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const imgArray = [topXS.src, topMD.src, topBG.src, topXL.src];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const timeline = gsap.timeline();
    const articleRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    useIsomorphicLayoutEffect(() => {
        if (!inView) return;
        timeline.to(articleRef.current, {
            translateY: 0,
            duration: 0.8,
            onComplete: () => {
                timeline.kill();
            },
        });
        return () => {
            timeline.kill();
        };
    }, [inView, timeline, width]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    const tabletWidth = useMediaQuery(900);
    const stripesImages = !tabletWidth ? [stripesOne.src, stripesTwo.src, stripesThree.src] : [stripesOne.src, stripesTwo.src];
    const images = [xs, md, bg, bg];
    const bottomImgArr = [bottomXS.src, bottomMD.src, bottomBG.src, bottomXL.src];
    const sliderData1 = initialState.isofactoryApi.queries['getIsoFactoryFirstSlider(1)'].data;
    const sliderData2 = initialState.isofactoryApi.queries['getIsoFactorySecondSlider(1)'].data;
    const sliderData3 = initialState.isofactoryApi.queries['getIsoFactoryLastSlider(1)'].data;

    const TextBlock = ({ title, firstText, secondText }) => {
        return (
            <div className={styles.textBlock}>
                <h2 className={styles.textBlock_title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <div className={styles.textBlock_text}>
                    <p className={styles.textBlock_text__first} dangerouslySetInnerHTML={{ __html: firstText }}></p>
                    <p className={styles.textBlock_text__second} dangerouslySetInnerHTML={{ __html: secondText }}></p>
                </div>
            </div>
        );
    };

    const ArticleBlock = useCallback(() => {
        return (
            <div ref={ref}>
                <article className={styles.article} ref={articleRef}>
                    <WhiteArrowBigSlider sliderData={sliderData2} alt={'Просветительская программа Изофабрики'} />
                    <div className={styles.article_info}>
                        <p className={styles.article_title}>Просвещение</p>
                        <p className={styles.article_text} dangerouslySetInnerHTML={{ __html: isoFactoryArticleText }}></p>
                    </div>
                </article>
            </div>
        );
    }, [ref, sliderData2]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imgArray} alt={'Изофабрика'} title={'Изофабрика'} />
            <main>
                <TextBlock
                    title={isoFactoryTextBlockData[0].title}
                    firstText={isoFactoryTextBlockData[0].firstText}
                    secondText={isoFactoryTextBlockData[0].secondText}
                />
                <p className={styles.photosLength}>{`${sliderData1.absolutePath.length} ${formatPhotosLength(
                    sliderData1.absolutePath,
                )}`}</p>
                <Swiper
                    {...swiperDefaultProps(nextRef, prevRef)}
                    className={styles.slider}
                    modules={[Navigation, Autoplay]}
                    breakpoints={narrowBreakpoints}
                >
                    {sliderData1.absolutePath.map((image) => {
                        return (
                            <SwiperSlide key={image} className={styles.card}>
                                <Image alt={'Изофабрика'} fill unoptimized src={image} sizes='(min-width: 540px) 100vw' />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className={styles.buttonsContainer}>
                    <button ref={prevRef} aria-label='prev'>
                        <TermsPageSvg id='slider-arrow-left' />
                    </button>
                    <button ref={nextRef} aria-label='next'>
                        <TermsPageSvg id='slider-arrow-right' />
                    </button>
                </div>

                <TextBlock
                    title={isoFactoryTextBlockData[1].title}
                    firstText={isoFactoryTextBlockData[1].firstText}
                    secondText={isoFactoryTextBlockData[1].secondText}
                />

                <div className={styles.threeImages}>
                    <ThreeImageStripes images={stripesImages} />
                </div>

                <ArticleBlock />
                <ImpactSection sliderData={sliderData3} />
                <BottomSection images={bottomImgArr} textData={isoFactoryBottomText} />
            </main>

            <BottomScreen formNameData={'isofactoryForm'} imgArray={images} width={width} />
        </div>
    );
};

export default IsoFactoryPage;
