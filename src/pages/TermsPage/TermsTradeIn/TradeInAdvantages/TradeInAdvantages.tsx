import styles from './TradeInAdvantages.module.scss';
import { advantagesList } from '../../../../assets/data/terms';

const TradeInAdvantages = () => {
    return (
        <section>
            <p className={styles.title}>Ваши преимущества</p>
            <div className={styles.cardList}>
                {advantagesList.map(({ id, title, text }) => {
                    return (
                        <div className={styles.cardList_card} key={id}>
                            <h2 className={styles.cardList_card__id}>{id}</h2>
                            <div className={styles.cardList_card__info}>
                                <p className={styles.cardList_card__title} dangerouslySetInnerHTML={{ __html: title }}></p>
                                <p className={styles.cardList_card__text} dangerouslySetInnerHTML={{ __html: text }}></p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TradeInAdvantages;
