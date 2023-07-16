import styles from './RectangleSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import { swiperDefaultProps } from '../../../assets/data/swiper';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { Autoplay, Navigation, Scrollbar } from 'swiper';

interface IRectangleSlider {
    images: string[];
    data: {
        title: string;
        text: string;
    }[];
    breakpoints: {
        [width: number]: {
            spaceBetween: number;
        };
    };
    disableButtons?: boolean;
    setScrollbar?: boolean;
}

const RectangleSlider = ({ images, data, breakpoints, disableButtons, setScrollbar }: IRectangleSlider) => {
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const width = useSelector<AppState, number>((state) => state.main.width);

    return (
        <>
            <Swiper
                {...swiperDefaultProps(nextRef, prevRef)}
                scrollbar={
                    setScrollbar && {
                        horizontalClass: styles.scrollbar,
                        dragClass: styles.drag,
                        draggable: true,
                        dragSize: (442 / 1600) * width,
                    }
                }
                modules={[Scrollbar, Autoplay, Navigation]}
                className={`${styles.slider} ${styles.slider_scrollbar}`}
                breakpoints={breakpoints}
            >
                {images.map((img, i) => {
                    return (
                        <SwiperSlide key={img} className={styles.card}>
                            <Image
                                alt={'title'}
                                fill
                                src={img}
                                unoptimized
                                sizes='(max-width: 540px) 60vw, (max-width: 768px) 70vw, (max-width: 1200px) 80vw, (max-width: 1600px) 100vw'
                            />
                            <div className={styles.card_info}>
                                <p className={styles.card_title} dangerouslySetInnerHTML={{ __html: data[i].title }}></p>
                                <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: data[i].text }}></p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {!disableButtons && (
                <div className={`${styles.buttonsContainer} ${setScrollbar ? styles.buttonsContainer__small : ''}`}>
                    <button ref={prevRef} aria-label='prev'>
                        <TermsPageSvg id='slider-arrow-left' />
                    </button>
                    <button ref={nextRef} aria-label='next'>
                        <TermsPageSvg id='slider-arrow-right' />
                    </button>
                </div>
            )}
        </>
    );
};

export default RectangleSlider;
