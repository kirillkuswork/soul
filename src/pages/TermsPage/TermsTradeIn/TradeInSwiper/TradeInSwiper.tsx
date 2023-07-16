import styles from './TradeInSwiper.module.scss';
import { tradeInCardList } from '../../../../assets/data/terms';
import TermsPageSvg from '../../../../shared/svgs/TermsPageSvg';
import Link from 'next/link';
import ROUTES from '../../../../data/routes';
import MainPageSvg from '../../../../shared/svgs/MainPageSvg';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../entities/store';
import { Navigation, SwiperOptions } from 'swiper';
import { NavigationMethods, NavigationOptions } from 'swiper/types';

const TradeInSwiper = ({ width }) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const orientation = useSelector<AppState, string>((state) => state.main.orientation);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!width) return;

        if (((isTablet || isMobile) && orientation === 'portrait') || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width, orientation]);

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <div className={styles.grid}>
                    {tradeInCardList.map((card, i) => {
                        return (
                            <div key={i} className={styles.card}>
                                <p className={styles.card_icon}>{card.title}</p>

                                {card.button ? (
                                    <div>
                                        <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                        <Link href={ROUTES.flats.list} className={styles.card_btn}>
                                            <p className={styles.card_text}>Выбрать</p>
                                            <MainPageSvg id={'arrow'} addClass={styles.card_arrow} />
                                        </Link>
                                    </div>
                                ) : (
                                    <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div className={styles.container}>
                    <Swiper
                        className={styles.slider}
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
                                spaceBetween: 20,
                            },
                            375: {
                                spaceBetween: 20,
                            },
                            540: {
                                spaceBetween: 20,
                            },
                            768: {
                                spaceBetween: 20,
                            },
                            1200: {
                                spaceBetween: 60,
                            },
                            1600: {
                                spaceBetween: 114,
                            },
                        }}
                    >
                        {tradeInCardList.map((card) => {
                            return (
                                <SwiperSlide key={card.title}>
                                    <div className={styles.card}>
                                        <p className={styles.card_icon}>{card.title}</p>

                                        {card.button ? (
                                            <div>
                                                <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                                <Link href={ROUTES.flats.list} className={styles.card_btn}>
                                                    <p className={styles.card_text}>Выбрать</p>
                                                    <MainPageSvg id={'arrow'} addClass={styles.card_arrow} />
                                                </Link>
                                            </div>
                                        ) : (
                                            <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                        )}
                                    </div>
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
            );
        }
    }, [isAdaptive]);

    return <>{renderContent()}</>;
};

export default TradeInSwiper;
