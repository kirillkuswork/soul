import styles from './StandardInstallment.module.scss';
import FlexibleHeading from '../../../../shared/FlexibleHeading';

const StandardInstallment = ({ installments }) => {
    return (
        <section className={styles.standard}>
            <FlexibleHeading text={'Стандартная программа рассрочки'} addClass={styles.standard_title} />
            <div className={styles.standard_blockList}>
                {installments?.description?.map((installment, i) => {
                    return (
                        <div key={i} className={styles.block}>
                            <p className={styles.block_title} dangerouslySetInnerHTML={{ __html: installment.title }}></p>
                            <div className={styles.block_text} dangerouslySetInnerHTML={{ __html: installment.item }}></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StandardInstallment;
