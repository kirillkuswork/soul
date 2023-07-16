import React, { useEffect, useRef, useState } from 'react';
import styles from './StripesStyles.module.scss';
import Image from 'next/image';

const StripesOnHover = ({ backgroundColor, image, alt, addClass }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const childRef = useRef(null);

    const arr = [0, 1, 2, 3, 4, 5, 6, 7];

    useEffect(() => {
        if (!childRef.current) return;

        setHeight(childRef.current.clientHeight);
        setWidth(childRef.current.clientWidth);
    }, [imageLoaded]);

    return (
        <div className={styles.container} style={{ height, width }} onMouseOver={() => setInView(true)} onMouseOut={() => setInView(false)}>
            <div
                className={`${styles.fullMask} ${inView ? styles.inView : ''}`}
                style={{ transform: `translateY(${inView ? height + height : -height}px)` }}
            >
                {arr.map((el, i) => (
                    <div key={i} style={{ backgroundColor }} className={`${styles[`el--${el}`]} ${styles.el}`}></div>
                ))}
                {arr.reverse().map((el, i) => (
                    <div key={i} style={{ backgroundColor }} className={`${styles[`el--${el}`]} ${styles.el}`}></div>
                ))}
            </div>
            <div className={`${styles.child} ${addClass}`} ref={childRef}>
                {Array.isArray(image) ? (
                    <picture className={styles.pic}>
                        <source media='(max-width: 540px)' srcSet={image[0]} />
                        <source media='(max-width: 1200px) and (orientation:portrait)' srcSet={image[1]} />
                        <source media='(min-width: 1025px) and (orientation:landscape)' srcSet={image[2]} />
                        <Image
                            priority
                            alt={alt}
                            src={image[2]}
                            fill
                            onLoadingComplete={() => setImageLoaded(true)}
                            sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                        />
                    </picture>
                ) : (
                    <Image
                        priority
                        src={image}
                        fill
                        alt={alt}
                        onLoadingComplete={() => setImageLoaded(true)}
                        sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                    />
                )}
            </div>
        </div>
    );
};

export default StripesOnHover;
