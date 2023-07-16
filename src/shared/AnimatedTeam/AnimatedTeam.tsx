import styles from './AnimatedTeam.module.scss';
import { ReactNode, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AppState } from '../../entities/store';
import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface IAnimatedScreen {
    title: string;
    headerColor: string;
    children: ReactNode;
}

const AnimatedTeam = ({ title, children }: IAnimatedScreen) => {
    const [textMoved, setTextMoved] = useState(false);

    const width = useSelector<AppState, number>((state) => state.main.width);
    gsap.registerPlugin(ScrollTrigger);
    const titleRef = useRef(null);
    const childRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        const t1 = gsap.timeline();
        const h = window.innerHeight;

        const ctx = gsap.context(() => {
            t1.fromTo(titleRef.current, { y: h, duration: 0.7 }, { y: (200 / 1600) * width, duration: 0.5 })
                .fromTo(titleRef.current, { y: (200 / 1600) * width, duration: 0 }, { y: 0, duration: 0.5 }, 'animation')
                .fromTo(
                    childRef.current,
                    { y: h },
                    {
                        y: 0,
                        duration: 0.8,
                        opacity: 1,
                        onComplete: () => {
                            setTextMoved(true);
                        },
                    },
                    'animation',
                );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} ${textMoved ? styles.title__moved : ''}`} ref={titleRef}>
                {title}
            </h1>
            <div className={styles.child} ref={childRef}>
                {children}
            </div>
        </div>
    );
};

export default AnimatedTeam;
