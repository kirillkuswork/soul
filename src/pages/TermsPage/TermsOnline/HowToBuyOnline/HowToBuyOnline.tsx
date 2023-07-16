import styles from './HowToBuyOnline.module.scss';
import { qaList } from '../../../../assets/data/terms';
import Link from 'next/link';
import ROUTES from '../../../../data/routes';
import ReusableButton from '../../../../features/ReusableButton/ReusableButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../entities/store';
import FlexibleHeading from '../../../../shared/FlexibleHeading';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation, SwiperOptions } from 'swiper';
import { NavigationMethods, NavigationOptions } from 'swiper/types';
import TermsPageSvg from '../../../../shared/svgs/TermsPageSvg';

const HowToBuyOnline = () => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!width) return;

        if (width <= 540) {
            setIsAdaptive(true);
        }
    }, [width]);

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <div className={styles.grid}>
                    {qaList.map((card) => {
                        return (
                            <div key={card.id} className={styles.card}>
                                <p className={styles.card_id}>{card.id}</p>

                                {card.button ? (
                                    <div className={styles.card_info}>
                                        <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                        {card.button && (
                                            <Link href={ROUTES.flats.list} rel='noopener noreferrer' target='_blank'>
                                                <ReusableButton content={'Выбрать квартиру'} size={'big'} addClass={'black'} />
                                            </Link>
                                        )}
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
                <div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        resistance={true}
                        resistanceRatio={0}
                        className={styles.slider}
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
                                spaceBetween: 20,
                            },
                            375: {
                                slidesOffsetBefore: 15,
                                slidesOffsetAfter: 15,
                                spaceBetween: 20,
                            },
                            540: {
                                slidesOffsetBefore: 15,
                                slidesOffsetAfter: 15,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {qaList.map((card) => {
                            return (
                                <SwiperSlide key={card.id}>
                                    <div className={styles.card}>
                                        <p className={styles.card_id}>{card.id}</p>

                                        {card.button ? (
                                            <div className={styles.card_info}>
                                                <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                                                {card.button && (
                                                    <Link href={ROUTES.flats.list} rel='noopener noreferrer' target='_blank'>
                                                        <ReusableButton content={'Выбрать квартиру'} size={'big'} addClass={'black'} />
                                                    </Link>
                                                )}
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

    return (
        <section className={styles.container}>
            <FlexibleHeading text={'Как купить квартиру онлайн'} addClass={styles.title} />
            {renderContent()}
        </section>
    );
};

export default HowToBuyOnline;
