import styles from '../../../styles/IsoFactoryPage.module.scss';
import WhiteArrowBigSlider from '../../shared/WhiteArrowBigSlider/WhiteArrowBigSlider';
import React from 'react';
import { isoFactoryImpactText } from '../../assets/data/isoFactory';

const ImpactSection = ({ sliderData }) => {
    return (
        <section className={styles.impact}>
            <h2 className={styles.impact_title}>Импакт</h2>
            <p className={styles.impact_text} dangerouslySetInnerHTML={{ __html: isoFactoryImpactText }}></p>
            <WhiteArrowBigSlider sliderData={sliderData} alt={'Импакт'} />
        </section>
    );
};

export default ImpactSection;
