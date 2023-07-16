import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { handleAppScroll, handleAppScrollStart, handleHeightScroll, handleVisibleHeader } from '../entities/mainSlice';
import { AppState } from '../entities/store';

interface ICoefficients {
    disappearCoefficient: number;
    BGCoefficientDesktop?: number;
    BGCoefficientMobile?: number;
}

const useHeaderHook = ({ disappearCoefficient, BGCoefficientDesktop, BGCoefficientMobile }: ICoefficients) => {
    const dispatch = useDispatch();
    const width = useSelector<AppState, number>((state) => state.main.width);
    const height = useSelector<AppState, number>((state) => state.main.height);

    useEffect(() => {
        dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
        let scrollStartMob = 0;

        const handleHeader = () => {
            if (window.scrollY > 100) {
                dispatch(handleAppScroll({ appScroll: 'changed', value: true }));
            } else if (window.scrollY <= 100) {
                dispatch(handleAppScroll({ appScroll: 'changed', value: false }));
            }

            if (window.scrollY > 20) {
                dispatch(handleAppScrollStart({ appScrollStart: 'changed', value: true }));
            } else if (window.scrollY <= 20) {
                dispatch(handleAppScrollStart({ appScrollStart: 'changed', value: false }));
            }
            //BGBreakpoint - когда появляется бежевая подложку у хедера при движении вниз: height*0.1 -team, index- height*0.95
            const breakPoint = isMobile || width < 540 ? height * BGCoefficientMobile : height * BGCoefficientDesktop;
            if (window.scrollY > breakPoint) {
                dispatch(handleHeightScroll({ heightScroll: 'changed', value: true }));
            } else if (window.scrollY <= breakPoint) {
                dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
            }

            // disappearBreakPoint - когда пропадает хедер на 1 экране при скролле вниз delta!  height*0.1 -team, index -height*0.9
            const st = window.scrollY;
            if (window.scrollY > height * disappearCoefficient) {
                if (st > scrollStartMob) {
                    dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: false }));
                    scrollStartMob = st;
                } else if (st < scrollStartMob) {
                    dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
                    scrollStartMob = st;
                } else scrollStartMob = st;
            }
        };
        window.addEventListener('scroll', handleHeader);

        return () => {
            dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
            dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: true }));
            window.removeEventListener('scroll', handleHeader);
        };
    }, [BGCoefficientDesktop, BGCoefficientMobile, disappearCoefficient, dispatch, height, width]);

    return;
};

export default useHeaderHook;
