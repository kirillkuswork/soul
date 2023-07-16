import styles from '../styles/InfrastructurePage.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

//Images for TopSection
import topXS from '../src/assets/images/infrastructure/top/xs.webp';
import topMD from '../src/assets/images/infrastructure/top/md.webp';
import topBG from '../src/assets/images/infrastructure/top/bg.webp';
import topXL from '../src/assets/images/infrastructure/top/bg.webp';

//Images for BottomSection
import xs from '../src/assets/images/infrastructure/contacts/xs.webp';
import md from '../src/assets/images/infrastructure/contacts/md.webp';
import bg from '../src/assets/images/infrastructure/contacts/bg.webp';

//Images for MiddlePhoto
import midXs from '../src/assets/images/infrastructure/middle/xs.webp';
import midMd from '../src/assets/images/infrastructure/middle/md.webp';
import midBg from '../src/assets/images/infrastructure/middle/bg.webp';

//Images for BottomPhoto
import bottomXs from '../src/assets/images/infrastructure/bottom/xs.webp';
import bottomMd from '../src/assets/images/infrastructure/bottom/md.webp';
import bottomBg from '../src/assets/images/infrastructure/bottom/bg.webp';

import { handleHeaderColor } from '../src/entities/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { AppState, wrapper } from '../src/entities/store';
import { getInfrastructureFirstSlider, getInfrastructureSecondSlider, getRunningQueriesThunk } from '../src/entities/infrastructureSlice';
import { WHITE_COLOR } from '../src/assets/data/consts';
import { infrastructureText, infrastructureTextBlockData, articleText } from '../src/assets/data/infrastructure';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import useIsomorphicLayoutEffect from '../src/hooks/useIsomorphicLayoutEffect';

import StripesRevealImage from '../src/shared/StripesAnimation/StripesRevealImage';
import TopScreen from '../src/shared/TopScreen/TopScreen';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import formatPhotosLength from '../src/tools/_format-photos-length';
import WhiteArrowBigSlider from '../src/shared/WhiteArrowBigSlider/WhiteArrowBigSlider';
import MainPageSvg from '../src/shared/svgs/MainPageSvg';
import Link from 'next/link';
import SliderGallery from '../src/features/Sliders/SliderGallery/SliderGallery';
import ModalGallery from '../src/features/ModalGallery/ModalGallery';

import { disableBodyScroll, enableBodyScroll } from '../src/utils/body-scroll-lock';
import { isMobile, isTablet } from 'react-device-detect';

