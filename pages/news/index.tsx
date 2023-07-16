import { wrapper } from '../../src/entities/store';
import { getRunningQueriesThunk, getNews } from '../../src/entities/newsSlice';
import ROUTES from '../../src/data/routes';
import React from 'react';
import Footer from '../../src/shared/Footer/Footer';
import formatTimeFromStringToDayMonthYear from '../../src/utils/formatTimeFromStringToDayMonthYear';
import CardListLinks from '../../src/shared/CardListLinks/CardListLinks';
import useHeaderHook from '../../src/hooks/useHeaderHook';

export interface ITopic {
    _id: string;
    title: string;
    type: string;
    content: string;
    galleryUrl: string[];
    createdAt: string;
    slug: string;
    __v: number;
    imgPreview: string;
    subtitle: string;
    seoDescription: string;
    fileUrl: string;
    mimeType: string;
    seoTitleTemplate: string;
    seoTitle: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getNews.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    const news = store.getState().newsApi.queries['getNews(1)'].data as ITopic[];

    const newsArr = [...news];
    const sortedNews = newsArr.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
    });

    return {
        props: {
            news: sortedNews,
        },
    };
});

const NewsPage = ({ news }) => {
    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    return (
        <div>
            <CardListLinks
                title={'Новости'}
                subtitle={''}
                dataArray={news}
                transformDataFunction={formatTimeFromStringToDayMonthYear}
                route={ROUTES.news.root}
                prefix={'/public/news/'}
                showTitle
                setIsModalOpened
            />
            <Footer addClass={'blue'} />
        </div>
    );
};

export default NewsPage;
