import styles from './HowItWorks.module.scss';
import CountUp from 'react-countup';
import React from 'react';
import FlexibleHeading from '../../../../shared/FlexibleHeading';
import { howItWorks, howItWorksText } from '../../../../assets/data/terms';

const HowItWorks = React.forwardRef(<A extends unknown, HTMLUListElement>({ inView, isAdaptive }, ref) => {
    return (
        <section className={styles.howItWorks}>
            <div className={styles.howItWorks_info}>
                <FlexibleHeading text={'Вот как это работает'} addClass={styles.howItWorks_title} />
                <p className={styles.howItWorks_text} dangerouslySetInnerHTML={{ __html: howItWorksText }}></p>
            </div>

            <ul ref={ref} className={styles.howItWorks_list}>
                {howItWorks.map((el) => {
                    if (!isAdaptive) {
                        return (
                            <li key={el.id} className={el.id === 2 ? styles.howItWorks_list__2 : 'undefined'}>
                                <h1>
                                    <CountUp start={0} end={el.end} duration={1} separator=' ' decimals={0} decimal=',' suffix={el.suffix}>
                                        {({ countUpRef, start }) => {
                                            if (inView) start();
                                            return <span ref={countUpRef} />;
                                        }}
                                    </CountUp>
                                </h1>
                                <p className={styles.howItWorks_list__text} dangerouslySetInnerHTML={{ __html: el.text }}></p>
                            </li>
                        );
                    } else {
                        return (
                            <li key={el.id} className={styles.howItWorks_list__item}>
                                <p>
                                    <CountUp start={0} end={el.end} duration={1} separator=' ' decimals={0} decimal=',' suffix={el.suffix}>
                                        {({ countUpRef, start }) => {
                                            if (inView) start();
                                            return <span ref={countUpRef} />;
                                        }}
                                    </CountUp>
                                </p>
                                <p className={styles.howItWorks_list__text} dangerouslySetInnerHTML={{ __html: el.text }}></p>
                            </li>
                        );
                    }
                })}
            </ul>
        </section>
    );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
