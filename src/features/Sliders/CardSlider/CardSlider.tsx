import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from './CardSlider.module.scss';
import StripesOnHover from '../../../shared/StripesAnimation/StripesOnHover';
import { LIGHT_GREY } from '../../../assets/data/consts';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { useRef } from 'react';
import TermsPageSvg from '../../../shared/svgs/TermsPageSvg';
import { swiperDefaultProps, widePlusScrollbar } from '../../../assets/data/swiper';
import Link from 'next/link';
import ROUTES from '../../../data/routes';
import { resetFilters, sortFlats, toggleActiveSearchParams } from '../../../entities/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';

interface ICardSlider {
    arr: {
        icon?: string;
        link?: string;
        title?: string;
        img: string;
        text: string;
        value?: string;
        id?: string;
    }[];
    links?: boolean;
    text?: string;
    noTop?: boolean;
}

const CardSlider = ({ arr, links, text, noTop }: ICardSlider) => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const isAdaptive = useSelector<AppState, boolean>((state) => state.main.isAdaptive);
    const sortParameters = useAppSelector((state) => state.catalog.sortParameters);
    const inForm = useAppSelector((state) => state.catalog.inForm);
    const dispatch = useAppDispatch();

    const handleSelectParam = (value: string, id?: string) => {
        dispatch(resetFilters())

        //Изменение состояния искомого параметра на активное
        if (value && value.length > 0) {
            value.split(",").forEach((item) => {
                dispatch(toggleActiveSearchParams({value: item, id: id || "advantages"}))
                dispatch(sortFlats({value: sortParameters.value, placeCall: inForm, array: "shownFlats"}));
            })
        }
    }

    return (
        <div className={`${styles.container} ${!isAdaptive ? styles.hover : ''}`}>
            {!noTop && (
                <div className={styles.containerTop}>
                    <span className={styles.info} dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>
            )}
            <div className={!noTop ? styles.container_cursor : ''}>
                <Swiper
                    {...swiperDefaultProps(nextRef, prevRef)}
                    modules={[Scrollbar, Autoplay, Navigation]}
                    className={styles.slider}
                    scrollbar={
                        !noTop && {
                            horizontalClass: styles.scrollbar,
                            dragClass: styles.drag,
                            draggable: true,
                            dragSize: (442 / 1600) * width,
                        }
                    }
                    breakpoints={widePlusScrollbar(width)}
                >
                    {arr.map((el, i) => {
                        if (links) {
                            return (
                                <SwiperSlide key={i}>
                                    <li className={`${styles.card} ${styles.card__link}`}>
                                        <div className={styles.icon}>
                                            <Image
                                                src={el.icon}
                                                alt={el.text}
                                                fill
                                                priority
                                                sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                                            />
                                        </div>
                                        <div className={styles.images}>
                                            <StripesOnHover
                                                backgroundColor={LIGHT_GREY}
                                                image={el.img}
                                                alt={el.text}
                                                addClass={styles.img}
                                            />
                                            <p className={styles.text} dangerouslySetInnerHTML={{ __html: el.text }}></p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            );
                        } else {
                            return (
                                <SwiperSlide key={i}>
                                    <Link
                                        onClick={() => handleSelectParam(el.value, el?.id)}
                                        href={el.value !== 'whitebox' ? ROUTES.flats.list : ROUTES.whitebox}
                                        className={`${styles.card} ${noTop ? styles.card__advatntage : ''}`}
                                    >
                                        <p className={styles.title} dangerouslySetInnerHTML={{ __html: el.title }}></p>
                                        <div className={styles.images}>
                                            <StripesOnHover
                                                backgroundColor={LIGHT_GREY}
                                                image={el.img}
                                                alt={el.title}
                                                addClass={styles.img}
                                            />
                                            <p className={styles.text} dangerouslySetInnerHTML={{ __html: el.text }}></p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        }
                    })}
                </Swiper>
            </div>
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

export default CardSlider;
