import { useEffect, useState } from 'react';
import Navigation from '../../src/shared/Terms/Navigation/Navigation';
import styles from '../../styles/PurchaseTerms.module.scss';
import {
    getCalcData,
    getCash,
    getFlats,
    getInstallments,
    getMortgages,
    getQa,
    getRunningQueriesThunk,
    getSpecialInstallments,
    getSpecialMortgages,
    getTradeIn,
    useGetNavListQuery,
} from '../../src/entities/termsSlice';
import RouterTerms from '../../src/shared/Terms/Navigation/RouterTerms';
import Footer from '../../src/shared/Footer/Footer';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import ROUTES from '../../src/data/routes';
import useHeaderHook from '../../src/hooks/useHeaderHook';
import api from '../../src/data/api';
import Loader from '../../src/shared/Loader/Loader';
import { wrapper } from '../../src/entities/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    try {
        store.dispatch(getTradeIn.initiate(1));
        store.dispatch(getCalcData.initiate(1));
        store.dispatch(getInstallments.initiate(1));
        store.dispatch(getSpecialInstallments.initiate(1));
        store.dispatch(getSpecialMortgages.initiate(1));
        store.dispatch(getQa.initiate(1));
        store.dispatch(getMortgages.initiate(1));
        store.dispatch(getCash.initiate(1));
        store.dispatch(getFlats.initiate(1));

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        const calcData = store.getState().termsApi.queries['getCalcData(1)'].data;
        const installments = store.getState().termsApi.queries['getInstallments(1)'].data;
        const mortgages = store.getState().termsApi.queries['getMortgages(1)'].data;
        const qa = store.getState().termsApi.queries['getQa(1)'].data;
        const specialInstallments = store.getState().termsApi.queries['getSpecialInstallments(1)'].data;
        const specialMortgages = store.getState().termsApi.queries['getSpecialMortgages(1)'].data;
        const tradeIn = store.getState().termsApi.queries['getTradeIn(1)'].data;
        const cash = store.getState().termsApi.queries['getCash(1)'].data;
        const flats = store.getState().termsApi.queries['getFlats(1)'].data;

        return {
            props: {
                calcData,
                installments,
                mortgages,
                qa,
                specialInstallments,
                specialMortgages,
                tradeIn,
                cash,
                flats,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
});

const TermsPage = ({ calcData, installments, mortgages, qa, specialInstallments, specialMortgages, tradeIn, cash, flats }) => {
    const [isFooterInView, setIsFooterInView] = useState(false);
    useHeaderHook({ disappearCoefficient: 0.1 });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setIsFooterInView(true);
        } else {
            setIsFooterInView(false);
        }
    }, [inView]);

    const router = useRouter();
    const route = router.query.nav;

    const { data: navList, error: navListError, isLoading: navListIsLoading } = useGetNavListQuery(api.urlNavList);

    if (navListError) return <div className={styles.error}>Не&nbsp;удалось загрузить данные</div>;

    if (navListIsLoading) {
        return <Loader />;
    }

    return (
        <div className={`${styles.container} ${route === ROUTES.purchaseTerms.cashBack ? styles.container_beige : 'undefined'}`}>
            <h1 className={styles.title}>Условия покупки</h1>
            <Navigation navList={navList} />
            <main className={styles.main}>
                <RouterTerms
                    route={route}
                    isFooterInView={isFooterInView}
                    specialInstallments={specialInstallments}
                    specialMortgages={specialMortgages}
                    installments={installments}
                    tradeIn={tradeIn}
                    qa={qa}
                    calcData={calcData}
                    flats={flats}
                    cash={cash}
                    mortgages={mortgages}
                />
            </main>
            <div ref={ref}>
                <Footer addClass={route !== 'mortgage' && 'blue'} />
            </div>
        </div>
    );
};

export default TermsPage;
