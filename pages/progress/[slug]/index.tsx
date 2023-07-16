import BackButton from '../../../src/shared/BackButton/BackButton';
import FlexibleHeading from '../../../src/shared/FlexibleHeading';
import { AppState, wrapper } from '../../../src/entities/store';
import { getProgressData, getRunningQueriesThunk } from '../../../src/entities/progressSlice';
import transformDateFormat from '../../../src/utils/transformDateFormat';
import styles from '../../../styles/ProgressNewsTopic.module.scss';
import React, { useEffect, useState } from 'react';
import Footer from '../../../src/shared/Footer/Footer';
import { isMobile, isTablet } from 'react-device-detect';
import { useSelector } from 'react-redux';
import ProgressNewsOnlySlider from '../../../src/pages/ProgressPage/ProgressNewsOnlySlider';
import ProgressNewsWithVideo from '../../../src/pages/ProgressPage/ProgressNewsWithVideo';
import useHeaderHook from '../../../src/hooks/useHeaderHook';

interface IProgress {
    data: {
        _id: string;
        title: string;
        text: string;
        fileUrl: string[];
        mimeType: string[];
        slug: string;
        __v: number;
    }[];
    endpointName: string;
    fulfilledTimeStamp: number;
    originalArgs: number;
    requestId: string;
    startedTimeStamp: number;
    status: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    function getMonthName(dateString) {
        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const name = monthNames[monthIndex];
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    try {
        store.dispatch(getProgressData.initiate(1));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        const progress = store.getState().progressApi.queries['getProgressData(1)'] as IProgress;
        const progressNewsTopic = progress.data.find((item) => item.slug === context.params.slug);

        const photos = progressNewsTopic.fileUrl.filter((item) => item.endsWith('jpg'));
        const videos = progressNewsTopic.fileUrl.filter((item) => !item.endsWith('jpg'));

        return {
            props: {
                photos,
                videos: videos.length > 0 ? videos : [],
                title: getMonthName(progressNewsTopic.title),
                progress: progressNewsTopic,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
});

const ProgressNewsTopic = ({ progress, photos, videos, title }) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <div className={styles.container}>
            <BackButton />
            <main>
                <section className={styles.info}>
                    <FlexibleHeading text={`${title} ${transformDateFormat(progress.title)}`} />
                    <div dangerouslySetInnerHTML={{ __html: progress.text }} className={styles.text}></div>
                </section>
                {videos.length > 0 ? (
                    <ProgressNewsWithVideo progress={progress} photos={photos} isAdaptive={isAdaptive} videos={videos} />
                ) : (
                    <ProgressNewsOnlySlider progress={progress} isAdaptive={isAdaptive} />
                )}
            </main>
            <Footer addClass='blue' />
        </div>
    );
};

export default ProgressNewsTopic;
