import styles from '../../styles/TopicPage.module.scss';
import Footer from '../../src/shared/Footer/Footer';
import Head from 'next/head';
import { AppState, wrapper } from '../../src/entities/store';
import { getNews, getRunningQueriesThunk, getSlider } from '../../src/entities/newsSlice';
import api from '../../src/data/api';
import SliderWithScale from '../../src/features/Sliders/SliderWithScale/SliderWithScale';
import Image from 'next/image';
import Link from 'next/link';
import ROUTES from '../../src/data/routes';
import StripesReveal from '../../src/shared/StripesAnimation/StripesReveal';
import { WHITE_COLOR } from '../../src/assets/data/consts';
import formatTimeFromStringToDayMonthYear from '../../src/utils/formatTimeFromStringToDayMonthYear';
import useHeaderHook from '../../src/hooks/useHeaderHook';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { useSelector } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { narrowBreakpoints, swiperDefaultProps } from '../../src/assets/data/swiper';
import { Autoplay, Navigation } from 'swiper';
import TermsPageSvg from '../../src/shared/svgs/TermsPageSvg';
import { ITopic } from './index';
import BackButton from '../../src/shared/BackButton/BackButton';
import formatPhotosLength from '../../src/tools/_format-photos-length';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    function extractName(str) {
        const regex = /{{(.+?)-slider}}/g; // регулярное выражение
        const match = regex.exec(str); // поиск совпадений в строке
        return match ? match[1] : null; // возвращаем имя или null, если не найдено
    }

    try {
        store.dispatch(getNews.initiate(1));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        const currentPathname = context.params.topic;
        const topicList: ITopic[] = store.getState().newsApi.queries['getNews(1)'].data as ITopic[];
        const topic = topicList.find((item) => currentPathname.includes(item.slug)) || null;
        const similarNews = topicList.slice(-3);
        const sliderName = extractName(topic.content);
        store.dispatch(getSlider.initiate(sliderName));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {
                sliderName,
                slider: sliderName && store.getState().newsApi.queries,
                topic,
                similarNews,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
});

const TopicPage = ({ sliderName, slider, topic, similarNews }) => {
    const [state, setState] = useState<any>();
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);

    useEffect(() => {
        if (!sliderName || !slider) return;
        setState(slider[`getSlider("${sliderName}")`]);
    }, [sliderName, slider]);

    const renderSlider = useCallback(() => {
        const regex = /{{(.*?)}}/g;
        if (slider && state) {
            return (
                <section>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: topic.content.split(regex)[0] }}></div>
                    <div className={styles.slider}>
                        <h5 className={styles.slider__title}>
                            {`${state.data.absolutePath.length} ${formatPhotosLength(state.data.absolutePath)}`}
                        </h5>
                        <SliderWithScale
                            isAdaptive={isAdaptive}
                            imgArray={state.data.absolutePath}
                            alt={topic.title}
                            breakpoints={narrowBreakpoints}
                        />
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: topic.content.split(regex)[2] }}></div>
                </section>
            );
        } else {
            return <section className={styles.content} dangerouslySetInnerHTML={{ __html: topic.content }}></section>;
        }
    }, [slider, state, topic.content, topic.title, isAdaptive]);

    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useHeaderHook({ disappearCoefficient: 0.15 });

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, [width]);

    function getLastThreeObjectsAndSort(arr) {
        const sortedArr = arr.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateB - dateA;
        });

        if (sortedArr.length > 3) {
            const filteredArr = sortedArr.filter((item) => item._id !== topic._id);
            return filteredArr.slice(-3);
        } else {
            return sortedArr;
        }
    }

    const picture = api.urlMain + '/public/news/' + topic.fileUrl;

    return (
        <>
            <Head>
                <meta property='og:title' content={topic.seoTitle} />
                <title>{topic.seoTitle}</title>
            </Head>
            <article className={styles.container}>
                <BackButton />
                <section className={styles.top}>
                    <h1 className={styles.title}>{topic.title}</h1>
                    <time className={styles.data}>{formatTimeFromStringToDayMonthYear(topic.createdAt)}</time>
                    {topic.subtitle && <p className={styles.subtitle}>{topic.subtitle}</p>}
                    {topic.fileUrl && (
                        <StripesReveal backgroundColor={WHITE_COLOR}>
                            <div className={styles.img}>
                                <Image alt={topic.title} src={picture} fill priority unoptimized sizes='(min-width: 540px) 100vw' />
                            </div>
                        </StripesReveal>
                    )}
                </section>

                {renderSlider()}

                {similarNews.length > 0 && (
                    <section className={styles.bottom}>
                        <p className={styles.bottom_title}>Похожие новости</p>
                        {!isAdaptive ? (
                            <div className={styles.similarTopics}>
                                {getLastThreeObjectsAndSort(similarNews).map((item, i) => {
                                    return (
                                        <Link key={item._id} className={styles.similarTopic} href={ROUTES.news.root + item.slug}>
                                            <div className={`${styles.similarTopic_img} ${i === 2 && styles.similarTopic_img__last}`}>
                                                <Image
                                                    src={api.urlMain + '/public/news/' + item.imgPreview}
                                                    alt={item.title}
                                                    fill
                                                    unoptimized
                                                    sizes='(min-width: 540px) 100vw'
                                                />
                                                <p className={styles.similarTopic_createdAt}>
                                                    {formatTimeFromStringToDayMonthYear(item.createdAt)}
                                                </p>
                                            </div>
                                            <p className={styles.similarTopic_title}>{item.title}</p>
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : (
                            <Swiper
                                className={styles.similarTopics}
                                {...swiperDefaultProps(nextRef, prevRef)}
                                modules={[Navigation, Autoplay]}
                                breakpoints={narrowBreakpoints}
                            >
                                {getLastThreeObjectsAndSort(similarNews).map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Link key={item._id} className={styles.similarTopic} href={ROUTES.news.root + item.slug}>
                                                <div className={`${styles.similarTopic_img} ${i === 2 && styles.similarTopic_img__last}`}>
                                                    <Image
                                                        src={api.urlMain + '/public/news/' + item.imgPreview}
                                                        alt={item.title}
                                                        fill
                                                        unoptimized
                                                        sizes='(min-width: 540px) 100vw'
                                                    />
                                                    <p className={styles.similarTopic_createdAt}>
                                                        {formatTimeFromStringToDayMonthYear(item.createdAt)}
                                                    </p>
                                                </div>
                                                <p className={styles.similarTopic_title}>{item.title}</p>
                                            </Link>
                                        </SwiperSlide>
                                    );
                                })}
                                {isAdaptive && (
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
                        )}
                    </section>
                )}
            </article>
            <Footer addClass={'blue'} />
        </>
    );
};

export default TopicPage;
