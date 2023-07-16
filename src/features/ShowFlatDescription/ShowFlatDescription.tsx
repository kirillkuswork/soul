import Image from 'next/image';
import React, { FC } from 'react';
import { AdvantageType, AttributesType } from '../../data/models/typesFlat';
import { useAppSelector } from '../../hooks/useReduxHooks';
import FlatInfoBlock from '../../pages/FlatPage/FlatInfoBlock/FlatInfoBlock';
import styles from './ShowFlatDescription.module.scss';

interface IShowFlatDescription {
    image: string;
    advantages: AttributesType;
    grey?: boolean;
}

const ShowFlatDescription: FC<IShowFlatDescription> = ({ image, advantages, grey }) => {
    const catalogAdvantages = useAppSelector((state) => state.catalog.filterParameters.byCheckbox.advantages);

    const advantagesItem = catalogAdvantages
        .map((item: AdvantageType) => {
            if (advantages[item.value]) {
                return <FlatInfoBlock advantage={true} key={item.value} description={item.name} />;
            }
        })
        .filter((el) => el)
        .slice(0, 3);

    return (
        <div className={grey ? styles.showFlatDescription__grey : styles.showFlatDescription}>
            <div>
                <div className={styles.showFlatDescription__plans}>
                    <Image src={image} alt={'plans'} fill />
                </div>
                {/* <div className={styles.showFlatDescription__compas}>
                    <Image src={compas.src} alt={'plans'} fill loader={imageLoader} />
                </div> */}
            </div>
            <div>{advantagesItem}</div>
            <p className={styles.showFlatDescription__deadline}>Ввод в эксплуатацию до 30.09.2025. Ключи до 30.12.2025</p>
        </div>
    );
};

export default ShowFlatDescription;
