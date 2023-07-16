import styles from './CashBackHowToOnline.module.scss';
import { cashbackHowToGrid } from '../../../../assets/data/terms';
import ReusableButton from '../../../../features/ReusableButton/ReusableButton';
import TermsPageSvg from '../../../../shared/svgs/TermsPageSvg';
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import ROUTES from '../../../../data/routes';
import { Navigation } from 'swiper';

const CashBackHowToOnline = ({ isAdaptive }) => {
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <div className={styles.grid}>
                    {cashbackHowToGrid.map((cashback) => {
                        return (
                            <div className={styles.grid_card} key={cashback.id}>
                                <div className={styles.grid_card__info}>
                                    <p className={styles.grid_card__id}>{cashback.id}</p>
                                    {cashback.isButton ? (
                                        <div className={styles.grid_card__textWithButton}>
                                            <p className={styles.grid_card__text}>{cashback.text}</p>
                                            <Link href={ROUTES.flats.list} rel='noopener noreferrer'>
                                                <ReusableButton content={'Выбрать квартиру'} size={'big'} bg={'black'} />
                                            </Link>
                                        </div>
                                    ) : (
                                        <p className={styles.grid_card__text}>{cashback.text}</p>
                                    )}
                                </div>
                                <TermsPageSvg id={cashback.svgId} addClass={styles.grid_card__icon} />
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={'auto'}
                        resistance={true}
                        resistanceRatio={0}
                        className={styles.slider}
                        modules={[Navigation]}
                        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
                        breakpoints={{
                            320: {
                                slidesOffsetBefore: 15,
                                slidesOffsetAfter: 15,
                                spaceBetween: 12,
                            },
                            375: {
                                slidesOffsetBefore: 15,
                                slidesOffsetAfter: 15,
                                spaceBetween: 12,
                            },
                            540: {
                                slidesOffsetBefore: 15,
                                slidesOffsetAfter: 15,
                                spaceBetween: 12,
                            },
                        }}
                    >
                        {cashbackHowToGrid.map((cashback) => {
                            return (
                                <SwiperSlide key={cashback.id}>
                                    <div className={styles.grid_card}>
                                        <div className={styles.grid_card__info}>
                                            <p className={styles.grid_card__id}>{cashback.id}</p>
                                            {cashback.isButton ? (
                                                <div className={styles.grid_card__textWithButton}>
                                                    <p className={styles.grid_card__text}>{cashback.text}</p>
                                                    <Link href={ROUTES.flats.list} rel='noopener noreferrer'>
                                                        <ReusableButton content={'Выбрать квартиру'} size={'big'} bg={'black'} />
                                                    </Link>
                                                </div>
                                            ) : (
                                                <p className={styles.grid_card__text}>{cashback.text}</p>
                                            )}
                                        </div>
                                        <TermsPageSvg id={cashback.svgId + '-wide'} addClass={styles.grid_card__icon} />
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
        <section className={styles.howToOnline}>
            <h2 className={styles.howToOnline_title}>Как оформить онлайн</h2>

            {renderContent()}
        </section>
    );
};

export default CashBackHowToOnline;
