import { useEffect, useRef, useState } from 'react';
import styles from './GalleryModal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Navigation, Mousewheel, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import { swiperDefaultProps } from '../../assets/data/swiper';
import GalleryModalInner from './GalleryModalInner';
import GalleryPageSvg from '../../shared/svgs/GalleryPageSvg';

SwiperCore.use([Scrollbar, Mousewheel, Pagination, Keyboard]);

export default function GalleryModal({ setIsGallery, isAdaptive, photos, imagesStyles }) {
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const [isWhiteBtn, setIsWhiteBtn] = useState(false);
    const [activeI, setActiveI] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                //пользователь нажал escape
                setIsGallery(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setIsGallery]);

    return (
        <div className={styles.gallery}>
            <button onClick={() => setIsGallery(false)} className={styles.gallery__closebtn}>
                <GalleryPageSvg addClass={`${styles.gallery__icon} ${isWhiteBtn ? styles.gallery__icon__white : ''}`} id='close' />
            </button>
            <Swiper
                {...swiperDefaultProps(nextRef, prevRef)}
                allowTouchMove={isAdaptive}
                modules={[Navigation]}
                speed={isAdaptive ? 300 : 700}
                slidesPerView={1}
                keyboard={{ enabled: true }}
                onSlideChangeTransitionEnd={(swiper) => {
                    setActiveI(swiper.realIndex);
                }}
            >
                {photos &&
                    photos?.absolutePath.length > 0 &&
                    photos.absolutePath.map((el, i) => {
                        const picsrc = el;
                        const imgStyles = imagesStyles[0][i];
                        if (!imgStyles) return setIsGallery(false);
                        return (
                            <SwiperSlide className={styles.slide} key={picsrc}>
                                <GalleryModalInner
                                    imgStyles={imgStyles}
                                    picsrc={picsrc}
                                    isAdaptive={isAdaptive}
                                    setIsWhiteBtn={setIsWhiteBtn}
                                    activeI={activeI}
                                    slideIndex={i}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
            <div className={styles.buttonsContainer}>
                <button ref={prevRef} aria-label='prev'>
                    <GalleryPageSvg addClass={styles.buttonsContainer__icon} id='slider-arrow-left' />
                </button>
                <button ref={nextRef} aria-label='next'>
                    <GalleryPageSvg addClass={styles.buttonsContainer__icon} id='slider-arrow-right' />
                </button>
            </div>
        </div>
    );
}
