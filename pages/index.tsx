//Images for ArtFactory
import bg1 from '../src/assets/images/landing/artFactory/bg.webp';
import md1 from '../src/assets/images/landing/artFactory/md.webp';
import xs1 from '../src/assets/images/landing/artFactory/xs.webp';

//Images for BottomSection
import xl3 from '../src/assets/images/landing/contacts/xl.webp';
import bg3 from '../src/assets/images/landing/contacts/bg.webp';
import md3 from '../src/assets/images/landing/contacts/md.webp';
import xs3 from '../src/assets/images/landing/contacts/xs.webp';

//Images for Article
import imgBG from '../src/assets/images/landing/artFactory/articleSmall/bg.webp';
import imgMD from '../src/assets/images/landing/artFactory/articleSmall/md.webp';
import imgXS from '../src/assets/images/landing/artFactory/articleSmall/xs.webp';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import TopSection from '../src/pages/MainPage/TopSection/TopSection';
import Location from '../src/pages/MainPage/Location/Location';
import Architecture from '../src/pages/MainPage/Architecture/Architecture';
import Flats from '../src/pages/MainPage/Flats/Flats';
import ArtFactory from '../src/pages/MainPage/ArtFactory/ArtFactory';
import Team from '../src/pages/MainPage/Team/Team';
import Footer from '../src/shared/Footer/Footer';
import styles from '../styles/Home.module.scss';
import AnimatedScreen from '../src/shared/AnimatedScreen/AnimatedScreen';
import Form from '../src/features/Form/Form';
import Article from '../src/widgets/Article/Article';
import Inner from '../src/pages/MainPage/Inner/Inner';
import { AppState, wrapper } from '../src/entities/store';
import {
    getMainSlider,
    getPromo,
    getRunningQueriesThunk,
    handleAnchor,
    handleHeaderColor,
    handleVisibleHeader,
} from '../src/entities/mainSlice';
import About from '../src/pages/MainPage/About/About';
import { useInView } from 'react-intersection-observer';
import { useAppSelector } from '../src/hooks/useReduxHooks';
import { refreshFavoriteList } from '../src/entities/favoriteSlice';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { isoArticle } from '../src/assets/data/main';
import { Anchor } from '../src/assets/data/enums';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    try {
        store.dispatch(getPromo.initiate(1));
        store.dispatch(getMainSlider.initiate(1));

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    } catch (e) {
        return { notFound: true };
    }
});

const Home = (props) => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const flats = useAppSelector((state) => state.catalog.flats);

    const images1 = [xs1, md1, bg1];
    const images3 = [xs3, md3, bg3, xl3];

    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView({ threshold: 0.9 });

    const dispatch = useDispatch();

    const promos = props.initialState.mainApi.queries['getPromo(1)'];
    const mainSlider = props.initialState.mainApi.queries['getMainSlider(1)'].data;

    useHeaderHook({ disappearCoefficient: 0.9, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        dispatch(handleAnchor({ currentAnchor: Anchor.TOP, value: Anchor.TOP }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
            dispatch(handleAnchor({ currentAnchor: Anchor.TOP, value: '' }));
        };
    }, [dispatch]);

    useEffect(() => {
        if (!inView2) return;

        dispatch(
            handleAnchor({
                currentAnchor: Anchor.ARTFACTORYINTRO,
                value: Anchor.ARTFACTORYINTRO,
            }),
        );
    }, [inView2, dispatch]);

    useEffect(() => {
        if (!inView3) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.CONTACTS, value: Anchor.CONTACTS }));
    }, [inView3, dispatch]);

    useEffect(() => {
        if (!inView4) return;

        setTimeout(() => {
            dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
        }, 300);
    }, [inView4, dispatch]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteList');
        const freeFavoritesFlats = [];

        if (flats.length && savedFavorites) {
            //Проверка, являются ли квартиры, сохраненные в Избранное, до сих пор доступными для бронирования
            flats.forEach((elem) => {
                JSON.parse(savedFavorites).forEach((item) => {
                    if (item.id === elem.id) {
                        freeFavoritesFlats.push(elem);
                    }
                });
            });
        }

        const parsedFavorites = savedFavorites ? freeFavoritesFlats : null;

        if (parsedFavorites) {
            dispatch(refreshFavoriteList(parsedFavorites));
        }
    }, [dispatch, flats]);

    return (
        <div className={styles.container}>
            <section className={`${styles.section} ${styles.section_top}`} id={Anchor.TOP} ref={ref4}>
                <TopSection promos={promos} width={width} />
            </section>
            <section className={styles.section} id={Anchor.ABOUT}>
                <About />
            </section>
            <section className={styles.section} id={Anchor.LOCATION}>
                <Location width={width} />
            </section>
            <section className={styles.section} id={Anchor.ARCHITECTURE}>
                {mainSlider && <Architecture mainSlider={mainSlider} />}
            </section>
            <section className={styles.section} id={Anchor.FLATS}>
                <Flats />
            </section>
            <section className={styles.section} id={Anchor.ARTFACTORYINTRO} ref={ref2}>
                <AnimatedScreen
                    title={'Общественное пространство Изофабрика'}
                    imgArray={images1}
                    headerColor={'header-white'}
                    childClass={'articleSmall'}
                    width={width}
                >
                    <Article
                        imgArray={[imgXS.src, imgMD.src, imgBG.src]}
                        title={
                            'Корпус Изофабрики в&nbsp;духе раннего итальянского Ренессанса был построен в&nbsp;1933-1941 годах по&nbsp;проекту архитектора Георгия Гольца.'
                        }
                        text={isoArticle}
                        imgAlt={'Внутри Изофабрики'}
                        isVertical
                    />
                </AnimatedScreen>
            </section>
            <section className={`${styles.section} ${styles.section_artFactory}`} id={Anchor.ARTFACTORY}>
                <ArtFactory />
            </section>
            <section className={styles.section} id={Anchor.INNER}>
                <Inner width={width} />
            </section>
            <section className={`${styles.section} ${styles.section_contacts}`} id={Anchor.TEAM}>
                <Team />
            </section>
            <section className={`${styles.section} ${styles.section_form}`} id={Anchor.CONTACTS} ref={ref3}>
                <AnimatedScreen
                    title={'&laquo;Подходящего&raquo; времени нет. Есть просто время. И&nbsp;вы&nbsp;решаете, что с&nbsp;ним делать.'}
                    imgArray={images3}
                    headerColor={'header-white'}
                    childClass={'form'}
                    width={width}
                >
                    <Form />
                </AnimatedScreen>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
