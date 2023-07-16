import styles from './AnimatedScreen.module.scss';
import { ReactNode, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { isMobile, isTablet } from 'react-device-detect';
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import Image from 'next/image';

interface IAnimatedScreen {
    imgArray: any[];
    title: string;
    headerColor: string;
    children: ReactNode;
    childClass: string;
    width: number;
}

const AnimatedScreen = ({ imgArray, title, children, childClass, width }: IAnimatedScreen) => {
    const [isTextAnimationFinished, setIsTextAnimationFinished] = useState(false);
    const [textMoved, setTextMoved] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    gsap.registerPlugin(ScrollTrigger);

    const titleTimeline = gsap.timeline();
    const childTimeline = gsap.timeline();
    const titleRef = useRef(null);
    const childRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        if (!inView) return;
        titleTimeline.to(titleRef.current, {
            translateY: (200 / 1600) * width,
            duration: 0.8,
            onComplete: () => {
                setIsTextAnimationFinished(true);
                titleTimeline.kill();
            },
        });
        return () => {
            titleTimeline.kill();
        };
    }, [inView, titleTimeline, width]);

    useIsomorphicLayoutEffect(() => {
        if (!isTextAnimationFinished) return;

        const topPosition = childClass === 'form' ? '50%' : '40%';

        const ctx = gsap.context(() => {
            if (isMobile || isTablet) {
                childTimeline
                    .fromTo(titleRef.current, { y: (200 / 1600) * width, duration: 0.5 }, { y: 0, duration: 0.5 }, 'animation')
                    .fromTo(
                        childRef.current,
                        { top: '100%', duration: 0.5 },
                        {
                            top: topPosition,
                            translateY: 0,
                            duration: 0.5,
                            opacity: 1,
                            onComplete: () => {
                                setTextMoved(true);
                            },
                        },
                        'animation',
                    );
            } else {
                childTimeline
                    .fromTo(titleRef.current, { y: (200 / 1600) * width, duration: 0 }, { y: 0, duration: 0.7 }, 'animation')
                    .fromTo(
                        childRef.current,
                        { top: '100%', duration: 0.5 },
                        {
                            top: topPosition,
                            translateY: 0,
                            duration: 0.7,
                            opacity: 1,
                            onComplete: () => {
                                setTextMoved(true);
                            },
                        },
                        'animation',
                    );
            }
        });
        return () => ctx.revert();
    }, [isTextAnimationFinished]);

    return (
        <div className={styles.container} ref={ref}>
            <picture className={styles.pic}>
                <source media='(max-width: 540px)' srcSet={imgArray[0].src} />
                <source media='(max-width: 1200px) and (orientation:portrait)' srcSet={imgArray[1].src} />
                <source media='(min-width: 1024x) and (orientation:landscape)' srcSet={imgArray[2].src} />
                <source media='(min-width: 1200px )' srcSet={imgArray[2].src} />
                <Image alt={title} src={imgArray[2]} fill sizes='(min-width: 540px) 100vw' />
            </picture>
            <h1
                className={`${styles.title} ${textMoved ? styles.title__moved : ''}`}
                ref={titleRef}
                dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <div
                className={`${styles.child} 
      ${styles[childClass]}      
      ${childClass === 'form' ? styles.child__form : ''}
      `}
                ref={childRef}
            >
                {children}
            </div>
        </div>
    );
};

export default AnimatedScreen;
