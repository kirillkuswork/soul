import styles from './ContactsInfo.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { AppState } from '../../../entities/store';
import ContactsPageSvg from '../../../shared/svgs/ContactsPageSvg';
import { useState, useEffect, useRef } from 'react';
import { isTablet } from 'react-device-detect';
import { URLS } from '../../../assets/data/consts';

interface IContacts {
    coordinates: number[];
    address: string;
    phone: { text: string; link: string };
    email: string;
    time: string;
    vk: string;
    tg: string;
}

export default function ContactsInfo({ isAdaptive }) {
    const address = useSelector<AppState, string>((state) => state.main.contactsOffice.address);
    const contacts = useSelector<AppState, IContacts>((state) => state.main.contacts);
    const orientation = useSelector<AppState, string>((state) => state.main.orientation);
    const [routesVisible, setRoutesVisible] = useState(false);

    const routesRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!routesRef.current || !btnRef.current) return null;
            if (routesVisible && !routesRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
                setRoutesVisible(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [routesVisible]);

    return (
        <div className={`${styles.container} ${!isAdaptive ? styles.container__hover : ''}`}>
            <div className={styles.content}>
                <h2 className={styles.title}>Контакты</h2>
                {!(isTablet && orientation === 'portrait') ? (
                    <>
                        <div className={styles.content__item}>
                            <p className={styles.sign}>Дизайн-пространство</p>
                            <p className={styles.info} dangerouslySetInnerHTML={{ __html: address }}></p>
                        </div>
                        <div className={styles.content__item}>
                            <p className={styles.sign}>Телефон</p>
                            <Link href={`tel:${contacts.phone.link}`} className={`${styles.info} ${styles.link}`}>
                                <span dangerouslySetInnerHTML={{ __html: contacts.phone.text }}></span>
                            </Link>
                            <time className={styles.sign}>{contacts.time}</time>
                        </div>
                        <div className={styles.content__item}>
                            <p className={styles.sign}>Email</p>
                            <Link href={`mailto:${contacts.email}`} className={`${styles.info} ${styles.link}`}>
                                {contacts.email}
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.content__item}>
                            <p className={styles.sign}>Дизайн-пространство</p>
                            <p className={styles.info} dangerouslySetInnerHTML={{ __html: contacts.address }}></p>
                        </div>

                        <div className={styles.content__grid}>
                            <p className={styles.sign}>Телефон</p>
                            <p className={styles.sign}>Email</p>
                            <Link href={`tel:${contacts.phone.link}`} className={`${styles.info} ${styles.link}`}>
                                <span dangerouslySetInnerHTML={{ __html: contacts.phone.text }}></span>
                            </Link>
                            <Link href={`mailto:${contacts.email}`} className={`${styles.info} ${styles.link}`}>
                                {contacts.email}
                            </Link>
                            <time className={styles.sign}>{contacts.time}</time>
                        </div>
                    </>
                )}
            </div>
            {routesVisible && (
                <div className={styles.route} ref={routesRef}>
                    <Link
                        target='_blank'
                        href={URLS.addressLinks.car}
                        className={`${styles.route__link}`}
                        onClick={() => setRoutesVisible(!routesVisible)}
                    >
                        <ContactsPageSvg addClass={styles.route__icon} id={'car'} />
                        <p>На автомобиле</p>
                    </Link>
                    <Link
                        target='_blank'
                        href={URLS.addressLinks.public}
                        className={`${styles.route__link}`}
                        onClick={() => setRoutesVisible(!routesVisible)}
                    >
                        <ContactsPageSvg addClass={styles.route__icon} id={'bus'} />
                        <p>На общественном транспорте</p>
                    </Link>
                </div>
            )}
            <button
                onClick={() => setRoutesVisible(!routesVisible)}
                ref={btnRef}
                className={`${styles.mapLink} ${routesVisible && styles.activeLink}`}
            >
                <ContactsPageSvg addClass={styles.mapLink__icon} id={'map'} />
                <p>Построить маршрут</p>
            </button>
        </div>
    );
}
