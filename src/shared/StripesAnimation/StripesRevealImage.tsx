import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './StripesStyles.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IStripesRevealImage {
    backgroundColor?: string;
    images: string | string[];
    alt: string;
    addClass?: string;
}

const StripesRevealImage = ({ backgroundColor, images, alt, addClass }: IStripesRevealImage) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [width, setWidth] = useState<string | number>(0);
    const [height, setHeight] = useState<string | number>(0);
    const childRef = useRef(null);
    const route = useRouter();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const arr = [0, 1, 2, 3, 4, 5, 6, 7];

    useEffect(() => {
        if (!inView || isReady || !imageLoaded || !childRef.current) return;

        setIsReady(true);
    }, [inView, isReady, imageLoaded]);

    useEffect(() => {
        if (!childRef.current) return;

        setHeight(childRef.current.clientHeight);
        setWidth(childRef.current.clientWidth);
    }, [route.pathname, imageLoaded]);

    return (
        <div className={styles.container} style={{ height, width }} ref={ref}>
            <div className={`${styles.fullMask} ${isReady ? styles.inView : ''}`}>
                {arr.map((el, i) => (
                    <div key={i} style={{ backgroundColor }} className={`${styles[`el--${i}`]} ${styles.el}`}></div>
                ))}
                <div className={styles.mask} style={{ height, width, backgroundColor }}></div>
            </div>
            <div className={`${styles.child} ${addClass}`} ref={childRef}>
                {Array.isArray(images) ? (
                    <picture className={styles.pic}>
                        <source media='(max-width: 540px)' srcSet={images[0]} />
                        <source media='(max-width: 768px)' srcSet={images[1]} />
                        <source media='(max-width: 1200px)' srcSet={images[2]} />
                        <source media='(max-width: 1600px && min-width: 1600px)' srcSet={images[2]} />
                        <Image
                            priority
                            alt={alt}
                            src={images[2]}
                            fill
                            unoptimized
                            onLoadingComplete={() => setImageLoaded(true)}
                            sizes='(min-width: 540px) 100vw'
                        />
                    </picture>
                ) : (
                    <Image
                        priority
                        src={images}
                        fill
                        alt={alt}
                        unoptimized
                        onLoadingComplete={() => setImageLoaded(true)}
                        sizes='(min-width: 540px) 100vw'
                    />
                )}
            </div>
        </div>
    );
};

export default StripesRevealImage;
