import styles from './ComfortMortgage.module.scss';
import TermsPageSvg from '../../svgs/TermsPageSvg';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { svgs } from '../../../assets/data/terms';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState, useCallback, Fragment, useRef } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Navigation, SwiperOptions } from 'swiper';
import { NavigationMethods, NavigationOptions } from 'swiper/types';

interface ICard {
    svgId: string;
    text: string;
    footNote?: string;
}

const ComfortMortgage = ({ mortgages }) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const minRate = useSelector<AppState, string>((state) => state.termsInfo.standardMin);
    const { title, item } = mortgages.description[0];
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    const Card = ({ svgId, text, footNote }: ICard) => {
        return (
            <div className={styles.card}>
                <TermsPageSvg id={svgId} addClass={styles.card_icon} />

                {footNote ? (
                    <div className={styles.card_inner}>
                        <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: text }}></p>
                        <p className={styles.card_footNote} dangerouslySetInnerHTML={{ __html: footNote }}></p>
                    </div>
                ) : (
                    <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: text }}></p>
                )}
            </div>
        );
    };

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <section className={styles.container}>
                    <div className={styles.info}>
                        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></div>
                    </div>
                    <div className={styles.cardList}>
                        {svgs(minRate).map((svg, i) => (
                            <Card key={i} svgId={svg.svgId} text={svg.text} footNote={svg.footNote} />
                        ))}
                    </div>
                </section>
            );
        } else {
            return (
                <section className={styles.container}>
                    <div className={styles.info}>
                        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></div>
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            resistance={true}
                            resistanceRatio={0}
                            modules={[Navigation]}
                            navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
                            onSwiper={({ params, navigation }: { params: SwiperOptions; navigation: NavigationMethods }) => {
                                // Delay execution for the refs to be defined
                                const nav: NavigationOptions | boolean = params.navigation;
                                setTimeout(() => {
                                    if (nav === true || nav === false) return;
                                    // Override prevEl & nextEl now that refs are defined
                                    nav.prevEl = prevRef.current;
                                    nav.nextEl = nextRef.current;

                                    // Re-init navigation
                                    navigation.destroy();
                                    navigation.init();
                                    navigation.update();
                                });
                            }}
                            breakpoints={{
                                320: {
                                    slidesOffsetBefore: 15,
                                    slidesOffsetAfter: 15,
                                },
                                375: {
                                    slidesOffsetBefore: 15,
                                    slidesOffsetAfter: 15,
                                },
                                540: {
                                    slidesOffsetBefore: 15,
                                    slidesOffsetAfter: 15,
                                },
                                768: {
                                    slidesOffsetBefore: 40,
                                    slidesOffsetAfter: 40,
                                },
                            }}
                        >
                            {svgs(minRate).map((svg, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Card svgId={svg.svgId} text={svg.text} footNote={svg.footNote} />
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
                    </div>
                </section>
            );
        }
    }, [minRate, isAdaptive, item, title]);

    return <Fragment>{renderContent()}</Fragment>;
};

export default ComfortMortgage;
