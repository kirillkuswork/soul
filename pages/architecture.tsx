import styles from '../styles/ArchitecturePage.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { handleHeaderColor } from '../src/entities/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';

//Images for TopSection
import bg from '../src/assets/images/architecture/top/bg.webp';
import md from '../src/assets/images/architecture/top/md.webp';
import xs from '../src/assets/images/architecture/top/xs.webp';
//Images for BottomSection
import xs3 from '../src/assets/images/architecture/contacts/xs.webp';
import md3 from '../src/assets/images/architecture/contacts/md.webp';
import bg3 from '../src/assets/images/architecture/contacts/bg.webp';

import { AppState, wrapper } from '../src/entities/store';
import Article from '../src/widgets/Article/Article';
import { architectureArticle, architectureText, articleArr } from '../src/assets/data/architecture';
import Slider from '../src/features/Sliders/Slider/Slider';
import { getArchSlider, getRunningQueriesThunk, getSecondArchSlider } from '../src/entities/architectureSlice';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import useIsomorphicLayoutEffect from '../src/hooks/useIsomorphicLayoutEffect';
import formatPhotosLength from '../src/tools/_format-photos-length';
import WhiteArrowBigSlider from '../src/shared/WhiteArrowBigSlider/WhiteArrowBigSlider';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import TopScreen from '../src/shared/TopScreen/TopScreen';

const images = [xs.src, md.src, bg.src, bg.src];
const images3 = [xs3, md3, bg3, bg3];

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getArchSlider.initiate(1));
    store.dispatch(getSecondArchSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

const ArchitecturePage = ({ initialState }) => {
    const archSlider = initialState.architectureApi.queries['getArchSlider(1)'].data;
    const sliderData2 = initialState.architectureApi.queries['getSecondArchSlider(1)'].data;
    const [archSliderArr, setArchSliderArr] = useState([]);
    const [isSlider, setIsSlider] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!archSlider) return;
        const fullUrls = archSlider.absolutePath.map((el) => {
            return { img: el, alt: 'Архитектура Soul' };
        });
        setArchSliderArr(fullUrls);
        setIsSlider(true);
    }, [archSlider]);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));

        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const t1 = gsap.timeline();
    const articleRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        if (!inView) return;
        t1.fromTo(
            articleRef.current,
            { translateY: (300 / 1600) * width },
            {
                translateY: 0,
                duration: 0.8,
                onComplete: () => {
                    t1.kill();
                },
            },
        );
        return () => {
            t1.kill();
        };
    }, [inView, t1]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={images} alt={'Архитектура'} title={'Архитектура'} />

            <main>
                <div className={styles.info}>
                    <p dangerouslySetInnerHTML={{ __html: architectureText[0].text1 }}></p>
                    <p dangerouslySetInnerHTML={{ __html: architectureText[0].text2 }}></p>
                </div>
                <div ref={articleRef}>
                    <div ref={ref}> </div>
                    <Article imgArray={articleArr} title={`Высотные башни`} text={architectureArticle} imgAlt={'Квартира Soul'} />
                </div>
                <div className={styles.slider}>
                    {isSlider && (
                        <Slider arr={archSliderArr} noDrag text={`${archSliderArr.length} ${formatPhotosLength(archSliderArr)}`} />
                    )}
                </div>
                <div className={styles.cta}>
                    <div className={styles.cta__content}>
                        <h2 className={styles.subtitle}>Среднеэтажные дома</h2>
                        <p className={styles.cta__text} dangerouslySetInnerHTML={{ __html: architectureText[1].text1 }}></p>
                        <p className={styles.footnote} dangerouslySetInnerHTML={{ __html: architectureText[1].text2 }}></p>
                    </div>
                    <div>{sliderData2 && <WhiteArrowBigSlider sliderData={sliderData2} alt={'Среднеэтажные дома'} wide />}</div>
                </div>
            </main>
            <BottomScreen formNameData={'architectureForm'} imgArray={images3} width={width} />
        </div>
    );
};

export default ArchitecturePage;
