import Head from 'next/head';
import React, { useEffect } from 'react';
import SectionPageMain from '../../../src/pages/SectionPage/SectionPageMain/SectionPageMain';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../src/hooks/useReduxHooks';

const SectionPage = () => {
    const router = useRouter();
    const sections = useAppSelector((state) => state.catalog.sections);

    useEffect(() => {
        if (router.query.houseId && sections.length > 0) {
            if (!sections.find((section) => section.id === router.query.houseId)?.visible){
                router.push('/404');
            }
        }
    }, [router.query]);

    return (
        <>
            <Head>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
                <title>Soul</title>
            </Head>
            <SectionPageMain />
        </>
    );
};

export default SectionPage;
