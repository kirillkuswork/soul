import { IFlat } from '../../../assets/data/interfaces';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import CatalogListItem from '../../../shared/CatalogListItem/CatalogListItem';
import ListBar from '../../../shared/ListBar/ListBar';
import Wrapper from '../../../shared/Wrapper/Wrapper';

import styles from './FlatSimilar.module.scss';

const FlatSimilar = () => {
    const similarFlats = useAppSelector((state) => state.catalog.similarFlats);

    const flatElementsList = similarFlats?.map((flat: IFlat, index: number) => {
        return <CatalogListItem flat={flat} key={flat.id} />;
    });

    return (
        <div className={styles.flatSimilar}>
            <Wrapper>
                <h2 className={styles.flatSimilar__title}>Похожие предложения</h2>
                <div className={styles.flatSimilar__container}>
                    <ListBar color='blue' sort={'similarFlats'} />
                    <div className={styles.flatSimilar__flats}>{flatElementsList}</div>
                </div>
            </Wrapper>
        </div>
    );
};

export default FlatSimilar;
