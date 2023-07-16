import { useEffect } from 'react';
import styles from './Message.module.scss';
import { disableBodyScroll } from '../../utils/body-scroll-lock';
import { handleVisibleHeader } from '../../entities/mainSlice';
import { useDispatch } from 'react-redux';

export default function MessageScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handleVisibleHeader({ visibleHeader: 'changed', value: false }));
        disableBodyScroll();
    }, []);

    return (
        <div className={styles.container}>
            <span>Для корректной работы сайта, пожалуйста, переверните устройство</span>
        </div>
    );
}
