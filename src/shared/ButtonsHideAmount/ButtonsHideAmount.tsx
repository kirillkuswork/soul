import React from 'react';
import { separateArray } from '../../tools/_separateArray';
import { useAppSelector } from '../../hooks/useReduxHooks';

import style from './ButtonsHideAmount.module.scss';
import AdvantagesSvg from '../svgs/AdvantagesSvg';

const ButtonsHideAmount = ({ flat, amount }) => {
    const advantages = useAppSelector((state) => state?.catalog.filterParameters?.byCheckbox?.advantages);

    const activeAttributes = Object.entries(flat?.attributes)
        ?.filter((item) => item.includes(true))
        ?.map((item) => item.slice(0, 1).toString());

    const activeAdvantages = advantages?.filter((advantage) => activeAttributes?.includes(advantage.value));

    const tooltipElements = separateArray(activeAdvantages, amount)?.visible?.map((item, i) => {
        return (
            <div key={item.name + i} className={style.btn__special}>
                <AdvantagesSvg id={item.value} />
                <div className={style.btn__hidename}>{item.name}</div>
            </div>
        );
    });

    return (
        <div className={style.btn}>
            <div className={style.btn__wrapp}>{tooltipElements}</div>
            {separateArray(activeAdvantages, amount)?.unvisible?.length !== 0 && (
                <div className={style.btn__advantages}>
                    <div className={style.btn__special__unvisible}>{`+${separateArray(activeAdvantages, amount)?.unvisible?.length}`}</div>
                    <div className={style.btn__hideAdv}>
                        {separateArray(activeAdvantages, amount)?.unvisible?.map((el, i) => {
                            return <div key={el.name + i}> {el.name} </div>;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonsHideAmount;
