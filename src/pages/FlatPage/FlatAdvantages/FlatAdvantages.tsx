import React, { FC } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import { useAppSelector } from '../../../hooks/useReduxHooks';

import styles from './FlatAdvantages.module.scss';

interface IFlatAdvantages {
    flat?: IFlat;
    white?: string;
}

const FlatAdvantages: FC<IFlatAdvantages> = ({ flat, white }) => {
    const advantages = useAppSelector((state) => state?.catalog?.filterParameters?.byCheckbox?.advantages);

    const activeAttributes = Object.entries(flat?.attributes)
        ?.filter((item) => item.includes(true))
        ?.map((item) => item.slice(0, 1).toString());

    const activeAdvantages = advantages?.filter((advantage) => activeAttributes?.includes(advantage.value));

    const tooltipElements = activeAdvantages?.map((item, i) => {
        return (
            <div style={white && { backgroundColor: 'white' }} key={i + item.name} className={styles.advantages__btn}>
                {item.value === "highCeiling"
                    ? `Потолок ${String(flat.ceilingHeight).replace(".", ",")} м`
                    : item.name
                }
            </div>
        );
    });

    return <div className={styles.advantages}>{tooltipElements}</div>;
};

export default FlatAdvantages;
