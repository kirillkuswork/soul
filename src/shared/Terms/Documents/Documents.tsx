import styles from './Documents.module.scss';
import TermsPageSvg from '../../svgs/TermsPageSvg';
import { documents } from '../../../assets/data/terms';
import { gsap } from 'gsap';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';

const Documents = ({ isFooterInView }) => {
    const timeline = gsap.timeline();
    const documentRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        if (!isFooterInView) return;

        timeline.to(documentRef.current, {
            translateY: 0,
            duration: 0.7,
            onComplete: () => timeline.kill(),
        });
    }, [isFooterInView, timeline]);

    return (
        <section className={styles.container} ref={documentRef}>
            <h2 className={styles.title}>Необходимые документы</h2>

            <div className={styles.cardList}>
                {documents.map((document, i) => {
                    return (
                        <div key={i} className={styles.card}>
                            <TermsPageSvg id={document.svgId} addClass={styles.icon} />

                            <div className={styles.info}>
                                <p className={styles.info__title} dangerouslySetInnerHTML={{ __html: document.title }}></p>
                                <p className={styles.info__text} dangerouslySetInnerHTML={{ __html: document.text }}></p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Documents;
