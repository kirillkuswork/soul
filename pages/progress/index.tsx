import CardListLinks from '../../src/shared/CardListLinks/CardListLinks';
import ROUTES from '../../src/data/routes';
import Footer from '../../src/shared/Footer/Footer';
import { wrapper } from '../../src/entities/store';
import { getFlats, getProgressData, getRunningQueriesThunk } from '../../src/entities/progressSlice';
import formatTimeFromStringToDayMonthYear from '../../src/utils/formatTimeFromStringToDayMonthYear';
import { IFlats } from '../../src/assets/data/interfaces';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from '../../styles/ProgressNewsPage.module.scss';
import GalleryPageSvg from '../../src/shared/svgs/GalleryPageSvg';
import Iframe from 'react-iframe';
import { handleVisibleHeader } from '../../src/entities/mainSlice';
import { useDispatch } from 'react-redux';

export interface IProgress {
    fileUrl: string[];
    mimeType: string[];
    slug: string;
    text: string;
    title: string;
    __v: number;
    _id: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    function sortBySettlementDate(bulks) {
        if (!bulks) return;
        return bulks.sort((a, b) => {
            const dateA = new Date(a.settlement_date);
            const dateB = new Date(b.settlement_date);
            if (dateA < dateB) {
                return -1;
            }
            if (dateA > dateB) {
                return 1;
            }
            return 0;
        });
    }

    function transformDateFormat(dateString) {
        const dateArray = dateString.split('-');
        const day = dateArray[2];
        const month = dateArray[1];
        const year = dateArray[0];
        return `${day}.${month}.${year}`;
    }

    try {
        await store.dispatch(getFlats.initiate(1));
        await store.dispatch(getProgressData.initiate(1));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        const progress = store.getState().progressApi.queries['getProgressData(1)'].data as IProgress[];
        const flats = store.getState().progressApi.queries['getFlats(1)'].data as IFlats;

        const progressClone = [...progress];
        const bulks = [...flats.bulks];

        const sortedArray = progressClone.sort((a, b) => {
            const dateA = new Date(a.title).getTime();
            const dateB = new Date(b.title).getTime();
            return dateB - dateA;
        });

        const earliestReleaseBulk = sortBySettlementDate(bulks)[0];
        const settlementDate = transformDateFormat(earliestReleaseBulk.settlement_date);
        const keyDate = transformDateFormat(earliestReleaseBulk.keyDate);

        return {
            props: {
                progress,
                sortedArray,
                settlementDate,
                keyDate,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
});

const ProgressPage = ({ sortedArray, settlementDate, keyDate }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isModalOpened) {
            dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: false }));
        } else {
            dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
        }
    }, [dispatch, isModalOpened]);

    useLayoutEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                setIsModalOpened(false);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className={isModalOpened ? styles.container : 'undefined'}>
            {isModalOpened && (
                <div className={styles.modal}>
                    <div className={styles.video}>
                        <Iframe
                            url='https://video.enforta.ru/embed/v3/?server=100-iVjrqU0fTZ23jegER1u0NQ&amp;camera=0&amp;width=&amp;height=&amp;lang=en&amp;ap=&amp;noibw='
                            display='block'
                            position='relative'
                        />
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsModalOpened(false)}>
                        <GalleryPageSvg id={'close'} addClass={styles.closeBtn_icon} />
                    </button>
                    <div className={styles.backdrop}></div>
                </div>
            )}
            <CardListLinks
                title={'Ход строительства'}
                subtitle={`Ввод в&nbsp;эксплуатацию до&nbsp;${settlementDate}&nbsp;| Ключи до&nbsp;${keyDate}`}
                dataArray={sortedArray}
                transformDataFunction={formatTimeFromStringToDayMonthYear}
                route={ROUTES.progress.root}
                prefix={''}
                showTitle={false}
                setIsModalOpened={setIsModalOpened}
            />
            <Footer addClass={'blue'} />
        </div>
    );
};

export default ProgressPage;
