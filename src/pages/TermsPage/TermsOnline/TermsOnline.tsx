import styles from './TermsOnline.module.scss';
import QASection from '../../../shared/Terms/QASection/QASection';
import { categories } from '../../../assets/data/terms';
import HowToBuyOnline from './HowToBuyOnline/HowToBuyOnline';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';

const TermsOnline = ({ qa }) => {
    const width = useSelector<AppState, number>((state) => state.main.width);

    return (
        <div className={styles.container}>
            <HowToBuyOnline />

            <QASection qa={qa} categories={categories} width={width} />
        </div>
    );
};

export default memo(TermsOnline);
