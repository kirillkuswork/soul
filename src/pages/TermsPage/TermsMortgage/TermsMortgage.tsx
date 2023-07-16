import ComfortMortgage from '../../../shared/Terms/ComfortMortgage/ComfortMortgage';
import Documents from '../../../shared/Terms/Documents/Documents';
import MortgageCalculator from '../../../shared/Terms/MortgageCalculator/MortgageCalculator';
import SpecialMortgages from '../../../shared/Terms/SpecialMortgages/SpecialMortgages';
import { memo } from 'react';

const TermsMortgage = ({ isFooterInView, specialMortgages, calcData, flats, mortgages }) => {
    return (
        <div>
            <SpecialMortgages specialMortgages={specialMortgages} />
            <ComfortMortgage mortgages={mortgages} />
            <MortgageCalculator mortgages={calcData} flats={flats} />
            <Documents isFooterInView={isFooterInView} />
        </div>
    );
};

export default memo(TermsMortgage);
