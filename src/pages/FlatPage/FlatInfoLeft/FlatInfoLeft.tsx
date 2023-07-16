import React, { FC, useEffect, useState } from 'react';
import styles from './FlatInfoLeft.module.scss';
import compas from '../../../assets/images/unknown/icons/compas.svg';
import SVG from 'react-inlinesvg';
import ButtonArrow from '../../../features/ButtonArrow/ButtonArrow';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IFlat } from '../../../assets/data/interfaces';
import Link from 'next/link';
import ROUTES from '../../../data/routes';

interface IFlatInfoLeft {
    flatNumber: string;
    flatSection?: string;
    flat?: IFlat;
}

const FlatInfoLeft: FC<IFlatInfoLeft> = ({ flatNumber, flatSection, flat }) => {
    const [view, setView] = useState<"furnished" | "with-sizes">("furnished");

    const handleChangeView = (view: "furnished" | "with-sizes") => {
        setView(view);
    }

    const openDemo = useAppSelector((state) => state?.component?.openDemonstration);
    const router = useRouter();

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

    const setLabels = () => {
        const flatScheme = document.getElementById('flat-plan')
        if (flatScheme) {
            const {left: planLeft, top: planTop, height: planHeight, width: planWidth} = flatScheme.getBoundingClientRect();
            const leftViewLabel = document.getElementById(`flat-view-label-left`);
            const rightViewLabel = document.getElementById(`flat-view-label-right`);
            const rightTopViewLabel = document.getElementById(`flat-view-label-right_top`);
            const rightBottomViewLabel = document.getElementById(`flat-view-label-right_bottom`);
            const topViewLabel = document.getElementById(`flat-view-label-top`);
            const bottomViewLabel = document.getElementById(`flat-view-label-bottom`);

            const topPositionForVerticalLabels = `${window.scrollY + planTop + planHeight / 2}px`;
            const leftPositionForHorizontalLabels = `${planLeft + planWidth / 2}px`;

            const setPositionForRightViewLabels = (node) => {
                if (node) {
                    node.style.top = topPositionForVerticalLabels;
                    node.style.left = `${planLeft + planWidth + 50}px`;
                    node.style.transform = `translate(-${node.clientWidth/2}px, -${node.clientHeight/2}px) rotate(-90deg)`;
                }
            }

            if (leftViewLabel) {
                leftViewLabel.style.top = topPositionForVerticalLabels;
                leftViewLabel.style.left = `${planLeft - 50}px`;
                leftViewLabel.style.transform = `translate(-${leftViewLabel.clientWidth/2}px, -${leftViewLabel.clientHeight/2}px) rotate(-90deg)`;
            }
            if (rightViewLabel || rightTopViewLabel || rightBottomViewLabel) {
                setPositionForRightViewLabels(rightViewLabel || rightTopViewLabel || rightBottomViewLabel);
            }
            if (bottomViewLabel) {
                bottomViewLabel.style.left = leftPositionForHorizontalLabels;
                bottomViewLabel.style.top = `${window.scrollY + planTop + planHeight + 30}px`;
                bottomViewLabel.style.transform = `translateX(-50%)`;
            }
            if (topViewLabel) {
                topViewLabel.style.left = leftPositionForHorizontalLabels;
                topViewLabel.style.top = `${window.scrollY + planTop - 30}px`;
                topViewLabel.style.transform = `translateX(-50%)`;
            }
        }
    }

    useEffect(() => {
        setLabels()
    }, [flat])

    return (
        <div className={styles.flatInfoLeft}>
            <div className={styles.flatInfoLeft__header}>
                <ButtonArrow
                    type='backroute'
                    routerBack={router.back}
                    description='Назад'
                >
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M20 10H4M4 10L7.90871 6.5M4 10L7.90871 13.5' stroke='#24292E' strokeWidth='1.5' />
                        <path d='M1 5L1 15' stroke='#24292E' strokeWidth='1.5' />
                    </svg>
                </ButtonArrow>
                <div className={styles.flatInfoLeft__btns}>
                    <button
                        className={`${styles.flatInfoLeft__btn} ${view === 'furnished' && styles.flatInfoLeft__btn_active}`}
                        onClick={() => handleChangeView('furnished')}
                    >
                        С мебелью
                    </button>
                    <button
                        className={`${styles.flatInfoLeft__btn} ${view !== 'furnished' && styles.flatInfoLeft__btn_active}`}
                        onClick={() => handleChangeView('with-sizes')}
                    >
                        С размерами
                    </button>
                </div>
            </div>

            <div className={styles.flatInfoLeft__content}>
                <div className={styles.flatInfoLeft__maincontent}>
                    <div className={styles.flatInfoLeft__compas}>
                        <Image src={compas.src} alt={'compas'} fill />
                    </div>
                    <div className={styles.flatInfoLeft__containerImg}>
                        {/* <img src="../../../../public/plans/22035/flats/furnished-plan/252.svg" alt="" /> */}
                        {flat?.bulk_id && (
                            <SVG src={`/plans/${flat?.bulk_id}/flats/${view}-plan/${flatNumber}.svg`} id={"flat-plan"} onLoad={setLabels}/>
                            // <Image src={`/plans/${flat?.bulk_id}/flats/${view}-plan/${flatNumber}.svg`} alt={'plans'} fill id={"flat-plan"}/>
                        )}
                    </div>
                    {/* <FlatVeiws imageModal={veiwBig.src} imageSmall={veiw.src} /> */}
                </div>
                <div className={styles.flatInfoLeft__subcontent}>
                    <div className={styles.flatInfoLeft__genplan}>
                        На генплане
                        <Link href={ROUTES.visual} className={styles.flatInfoLeft__genplanSvgWrapper}>
                            <SVG src={`/plans/genplanMini.svg`} onLoad={() => beforeSvgInjection()} id={'section'} />
                        </Link>
                        <div className={styles.flatInfoLeft__tooltip}>
                            К выбору корпуса
                        </div>
                    </div>
                    <div className={styles.flatInfoLeft__floor}>
                        {flat?.bulk_id && (<>
                            <div className={styles.flatInfoLeft__tooltip}>
                                К выбору квартиры
                            </div>
                            <Link href={`/visual/${flat?.bulk.number}/${flat?.floor}`}>
                                <SVG
                                    src={`/plans/${flat?.bulk_id}/floors/mini-floors/fl${flat?.floor}.svg`}
                                    onLoad={() => beforeSvgInjectionFloors()}
                                    id={'floors'}
                                />
                            </Link>
                            На этаже
                        </>)}
                    </div>
                </div>
            </div>
            {/* {openDemo && (
                <ModalFullPage>
                    <Image src={veiwBig.src} fill alt='veiwBig' loader={imageLoader} />
                </ModalFullPage>
            )} */}
        </div>
    );
};

export default FlatInfoLeft;
