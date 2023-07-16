import Head from 'next/head';
import React, { useEffect } from 'react';
import { fetchCatalog, setActiveFloors } from '../../../../src/entities/catalogSlice';
import { useAppDispatch } from '../../../../src/entities/store';
import { useAppSelector } from '../../../../src/hooks/useReduxHooks';
import FloorPageMain from '../../../../src/pages/FloorPage/FloorPageMain/FloorPageMain';
import { useRouter } from 'next/router';

const FloorScheme = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const houseId: string | string[] = router.query.houseId;
    const floorId: string | string[] = router.query.floorId;
    const flats = useAppSelector((state) => state.catalog.allFlats);
    const sections = useAppSelector((state) => state.catalog.sections);
    const activeFloors = useAppSelector((state) => state.catalog.activeFloors);

    useEffect(() => {
        if (houseId) {
            dispatch(setActiveFloors({ houseId }));
        }
    }, [dispatch, houseId, flats.length, activeFloors.length]);

    useEffect(() => {
        if (!flats.length) {
            dispatch(fetchCatalog());
        }
    }, [dispatch, flats.length]);

    useEffect(() => {
        if (houseId && sections.length > 0 && sections.filter(section => section.visible).length > 0) {
            if (!sections.find((section) => section.id === router.query.houseId)?.visible){
                router.push('/404');
            }
        }
        if (floorId && activeFloors && activeFloors.length > 1 && (!activeFloors.find(floor => floor.id == floorId) || activeFloors.find(floor => floor.id == floorId)?.disabled)) {
            router.push('/404');
        }
    }, [activeFloors, router.query])

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
            <FloorPageMain />
        </>
    );
};

export default FloorScheme;
