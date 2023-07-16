import styles from './PopUp.module.scss';
import Link from 'next/link';
import { handleNewUser } from '../../entities/mainSlice';
import { useDispatch } from 'react-redux';
import ROUTES from '../../data/routes';

const PopUp = () => {
    const newUserName = 'soul_user';
    const newUserDate =
        new Date().toLocaleDateString() + '/' + new Date().getHours() + '/' + new Date().getMinutes() + '/' + new Date().getSeconds();

    const dispatch = useDispatch();

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>Мы используем файлы cookie.</p>
                <Link href={ROUTES.privacy} rel='noopener noreferrer' target='_blank'>
                    <span>Соглашение об использовании</span>
                </Link>
            </div>
            <button
                className={styles.btn}
                onClick={() => {
                    setCookie(newUserName, newUserDate, 365);
                    dispatch(handleNewUser({ isANewUser: 'new', value: false }));
                }}
            >
                Принять
            </button>
        </div>
    );
};

export default PopUp;
