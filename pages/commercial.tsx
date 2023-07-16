import xl from '../src/assets/images/commercial/xl.webp';
import bg from '../src/assets/images/commercial/bg.webp';
import md from '../src/assets/images/commercial/md.webp';
import xs from '../src/assets/images/commercial/xs.webp';

import StripesReveal from '../src/shared/StripesAnimation/StripesReveal';
import styles from '../styles/CommercialPage.module.scss';
import useHeaderHook from '../src/hooks/useHeaderHook';
import Footer from '../src/shared/Footer/Footer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { WHITE_COLOR } from '../src/assets/data/consts';
import { useSelector } from 'react-redux';
import { AppState } from '../src/entities/store';
import Link from 'next/link';
import { isMobile, isTablet } from 'react-device-detect';

const CommercialPage = () => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const phone = useSelector<AppState, { text: string; link: string }>((state) => state.main.contacts.phone);
    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    const array = [
        {
            id: 0,
            title: 'Всего',
            subtitle: '15&nbsp;помещений',
        },
        {
            id: 1,
            title: 'Площади',
            subtitle: '57&ndash;144&nbsp;м&sup2;',
        },
        {
            id: 2,
            title: 'Цена',
            subtitle: 'от&nbsp;430&nbsp;000&nbsp;руб/м&sup2;',
        },
        {
            id: 3,
            title: 'Условия покупки',
            subtitle: 'Ипотека, рассрочка, 100% оплата',
        },
    ];

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet || width < 1023) {
            setIsAdaptive(true);
        }
    }, [width]);

    const Block = ({ title, subtitle }) => {
        return (
            <div className={styles.grid_item}>
                <p className={styles.grid_item__title} dangerouslySetInnerHTML={{ __html: title }}></p>
                <p className={styles.grid_item__subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            </div>
        );
    };

    return (
        <>
            <main className={styles.container}>
                <h1 className={styles.title}>Коммерческие помещения</h1>
                <p className={styles.subtitle}>
                    Коммерческие помещения в&nbsp;проекте Soul расположены на&nbsp;первой линии, на&nbsp;1-м этаже, с&nbsp;отдельными
                    входами и&nbsp;витринами. Возможное использование: продуктовый магазин, винотека, кафе/ресторан, салон красоты, аптека,
                    пункт выдачи и&nbsp;др.
                </p>

                <StripesReveal backgroundColor={WHITE_COLOR}>
                    <div className={styles.img}>
                        <picture>
                            <source media='(max-width: 540px)' srcSet={xs.src} />
                            <source media='(max-width: 768px)' srcSet={md.src} />
                            <source media='(max-width: 1200px)' srcSet={bg.src} />
                            <source media='(max-width: 1600px && min-width: 1600px)' srcSet={xl.src} />
                            <Image alt={'Коммерческие помещения'} src={bg} fill priority sizes='(min-width: 540px) 100vw' />
                        </picture>
                    </div>
                </StripesReveal>
                <div className={styles.info}>
                    <h2 className={styles.info_title}>Общая информация</h2>

                    <div className={styles.grid}>
                        {array.map((item) => {
                            return <Block key={item.id} title={item.title} subtitle={item.subtitle} />;
                        })}
                    </div>

                    <p className={styles.info_additional}>
                        Подробную информации о&nbsp;помещениях и&nbsp;их&nbsp;бронировании уточняйте по&nbsp;телефону{' '}
                        {isAdaptive ? (
                            <Link href={`tel:${phone.link}`} className={styles.phone}>
                                <span dangerouslySetInnerHTML={{ __html: phone.text }}></span>
                            </Link>
                        ) : (
                            <span dangerouslySetInnerHTML={{ __html: phone.text }}></span>
                        )}{' '}
                        или в&nbsp;дизайн-пространстве Soul.
                    </p>
                </div>
            </main>
            <Footer addClass='blue' />
        </>
    );
};

export default CommercialPage;
