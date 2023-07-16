import { useSelector } from 'react-redux';
import Link from 'next/link';
import MainPageSvg from '../svgs/MainPageSvg';
import styles from './Footer.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import { AppState } from '../../entities/store';
import ROUTES from '../../data/routes';
import { URLS } from '../../assets/data/consts';
import { useGetFooterMenuLeftListQuery, useGetFooterMenuRightListQuery } from '../../entities/menuSlice';
import api from '../../data/api';
import { IState } from '../../entities/mainSlice';
import React from 'react';

interface IFooter {
    addClass?: string;
}

const Footer = ({ addClass }: IFooter) => {
    const {
        contacts: { phone, time, tg, vk, email },
    } = useSelector<AppState, IState>((state) => state.main);
    const mobileWidth = useMediaQuery(540);

    const { data: menuFooterLeft } = useGetFooterMenuLeftListQuery(api.urlMenuFooterLeft);
    const { data: menuFooterRight } = useGetFooterMenuRightListQuery(api.urlMenuFooterRight);

    return (
        <footer className={styles[addClass]}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.leftCol}>
                        <div className={styles.soul}>
                            <MainPageSvg addClass={styles.soulIcon} id={'soul-icon-footer'} />
                            <p className={styles.sign}>
                                Не является публичной офертой. Визуализации и планировки объекта являются ориентировочными
                            </p>
                        </div>

                        {mobileWidth && (
                            <div className={styles.navigation}>
                                <nav className={styles.navList}>
                                    {menuFooterLeft &&
                                        menuFooterLeft.menuItems.length > 0 &&
                                        menuFooterLeft.menuItems.map((el) => (
                                            <Link key={el.value} href={el.path} className={`${styles.navEl} ${styles.link}`}>
                                                {el.value}
                                            </Link>
                                        ))}
                                    {menuFooterRight &&
                                        menuFooterRight.menuItems.length > 0 &&
                                        menuFooterRight.menuItems.map((el) => (
                                            <Link key={el.value} href={el.path} className={`${styles.navEl} ${styles.link}`}>
                                                {el.value}
                                            </Link>
                                        ))}
                                </nav>
                                <Link href={`mailto:${email}`} className={`${styles.navEl} ${styles.email} ${styles.link}`}>
                                    <>
                                        {email}
                                        <div className={styles.arrow}>
                                            <MainPageSvg id={'arrow'} />
                                        </div>
                                    </>
                                </Link>
                            </div>
                        )}
                        <div className={styles.requisites}>
                            <Link aria-label='Позвонить' href={`tel:${phone.link}`} className={`${styles.phone} ${styles.link}`}>
                                <span dangerouslySetInnerHTML={{ __html: phone.text }}></span>
                            </Link>
                            <time className={styles.time}>{time}</time>
                            <div className={styles.social}>
                                <Link aria-label='tg' target='_blank' href={`${tg}`} className={`${styles.tg} ${styles.link}`}>
                                    <MainPageSvg id={'tg'} />
                                </Link>
                                <Link aria-label='vk' target='_blank' href={`${vk}`} className={`${styles.vk} ${styles.link}`}>
                                    <MainPageSvg id={'vk'} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {!mobileWidth && (
                        <div className={styles.navigation}>
                            <nav className={styles.navList}>
                                {menuFooterLeft && menuFooterLeft.menuItems.length > 0 && (
                                    <div className={styles.navList__left}>
                                        {menuFooterLeft.menuItems.map((el) => (
                                            <Link key={el.value} href={el.path} className={`${styles.navEl} ${styles.link}`}>
                                                {el.value}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                <div className={styles.navList__right}>
                                    {menuFooterRight &&
                                        menuFooterRight.menuItems.length > 0 &&
                                        menuFooterRight.menuItems.map((el) => (
                                            <Link key={el.value} href={el.path} className={`${styles.navEl} ${styles.link}`}>
                                                {el.value}
                                            </Link>
                                        ))}
                                </div>
                            </nav>

                            <Link href={`mailto:${email}`} className={`${styles.navEl} ${styles.email} ${styles.link}`}>
                                <>
                                    {email}
                                    <div className={styles.arrow}>
                                        <MainPageSvg addClass={styles.arrow} id={'arrow'} />
                                    </div>
                                </>
                            </Link>
                        </div>
                    )}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.forma}>
                        <p className={styles.sign}>Проект застройщика:</p>
                        <Link aria-label='На сайт forma' target='_blank' href={URLS.forma} className={`${styles.formaIcon} ${styles.link}`}>
                            <MainPageSvg id={'forma'} />
                        </Link>
                    </div>
                    <div className={styles.smallLinks}>
                        <Link href={ROUTES.privacy} className={`${styles.sign} ${styles.smallLink}`}>
                            Политика конфиденциальности
                        </Link>
                        <p className={styles.sign}>
                            Дизайн сайта
                            <Link
                                rel='noopener noreferrer'
                                target='_blank'
                                className={`${styles.sign} ${styles.smallLink}`}
                                href={URLS.cpeople}
                            >
                                {' '}
                                CreativePeople
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
