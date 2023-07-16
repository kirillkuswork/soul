import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation } from 'swiper';
import Image from 'next/image';
import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { useState, useRef, useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import { scrollbar, swiperDefaultProps } from '../../../assets/data/swiper';

interface ISlider {
    arr: {
        title?: string;
        subtitle?: string;
        img: string[] | string;
        text?: string;
        alt?: string;
        setPicsLoaded?: (x: boolean) => void;
    }[];
    dark?: boolean;
    arch?: boolean;
    noDrag?: boolean;
    text?: string;
}

const Slider = ({ arr, dark, text, arch, noDrag }: ISlider) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const loop = arr.length >= 3 || (width < 800 && arr.length >= 2);

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <div
            className={`
    ${styles.container} 
    ${!isAdaptive ? styles.hover : ''} 
    ${noDrag ? styles.noDrag : ''} 
    ${!arch ? styles.smallGapSlider : ''} 
    `}
        >
            {text && (
                <div className={styles.containerTop}>
                    <span className={styles.info} dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>
            )}
            <Swiper
                scrollbar={{
                    horizontalClass: styles.scrollbar,
                    dragClass: styles.drag,
                    draggable: true,
                    dragSize: (442 / 1600) * width,
                }}
                {...swiperDefaultProps(nextRef, prevRef)}
                breakpoints={scrollbar(width)}
                loop={loop}
                autoplay={!loop ? false : { delay: 3000, disableOnInteraction: false }}
                modules={[Scrollbar, Autoplay, Navigation]}
                className={`${styles.slider} 
                    ${loop ? 'undefined' : styles.galleryLoop}`}
            >
                {arr.map((el, i) => {
                    return (
                        <SwiperSlide className={styles.slide} key={typeof el.img === 'string' ? el.img : el.title}>
                            <div className={styles.content}>
                                <p className={styles.title}>{el.title}</p>
                                <p className={styles.text}>{el.text}</p>
                            </div>

                            <div className={`${styles.picture} ${dark ? styles.filter : ''}`}>
                                {Array.isArray(el.img) ? (
                                    <picture className={styles.pic}>
                                        <source media='(max-width: 540px)' srcSet={el.img[0]} />
                                        <source media='(max-width: 1200px) and (orientation:portrait)' srcSet={el.img[1]} />
                                        <source media='(min-width: 1025px) and (orientation:landscape)' srcSet={el.img[2]} />
                                        <Image
                                            priority
                                            alt={el.title}
                                            src={el.img[2]}
                                            fill
                                            sizes='(max-width: 540px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1600px) 100vw, 400px'
                                        />
                                    </picture>
                                ) : (
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
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={styles.swiperbuttons}>
                <button ref={prevRef} aria-label='prev'>
                    <TermsPageSvg id='slider-arrow-left' />
                </button>
                <button ref={nextRef} aria-label='next'>
                    <TermsPageSvg id='slider-arrow-right' />
                </button>
            </div>
        </div>
    );
};

export default Slider;
