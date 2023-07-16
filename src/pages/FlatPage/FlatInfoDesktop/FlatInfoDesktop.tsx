import React, { FC } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import FlatInfoLeft from '../FlatInfoLeft/FlatInfoLeft';
import FlatInfoRight from '../FlatInfoRight/FlatInfoRight';

import styles from './FlatInfoDesktop.module.scss';

interface IFlatInfo {
    flat: IFlat;
}

const FlatInfoDesktop: FC<IFlatInfo> = ({ flat }) => {
    return (
        <div className={styles.flatInfo}>
            <FlatInfoLeft flat={flat} flatSection={flat?.bulk?.name} flatNumber={flat?.number} />
            <FlatInfoRight flat={flat} />
        </div>
    );
};

export default FlatInfoDesktop;
