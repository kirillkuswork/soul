import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import VisualMain from '../../src/pages/VisualPage/ViasualMain/VisualMain';
import styles from '../../styles/VisualPage.module.scss';
import Loader from '../../src/shared/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../src/hooks/useReduxHooks';
import { selectorsInital } from '../../src/entities/selectors/selectorsCatalog';
import { resetFilters } from '../../src/entities/catalogSlice';

const VisualPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const initial = useAppSelector(selectorsInital);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (initial) {
            setTimeout(() => {
                setLoading(true);
            }, 50);
        }
    }, [initial]);

    useEffect(() => {
        dispatch(resetFilters());
    }, [])

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
            {!loading && <Loader />}
            <div className={styles.container}>
                <VisualMain />
            </div>
        </>
    );
};

export default VisualPage;
