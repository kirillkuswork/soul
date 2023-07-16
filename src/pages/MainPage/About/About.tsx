import imgXl from '../../../assets/images/landing/about/xl.webp';
import imgBg from '../../../assets/images/landing/about/bg.webp';
import imgMd from '../../../assets/images/landing/about/md.webp';
import imgXs from '../../../assets/images/landing/about/xs.webp';

import styles from './About.module.scss';
import { LITE_BEIGE_COLOR } from '../../../assets/data/consts';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { handleAnchor } from '../../../entities/mainSlice';
import StripesRevealImage from '../../../shared/StripesAnimation/StripesRevealImage';
import { Anchor } from '../../../assets/data/enums';
import { aboutText, aboutData } from '../../../assets/data/main';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const imgArray = [imgXs.src, imgMd.src, imgBg.src, imgXl.src];
    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.ABOUT, value: Anchor.ABOUT }));
    }, [inView, dispatch]);

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.titles}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: aboutText[0].title }}></h2>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: aboutText[0].text }}></p>
            </div>
            <StripesRevealImage
                alt={'Дом – это не место, а ощущение'}
                images={imgArray}
                backgroundColor={LITE_BEIGE_COLOR}
                addClass={styles.img}
            />
            <div className={styles.desc}>
                {aboutData.map((el, i) => (
                    <p className={styles.text} key={i} dangerouslySetInnerHTML={{ __html: el }}></p>
                ))}
            </div>
        </div>
    );
};

About.displayName = 'About';
export default About;
