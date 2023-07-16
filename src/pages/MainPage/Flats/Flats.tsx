import img1 from '../../../assets/images/landing/flats/1.webp';
import img2 from '../../../assets/images/landing/flats/2.webp';
import img3 from '../../../assets/images/landing/flats/3.webp';

import bgImg from '../../../assets/images/landing/flats/bg.webp';
import mdImg from '../../../assets/images/landing/flats/md.webp';
import xsImg from '../../../assets/images/landing/flats/xs.webp';

import CardSlider from '../../../features/Sliders/CardSlider/CardSlider';
import styles from './Flats.module.scss';
import { flatsSectionText, sliderFlats } from '../../../assets/data/main';
import { WHITE_COLOR } from '../../../assets/data/consts';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { handleAnchor } from '../../../entities/mainSlice';
import StripesRevealImage from '../../../shared/StripesAnimation/StripesRevealImage';
import ThreeImageStripes from '../../../features/ThreeImageStripes/ThreeImageStripes';
import ROUTES from '../../../data/routes';
import LinkArrowButton from '../../../shared/LinkArrowButton/LinkArrowButton';
import { Anchor } from '../../../assets/data/enums';

const Flats = () => {
    const tabletWidth = useMediaQuery(900);
    const images = !tabletWidth ? [img1.src, img2.src, img3.src] : [img1.src, img2.src];
    const imgArray = [xsImg.src, mdImg.src, bgImg.src];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.FLATS, value: Anchor.FLATS }));
    }, [inView, dispatch]);

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.threeImages}>
                <ThreeImageStripes images={images} />
            </div>

            <div className={styles.desc}>
                <div className={styles.desc_info}>
                    <h2 className={styles.desc_info__title} dangerouslySetInnerHTML={{ __html: flatsSectionText[0].title }}></h2>
                    <p className={styles.desc_info__subtitle} dangerouslySetInnerHTML={{ __html: flatsSectionText[0].subtitle }}></p>
                </div>
                <LinkArrowButton route={ROUTES.flats.list} text={'Каталог квартир'} />
            </div>

            <CardSlider text={flatsSectionText[0].cardSliderText} arr={sliderFlats} />

            <div className={styles.content}>
                <div className={styles.content_top}>
                    <h2 className={styles.content_title} dangerouslySetInnerHTML={{ __html: flatsSectionText[0].contentTitle }}></h2>
                    <StripesRevealImage
                        alt={'Квартиры с отделкой White Box Max'}
                        images={imgArray}
                        backgroundColor={WHITE_COLOR}
                        addClass={styles.content_img}
                    />
                </div>
                <div className={styles.content_bottom}>
                    <LinkArrowButton route={ROUTES.whitebox} text={'Подробнее'} />
                    <div className={styles.content_info}>
                        <p dangerouslySetInnerHTML={{ __html: flatsSectionText[0].bottomContentText[0] }}></p>
                        <p dangerouslySetInnerHTML={{ __html: flatsSectionText[0].bottomContentText[1] }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flats;
