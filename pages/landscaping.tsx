import bottomXs from '../src/assets/images/landing/contacts/xs.webp';
import bottomMd from '../src/assets/images/landing/contacts/md.webp';
import bottomBg from '../src/assets/images/landing/contacts/bg.webp';
import bottomXl from '../src/assets/images/landing/contacts/xl.webp';

import topXS from '../src/assets/images/landscaping/top/xs.webp';
import topMD from '../src/assets/images/landscaping/top/md.webp';
import topBG from '../src/assets/images/landscaping/top/bg.webp';
import topXL from '../src/assets/images/landscaping/top/xl.webp';

import styles from '../styles/Landscaping.module.scss';
import { landscapingData, landscapingCardsData } from '../src/assets/data/landscaping';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, wrapper } from '../src/entities/store';
import Image from 'next/image';
import useHeaderHook from '../src/hooks/useHeaderHook';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getFirstLandscapingSlider, getLastLandscapingSlider, getRunningQueriesThunk } from '../src/entities/landscapingSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import TermsPageSvg from '../src/shared/svgs/TermsPageSvg';
import { isMobile, isTablet } from 'react-device-detect';
import { handleHeaderColor } from '../src/entities/mainSlice';
import RectangleSlider from '../src/features/Sliders/RectangleSlider/RectangleSlider';
import { narrowBreakpoints, swiperDefaultProps } from '../src/assets/data/swiper';
import FlexibleHeading from '../src/shared/FlexibleHeading';
import TopScreen from '../src/shared/TopScreen/TopScreen';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getFirstLandscapingSlider.initiate(1));
    store.dispatch(getLastLandscapingSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

const LandscapingPage = ({ initialState }) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const images = [bottomXs, bottomMd, bottomBg, bottomXl];
    const imagesTop = [topXS.src, topMD.src, topBG.src, topXL.src];

    const firstSliderData = initialState.landscapingApi.queries['getFirstLandscapingSlider(1)'].data;
    const lastSliderData = initialState.landscapingApi.queries['getLastLandscapingSlider(1)'].data;

    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useHeaderHook({
        disappearCoefficient: 0.15,
        BGCoefficientDesktop: 0.95,
        BGCoefficientMobile: 1.05,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({
        disappearCoefficient: 0.15,
        BGCoefficientDesktop: 0.95,
        BGCoefficientMobile: 1.05,
    });

    const FirstSlider = useCallback(() => {
        return (
            <Swiper
                {...swiperDefaultProps(nextRef, prevRef)}
                className={styles.slider}
                modules={[Navigation, Autoplay]}
                breakpoints={narrowBreakpoints}
            >
                {firstSliderData.absolutePath.map((path) => {
                    return (
                        <SwiperSlide key={path} className={styles.main_img}>
                            <Image
                                alt={'Не всем голосам нужны слова. Слушайте сердце'}
                                src={path}
                                fill
                                unoptimized
                                sizes='(max-width: 540px) 70vw, (max-width: 768px) 80vw, (min-width: 769) 100vw'
                            />
                        </SwiperSlide>
                    );
                })}
                {!isAdaptive && (
                    <div className={styles.buttonsContainer}>
                        <button ref={prevRef} aria-label='prev'>
                            <TermsPageSvg id='slider-arrow-left' />
                        </button>
                        <button ref={nextRef} aria-label='next'>
                            <TermsPageSvg id='slider-arrow-right' />
                        </button>
                    </div>
                )}
            </Swiper>
        );
    }, [firstSliderData.absolutePath, isAdaptive]);

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'Благоустройство'} title={'Благоустройство'} />
            <main className={styles.main}>
                <div className={styles.firstText}>
                    <h2 className={styles.firstText_title} dangerouslySetInnerHTML={{ __html: landscapingData[0].title }}></h2>
                    <div className={styles.firstText_text}>
                        <p className={styles.firstText_text__first} dangerouslySetInnerHTML={{ __html: landscapingData[0].firstText }}></p>
                        <p
                            className={styles.firstText_text__second}
                            dangerouslySetInnerHTML={{ __html: landscapingData[0].secondText }}
                        ></p>
                    </div>
                </div>

                <FirstSlider />

                <div className={styles.secondText}>
                    <h2 className={styles.secondText_title} dangerouslySetInnerHTML={{ __html: landscapingData[1].title }}></h2>
                    <div className={styles.secondText_text}>
                        <p className={styles.secondText_text__first} dangerouslySetInnerHTML={{ __html: landscapingData[1].firstText }}></p>
                        <p
                            className={styles.secondText_text__second}
                            dangerouslySetInnerHTML={{ __html: landscapingData[1].secondText }}
                        ></p>
                    </div>
                </div>
            </main>
            <section className={styles.sliderSection}>
                <FlexibleHeading
                    text={'Шуршите осенними листьями. Болтайте с&nbsp;друзьями. Молчите о&nbsp;сокровенном. Ведь именно так звучит счастье'}
                />
                <p>
                    Дизайнеры Gillespies обсудили все разновидности прогулок&nbsp;&mdash; и&nbsp;спроектировали под каждый сценарий свой тип
                    улиц.
                </p>
                {lastSliderData && (
                    <RectangleSlider images={lastSliderData.absolutePath} data={landscapingCardsData} breakpoints={narrowBreakpoints} />
                )}
            </section>
            <BottomScreen formNameData={'landscapingForm'} imgArray={images} width={width} />
        </div>
    );
};

export default LandscapingPage;
