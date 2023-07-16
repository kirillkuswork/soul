import TermsOnline from '../../../pages/TermsPage/TermsOnline/TermsOnline';
import TermsMortgage from '../../../pages/TermsPage/TermsMortgage/TermsMortgage';
import TermsInstallment from '../../../pages/TermsPage/TermsInstallment/TermsInstallment';
import TermsFullPayment from '../../../pages/TermsPage/TermsFullPayment/TermsFullPayment';
import TermsCashback from '../../../pages/TermsPage/TermsCashback/TermsCashback';
import TermsTradeIn from '../../../pages/TermsPage/TermsTradeIn/TermsTradeIn';
import ROUTES from '../../../data/routes';

const RouterTerms = ({
    mortgages,
    cash,
    route,
    isFooterInView,
    specialInstallments,
    installments,
    qa,
    tradeIn,
    specialMortgages,
    calcData,
    flats,
}) => {
    switch (route) {
        case ROUTES.purchaseTerms.fullPayment:
            return <TermsFullPayment cash={cash} />;
        case ROUTES.purchaseTerms.installmentPlan:
            return <TermsInstallment installments={installments} specialInstallments={specialInstallments} />;
        case ROUTES.purchaseTerms.mortgage:
            return (
                <TermsMortgage
                    mortgages={mortgages}
                    isFooterInView={isFooterInView}
                    specialMortgages={specialMortgages}
                    calcData={calcData}
                    flats={flats}
                />
            );
        case ROUTES.purchaseTerms.cashBack:
            return <TermsCashback />;
        case ROUTES.purchaseTerms.onlinePurchase:
            return <TermsOnline qa={qa} />;
        case ROUTES.purchaseTerms.tradeIn:
            return <TermsTradeIn tradeIn={tradeIn} />;
        default:
            return (
                <TermsMortgage
                    mortgages={mortgages}
                    isFooterInView={isFooterInView}
                    specialMortgages={specialMortgages}
                    calcData={calcData}
                    flats={flats}
                />
            );
    }
};

export default RouterTerms;
