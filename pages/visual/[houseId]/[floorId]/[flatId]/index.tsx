import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../../../src/hooks/useReduxHooks';
import { fetchFlat } from '../../../../../src/entities/catalogSlice';
import checkBenefitPrice from '../../../../../src/tools/_check_benefit_price';
import formatLongPrice from '../../../../../src/tools/_format-long-price';
import FlatInfo from '../../../../../src/pages/FlatPage/FlatInfo/FlatInfo';
import Footer from '../../../../../src/shared/Footer/Footer';
import styles from '../../../../../styles/ListPage.module.scss';
import useHeaderHook from '../../../../../src/hooks/useHeaderHook';
import { handleVisibleHeader, updateMetaData } from '../../../../../src/entities/mainSlice';
import { wrapper } from '../../../../../src/entities/store';
import { getFlats, getRunningQueriesThunk } from '../../../../../src/entities/termsSlice';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    try {
        store.dispatch(getFlats.initiate('1'));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        const flats = await store.getState().termsApi.queries['getFlats("1")'].data;
        // @ts-ignore
        const flat = flats.flats.filter((item) => item.number == context.params.flatId && item.bulk.number == context.params.houseId);

        return {
            props: {
                flatImage: flat[0].layout.flat_plan_png,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
});

const Flat = ({ flatImage }) => {
    const [title, setTitle] = useState('');
    const flatInfo = useAppSelector((state) => state?.catalog?.flatInfo);

    const description =
        'SOUL — жилой комплекс бизнес-класса от Forma в районе Аэропорт. SOUL — камертон, который помогает людям настроиться на себя.';

    useHeaderHook({ disappearCoefficient: 0.1 });

    const dispatch = useAppDispatch();
    const apartNumber = useRouter()?.query?.flatId;

    useEffect(() => {
        dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
    }, [apartNumber, dispatch]);

    useEffect(() => {
        if (apartNumber !== flatInfo?.number) dispatch(fetchFlat(apartNumber));
    }, [dispatch, flatInfo, apartNumber]);

    useEffect(() => {
        if (flatInfo) {
            flatInfo.rooms === 'studio'
                ? setTitle(
                      `Квартира-студия в ЖК Soul за ${formatLongPrice(checkBenefitPrice(flatInfo))} руб., ${flatInfo.area} м.кв., этаж ${
                          flatInfo.floor
                      }/${flatInfo.section.floorsCount}`,
                  )
                : setTitle(
                      `${flatInfo.rooms}-комнатная квартира в ЖК Soul за ${formatLongPrice(checkBenefitPrice(flatInfo))} руб., ${
                          flatInfo.area
                      } м.кв., этаж ${flatInfo.floor}/${flatInfo.section.floorsCount}`,
                  );
        }
    }, [flatInfo, title, setTitle]);

    useEffect(() => {
        dispatch(
            updateMetaData({
                icon: flatImage,
                title: title,
                description: description,
            }),
        );
    }, [dispatch, flatImage, title]);

    return (
        <>
            <Head>
                <meta name='description' content={description} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={title} />
                <meta property='og:site_name' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='628' />
                <meta name='twitter:title' content={description} />
                <meta name='vk:title' content={title} />
                <meta name='vk:description' content={description} />
                <meta property='og:image' content={flatImage} />
                <title>{title}</title>
            </Head>

            <div className={styles.container}>
                <FlatInfo flat={flatInfo} />
                <Footer addClass='blue' />
            </div>
        </>
    );
};

export default Flat;
