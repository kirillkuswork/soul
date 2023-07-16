import map from '../../assets/images/landing/map/map.svg';
import mapMobile from '../../assets/images/landing/map/mapMobile.svg';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Map.module.scss';
import Tooltip from '../../shared/Tooltip/Tooltip';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ITooltip } from '../../shared/Tooltip/Tooltip';
import { mapSectionText, tooltips } from '../../assets/data/main';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { handleAnchor } from '../../entities/mainSlice';
import { Anchor } from '../../assets/data/enums';
import LinkArrowButton from '../../shared/LinkArrowButton/LinkArrowButton';
import ROUTES from '../../data/routes';

const Map = () => {
    const [allTooltips, setAllTooltips] = useState<ITooltip[]>(tooltips);
    const mobileWidth = useMediaQuery(540);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.LOCATION, value: Anchor.LOCATION }));
    }, [inView, dispatch]);

    const handleActiveTooltip = (id, active?) => {
        const restartedTooltips = allTooltips.map((tooltip) => {
            if (tooltip.active) {
                tooltip.active = false;
                return tooltip;
            } else {
                return tooltip;
            }
        });

        setAllTooltips(restartedTooltips);

        if (active) return;

        if (allTooltips.find((tooltip) => tooltip.id === id && tooltip.active === false)) {
            const changedActive = allTooltips.map((tooltip) => {
                if (tooltip.id === id && tooltip.active === false) {
                    tooltip.active = true;
                    return tooltip;
                } else {
                    return tooltip;
                }
            });

            setAllTooltips(changedActive);
        }
    };

    return (
        <div className={styles.container} ref={ref} id={Anchor.LOCATION}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: mapSectionText[0].title }}></h2>
            <div className={styles.desc}>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: mapSectionText[0].text }}></p>
            </div>

            <div className={styles.map}>
                {mobileWidth ? (
                    <div className={styles.img} onClick={() => handleActiveTooltip(99)}>
                        <Image
                            src={mapMobile}
                            alt='Карта'
                            fill
                            sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                        />
                    </div>
                ) : (
                    <div className={styles.img}>
                        <Image
                            src={map}
                            alt='Карта'
                            fill
                            sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'
                        />
                    </div>
                )}
                {allTooltips.map((el, index) => (
                    <Tooltip
                        key={index}
                        index={index}
                        id={el.id}
                        active={el.active}
                        distance={el.distance}
                        svgId={el.svgId}
                        title={el.title}
                        handleActiveTooltip={handleActiveTooltip}
                    />
                ))}
            </div>
            <div className={styles.link}>
                <LinkArrowButton route={ROUTES.location} text={'Расположение'} />
            </div>
        </div>
    );
};

Map.displayName = 'Map';

export default Map;
