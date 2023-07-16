import Image from 'next/image';
import compas from '../../assets/images/unknown/icons/compas.svg';
import React, { FC, useCallback, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import styles from './DisplayOnMiniGenPlan.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IDisplayMini {
    flatSection: string | string[];
    showTooltip?: boolean;
}
const DisplayOnMiniGenPlan: FC<IDisplayMini> = ({ flatSection, showTooltip }) => {
    const router = useRouter();
    const beforeSvgInjection = useCallback(() => {
        if (flatSection?.slice(-1) === router.query.houseId) {
            document.getElementById(`mask${flatSection?.slice(-1)}`)?.classList.add(`flatInfoLeft__printed`);
        } else {
            document.getElementById(`mask${flatSection?.slice(-1)}`)?.classList.remove(`flatInfoLeft__printed`);
        }
    }, [flatSection, router.query.houseId]);

    useEffect(() => {
        beforeSvgInjection();
    }, [router.query.houseId, flatSection, beforeSvgInjection]);

    return (
        <div className={styles.displayOnMiniGenPlan}>
            <div className={styles.displayOnMiniGenPlan__compas}>
                <Image src={compas.src} alt={'compas'} fill />
            </div>
            <div className={styles.displayOnMiniGenPlan__genplan}>
                {showTooltip
                    ? <>
                        На генплане
                        <Link href={`/visual`} className={styles.displayOnMiniGenPlan__svgWrapper}>
                            <SVG src={`/plans/genplanMini.svg`}
                                 onLoad={() => beforeSvgInjection()}
                                 id={'section'} />
                        </Link>
                        <div className={styles.displayOnMiniGenPlan__tooltip}>
                            К выбору корпуса
                        </div>
                    </>
                    : <SVG src={`/plans/genplanMini.svg`}
                           className={styles.displayOnMiniGenPlan__svgWithoutStyles}
                           onLoad={() => beforeSvgInjection()}
                           id={'section'} />}
            </div>
        </div>
    );
};

export default DisplayOnMiniGenPlan;
