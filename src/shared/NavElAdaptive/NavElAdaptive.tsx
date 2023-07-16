import React from 'react';
import Link from 'next/link';
import styles from './NavElAdaptive.module.scss';
import { useState } from 'react';
import { handleBurger, handleHeightScroll } from '../../entities/mainSlice';
import { useDispatch } from 'react-redux';
import ROUTES from '../../data/routes';

export default function NavElAdaptive({ burgerEl, addClass }) {
    const [isOpened, setIsOpened] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className={addClass}>
            <div className={`${styles.menuEl} ${isOpened ? styles.menuEl__open : ''}`} onClick={() => setIsOpened(!isOpened)}>
                <p> {burgerEl.title}</p>
                <div className={styles.menuEl__plusEl}>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {burgerEl && burgerEl.menuItems && isOpened && (
                <>
                    <div className={styles.linksContainer}>
                        {burgerEl.menuItems.map(({ value, path }, i) => {
                            if (path === ROUTES.visual) return;
                            else {
                                return (
                                    <Link
                                        key={i}
                                        href={path}
                                        className={styles.link}
                                        onClick={() => {
                                            dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                                            dispatch(handleBurger({ isBurgerOpen: 'open', value: false }));
                                        }}
                                    >
                                        {value}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
