import styles from './InfoBlock.module.scss';
import Link from 'next/link';
import ROUTES from '../../../data/routes';
import ReusableButton from '../../../features/ReusableButton/ReusableButton';
import { LITE_BEIGE_COLOR } from '../../../assets/data/consts';
import React from 'react';
import FlexibleHeading from '../../FlexibleHeading';
import StripesRevealImage from '../../StripesAnimation/StripesRevealImage';

interface IInfoBlock {
    title: string;
    item: string;
    text?: string;
    beige?: boolean;
    img: string;
}

const InfoBlock = ({ title, item, text, beige, img }: IInfoBlock) => {
    const imgArray = [img, img, img];

    return (
        <section className={`${styles.container} ${beige ? styles.container__beige : 'undefined'}`}>
            <div className={styles.inner}>
                <FlexibleHeading text={title} />
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></div>
                {text && <div className={styles.list} dangerouslySetInnerHTML={{ __html: text }}></div>}
                <Link href={ROUTES.flats.list}>
                    <ReusableButton size={'big'} bg={'black'} content={'Выбрать квартиру'} />
                </Link>
            </div>
            <StripesRevealImage alt={title} images={imgArray} backgroundColor={LITE_BEIGE_COLOR} addClass={styles.img} />
        </section>
    );
};

export default InfoBlock;
