import { useSelector } from 'react-redux';
import { AppState } from '../entities/store';
import { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

interface IFlexibleHeading {
    text: string;
    addClass?: string;
}

const FlexibleHeading = ({ text, addClass }: IFlexibleHeading) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    return (
        <>
            {!isAdaptive ? (
                <h3 className={addClass} dangerouslySetInnerHTML={{ __html: text }}></h3>
            ) : (
                <h2 className={addClass} dangerouslySetInnerHTML={{ __html: text }}></h2>
            )}
        </>
    );
};

export default FlexibleHeading;
