import Head from 'next/head';
import React from 'react';
import useHeaderHook from '../src/hooks/useHeaderHook';
import FavoriteMain from '../src/pages/FavoritesPage/FavoriteMain/FavoriteMain';
import Footer from '../src/shared/Footer/Footer';
import styles from '../styles/ListPage.module.scss';

const Favorites = () => {
    useHeaderHook({ disappearCoefficient: 0.1 });
    return (
        <>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#212F3E' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
                <title>Soul</title>
            </Head>
            <div className={styles.container}>
                <FavoriteMain />
                <Footer addClass='blue' />
            </div>
        </>
    );
};

export default Favorites;
