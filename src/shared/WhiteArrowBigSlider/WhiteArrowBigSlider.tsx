import styles from './WhiteArrowBigSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import Image from 'next/image';
import TermsPageSvg from '../svgs/TermsPageSvg';
import { useEffect, useRef, useState } from 'react';
import { swiperDefaultProps } from '../../assets/data/swiper';
import { useSelector } from 'react-redux';
import { AppState } from '../../entities/store';
import { IArchSlider } from '../../assets/data/interfaces';

interface ISlider {
    sliderData: IArchSlider;
    alt: string;
    wide?: boolean;
}

const WhiteArrowBigSlider = ({ sliderData, alt, wide }: ISlider) => {
    const [isAdaptive, setIsAdaptive] = useState(null);
    const nextDesktopRef = useRef<HTMLButtonElement>(null);
    const prevDesktopRef = useRef<HTMLButtonElement>(null);
    const nextAdaptiveRef = useRef<HTMLButtonElement>(null);
    const prevAdaptiveRef = useRef<HTMLButtonElement>(null);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const onePic = sliderData.absolutePath.length === 1;

    useEffect(() => {
        if (!width) return;

        if (width <= 540) {
            setIsAdaptive(true);
        } else {
            setIsAdaptive(false);
        }
    }, [width]);

    const nextRef = isAdaptive ? nextAdaptiveRef : nextDesktopRef;
    const prevRef = isAdaptive ? prevAdaptiveRef : prevDesktopRef;

    return (
        <>
            {isAdaptive !== null && (
                <Swiper
                    {...swiperDefaultProps(nextRef, prevRef)}
                    autoplay={onePic ? false : { disableOnInteraction: false }}
                    allowTouchMove={!onePic}
                    className={styles.slider}
                    modules={[Navigation, Autoplay]}
                >
                    {sliderData.absolutePath.map((path) => {
                        return (
                            <SwiperSlide key={path} className={`${styles.img} ${wide ? styles.img_wide : ''}`}>
                                <Image
                                    alt={alt}
                                    src={path}
                                    fill
                                    unoptimized
                                    sizes='(max-width: 540px) 70vw, (max-width: 768px) 80vw, (min-width: 769) 100vw'
                                />
                            </SwiperSlide>
                        );
                    })}
                    {!isAdaptive && !onePic && (
                        <div className={styles.buttonsContainer}>
                            <button ref={prevDesktopRef} aria-label='prev'>
                                <TermsPageSvg id='slider-arrow-left' />
                            </button>
                            <button ref={nextDesktopRef} aria-label='next'>
                                <TermsPageSvg id='slider-arrow-right' />
                            </button>
                        </div>
                    )}
                </Swiper>
            )}
            {isAdaptive && !onePic && (
                <div className={styles.buttonsContainer}>
                    <button ref={prevAdaptiveRef} aria-label='prev'>
                        <TermsPageSvg id='slider-arrow-left' />
                    </button>
                    <button ref={nextAdaptiveRef} aria-label='next'>
                        <TermsPageSvg id='slider-arrow-right' />
                    </button>
                </div>
            )}
        </>
    );
};

export default WhiteArrowBigSlider;
