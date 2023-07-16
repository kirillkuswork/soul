import { useEffect } from 'react';
import { setLocalFlats } from '../../../entities/favoriteSlice';
import { useAppDispatch } from '../../../hooks/useReduxHooks';
import Wrapper from '../../../shared/Wrapper/Wrapper';
import ListFlatsInfoLeft from '../ListFlatsInfoLeft/ListFlatsInfoLeft';
import ListFlatsInfoRight from '../ListFlatsInfoRight/ListFlatsInfoRight';
import styles from './ListFlatsMain.module.scss';

const ListFlatsMain = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const favoriteLocal = (typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('favoriteList'))) || [];
        dispatch(setLocalFlats(favoriteLocal));
    }, [dispatch]);

    return (
        <div>
            <Wrapper>
                <div className={styles.listFlatsPage}>
                    <ListFlatsInfoLeft />
                    <aside className={styles.listFlatsPage__container}>
                        <ListFlatsInfoRight />
                    </aside>
                </div>
            </Wrapper>
        </div>
    );
};

export default ListFlatsMain;
