import React from 'react';
import Link from 'next/link';
import styles from './NavEl.module.scss';
import { handleDesktopBurger, handleHeightScroll } from '../../entities/mainSlice';
import { useDispatch } from 'react-redux';
import TextReveal from '../TextReveal/TextReveal';

export default function NavEl({ burgerEl }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.navItem}>
            <TextReveal>
                <p className={styles.title}>{burgerEl.title}</p>
                {burgerEl.menuItems.map(({ value, path }, i) => {
                    return (
                        <Link
                            key={i}
                            href={path}
                            className={styles.link}
                            onClick={() => {
                                dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                                dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: false }));
                            }}
                        >
                            {value}
                        </Link>
                    );
                })}
            </TextReveal>
        </div>
    );
}
