//Images for TopSection
import bg from '../src/assets/images/location/top/bg.webp';
import md from '../src/assets/images/location/top/md.webp';
import xs from '../src/assets/images/location/top/xs.webp';

//Images for BottomSection
import xs3 from '../src/assets/images/location/contacts/xs.webp';
import md3 from '../src/assets/images/location/contacts/md.webp';
import bg3 from '../src/assets/images/location/contacts/bg.webp';

import styles from '../styles/LocationPage.module.scss';
import React, { useEffect, useState } from 'react';
import { handleHeaderColor } from '../src/entities/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { locationText } from '../src/assets/data/location';
import { AppState, wrapper } from '../src/entities/store';
import Slider from '../src/features/Sliders/Slider/Slider';
import { getLocationSlider, getRunningQueriesThunk } from '../src/entities/locationSlice';
import LocationMap from '../src/pages/LocationPage/LocationMap';
import { isMobile, isTablet } from 'react-device-detect';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import TopScreen from '../src/shared/TopScreen/TopScreen';

const images3 = [xs3, md3, bg3, bg3];
const imagesTop = [xs.src, md.src, bg.src, bg.src];

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getLocationSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

const LocationPage = ({ initialState }) => {
    const locationSlider = initialState.locationApi.queries['getLocationSlider(1)'].data;
    const [locSliderArr, setLocSliderArr] = useState([]);
    const [isSlider, setIsSlider] = useState(false);
    const [isAdaptive, setIsAdaptive] = useState(false);

    useEffect(() => {
        if (!locationSlider) return;
        const description = locationSlider.descriptions.map((el) => {
            return el.description;
        });
        const fullUrls = locationSlider.absolutePath.map((el, i) => {
            return { img: el, alt: 'location photo', title: description[i] };
        });
        setLocSliderArr(fullUrls);
        setIsSlider(true);
    }, [locationSlider]);

    const dispatch = useDispatch();
    const width = useSelector<AppState, number>((state) => state.main.width);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));

        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 1024) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'Расположение и окружение'} title={'Расположение и&nbsp;окружение'} />
            <main>
                <div className={styles.info}>
                    <h2 className={styles.info__subtitle} dangerouslySetInnerHTML={{ __html: locationText[0].title }}></h2>
                    <div className={styles.info__inner} dangerouslySetInnerHTML={{ __html: locationText[0].text }}></div>
                </div>
                <LocationMap isAdaptive={isAdaptive} />
                <div className={styles.cta}>
                    <div className={styles.cta__inner}>
                        <h2 className={styles.cta__subtitle} dangerouslySetInnerHTML={{ __html: locationText[1].title }}></h2>
                        <p className={styles.cta__text} dangerouslySetInnerHTML={{ __html: locationText[1].text }}></p>
                    </div>
                </div>
            </main>

            {isSlider && <Slider arr={locSliderArr} text={`Точки притяжения района`} />}

            <BottomScreen formNameData={'locationForm'} imgArray={images3} width={width} />
        </div>
    );
};

export default LocationPage;
