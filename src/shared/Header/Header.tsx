import { useDispatch } from 'react-redux';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Header.module.scss';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import { isMobile, isTablet } from 'react-device-detect';
import { handleBurger, handleDesktopBurger, handleHeightScroll } from '../../entities/mainSlice';
import { useRouter } from 'next/router';
import ReusableButton from '../../features/ReusableButton/ReusableButton';
import LikeButton from '../../features/LikeButton/LikeButton';
import ROUTES from '../../data/routes';
import { resetFilters } from '../../entities/catalogSlice';
import useOutsideClick from '../../utils/use-outside-click';

const Header = ({
    menuHeader,
    phone,
    isBurgerOpen,
    isDesktopBurgerOpen,
    currentAnchor,
    width,
    visibleHeader,
    heightScroll,
    headerBlack,
}) => {
    const [accordionIsOpen, setAccordionIsOpen] = useState(false);

    const handleToggleAccordion = () => {
        setAccordionIsOpen(!accordionIsOpen);
    }

    const handleCloseAccordion = () => {
        setAccordionIsOpen(false);
    }

    const {ref: accordionRef} = useOutsideClick(handleCloseAccordion)

    const [isAdaptive, setIsAdaptive] = useState(false);

    function getBurgerLogoClasses(isBurgerOpen, currentAnchor) {
        const baseClass = styles.icon__smallLogo;
        const blackClass = isBurgerOpen ? styles.icon__black : '';
        const visibleClass = currentAnchor !== 'topsection' || isBurgerOpen ? styles.icon__smallLogo__visible : '';

        return `${baseClass} ${blackClass} ${visibleClass}`.trim();
    }

    function getHeaderClasses(heightScroll, isBurgerOpen, headerBlack, isDesktopBurgerOpen, isMainHeader = true) {
        const baseClass = styles.header;
        const beigeClass = heightScroll || isBurgerOpen ? styles.header__beige : '';
        const blackClass = headerBlack ? styles.header__black : '';
        const blackNoBgClass = isDesktopBurgerOpen ? styles.header__blackNoBg : '';

        let classes = `${baseClass} ${beigeClass} ${blackClass} ${blackNoBgClass}`.trim();

        if (isMainHeader) {
            const smallClass = isBurgerOpen ? styles.icon__black : '';

            classes = `${classes} ${smallClass}`.trim();
        }

        return classes;
    }

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    const dispatch = useDispatch();

    const headerRef = useRef(null);
    const showHeaderTimeline = gsap.timeline();
    const hiddenHeaderTimeline = gsap.timeline();

    const router = useRouter();

    useEffect(() => {
        if (visibleHeader === false) {
            showHeaderTimeline.to(headerRef.current, {
                translateY: isMobile ? (-150 / 375) * width : (-200 / 1600) * width,
                duration: 0.5,
            });
        } else if (visibleHeader === true) {
            hiddenHeaderTimeline.to(headerRef.current, {
                translateY: 0,
                duration: 0.5,
            });
        }
    }, [visibleHeader, showHeaderTimeline, hiddenHeaderTimeline, width]);

    const renderMenu = menuHeader && menuHeader.menuItems.length > 0;

    const renderMobileHeader = () => {
        if (!isAdaptive) return;

        return (
            <header className={getHeaderClasses(heightScroll, isBurgerOpen, headerBlack, isDesktopBurgerOpen)} ref={headerRef}>
                <Link aria-label='Позвонить' href={`tel:${phone.link}`}>
                    <MainPageSvg
                        id={'phone'}
                        addClass={`${styles.icon__phone} 
              ${isBurgerOpen ? styles.icon__black : 'undefined'}`}
                    />
                </Link>
                <Link
                    href={ROUTES.root}
                    aria-label='На главную'
                    onClick={() => {
                        dispatch(handleBurger({ isBurgerOpen: 'open', value: false }));
                        dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                        setTimeout(() => {
                            window?.scrollTo(0, 0);
                            router.push(ROUTES.root);
                        }, 100);
                    }}
                >
                    <MainPageSvg id='burger-logo' addClass={getBurgerLogoClasses(isBurgerOpen, currentAnchor)} />
                </Link>
                <div
                    className={`${styles.burger} ${isBurgerOpen ? styles.burger__open : 'undefined'}`}
                    onClick={() => dispatch(handleBurger({ isBurgerOpen: 'open', value: !isBurgerOpen }))}
                >
                    <div></div>
                    <div></div>
                </div>
            </header>
        );
    };

    const renderDesktopHeader = () => {
        if (isAdaptive) return;
        return (
            <header className={getHeaderClasses(heightScroll, isBurgerOpen, headerBlack, isDesktopBurgerOpen, false)} ref={headerRef}>
                <div className={styles.container}>
                    <Link
                        className={styles.logo}
                        href={ROUTES.root}
                        onClick={() => {
                            dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: false }));
                            dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                            setTimeout(() => {
                                window?.scrollTo(0, 0);
                                router.push(ROUTES.root);
                            }, 100);
                        }}
                    >
                        <MainPageSvg id={'soul'} addClass={styles.logo_svg} />
                    </Link>
                    <div
                        className={styles.desktopBurger}
                        onClick={() => dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: !isDesktopBurgerOpen }))}
                    >
                        <div className={`${styles.burgerSmall}  ${isDesktopBurgerOpen ? styles.burgerSmall__open : 'undefined'}`}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <nav className={styles.navList}>
                        {renderMenu &&
                            menuHeader.menuItems.map(({ path, value }) => {
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        onClick={() => {
                                            dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                                            dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: false }));
                                        }}
                                    >
                                        {value}
                                    </Link>
                                );
                            })}
                    </nav>
                </div>
                <div className={styles.topmenu_right}>
                    <Link href={`tel:${phone.link}`} className={styles.phone}>
                        <span dangerouslySetInnerHTML={{ __html: phone.text }}></span>
                    </Link>
                    <div className={styles.topmenu_btns}>
                        <LikeButton addClass={`${(heightScroll || headerBlack || isDesktopBurgerOpen) && 'black'}`} />
                        {router.pathname.includes("list") || router.pathname.includes("visual") ? <Link
                            onClick={() => {
                                dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                                dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: false }));

                                // Сбрасываем фильтры выборщика при нажатии и чистим url
                                if(router.pathname.includes("list")) {
                                    dispatch(resetFilters())
                                }
                                router.push(router.pathname.includes("visual") ?  ROUTES.flats.list : ROUTES.visual);
                            }}
                            href={router.pathname.includes("visual") ?  ROUTES.flats.list : ROUTES.visual }
                        >
                            <ReusableButton
                                content={ router.pathname.includes("list") ?  'Визуальный выбор' : router.pathname.includes("visual") ? "По параметрам" : ""}
                                size={'small'}
                                addClass={`${(heightScroll || headerBlack || isDesktopBurgerOpen) && 'black'}`}
                            />
                        </Link> : <div ref={accordionRef} className={`${styles.accordion} ${(heightScroll || headerBlack || isDesktopBurgerOpen) ? styles["accordion--black"] : styles["accordion--white"]} ${accordionIsOpen ? styles.isOpen : ""}`}>
                            <div onClick={handleToggleAccordion} className={styles.accordion__body}>
                                Выбрать квартиру
                                <svg className={styles.accordion__arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15L12 9L6 15" stroke="black" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            {accordionIsOpen && <div className={styles.accordion__items}>
                                <Link href={ROUTES.visual} onClick={handleCloseAccordion}>
                                    <div className={styles.accordion__item}>На генплане</div>
                                </Link>
                                <Link href={ROUTES.flats.list} onClick={handleCloseAccordion}>
                                    <div className={styles.accordion__item}>По параметрам</div>
                                </Link>
                            </div>}
                        </div> }
                    </div>
                </div>
            </header>
        );
    };

    return (
        <>
            {renderDesktopHeader()}
            {renderMobileHeader()}
        </>
    );
};
export default Header;
