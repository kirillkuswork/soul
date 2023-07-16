import Footer from '../src/shared/Footer/Footer';
import ListFlatsMain from '../src/pages/ListFlatsPage/ListFlatsMain/ListFlatsMain';
import { useAppDispatch, useAppSelector } from '../src/hooks/useReduxHooks';
import { useEffect, useState } from 'react';
import {
    fetchCatalog,
    filterFlats,
    resetOnlyCheckboxes,
    sortFlats,
    toggleActiveSearchParams,
} from '../src/entities/catalogSlice';
import { disableBodyScroll, enableBodyScroll } from '../src/utils/body-scroll-lock';
import ListFlatsFilterModalTablet from '../src/pages/ListFlatsPage/ListFlatsFilterModalTablet/ListFlatsFilterModalTablet';
import styles from '../styles/ListPage.module.scss';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { useRouter } from 'next/router';

const ListFlats = () => {
    const allFlats = useAppSelector((state) => state.catalog.allFlats);
    const dispatch = useAppDispatch();
    const isMobileMenuFilters = useAppSelector((state) => state.component.isMobileMenuFilters);
    const isTabletMenuFilters = useAppSelector((state) => state.component.isTabletMenuFilters);
    const sortParameters = useAppSelector((state) => state.catalog.sortParameters);
    const inForm = useAppSelector((state) => state.catalog.inForm);
    const filtersByCheckbox = useAppSelector((state) => state.catalog.filterParameters.byCheckbox);
    const [prevPageUrlIsList, setPrevPageUrlIsList] = useState(false);
    const router = useRouter();
    const {query} = router

    const selectParameter = (value, id) => {
        //Изменение состояния искомого параметра на активное
        Object.keys(filtersByCheckbox).forEach(key => {
            if (key === id) {
                filtersByCheckbox[key].forEach(item => {
                    if (item.value === value) {
        dispatch(toggleActiveSearchParams({value, id}))
                    }
                })
            }
        })
        }

    useEffect(() => {
        const paramsKeys = Object.keys(query);
        dispatch(resetOnlyCheckboxes())
        if(paramsKeys.length !== 0) {
            paramsKeys.forEach(key => {
                const param = query[key] as string;
                param.split(",").forEach(value => {
                    selectParameter(value, key );
                })
            })

            dispatch(sortFlats({value: sortParameters.value, placeCall: inForm, array: "flats"}));
        } else if (!prevPageUrlIsList) {
            const params = Object.keys(filtersByCheckbox)
            .map(key => {
                    let activeItems = filtersByCheckbox[key]
                    activeItems = activeItems.filter(item => item.active)
                    if (activeItems.length > 0) {
                    return `${key}=${activeItems.map(item => item.value).join(',')}`
        }
                }).filter(item => !!item).join('&')
            if (!!params) {
                router.push(`/list${params.length > 0 ? ("?" + params) : ""}`)
            }
        } else {
            dispatch(filterFlats())
            dispatch(sortFlats({value: sortParameters.value, placeCall: inForm, array: "flats"}));
        }
        setPrevPageUrlIsList(true)
    }, [router])

    useEffect(() => {
        isMobileMenuFilters || isTabletMenuFilters ? disableBodyScroll() : enableBodyScroll();
    }, [isMobileMenuFilters, isTabletMenuFilters]);

    useEffect(() => {
        if (allFlats.length === 0) {
        dispatch(fetchCatalog());
        }
    }, [allFlats, dispatch]);

    useHeaderHook({ disappearCoefficient: 0.1 });

    return (
            <div className={styles.container}>
                <ListFlatsMain />
                {isTabletMenuFilters && <ListFlatsFilterModalTablet />}
                <Footer addClass='blue' />
            </div>
    );
};

export default ListFlats;