const imagesTop = [topXS.src, topMD.src, topBG.src, topXL.src];
const imagesBottom = [xs, md, bg, bg];
const photosBottom = [bottomXs.src, bottomMd.src, bottomBg.src];
const photosMiddle = [midXs.src, midMd.src, midBg.src];

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getInfrastructureFirstSlider.initiate(1));
    store.dispatch(getInfrastructureSecondSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

interface ITextBlock {
    title: string;
    firstText: string;
    secondText?: string;
    link?: string;
    subtitle?: string;
}

const InfrastructurePage = ({ initialState }) => {
    const sliderData1 = initialState.infrastructureApi.queries['getInfrastructureFirstSlider(1)'].data;
    const sliderData2 = initialState.infrastructureApi.queries['getInfrastructureSecondSlider(1)'].data;
    const [sliderData2Arr, setsliderData2Arr] = useState([]);
    const [isSlider1, setisSlider1] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const [isGallery, setIsGallery] = useState(false);
    const [picIndex, setPicIndex] = useState(0);
    const isAdaptive = useSelector<AppState, boolean>((state) => state.main.isAdaptive);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isGallery) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    }, [isGallery]);

    useEffect(() => {
        if (!sliderData2) return;

        const fullUrls = sliderData2.absolutePath.map((el) => {
            return { img: el, alt: 'infrastructure photo', onClickHandler };
        });
        setsliderData2Arr(fullUrls);
        setisSlider1(true);
    }, [sliderData2]);

    const onClickHandler = (i) => {
        setIsGallery(true);
        setPicIndex(i);
    };

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));

        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const timeline = gsap.timeline();
    const articleRef = useRef(null);

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

    const TextBlock = ({ title, firstText, secondText, link }: ITextBlock) => {
        return (
            <div className={`${styles.textBlock} ${link ? styles.textBlock_mb40 : ''}`}>
                <h2 className={styles.textBlock_title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <div className={styles.textBlock_text}>
                    <p className={styles.textBlock_text__first} dangerouslySetInnerHTML={{ __html: firstText }}></p>
                    <p className={styles.textBlock_text__second} dangerouslySetInnerHTML={{ __html: secondText }}></p>
                </div>
                {link && (
                    <Link target='_blank' href='#' className={styles.textBlock_link}>
                        <p>{link}</p>
                        <MainPageSvg id={'arrow'} addClass={styles.textBlock_icon} />
                    </Link>
                )}
            </div>
        );
    };

    const TextRow = ({ title, firstText, secondText, subtitle }: ITextBlock) => {
        return (
            <div className={`${styles.textRow} ${subtitle ? styles.textRow_pb : ''}`}>
                <h2 className={styles.textRow_title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p className={styles.textRow_text} dangerouslySetInnerHTML={{ __html: firstText }}></p>
                {subtitle && <p className={styles.textRow_subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>}
                {secondText && <p className={styles.textRow_text} dangerouslySetInnerHTML={{ __html: secondText }}></p>}
            </div>
        );
    };

    const ArticleBlock = useCallback(() => {
        if (!sliderData1) return null;
        return (
            <div ref={ref}>
                <article className={styles.article} ref={articleRef}>
                    <WhiteArrowBigSlider sliderData={sliderData1} alt={'Детские сады'} />
                    <div className={styles.article_info}>
                        <p className={styles.article_title} dangerouslySetInnerHTML={{ __html: articleText.title }}></p>
                        <div>
                            <p className={styles.article_text} dangerouslySetInnerHTML={{ __html: articleText.firstText }}></p>
                            <p className={styles.article_text} dangerouslySetInnerHTML={{ __html: articleText.secondText }}></p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }, [ref, sliderData1]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'Инфраструктура'} title={'Инфраструктура'} />
            <main>
                <TextRow title={infrastructureText[0].title} firstText={infrastructureText[0].firstText} />
                <ArticleBlock />
                <TextBlock
                    title={infrastructureTextBlockData[0].title}
                    firstText={infrastructureTextBlockData[0].firstText}
                    secondText={infrastructureTextBlockData[0].secondText}
                />
                <div className={`${styles.image} ${styles.image__mid}`}>
                    <div>
                        <StripesRevealImage
                            alt={'isofactory'}
                            images={photosMiddle}
                            backgroundColor={WHITE_COLOR}
                            addClass={styles.image__img}
                        />
                    </div>
                </div>
                <TextRow
                    title={infrastructureText[1].title}
                    firstText={infrastructureText[1].firstText}
                    subtitle={infrastructureText[1].subtitle}
                    secondText={infrastructureText[1].secondText}
                />
                {isSlider1 && (
                    <>
                        <h4 className={styles.title}>
                            {sliderData2Arr.length} {formatPhotosLength(sliderData2Arr)}
                        </h4>
                        <SliderGallery arr={sliderData2Arr} isAdaptive={isAdaptive} />
                    </>
                )}
                {isGallery && (
                    <ModalGallery
                        picIndex={picIndex}
                        photos={sliderData2.absolutePath}
                        isAdaptive={isAdaptive}
                        setIsGallery={setIsGallery}
                    />
                )}
                <TextBlock
                    title={infrastructureTextBlockData[1].title}
                    firstText={infrastructureTextBlockData[1].firstText}
                    secondText={infrastructureTextBlockData[1].secondText}
                    link={infrastructureTextBlockData[1].link}
                />
                <div className={styles.image}>
                    <div>
                        <StripesRevealImage
                            alt={'parking'}
                            images={photosBottom}
                            backgroundColor={WHITE_COLOR}
                            addClass={styles.image__img}
                        />
                    </div>
                </div>
            </main>
            <BottomScreen formNameData={'infrastructureForm'} imgArray={imagesBottom} width={width} />
        </div>
    );
};

export default InfrastructurePage;
