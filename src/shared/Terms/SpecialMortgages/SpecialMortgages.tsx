import styles from './SpecialMortgages.module.scss';
import _ from 'lodash';

const SpecialMortgages = ({ specialMortgages }) => {
    function capitalizeString(str) {
        // convert the string to lowercase
        str = _.toLower(str);

        // check if the first two letters are 'it'
        if (_.startsWith(str, 'it')) {
            // if yes, return the string with 'IT' capitalized
            return 'IT' + str.slice(2);
        } else {
            // else, return the string with only the first letter capitalized
            return _.capitalize(str);
        }
    }

    return (
        <section className={styles.container}>
            <p className={styles.title}>Специальные программы</p>

            <div className={styles.grid}>
                {specialMortgages.description.map((mortgage, i) => {
                    return (
                        <div key={i} className={styles.grid_block}>
                            <p dangerouslySetInnerHTML={{ __html: capitalizeString(mortgage.title) }} className={styles.grid_title}></p>
                            <div dangerouslySetInnerHTML={{ __html: mortgage.item }}></div>
                        </div>
                    );
                })}
            </div>
            <p className={styles.notification}>
                При условии подачи заявки через компанию Forma, при подписании кредитного договора онлайн и оформлении страхования жизни
            </p>
        </section>
    );
};

export default SpecialMortgages;
