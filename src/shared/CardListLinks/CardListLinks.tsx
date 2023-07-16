import styles from './CardListLinks.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import api from '../../data/api';
import WhiteBoxSvg from '../svgs/WhiteBoxSvg';

const CardListLinks = ({ title, subtitle, dataArray, transformDataFunction, route, prefix, showTitle, setIsModalOpened }) => {
    const renderTitle = () => {
        if (subtitle) {
            return (
                <div className={styles.titleWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{title}</h1>
                        <button className={styles.cameraButton} onClick={() => setIsModalOpened(true)}>
                            <WhiteBoxSvg id={'camera'} addClass={styles.cameraIcon} />
                            <p>Веб-камера</p>
                        </button>
                    </div>
                    <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                </div>
            );
        } else {
            return <h1 className={`${styles.title} ${styles.title__marginBottom}`}>{title}</h1>;
        }
    };

    return (
        <div className={styles.container}>
            {renderTitle()}
            <main className={styles.main}>
                {dataArray &&
                    dataArray.length > 0 &&
                    dataArray.map((item) => {
                        const time = item.createdAt ? transformDataFunction(item.createdAt) : transformDataFunction(item.title);
                        const picture = item.imgPreview ? api.urlMain + prefix + item.imgPreview : item.fileUrl[0];

                        return (
                            <Link
                                key={item._id}
                                className={styles.topic}
                                href={{
                                    pathname: route + item.slug,
                                }}
                            >
                                <div className={styles.img}>
                                    <Image alt={item.title} src={picture} priority fill unoptimized sizes='(min-width: 540px) 100vw' />
                                    {item.createdAt ? (
                                        <time className={styles.createdAt}>{time}</time>
                                    ) : (
                                        <time className={`${styles.createdAt} ${styles.createdAt__column}`}>
                                            <p>{time.split(' ')[0]}</p>
                                            <p>{time.split(' ')[1]}</p>
                                        </time>
                                    )}
                                </div>
                                {showTitle && <p className={styles.text}>{item.title}</p>}
                            </Link>
                        );
                    })}
            </main>
        </div>
    );
};

export default CardListLinks;
