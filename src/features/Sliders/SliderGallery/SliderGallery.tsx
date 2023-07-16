import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation } from 'swiper';
import Image from 'next/image';
import styles from './SliderGallery.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { useState, useRef, useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import MainPageSvg from '../../../shared/svgs/MainPageSvg';
import StripesOnHoverDiv from '../../../shared/StripesAnimation/StripesOnHoverDiv';
import { WHITE_COLOR } from '../../../assets/data/consts';
import { swiperDefaultProps } from '../../../assets/data/swiper';

interface ISlider {
    arr: {
        title?: string;
        subtitle?: string;
        img: string;
        text?: string;
        alt?: string;
        onClickHandler?: (n: number) => void;
        setPicsLoaded?: (b: boolean) => void;
    }[];
    text?: string;
    isAdaptive?: boolean;
}

const SliderGallery = ({ arr, text, isAdaptive }: ISlider) => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const cursorRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLInputElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    const loop = arr.length >= 3 || (width < 800 && arr.length >= 2);
    const showBtns = arr.length >= 3 || (isAdaptive && arr.length >= 2);
    const moveCursor = (e) => {
        if (!isMobile && !isTablet && cursorRef.current && containerRef.current) {
            const h = containerRef.current.getBoundingClientRect().top;
            cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY - h}px, 0)`;
        }
    };

    return (
        <div
            className={`
    ${styles.container} 
    ${!isAdaptive ? styles.hover : ''} 
 
    `}
        >
            <div className={styles.containerTop}>
                <span className={styles.info}>{text}</span>
            </div>
            <div ref={containerRef} className={styles.container_cursor} onMouseLeave={() => setVisible(false)} onMouseMove={moveCursor}>
                <Swiper
                    modules={[Scrollbar, Autoplay, Navigation]}
                    navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
                    {...swiperDefaultProps(nextRef, prevRef)}
                    loop={loop}
                    autoplay={!loop ? false : { delay: 3000, disableOnInteraction: false }}
                    speed={900}
                    className={`${styles.slider} ${styles.galleryLoop}`}
                    initialSlide={0}
                    preventClicks
                    preventClicksPropagation
                >
                    {arr.map((el, i) => {
                        return (
                            <SwiperSlide
                                className={styles.slide}
                                key={typeof el.img === 'string' ? el.img : el.title}
                                onMouseEnter={() => {
                                    if (!isAdaptive) {
                                        setVisible(true);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!isAdaptive) {
                                        setVisible(false);
                                    }
                                }}
                            >
                                {!isAdaptive ? (
                                    <StripesOnHoverDiv backgroundColor={WHITE_COLOR} addClass={styles.stripesChild}>
                                        <div className={styles.button} onClick={() => el.onClickHandler(i)}>
                                            <>
                                                <p className={styles.slide__title}>{el.title}</p>
                                                <p className={styles.slide__photonum}>{el.subtitle} </p>
                                            </>
                                        </div>
                                    </StripesOnHoverDiv>
                                ) : (
                                    <div className={styles.button} onClick={() => el.onClickHandler(i)}>
                                        <>
                                            <p className={styles.slide__title}>{el.title}</p>
                                            <p className={styles.slide__photonum}>{el.subtitle} </p>
                                        </>
                                    </div>
                                )}

                                <div className={styles.picture}>
                                    <Image
                                        unoptimized
                                        src={el.img}
                                        fill
                                        alt={el.alt}
                                        sizes='(max-width: 768px) 50vw,
                                            (max-width: 1200px) 100vw'
                                        onLoadingComplete={() => {
                                            i === arr.length - 1 && el.setPicsLoaded && el.setPicsLoaded(true);
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div ref={cursorRef} className={`${styles.cursor} ${visible ? styles.cursor__visible : ''}`}>
                    <div className={`${styles.cursor__inner}`}>
                        <MainPageSvg addClass={styles.cursor__img} id='look-cursor' />
                    </div>
                </div>
            </div>
            {showBtns && (
                <div className={styles.swiperbuttons}>
                    <button ref={prevRef}>
                        <TermsPageSvg id='slider-arrow-left' />
                    </button>
                    <button ref={nextRef}>
                        <TermsPageSvg id='slider-arrow-right' />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SliderGallery;
