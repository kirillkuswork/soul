import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';
import styles from './PhotosSlider.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { useState, useRef, useEffect } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import { swiperDefaultProps } from '../../../assets/data/swiper';

interface ISlider {
    arr: {
        title?: string;
        img: string;
        text?: string;
        alt?: string;
    }[];
}

const PhotosSlider = ({ arr }: ISlider) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet || width < 1023) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <div className={styles.container}>
            <Swiper
                {...swiperDefaultProps(nextRef, prevRef)}
                loop={!((arr.length < 3 && !isAdaptive) || (arr.length < 2 && isAdaptive))}
                autoplay={
                    (arr.length < 3 && !isAdaptive) || (arr.length < 2 && isAdaptive)
                        ? false
                        : {
                              delay: 3000,
                              disableOnInteraction: false,
                          }
                }
                speed={900}
                modules={[Autoplay, Navigation]}
                className={styles.slider}
            >
                {arr.map((el) => {
                    return (
                        <SwiperSlide className={styles.slide} key={el.img}>
                            <div className={styles.content}>
                                <p className={styles.title}>{el.title}</p>
                                <p className={styles.text}>{el.text}</p>
                            </div>
                            <div className={styles.picture}>
                                <Image
                                    unoptimized
                                    src={el.img}
                                    fill
                                    alt={el.alt}
                                    sizes='(max-width: 768px) 50vw,
                                            (max-width: 1200px) 100vw'
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div
                className={`
                  ${styles.swiperbuttons} 
                  ${(arr.length < 3 && !isAdaptive) || (arr.length < 2 && isAdaptive) ? styles.invisible : ''}
                  `}
            >
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

export default PhotosSlider;
