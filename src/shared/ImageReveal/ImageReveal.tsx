import styles from './ImageReveal.module.scss';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageReveal = ({ img, img2, isTrue }) => {
    const [run, setRun] = useState(false);
    const [state, setState] = useState(0);

    useEffect(() => {
        if (state >= 150 || !run) return;
        const timer = setInterval(() => {
            setState(state + 1);
        }, 5);

        return () => clearInterval(timer);
    }, [run, state]);

    useEffect(() => {
        if (!isTrue) return;

        setTimeout(() => {
            setRun(true);
        }, 3000);
    }, [isTrue]);

    return (
        <div className={styles.container}>
            <div className={styles.image1}>
                <Image
                    src={img.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                />
            </div>
            <div style={{ clipPath: `inset(0 0 ${115 - state}% 0)` }} className={styles.image2}>
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 14}%, 100% ${state - 14}%, 100% ${state - 18.5}%, 0 ${state - 18.5}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 10.2}%, 100% ${state - 10.2}%, 100% ${state - 13.5}%, 0 ${state - 13.5}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 7.2}%, 100% ${state - 7.2}%, 100% ${state - 9.5}%, 0 ${state - 9.5}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 4.5}%, 100% ${state - 4.5}%, 100% ${state - 6}%, 0 ${state - 6}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 2.2}%, 100% ${state - 2.2}%, 100% ${state - 3}%, 0 ${state - 3}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
            <div
                style={{ clipPath: `polygon(0 ${state - 0.5}%, 100% ${state - 0.5}%, 100% ${state}%, 0 ${state}%)` }}
                className={styles.image2}
            >
                <Image
                    src={img2.src}
                    alt={'наш проект'}
                    fill
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
        </div>
    );
};

export default ImageReveal;
