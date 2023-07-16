import styles from './Loader.module.scss';
import MainPageSvg from "../../shared/svgs/MainPageSvg";

const Loader = () => {
    return (
        <div className={styles.container}>
            <MainPageSvg id={'soul-icon-big'} addClass={styles.icon}/>
        </div>
    )
}

export default Loader;