import styles from './LinkArrowButton.module.scss';
import MainPageSvg from '../svgs/MainPageSvg';
import Link from 'next/link';

const LinkArrowButton = ({route, text}) => {
    return (
        <Link href={route} className={styles.btn}>
            <p className={styles.btn_text}>{text}</p>
            <MainPageSvg id={'arrow'} addClass={styles.btn_arrow} />
        </Link>
    );
};

export default LinkArrowButton;
