import { blockList } from '../../../assets/data/main';
import Block from '../../../shared/Block/Block';
import styles from './Inner.module.scss';
import { useInView } from 'react-intersection-observer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { isMobile, isTablet } from 'react-device-detect';
import Image from 'next/image';
import xs from '../../../assets/images/landing/inner/xs.webp';
import md from '../../../assets/images/landing/inner/md.webp';
import bg from '../../../assets/images/landing/inner/bg.webp';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { handleAnchor } from '../../../entities/mainSlice';
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';
import { Anchor } from '../../../assets/data/enums';

const Inner = ({ width }) => {
    const [textMoved, setTextMoved] = useState(false);
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
    const [isTextAnimationFinished, setIsTextAnimationFinished] = useState(false);

    const currentAnchor = useSelector<AppState, string>((state) => state.main.currentAnchor);

    gsap.registerPlugin(ScrollTrigger);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        if (width < 1023) {
            setIsAdaptive(true);
        }
    }, [width]);

    const titleTimeline = gsap.timeline();
    const childTimeline = gsap.timeline();
    const titleRef = useRef(null);
    const childRef = useRef(null);

    const mobileWidth = useMediaQuery(540);
    const dispatch = useDispatch();

    useIsomorphicLayoutEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.INNER, value: Anchor.INNER }));

        titleTimeline.to(titleRef.current, {
            translateY: (200 / 1600) * width,
            duration: 1,
            onComplete: () => {
                setIsTextAnimationFinished(true);
                titleTimeline.kill();
            },
        });
    }, [inView, titleTimeline, dispatch, width]);

    useIsomorphicLayoutEffect(() => {
        if (!isTextAnimationFinished) return;

        if (isMobile || isTablet) {
            childTimeline.fromTo(titleRef.current, { y: (200 / 1600) * width, duration: 0.5 }, { y: 0, duration: 0.5 }, 'animation').fromTo(
                childRef.current,
                { y: (1500 / 1600) * width, opacity: 0 },
                {
                    translateY: isAdaptive ? 50 : 0,
                    duration: 0.5,
                    opacity: 1,
                    onComplete: () => {
                        setTextMoved(true);
                        childTimeline.kill();
                    },
                },
                'animation',
            );
        }
    }, [isTextAnimationFinished, isAdaptive, width]);

    //Отвечает за анимацию на десктопе
    useIsomorphicLayoutEffect(() => {
        if (!isTextAnimationFinished || isMobile || isTablet) return;

        childTimeline.fromTo(titleRef.current, { y: (200 / 1600) * width, duration: 0.5 }, { y: 0, duration: 0.7 }, 'animation').fromTo(
            childRef.current,
            { y: (1500 / 1600) * width, opacity: 0 },
            {
                translateY: 0,
                duration: 0.7,
                opacity: 1,
                onComplete: () => {
                    setTextMoved(true);
                    childTimeline.kill();
                },
            },
            'animation',
        );
    }, [isTextAnimationFinished, width]);

    const renderContent = useCallback(() => {
        if (!mobileWidth) {
            return (
                <picture className={styles.pic}>
                    <source media='(max-width: 1200px) and (orientation:portrait)' srcSet={md.src} />
                    <source media='(min-width: 1025px) and (orientation:landscape)' srcSet={bg.src} />
                    <Image
                        alt={'Внутренняя инфраструктура'}
                        src={bg}
                        fill
                        sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                    />
                </picture>
            );
        } else {
            return (
                <Image
                    src={xs.src}
                    fill
                    style={{
                        opacity:
                            currentAnchor !== Anchor.INNER && currentAnchor !== Anchor.ARTFACTORY && currentAnchor !== Anchor.TEAM ? 0 : 1,
                    }}
                    alt={'Внутренняя инфраструктура'}
                    className={styles.background}
                    sizes='(max-width: 540px) 100vw'
                />
            );
        }
    }, [mobileWidth, currentAnchor]);

    return (
        <div className={styles.container} ref={ref}>
            {renderContent()}
            <h1 className={`${styles.title} ${textMoved ? styles.title__moved : ''}`} ref={titleRef}>
                Внутренняя инфраструктура
            </h1>
            <div className={`${styles.child} ${styles.blockList}`} ref={childRef}>
                {blockList.map((card, i) => {
                    return <Block title={card.title} text={card.text} img={card.img} key={i} />;
                })}
            </div>
        </div>
    );
};

export default Inner;
