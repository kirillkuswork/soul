import styles from './BurgerModal.module.scss';
import Link from 'next/link';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import { useDispatch } from 'react-redux';
import { handleBurger, handleHeightScroll } from '../../entities/mainSlice';
import NavElAdaptive from '../../shared/NavElAdaptive/NavElAdaptive';
import ROUTES from '../../data/routes';

export interface IMenuItem {
    hide: boolean;
    path: string;
    value: string;
    id: number;
}

export interface IBurgerMenuItem {
    _id: string;
    name: string;
    title: string;
    __v: number;
    menuItems: IMenuItem[];
}

const BurgerModal = ({ burgerMenu, phone, time, tg, vk }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div>
                <Link
                    onClick={() => {
                        dispatch(handleBurger({ isBurgerOpen: 'open', value: false }));
                        dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                    }}
                    href={'/'}
                    className={styles.navEl}
                >
                    Главная
                </Link>
                <nav>
                    {burgerMenu.map((el, i) => {
                        if (el?.menuItems?.length > 0) return <NavElAdaptive key={i} burgerEl={el} addClass={styles.navEl} />;
                    })}
                </nav>
                <Link
                    onClick={() => {
                        dispatch(handleBurger({ isBurgerOpen: 'open', value: false }));
                        dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
                    }}
                    href={ROUTES.favorites.root}
                    className={styles.navEl}
                >
                    Избранное
                </Link>
            </div>
            <div className={styles.requisites}>
                <Link href={`tel:${phone.link}`} className={styles.phone} dangerouslySetInnerHTML={{ __html: phone.text }}></Link>
                <time className={styles.time}>{time}</time>
                <div className={styles.social}>
                    <Link target='_blank' href={`${tg}`} className={`${styles.tg} ${styles.link}`}>
                        <MainPageSvg id={'tg'} />
                    </Link>
                    <Link target='_blank' href={`${vk}`} className={`${styles.vk} ${styles.link}`}>
                        <MainPageSvg id={'vk'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BurgerModal;
