import styles from './TopScreen.module.scss';
import Image from 'next/image';
import React from 'react';

const TopScreen = ({ imgArray, alt, title }) => {
    return (
        <section className={styles.top}>
            <picture className={styles.top_pic}>
                <source media='(max-width: 540px)' srcSet={imgArray[0]} />
                <source media='(max-width: 768px)' srcSet={imgArray[1]} />
                <source media='(min-width: 1200px && max-width: 1600px)' srcSet={imgArray[2]} />
                <source media='(min-width: 1600px)' srcSet={imgArray[3]} />
                <Image alt={alt} src={imgArray[2]} fill className={styles.top_img} sizes='(min-width: 375px) 100vw' />
            </picture>
            <h1 className={styles.top_title} dangerouslySetInnerHTML={{ __html: title }}></h1>
        </section>
    );
};

export default TopScreen;
