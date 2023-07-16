import styles from '../../../styles/IsoFactoryPage.module.scss';
import StripesRevealImage from '../../shared/StripesAnimation/StripesRevealImage';
import { WHITE_COLOR } from '../../assets/data/consts';
import React from 'react';

const BottomSection = ({ images, textData }) => {
    return (
        <section className={styles.bottom}>
            <h2 className={styles.bottom_title} dangerouslySetInnerHTML={{ __html: textData.title }}></h2>
            <div className={styles.bottom_inner}>
                <StripesRevealImage alt={textData.title} images={images} backgroundColor={WHITE_COLOR} addClass={styles.bottom_img} />
                <div className={styles.bottom_text}>
                    <p dangerouslySetInnerHTML={{ __html: textData.firstText }}></p>
                    <p dangerouslySetInnerHTML={{ __html: textData.secondText }}></p>
                </div>
            </div>
        </section>
    );
};

export default BottomSection;
