import React, { FC, useEffect, useState } from 'react';
import compas from '../../../assets/images/unknown/icons/compas.svg';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import ModalFullPage from '../../ModalFullPage/ModalFullPage';
import Image from 'next/image';
import SVG from 'react-inlinesvg';
import styles from './FlatInfoTopAdaptive.module.scss';
import { isMobile } from 'react-device-detect';
import { IFlat } from '../../../assets/data/interfaces';
import { useRouter } from 'next/router';

interface IFlatInfoTop {
    flatNumber: string;
    flatSection?: string;
    floor?: number;
    flat: IFlat;
}

const FlatInfoTopAdaptive: FC<IFlatInfoTop> = ({ flatNumber, flatSection, floor, flat }) => {
    const [view, setView] = useState<'furnished' | 'with-sizes'>('furnished');

    const handleChangeView = (view: 'furnished' | 'with-sizes') => {
        setView(view);
    };

    const openDemo = useAppSelector((state) => state?.component?.openDemonstration);
    const width = useAppSelector((state) => state.main.width);
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (!width) return;
        isMobile && width < 600 && setIsAdaptive(true);
    }, [width]);

    useEffect(() => {
        openDemo ? disableBodyScroll() : enableBodyScroll();
    }, [openDemo]);

    const beforeSvgInjection = () => {
        if (flatSection?.slice(-1) === router.query.houseId) {
            document.getElementById(`mask${flatSection?.slice(-1)}`)?.classList.add(`flatInfoLeft__printed`);
        } else {
            document.getElementById(`mask${flatSection?.slice(-1)}`)?.classList.remove(`flatInfoLeft__printed`);
        }
    };

    const beforeSvgInjectionFloors = () => {
        if (flatNumber === router.query.flatId) {
            document.getElementById(`fl${flatNumber}`)?.classList.add(`flatInfoLeft__printedFloor`);
        } else {
            document.getElementById(`fl${flatNumber}`)?.classList.remove(`flatInfoLeft__printedFloor`);
        }
    };

    useEffect(() => {
        beforeSvgInjectionFloors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, flatSection, flat]);

    useEffect(() => {
        beforeSvgInjection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.houseId, flatNumber]);

    return (
        <div className={styles.flatInfoTopAdaptive}>
            <div className={styles.flatInfoTopAdaptive__btns}>
                <button
                    className={`${styles.flatInfoTopAdaptive__btn} ${view === 'furnished' && styles.flatInfoTopAdaptive__btn_active}`}
                    onClick={() => handleChangeView('furnished')}
                >
                    С мебелью
                </button>
                <button
                    className={`${styles.flatInfoTopAdaptive__btn} ${view !== 'furnished' && styles.flatInfoTopAdaptive__btn_active}`}
                    onClick={() => handleChangeView('with-sizes')}
                >
                    С размерами
                </button>
            </div>
            {!isAdaptive ? (
                <div className={styles.flatInfoTopAdaptive__content}>
                    <div className={styles.flatInfoTopAdaptive__maincontent}>
                        <div className={styles.flatInfoTopAdaptive__mainorientation}>
                            <div className={styles.flatInfoTopAdaptive__orientation}>
                                <div className={styles.flatInfoTopAdaptive__compas}>
                                    <Image src={compas.src} alt={'compas'} fill sizes='(max-width: 540px) 10vw' />
                                </div>
                                <div className={styles.flatInfoTopAdaptive__genplan}>
                                    <SVG
                                        src={`/plans/genplanMini.svg`}
                                        className='FlatSchemes__floorPlan'
                                        onLoad={() => beforeSvgInjection()}
                                        id={'section'}
                                    />
                                </div>
                            </div>
                            <div className={styles.flatInfoTopAdaptive__containerImg}>
                                {flat?.bulk_id && (
                                    <Image
                                        src={`/plans/${flat?.bulk_id}/flats/${view}-plan/${flatNumber}.svg`}
                                        alt={'plans'}
                                        fill
                                        sizes='(max-width: 540px) 100vw'
                                    />
                                )}
                            </div>
                        </div>
                        <div className={styles.flatInfoTopAdaptive__floor}>
                            {flat?.bulk_id && (
                                <SVG
                                    src={`/plans/${flat?.bulk_id}/floors/mini-floors/fl${floor}.svg`}
                                    className='FlatSchemes__floorPlan'
                                    onLoad={() => beforeSvgInjectionFloors()}
                                    id={'floors'}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.flatInfoTopAdaptive__content}>
                    <div className={styles.flatInfoTopAdaptive__containerImg}>
                        {flat?.bulk_id && (
                            <Image
                                src={`/plans/${flat?.bulk_id}/flats/${view}-plan/${flatNumber}.svg`}
                                alt={'plans'}
                                fill
                                sizes='(max-width: 540px) 100vw'
                            />
                        )}
                    </div>
                    <div className={styles.flatInfoTopAdaptive__maincontent}>
                        <div className={styles.flatInfoTopAdaptive__orientation}>
                            <div className={styles.flatInfoTopAdaptive__compas}>
                                <Image src={compas.src} alt={'compas'} fill sizes='(max-width: 540px) 10vw' />
                            </div>
                            <div className={styles.flatInfoTopAdaptive__floor}>
                                {flat?.bulk_id && (
                                    <SVG
                                        src={`/plans/${flat?.bulk_id}/floors/mini-floors/fl${flat?.floor}.svg`}
                                        className='FlatSchemes__floorPlan'
                                        onLoad={() => beforeSvgInjectionFloors()}
                                        id={'floors'}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={styles.flatInfoTopAdaptive__genplan}>
                            <SVG
                                src={`/plans/genplanMini.svg`}
                                className='FlatSchemes__floorPlan'
                                onLoad={() => beforeSvgInjection()}
                                id={'section'}
                            />
                        </div>
                    </div>
                </div>
            )}
            {openDemo && <ModalFullPage>{/* <Image src={veiwBig.src} fill alt='veiwBig' loader={imageLoader} /> */}</ModalFullPage>}
        </div>
    );
};

export default FlatInfoTopAdaptive;
