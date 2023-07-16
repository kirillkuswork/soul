import styles from './LikeButton.module.scss';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import Link from 'next/link';
import { handleDesktopBurger, handleHeightScroll } from '../../entities/mainSlice';
import { useDispatch } from 'react-redux';
import ROUTES from '../../data/routes';

interface IButton {
    addClass?: string;
}

const LikeButton = ({ addClass }: IButton) => {
    const dispatch = useDispatch();
    return (
        <Link href={ROUTES.favorites.root}>
            <button
                aria-label='like'
                onClick={() => {
                    dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                    dispatch(handleDesktopBurger({ isDesktopBurgerOpen: 'open', value: false }));
                }}
                className={` ${styles.likeBtn} 
        ${addClass === 'black' ? styles.likeBtn__black : 'undefined'}`}
            >
                <MainPageSvg addClass={styles.likeIcon} id={'like-icon'} />
            </button>
        </Link>
    );
};

export default LikeButton;
