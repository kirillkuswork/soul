import styles from '../styles/HistoryPage.module.scss';
import React, { useEffect, useState } from 'react';

//Images for TopSection
import topXS from '../src/assets/images/history/top/xs.webp';
import topMD from '../src/assets/images/history/top/md.webp';
import topBG from '../src/assets/images/history/top/bg.webp';
import topXL from '../src/assets/images/history/top/bg.webp';

//Images for BottomSection
import xs from '../src/assets/images/landing/contacts/xs.webp';
import md from '../src/assets/images/landing/contacts/md.webp';
import bg from '../src/assets/images/landing/contacts/bg.webp';
import xl from '../src/assets/images/landing/contacts/xl.webp';

//Images for MiddlePhoto
import midXs from '../src/assets/images/history/middle/xs.webp';
import midMd from '../src/assets/images/history/middle/md.webp';
import midBg from '../src/assets/images/history/middle/bg.webp';

//Images for BottomPhoto
import bottomXs from '../src/assets/images/history/bottom/xs.webp';
import bottomMd from '../src/assets/images/history/bottom/md.webp';
import bottomBg from '../src/assets/images/history/bottom/bg.webp';

import TopScreen from '../src/shared/TopScreen/TopScreen';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, wrapper } from '../src/entities/store';
import BottomSection from '../src/pages/IsoFactory/BottomSection';
import { handleHeaderColor } from '../src/entities/mainSlice';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { getHistoryFirstSlider, getHistorySecondSlider, getRunningQueriesThunk } from '../src/entities/historySlice';
import { historyCenterText, historyText } from '../src/assets/data/history';
import StripesRevealImage from '../src/shared/StripesAnimation/StripesRevealImage';
import { WHITE_COLOR } from '../src/assets/data/consts';
import PhotosSlider from '../src/pages/HistoryPage/PhotosSlider/PhotosSlider';

const imagesTop = [topXS.src, topMD.src, topBG.src, topXL.src];
const imagesBottom = [xs, md, bg, xl];
const photosMiddle = [midXs.src, midMd.src, midBg.src];
const photosBottom = [bottomXs.src, bottomMd.src, bottomBg.src];

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getHistoryFirstSlider.initiate(1));
    store.dispatch(getHistorySecondSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

export default function HistoryPage({ initialState }) {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const dispatch = useDispatch();
    const sliderData1 = initialState.historyApi.queries['getHistoryFirstSlider(1)'].data;
    const sliderData2 = initialState.historyApi.queries['getHistorySecondSlider(1)'].data;
    const [sliderData1Arr, setsliderData1Arr] = useState([]);
    const [sliderData2Arr, setsliderData2Arr] = useState([]);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    //console.log(sliderData1);
    useEffect(() => {
        if (sliderData1) {
            const description = sliderData1.descriptions.map((el) => {
                return { text: el.description, title: el.title };
            });

            const fullUrls = sliderData1.absolutePath.map((el, i) => {
                return { img: el, alt: el, title: description[i].title, text: description[i].text };
            });
            setsliderData1Arr(fullUrls);
        }

        if (sliderData2) {
            const description = sliderData2.descriptions.map((el) => {
                return { text: el.description, title: el.title };
            });
            const fullUrls = sliderData2.absolutePath.map((el, i) => {
                return { img: el, alt: el, title: description[i].title, text: description[i].text };
            });
            setsliderData2Arr(fullUrls);
        }
    }, [sliderData1, sliderData2]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'История района'} title={'История района'} />
            <main>
                <div className={styles.textBlock}>
                    <div className={styles.textBlock_text}>
                        <p dangerouslySetInnerHTML={{ __html: historyText[0].firstText }}></p>
                        <p dangerouslySetInnerHTML={{ __html: historyText[0].secondText }}></p>
                    </div>
                </div>
                <div className={styles.image}>
                    <div>
                        <StripesRevealImage
                            alt={'Головановский народный парк'}
                            images={photosMiddle}
                            backgroundColor={WHITE_COLOR}
                            addClass={styles.image__img}
                        />
                    </div>
                </div>
                <h2 className={styles.title}>История в эпохах</h2>
                {sliderData1Arr.length > 0 && (
                    <div className={styles.slider}>
                        <PhotosSlider arr={sliderData1Arr} />
                    </div>
                )}
                <BottomSection images={photosBottom} textData={historyCenterText} />
                <div className={styles.textRow}>
                    <h2 className={styles.textRow_title} dangerouslySetInnerHTML={{ __html: historyText[1].title }}></h2>
                    <p className={styles.textRow_text} dangerouslySetInnerHTML={{ __html: historyText[1].text }}></p>
                </div>
                {sliderData2Arr.length > 0 && (
                    <div className={`${styles.slider} ${styles.slider__pb}`}>
                        <PhotosSlider arr={sliderData2Arr} />
                    </div>
                )}
            </main>
            <BottomScreen formNameData={'historyForm'} imgArray={imagesBottom} width={width} />
        </div>
    );
}
