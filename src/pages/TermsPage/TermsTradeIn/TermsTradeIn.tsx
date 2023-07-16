import styles from './TermsTradeIn.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import TradeInSwiper from './TradeInSwiper/TradeInSwiper';
import TradeInAdvantages from './TradeInAdvantages/TradeInAdvantages';
import TradeInPrograms from './TradeInPrograms/TradeInPrograms';
import FlexibleHeading from '../../../shared/FlexibleHeading';
import { memo } from 'react';
import { tradeInTitle } from '../../../assets/data/terms';

const TermsTradeIn = ({ tradeIn }) => {
    const width = useSelector<AppState, number>((state) => state.main.width);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.info}>
                    <FlexibleHeading text={'Выгодный трейд-ин'} addClass={styles.info_title} />
                    <p className={styles.info_text} dangerouslySetInnerHTML={{ __html: tradeInTitle }}></p>
                </div>

                <TradeInSwiper width={width} />
            </section>

            <TradeInAdvantages />
            <TradeInPrograms tradeIn={tradeIn} />
        </>
    );
};

export default memo(TermsTradeIn);
