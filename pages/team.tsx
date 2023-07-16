//Images for Team
import bg from '../src/assets/images/team/bg.webp';
import md from '../src/assets/images/team/md.webp';
import xs from '../src/assets/images/team/xs.webp';

import styles from '../styles/TeamPage.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Team from '../src/pages/TeamPage/Team';
import Footer from '../src/shared/Footer/Footer';
import { handleHeaderColor } from '../src/entities/mainSlice';
import { useDispatch } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import AnimatedTeam from '../src/shared/AnimatedTeam/AnimatedTeam';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';

const TeamPage = () => {
    const dispatch = useDispatch();
    const [showAnimScreen, setShowAnimScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });

    const animScreenRef = useRef(null);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));

        !isLoading && setTimeout(() => setShowAnimScreen(true), 1000);

        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch, isLoading]);

    useHeaderHook({ disappearCoefficient: 0.1, BGCoefficientDesktop: 0.15, BGCoefficientMobile: 0.15 });

    return (
        <div className={styles.wrapperTeam}>
            <div className={`${styles.image} ${inView && isMobile ? styles.image__hide : 'undefined'}`}>
                <picture className={styles.image__pic}>
                    <source media='(max-width: 540px)' srcSet={xs.src} />
                    <source media='(max-width: 768px)' srcSet={md.src} />
                    <source media='(max-width: 1200px)' srcSet={bg.src} />
                    <source media='(max-width: 1600px && min-width: 1600px)' srcSet={bg.src} />
                    <Image
                        alt={'Команда Soul'}
                        src={bg.src}
                        fill
                        sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                        onLoadingComplete={() => setIsLoading(false)}
                    />
                </picture>
            </div>
            {showAnimScreen && (
                <>
                    <main className={styles.wrapper}>
                        <div ref={animScreenRef} className={styles.container}>
                            <AnimatedTeam title={'Команда проекта'} headerColor={'header-white'}>
                                <Team />
                            </AnimatedTeam>
                        </div>
                    </main>
                    <div ref={ref}>
                        <Footer addClass={'blue'} />
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamPage;
