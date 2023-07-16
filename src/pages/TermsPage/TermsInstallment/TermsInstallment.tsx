import styles from './TermsInstallment.module.scss';
import Installment from './Installment/Installment';
import StandardInstallment from './StandardInstallment/StandardInstallment';
import { memo } from 'react';

const TermsInstallment = ({ specialInstallments, installments }) => {
    return (
        <div className={styles.container}>
            {specialInstallments?.description?.map((installment, i) => {
                return <Installment installment={installment} key={i} />;
            })}

            <StandardInstallment installments={installments} />
        </div>
    );
};

export default memo(TermsInstallment);
