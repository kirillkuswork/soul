import styles from './MoreDetails.module.scss';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import { isMobile, isTablet } from 'react-device-detect';
import parse from 'html-react-parser';

const MoreDetails = ({ text }) => {
    return (
        <div className={styles.container}>
            <details className={`${styles.container_details} ${!isMobile && !isTablet && styles.container_hover}`}>
                <summary className={styles.container_summary}>
                    Подробнее
                    <MainPageSvg id={'arrow'} addClass={styles.container_icon} />
                </summary>
                <div className={styles.text}>{parse(text.replaceAll('&amp;nbsp;', '\u00A0').replaceAll('&amp;mdash;', '—'))}</div>
            </details>
        </div>
    );
};

export default MoreDetails;
