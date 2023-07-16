import { useEffect, useRef, useState } from 'react';
import styles from './ModalGallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Navigation, Mousewheel, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import { swiperDefaultProps } from '../../assets/data/swiper';
import ModalGalleryInner from './ModalGalleryInner';
import GalleryPageSvg from '../../shared/svgs/GalleryPageSvg';
import { useSelector } from 'react-redux';
import { AppState } from '../../entities/store';

SwiperCore.use([Scrollbar, Mousewheel, Pagination, Keyboard]);

interface IModalGallery {
    setIsGallery: (boolean) => void;
    isAdaptive: boolean;
    photos: any;
    picIndex?: number;
    withText?: boolean;
}

const ModalGallery = ({ setIsGallery, isAdaptive, photos, picIndex, withText }: IModalGallery) => {
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const [isWhiteBtn, setIsWhiteBtn] = useState(false);
    const orientation = useSelector<AppState, string>((state) => state.main.orientation);
    const [activeI, setActiveI] = useState(picIndex ? picIndex : 0);

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
                <GalleryPageSvg
                    addClass={`${styles.gallery__icon} ${
                        isWhiteBtn || (withText && orientation === 'landscape') ? styles.gallery__icon__white : ''
                    }`}
                    id='close'
                />
            </button>
            <Swiper
                {...swiperDefaultProps(nextRef, prevRef)}
                allowTouchMove={isAdaptive}
                modules={[Navigation]}
                speed={isAdaptive ? 300 : 700}
                slidesPerView={1}
                keyboard={{ enabled: true }}
                initialSlide={picIndex}
                className={styles.slider}
                onSlideChangeTransitionEnd={(swiper) => {
                    setActiveI(swiper.realIndex);
                }}
            >
                {photos &&
                    photos.length > 0 &&
                    photos.map((el, i) => {
                        const picsrc = !withText ? el : el.img;
                        return (
                            <SwiperSlide className={styles.slide} key={!withText ? picsrc : el.text}>
                                {!withText ? (
                                    <ModalGalleryInner
                                        picsrc={picsrc}
                                        isAdaptive={isAdaptive}
                                        setIsWhiteBtn={setIsWhiteBtn}
                                        activeI={activeI}
                                        slideIndex={i}
                                    />
                                ) : (
                                    <>
                                        <ModalGalleryInner
                                            picsrc={picsrc}
                                            isAdaptive={isAdaptive}
                                            setIsWhiteBtn={setIsWhiteBtn}
                                            activeI={activeI}
                                            slideIndex={i}
                                        />

                                        <div className={styles.content}>
                                            <div className={styles.content_inner}>
                                                <p className={styles.title}>{el.title}</p>
                                                <p className={styles.text}>{el.text}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
            <div className={`${styles.buttonsContainer} ${!isAdaptive ? styles.buttonsContainer__hover : ''}`}>
                <button ref={prevRef} aria-label='prev'>
                    <GalleryPageSvg addClass={styles.buttonsContainer__icon} id='slider-arrow-left' />
                </button>
                <button ref={nextRef} aria-label='next'>
                    <GalleryPageSvg addClass={styles.buttonsContainer__icon} id='slider-arrow-right' />
                </button>
            </div>
        </div>
    );
};

export default ModalGallery;
