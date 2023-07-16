import styles from './BackButton.module.scss';
import MainPageSvg from '../svgs/MainPageSvg';
import React from 'react';
import { useRouter } from 'next/router';

const BackButton = () => {
    const router = useRouter();

    return <button type={'button'} className={styles.backButton} onClick={() => router.back()}>
        <MainPageSvg id={'arrow'} addClass={styles.arrow} />
        <p>Назад</p>
    </button>
}

export default BackButton;