import styles from './Navigation.module.scss';
import { useState, useEffect, memo } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ROUTES from '../../../data/routes';
import 'swiper/css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { isMobile, isTablet } from 'react-device-detect';
import { wideBreakpoints } from '../../../assets/data/swiper';

const Navigation = ({ navList }) => {
    const [route, setRoute] = useState('mortgage');
    const width = useSelector<AppState, number>((state) => state.main.width);
    const swiper = useSwiper();
    const [isAdaptive, setIsAdaptive] = useState(false);

    const router = useRouter();

    const purchaseTermsPageName = ROUTES.purchaseTerms.root.replace(/\/|\*/g, '');
    const path = router.query.nav as string;

    useEffect(() => {
        setRoute(path);
    }, [path]);

    const slideTo = (index) => {
        if (swiper) swiper.slideTo(index);
    };

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet || width < 1023) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <nav className={styles.container}>
            <Swiper
                slidesPerView={'auto'}
                className={styles.swiper}
                resistance={true}
                resistanceRatio={0}
                preventClicks={true}
                preventInteractionOnTransition={true}
                onClick={(swiper) => {
                    slideTo(swiper.clickedIndex);
                }}
                breakpoints={wideBreakpoints}
            >
                {navList?.menuItems.map(({ path, value, hide }, i) => {
                    const pattern = new RegExp(`.*${purchaseTermsPageName}/`, 'g');
                    const cutPath = path.replace(pattern, '').replace('/', '');

                    if (hide || cutPath === 'cashback') return null;

                    return (
                        <SwiperSlide key={i} className={`${!isAdaptive ? styles.hover : ''}`}>
                            <Link className={`${styles.button} ${route === cutPath ? styles.button__active : 'undefined'}`} href={cutPath}>
                                {value}
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </nav>
    );
};

export default memo(Navigation);
