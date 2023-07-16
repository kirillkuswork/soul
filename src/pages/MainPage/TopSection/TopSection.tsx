import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import styles from './TopSection.module.scss';
import { AppState } from '../../../entities/store';
import { handleAnchor } from '../../../entities/mainSlice';
import WindowsAnimation from '../../../shared/WindowsAnimation/WindowsAnimation';
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';
import MainPageSvg from '../../../shared/svgs/MainPageSvg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { isMobile, isTablet } from 'react-device-detect';
import { Anchor } from '../../../assets/data/enums';
import { topSectionTitle } from '../../../assets/data/main';

const TopSection = ({ promos, width }) => {
    const [titleBottomMargin, setTitleBottomMargin] = useState(0);
    const [isAdaptive, setIsAdaptive] = useState(false);
    const [isFirstAnimationEnded, setIsFirstAnimationEnded] = useState(false);
    const [isSpecial, setIsSpecial] = useState(false);

    const currentAnchor = useSelector<AppState>((state) => state.main.currentAnchor);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet || width < 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (promos.status === 'fulfilled' && promos.data && promos.data.menuItems.length > 0) {
            setIsSpecial(true);
        }
    }, [promos.data, promos.status]);

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.TOP, value: Anchor.TOP }));
    }, [inView, dispatch]);

    useEffect(() => {
        if (currentAnchor !== Anchor.TOP) {
            setIsFirstAnimationEnded(true);
        }
    }, [currentAnchor]);

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const titleRef = useRef(null);
    const timeline = gsap.timeline();
    const revertTimeline = gsap.timeline();

    const appScrollStart = useSelector<AppState>((state) => state.main.appScrollStart);

    //Анимация исчезновения лого Соула
    useIsomorphicLayoutEffect(() => {
        appScrollStart &&
            timeline
                .to(firstRef.current, { opacity: 0, translateY: -50, duration: 0.2 })
                .to(secondRef.current, { opacity: 0, translateY: -50, duration: 0.2 }, '-=.1')
                .to(thirdRef.current, { opacity: 0, translateY: -50, duration: 0.2 }, '-=.1')
                .to(fourthRef.current, { opacity: 0, translateY: -50, duration: 0.2 }, '-=.1')
                .to(titleRef.current, { opacity: 0, translateY: -50, duration: 0.2 }, '-=.5')
                .to(
                    ref,
                    {
                        onComplete: () => {
                            if (currentAnchor === Anchor.TOP) return;
                            else {
                                setIsFirstAnimationEnded(true);
                            }
                            timeline.kill();
                        },
                    },
                    '-=.5',
                );
    }, [appScrollStart, dispatch, timeline, currentAnchor, ref]);

    // Возвратная анимация
    useIsomorphicLayoutEffect(() => {
        !appScrollStart &&
            revertTimeline
                .to(firstRef.current, { opacity: 1, translateY: 0, duration: 0.2 })
                .to(secondRef.current, { opacity: 1, translateY: 0, duration: 0.2 }, '-=.1')
                .to(thirdRef.current, { opacity: 1, translateY: 0, duration: 0.2 }, '-=.1')
                .to(fourthRef.current, { opacity: 1, translateY: 0, duration: 0.2 }, '-=.1')
                .to(titleRef.current, { opacity: 1, translateY: 0, duration: 0.2 }, '-=.5')
                .to(
                    ref,
                    {
                        onComplete: () => {
                            setIsFirstAnimationEnded(true);
                            timeline.kill();
                        },
                    },
                    '-=.5',
                );
    }, [inView, isFirstAnimationEnded, revertTimeline, appScrollStart, ref, timeline]);

    const itemRef = useRef(null);

    useEffect(() => {
        if (!titleRef.current || !itemRef.current) return;

        if (isAdaptive) {
            const titleRefBottomNumber = window.getComputedStyle(titleRef.current).getPropertyValue('bottom').replace('px', '');

            setTitleBottomMargin(itemRef.current.getBoundingClientRect().height + +titleRefBottomNumber);
        }
    }, [titleRef, itemRef, isAdaptive]);

    const titleStyle = titleBottomMargin > 0 ? { bottom: `${titleBottomMargin}px` } : null;

    return (
        <div ref={ref} className={styles.container}>
            <WindowsAnimation />
            <svg
                className={styles.logo}
                version='1.1'
                id='layer'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 601 322'
                fill='white'
            >
                <path
                    ref={firstRef}
                    d='M60.5,320.1c37,0,58.7-17.5,58.7-42.9c0-51.2-87.4-29-87.4-54.4c0-8.3,9.8-13.9,26.8-13.9
                c16.3,0.1,32.2,5.1,45.7,14.3l10.6-19.5C96.7,193.4,81,187.4,61.7,187C31,186.2,7.3,199.7,7.3,225.1c0,49.6,88.2,28.6,88.2,54
                c0,9.9-13,19.5-37,19.5c-19.7,0-31.1-6.4-45.3-18.7l-13.8,17.5C11.6,311.4,34.5,320.1,60.5,320.1'
                />
                <path
                    ref={secondRef}
                    d='M216.1,186.9c-39.8,0-69.7,28.2-69.7,66.7c0,39.3,30.7,66.7,70.1,66.7c39.4,0,69.7-27.4,69.7-66.3
                C286.2,215.1,255.9,186.9,216.1,186.9z M216.1,298.9c-29.1,0-44.5-18.7-44.5-44.9c0-25.8,15.4-45.7,44.5-45.7
                c29.1,0,44.9,19.8,44.9,45.7C261,280.3,245.3,298.9,216.1,298.9z'
                />
                <g ref={thirdRef}>
                    <rect x='314.5' y='297.1' width='129.6' height='21.8' />
                    <path d='M379.5,277.6c43.3,0,64.6-33.3,64.6-67.1V1.2H420v205c0,31.8-12.6,50-40.2,50c-26.4,0-41-17.1-41-50.8V1.2h-24.4V209C314.5,243.1,335.4,277.7,379.5,277.6' />
                </g>
                <polygon ref={fourthRef} points='485.8,319.2 600.8,319.2 600.8,297.4 510.3,297.4 510.3,189 485.8,189 ' />
            </svg>

            <h1 className={styles.title} ref={titleRef} style={titleStyle} dangerouslySetInnerHTML={{ __html: topSectionTitle }}></h1>
            <div className={styles.promosContainer}>
                {isSpecial && (
                    <Swiper
                        className={styles.promos}
                        slidesPerView={'auto'}
                        resistance={true}
                        resistanceRatio={0}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesOffsetBefore: 16,
                                slidesOffsetAfter: 16,
                            },
                            375: {
                                spaceBetween: 20,
                                slidesOffsetBefore: 16,
                                slidesOffsetAfter: 16,
                            },
                            540: {
                                spaceBetween: 20,
                                slidesOffsetBefore: 16,
                                slidesOffsetAfter: 16,
                            },
                            768: {
                                spaceBetween: 20,
                                slidesOffsetBefore: 40,
                                slidesOffsetAfter: 40,
                            },
                            1200: {
                                spaceBetween: 20,
                                slidesPerView: 1.6,
                                centeredSlides: true,
                            },
                            1600: {
                                spaceBetween: 20,
                                slidesPerView: 1.6,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {promos.data.menuItems.map((promo, i) => {
                            return (
                                !promo.hide && (
                                    <SwiperSlide key={i}>
                                        <Link
                                            ref={itemRef}
                                            href={promo.path}
                                            className={`${styles.promo} ${
                                                promos.data.menuItems.length > 1 ? styles.promo__multiple : 'undefined'
                                            }`}
                                        >
                                            <p className={styles.promo_text}>{promo.value}</p>
                                            {!isAdaptive ? (
                                                <div className={styles.promo_icons}>
                                                    <MainPageSvg id={'arrow'} addClass={styles.promo_icon__arrow} />
                                                    <MainPageSvg id={'percent-icon'} addClass={styles.promo_icon__percentage} />
                                                </div>
                                            ) : (
                                                <MainPageSvg id={'percent-icon'} addClass={styles.promo_icon__percentage} />
                                            )}
                                        </Link>
                                    </SwiperSlide>
                                )
                            );
                        })}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default TopSection;
