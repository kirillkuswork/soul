import styles from './Article.module.scss';
import { LITE_BEIGE_COLOR } from '../../assets/data/consts';
import StripesRevealImage from '../../shared/StripesAnimation/StripesRevealImage';
import ROUTES from '../../data/routes';
import LinkArrowButton from '../../shared/LinkArrowButton/LinkArrowButton';

interface IArticle {
    isVertical?: boolean;
    imgArray: string[];
    title: string;
    imgAlt: string;
    text: string;
}

const Article = ({ imgArray, title, text, imgAlt, isVertical }: IArticle) => {
    return (
        <article className={`${styles.container} ${isVertical ? styles.container_vertical : 'undefined'}`}>
            <div className={styles.desc}>
                <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></p>
                <div dangerouslySetInnerHTML={{ __html: text }} className={styles.text}></div>
                {isVertical && <LinkArrowButton route={ROUTES.isofactory} text={'Подробнее про Изофабрику'} />}
            </div>
            <StripesRevealImage alt={imgAlt} images={imgArray} backgroundColor={LITE_BEIGE_COLOR} addClass={styles.img} />
        </article>
    );
};

export default Article;
