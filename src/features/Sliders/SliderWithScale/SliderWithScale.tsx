import styles from './SliderWithScale.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, Scrollbar } from 'swiper';
import { swiperDefaultProps } from '../../../assets/data/swiper';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import ModalGallery from '../../ModalGallery/ModalGallery';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';

interface ISliderWithScale {
    imgArray: string[];
    alt: string;
    breakpoints: {
        [width: number]: {
            spaceBetween: number;
        };
    };
    setScaledSlider?: boolean;
    setScrollbar?: boolean;
    isAdaptive?: boolean;
}

const SliderWithScale = ({ imgArray, alt, breakpoints, setScrollbar, isAdaptive }: ISliderWithScale) => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const [imageIndex, setImageIndex] = useState(0);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    const loop = imgArray.length >= 3 || (width < 800 && imgArray.length >= 2);
    const showBtns = imgArray.length >= 3 || (isAdaptive && imgArray.length >= 2);

    useEffect(() => {
        if (isModalOpened) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    }, [isModalOpened]);

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
                className={`${styles.slider} ${!loop ? styles.slider__noloop : ''}`}
                modules={[Navigation, Autoplay, Scrollbar]}
                initialSlide={0}
                breakpoints={breakpoints}
                loop={loop}
                autoplay={!loop ? false : { delay: 3000, disableOnInteraction: false }}
            >
                {imgArray.map((image, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className={styles.slide}
                            onClick={() => {
                                setImageIndex(i);
                                setIsModalOpened(true);
                            }}
                        >
                            <Image
                                alt={alt}
                                src={image}
                                fill
                                priority
                                unoptimized
                                className={styles.slide_image}
                                sizes='(min-width: 540px) 100vw'
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {showBtns && (
                <div className={`${styles.buttons} ${!isAdaptive ? styles.buttons__hover : ''}`}>
                    <button ref={prevRef} aria-label='prev'>
                        <TermsPageSvg id='slider-arrow-left' />
                    </button>
                    <button ref={nextRef} aria-label='next'>
                        <TermsPageSvg id='slider-arrow-right' />
                    </button>
                </div>
            )}

            {isModalOpened && imgArray.length > 0 && (
                <ModalGallery picIndex={imageIndex} photos={imgArray} isAdaptive={isAdaptive} setIsGallery={setIsModalOpened} />
            )}
        </>
    );
};

export default SliderWithScale;
