import styles from './Installment.module.scss';
import FlexibleHeading from '../../../../shared/FlexibleHeading';

const Installment = ({ installment }) => {
    const sign = installment.text;
    const ulStartIndex = installment.item.indexOf('<ul>');
    const ulEndIndex = installment.item.indexOf('</ul>') + 5;
    const ulString = installment.item.substring(ulStartIndex, ulEndIndex);

    return (
        <section className={styles.installment}>
            <FlexibleHeading text={installment.title} addClass={styles.installment_title} />
            <div className={styles.installment_sign} dangerouslySetInnerHTML={{ __html: sign }}></div>
            <div className={styles.cardList} dangerouslySetInnerHTML={{ __html: ulString }}></div>
        </section>
    );
};

export default Installment;
