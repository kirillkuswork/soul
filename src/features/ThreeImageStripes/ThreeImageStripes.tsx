import styles from './ThreeImageStripes.module.scss';
import StripesRevealImage from '../../shared/StripesAnimation/StripesRevealImage';
import { WHITE_COLOR } from '../../assets/data/consts';

const ThreeImageStripes = ({ images }) => {
    return (
        <div className={styles.images}>
            {images.map((el, i) => {
                return (
                    <StripesRevealImage
                        key={el}
                        alt={`Image ${i}`}
                        images={el}
                        backgroundColor={WHITE_COLOR}
                        addClass={`${styles[`img--${i}`]} ${styles.img}`}
                    />
                );
            })}
        </div>
    );
};

export default ThreeImageStripes;
