import { handleHeaderColor } from '../src/entities/mainSlice';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import Document from '../src/pages/DocumentsPage/Document';
import Footer from '../src/shared/Footer/Footer';
import { AppState } from '../src/entities/store';
import { fetchDocuments, fetchFlats } from '../src/entities/documentsSlice';
import { useAppDispatch } from '../src/entities/store';
import { URLS } from '../src/assets/data/consts';
import Link from 'next/link';
import { IFlats } from '../src/assets/data/interfaces';
import styles from '../styles/DocumentsPage.module.scss';

interface ICategory {
    _id: string;
    title: string;
    __v: number;
}

interface IDocItem {
    _id: string;
    title: string;
    fileUrl: string;
    fileSize: string;
    category: ICategory;
    mimeType: string;
    createdAt: string;
    asOfDate: string;
    __v: number;
}

export default function DocumentsPage() {
    const dispatch = useDispatch();
    useHeaderHook({ disappearCoefficient: 0.1 });
    const documents = useSelector<AppState, IDocItem[]>((state) => state.docs.documents);
    const flats = useSelector<AppState, IFlats>((state) => state.docs.flats);
    const appDispatch = useAppDispatch();
    const [declarationDocs, setDeclarationDocs] = useState([]);
    const [otherDocs, setOtherDocs] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
        };
    }, [dispatch]);

    useEffect(() => {
        if (!flats) appDispatch(fetchFlats());
        if (!documents) appDispatch(fetchDocuments());
    }, [appDispatch, documents, flats]);

    useMemo(() => {
        if (flats) {
            let date = flats?.bulks[0].settlement_date;
            flats?.bulks.forEach((el) => {
                if (el.settlement_date < date) {
                    date = el.settlement_date;
                }
            });
            const d = new Date(date);
            const endDate = d.toLocaleDateString();
            d.setMonth(d.getMonth() + 3, 30);
            const keysDate = d.toLocaleDateString();
            setDates([endDate, keysDate]);
        }
        return null;
    }, [flats]);

    useEffect(() => {
        setDeclarationDocs(documents?.filter((el) => el.category.title === 'Проектная декларация'));
        setOtherDocs(documents?.filter((el) => el.category.title !== 'Проектная декларация'));
    }, [documents, flats]);

    return (
        <div className={styles.containerOuter}>
            <div className={styles.container}>
                <h2 className={styles.title}>Документы</h2>
                <div className={styles.info}>
                    <p>
                        Ввод в эксплуатацию до {dates[0]} | Ключи до {dates[1]}.
                    </p>
                    <p>
                        {' '}
                        Все документы размещены на сайте
                        <Link target='_blank' href={URLS.nashDom}>
                            наш.дом.рф
                        </Link>
                    </p>
                </div>

                <h3 className={styles.subtitle}>Проектная декларация</h3>
                <div className={styles.documents}>
                    {declarationDocs?.map((el) => {
                        return (
                            <Document
                                key={el._id}
                                fileUrl={el.fileUrl}
                                date={el.asOfDate}
                                name={el.title}
                                fileSize={el.fileSize}
                                mimeType={el.mimeType.replace('application/', '').toUpperCase()}
                            />
                        );
                    })}
                </div>
                <h3 className={styles.subtitle}>Документы застройщика</h3>
                <div className={styles.documents}>
                    {otherDocs?.map((el) => {
                        return (
                            <Document
                                key={el._id}
                                fileUrl={el.fileUrl}
                                date={el.asOfDate}
                                name={el.title}
                                fileSize={el.fileSize}
                                mimeType={el.mimeType.replace('application/', '').toUpperCase()}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer addClass='blue' />
        </div>
    );
}
