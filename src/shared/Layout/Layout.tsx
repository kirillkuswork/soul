import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import BurgerModal from '../../features/BurgerModal/BurgerModal';
import { AppState } from '../../entities/store';
import Modal from '../../widgets/Modal/Modal';
import { handleIsAdaptive, handleNewUser, handleOrientation, handleResizeWindow, IState, updateMetaData } from '../../entities/mainSlice';
import PopUp from '../../widgets/PopUp/PopUp';
import { isMobile, isTablet } from 'react-device-detect';
import MessageScreen from '../MessageScreen/MessageScreen';
import DesktopBurger from '../../features/DesktopBurger/DesktopBurger';
import { disableBodyScrollHeader, enableBodyScrollHeader } from '../../utils/body-scroll-lock';
import {
    useGetHeaderMenuBottomLeftListQuery,
    useGetHeaderMenuQuery,
    useGetHeaderMenuTopLeftListQuery,
    useGetHeaderMenuTopRightListQuery,
} from '../../entities/menuSlice';
import api from '../../data/api';
import Head from 'next/head';
import ROUTES from '../../data/routes';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const {
        width,
        orientation,
        isDesktopBurgerOpen,
        isBurgerOpen,
        isANewUser,
        modal: { modalOpened: isModalOpened },
        contacts: { phone, time, tg, vk },
        currentAnchor,
        visibleHeader,
        heightScroll,
        isHeaderColorBlack: headerBlack,
        metaData: { icon, title, description },
        isAdaptive,
    } = useSelector<AppState, IState>((state) => state.main);

    const { data: menuHeader } = useGetHeaderMenuQuery(api.urlMenuHeader);
    const { data: burgerTopLeft } = useGetHeaderMenuTopLeftListQuery(api.urlMenuBurgerTopLeft);
    const { data: burgerTopRight } = useGetHeaderMenuTopRightListQuery(api.urlMenuBurgerTopRight);
    const { data: burgerBottomLeft } = useGetHeaderMenuBottomLeftListQuery(api.urlMenuBurgerBottomLeft);

    const burgerMenu = [burgerTopLeft, burgerBottomLeft, burgerTopRight];

    const dispatch = useDispatch();

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile) {
            dispatch(handleIsAdaptive({ isAdaptive: 'adaptive', value: true }));
        }

        // Определение orientation для всех страниц
        const mql = window.matchMedia('(orientation: portrait)');
        if (mql.matches) {
            dispatch(handleOrientation({ orientation: 'changed', value: 'portrait' }));
        } else {
            dispatch(handleOrientation({ orientation: 'changed', value: 'landscape' }));
        }

        // Перезагрузка при ресайзе для всех страниц
        window.addEventListener('resize', () => {
            dispatch(handleResizeWindow({ width: 'changed', value: window.innerWidth }));
        });

        return () => {
            window.removeEventListener('resize', () => {
                dispatch(handleResizeWindow({ width: 'changed', value: window.innerWidth }));
            });
        };
    }, [dispatch, width]);

    const getCookie = (cname) => {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };

    useEffect(() => {
        if (!getCookie('soul_user')) {
            dispatch(handleNewUser({ isANewUser: 'new', value: true }));
        } else {
            dispatch(handleNewUser({ isANewUser: 'new', value: false }));
        }
    }, [isANewUser, dispatch]);

    // Выключение скролла страницы при открытом бургере или модальном окне формы.
    useEffect(() => {
        if (isBurgerOpen || isDesktopBurgerOpen) {
            disableBodyScrollHeader();
        } else {
            enableBodyScrollHeader();
        }
    }, [isBurgerOpen, isDesktopBurgerOpen]);

    //Редирект на адаптиве
    const router = useRouter();

    useEffect(() => {
        if (!isAdaptive) return;

        const { pathname } = router;
        const isVisualPage = /^\/visual(\/\d+|\/\[[^/]+\]){0,2}$/.test(pathname);

        if (isVisualPage && isAdaptive) {
            router.push(ROUTES.flats.list);
        }
    }, [isAdaptive, router]);

    useEffect(() => {
        dispatch(
            updateMetaData({
                icon: '/soul-badge.png',
                title: 'ЖК SOUL — ламповый проект в районе Аэропорт от девелопера Forma.',
                description: 'SOUL — камертон, который помогает людям настроиться на себя.',
            }),
        );
    }, [router.asPath]);

    return (
        <>
            <Head>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#212F3E' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />

                <meta name='description' content={description} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={icon} />
                <meta property='og:title' content='SOUL — ламповый проект в районе Аэропорт.' />
                <meta property='og:site_name' content='SOUL — ламповый проект в районе Аэропорт.' />
                <meta property='og:description' content='SOUL — камертон, который помогает людям настроиться на себя.' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='628' />
                <meta name='twitter:title' content='SOUL — ламповый проект в районе Аэропорт.' />
                <meta name='twitter:description' content='SOUL — камертон, который помогает людям настроиться на себя.' />
                <meta name='twitter:card' content='summary_large_image' />
                <title>{title}</title>
            </Head>
            <DesktopBurger isOpen={isDesktopBurgerOpen} burgerMenu={burgerMenu} />
            {orientation === 'landscape' && router.pathname !== '/progress' && width < 950 && isMobile && <MessageScreen />}
            <Header
                menuHeader={menuHeader}
                phone={phone}
                isBurgerOpen={isBurgerOpen}
                isDesktopBurgerOpen={isDesktopBurgerOpen}
                currentAnchor={currentAnchor}
                width={width}
                visibleHeader={visibleHeader}
                heightScroll={heightScroll}
                headerBlack={headerBlack}
            />
            {isBurgerOpen && <BurgerModal phone={phone} burgerMenu={burgerMenu} time={time} tg={tg} vk={vk} />}
            {children}
            {isModalOpened && <Modal />}
            {isANewUser && <PopUp />}
        </>
    );
}
