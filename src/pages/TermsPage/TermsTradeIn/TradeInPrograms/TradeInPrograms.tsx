import styles from './TradeInPrograms.module.scss';
import MoreDetails from '../../../../features/MoreDetails/MoreDetails';
import FlexibleHeading from '../../../../shared/FlexibleHeading';
import parse from 'html-react-parser';

const TradeInPrograms = ({ tradeIn }) => {
    return (
        <section className={styles.container}>
            <FlexibleHeading text={'Варианты трейд-ин'} addClass={styles.title} />
            <div className={styles.programs}>
                {tradeIn.description.map((program, i) => {
                    return (
                        <div className={styles.program} key={i}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: program.title,
                                }}
                            ></p>
                            <div>{parse(program.item.replaceAll('&amp;nbsp;', '\u00A0').replaceAll('&amp;mdash;', '—'))}</div>
                            {program.text && program.text.length > 0 && <MoreDetails text={program.text} />}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TradeInPrograms;
