import Image from 'next/image';
import styles from './Block.module.scss';

interface IBlock {
    title: string;
    img: string;
    text: string;
}

const Block = ({ title, img, text }: IBlock) => {
    return (
        <div className={styles.block}>
            <div className={styles.img}>
                <Image src={img} alt={title} fill sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw' />
            </div>
            <div className={styles.info}>
                <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></p>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
        </div>
    );
};

export default Block;
