import imgBG from '../../../assets/images/landing/map/bg.webp';
import imgMD from '../../../assets/images/landing/map/md.webp';
import imgXS from '../../../assets/images/landing/map/xs.webp';

import styles from './Location.module.scss';
import Map from '../../../widgets/Map/Map';
import { useCallback, useEffect, useState } from 'react';

const Location = ({ width }) => {
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);

    useEffect(() => {
        if (width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <div className={styles.bg}>
                    <picture>
                        <source media='(max-width: 1200px)' srcSet={imgBG.src} />
                        <source media='(max-width: 1600px && min-width: 1600px)' srcSet={imgBG.src} />
                        <img alt={'Район Soul'} src={imgBG.src} />
                    </picture>
                </div>
            );
        } else {
            return (
                <div className={styles.bg}>
                    <picture>
                        <source media='(max-width: 540px)' srcSet={imgXS.src} />
                        <source media='(max-width: 1024px) and (orientation:portrait)' srcSet={imgMD.src} />
                        <img alt={'Район Soul'} src={imgMD.src} />
                    </picture>
                </div>
            );
        }
    }, [isAdaptive]);

    return (
        <div className={styles.container}>
            <div className={styles.picture}>{renderContent()}</div>
            <Map />
        </div>
    );
};

export default Location;
