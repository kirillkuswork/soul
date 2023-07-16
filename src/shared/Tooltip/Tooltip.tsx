import { memo } from 'react';
import MainPageSvg from '../svgs/MainPageSvg';
import styles from './Tooltip.module.scss';
import { isMobile, isTablet } from 'react-device-detect';

export interface ITooltip {
    index?: number;
    id: number;
    title: string;
    distance?: string;
    svgId: string;
    active?: boolean;
    handleActiveTooltip?: (id, active?) => void;
}

const Tooltip = ({ index, id, title, distance, svgId, active, handleActiveTooltip }: ITooltip) => {
    const point = () => {
        if (svgId === 'tooltip-4000') return styles.point__left;
        else if (svgId === 'tooltip-1500') return styles.point__right;
        else {
            return styles.point;
        }
    };

    const changeTooltip = () => {
        if (svgId === 'soul') {
            return <MainPageSvg id={svgId} addClass={styles.soulIcon} />;
        } else if (svgId === 'metro') {
            return (
                <div className={styles.metro_container}>
                    <MainPageSvg id={svgId} addClass={styles.metro} />
                    {title}
                </div>
            );
        } else {
            return <MainPageSvg id={svgId} addClass={point()} />;
        }
    };

    return (
        <>
            {svgId === 'metro' ? (
                <div className={`${styles[`tooltip--${index}`]} ${styles.tooltip}`}>{changeTooltip()}</div>
            ) : (
                <div
                    onMouseEnter={() => !isTablet && !isMobile && handleActiveTooltip(id)}
                    onMouseLeave={() => !isTablet && !isMobile && handleActiveTooltip(99)}
                    onClick={() => {
                        if (isTablet || isMobile) {
                            handleActiveTooltip(id, active);
                        }
                    }}
                    className={`${styles[`tooltip--${index}`]} ${styles.tooltip}`}
                >
                    {active && (
                        <div className={`${styles[`hint--${index}`]} ${styles.hint}`}>
                            <p className={styles.hint__title}>{title}</p>
                            <p className={styles.hint__distance}>{distance}</p>
                        </div>
                    )}
                    {changeTooltip()}
                </div>
            )}
        </>
    );
};

export default memo(Tooltip);
