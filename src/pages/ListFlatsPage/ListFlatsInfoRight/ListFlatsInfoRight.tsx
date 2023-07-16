import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/useReduxHooks';
import { isMobile, isTablet } from 'react-device-detect';
import ListFlatsDesktopFilter from '../ListFlatsDesktopFilter/ListFlatsDesktopFilter';
import ListFlatsTableFilter from '../ListFlatsTableFilter/ListFlatsTableFilter';
import ListFlatsMobileFilter from '../ListFlatsMobileFilter/ListFlatsMobileFilter';

const ListFlatsInfoRight = () => {
    const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
    const [isAdaptiveMobile, setisAdaptiveMobile] = useState<boolean>(false);
    const width = useAppSelector((state) => state.main.width);
    const orientation = useAppSelector((state) => state.main.orientation);
    const isShowFlatDescription = useAppSelector((state) => state.component.showFlatDescription);

    useEffect(() => {
        if (!width) return;
        isTablet && orientation === 'portrait' && setIsAdaptive(true);
        isMobile && width < 600 && setisAdaptiveMobile(true);
    }, [width, orientation]);

    return (
        <>
            {!isAdaptive && !isAdaptiveMobile && !isShowFlatDescription && <ListFlatsDesktopFilter />}
            {isAdaptive && <ListFlatsTableFilter />}
            {isAdaptiveMobile && <ListFlatsMobileFilter />}
        </>
    );
};

export default ListFlatsInfoRight;
