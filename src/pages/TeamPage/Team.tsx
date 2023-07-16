import React from 'react';
import Image from 'next/image';
import styles from './Team.module.scss';
import StripesOnHover from '../../shared/StripesAnimation/StripesOnHover';
import { teamCards } from '../../assets/data/team';
import { LIGHT_GREY } from '../../assets/data/consts';

export default function Team() {
    return (
        <div className={styles.container}>
            {teamCards.map((el, i) => {
                //Временно скрываем Mei и Xopa
                if (i === 3 || i === 4) return;

                return (
                    <div key={i} className={styles.card}>
                        <div className={styles.info}>
                            {el.icon ? (
                                <div className={`${styles.icon} ${styles[`icon--${i}`]}`}>
                                    <Image
                                        src={el.icon}
                                        alt={el.title}
                                        fill
                                        sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                                    />
                                </div>
                            ) : (
                                <div className={` ${styles[`icon--${i}`]}`}>
                                    <div className={` ${styles[`icon--${i}_1`]}`}>
                                        <Image
                                            src={el.icon1}
                                            alt={el.title}
                                            fill
                                            sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                                        />
                                    </div>
                                    <div className={` ${styles[`icon--${i}_2`]}`}>
                                        <Image
                                            src={el.icon2}
                                            alt={el.title}
                                            fill
                                            sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                                        />
                                    </div>
                                </div>
                            )}

                            <div className={styles.content}>
                                <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: el.title }}></h3>
                                <p className={styles.text} dangerouslySetInnerHTML={{ __html: el.text }}></p>
                            </div>
                        </div>
                        <StripesOnHover backgroundColor={LIGHT_GREY} image={el.images} alt={el.title} addClass={styles.img} />
                    </div>
                );
            })}
        </div>
    );
}
