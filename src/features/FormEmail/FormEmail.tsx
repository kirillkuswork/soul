import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import styles from './FormEmail.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';
import * as yup from 'yup';
import { yupResolver } from '../../../node_modules/@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { handleModal } from '../../entities/mainSlice';
import ROUTES from '../../data/routes';
import { AppState, useAppDispatch } from '../../entities/store';
import { FC, useState } from 'react';
import MainPageSvg from '../../shared/svgs/MainPageSvg';

interface IFormEmail {
    handleClose: () => void;
}

const FormEmail: FC<IFormEmail> = ({ handleClose }) => {
    const isFormOpen = useSelector<AppState, boolean>((store) => store.main.isFormOpen);
    const schema = yup.object().shape({
        email: yup.string().email('Неверный формат').required('Обязательное поле'),
        agreement: yup.bool().oneOf([true], 'Обязательное поле'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            politics: false,
        },
    });

    let flatsIdsString = '';

    if (localStorage.getItem('favoriteList')) {
        const localStorageArray = JSON.parse(localStorage.getItem('favoriteList'));
        localStorageArray.forEach((item) => {
            flatsIdsString += item.id + '|';
        });
        flatsIdsString = flatsIdsString.slice(0, -1);
    }

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const dispatch = useAppDispatch();

    const onSubmit = (data) => {
        axios
            .post('api/favorites/send', {
                ...data,
                'form-name': 'Отправить презентацию',
                'mail-theme': 'Презентация избранных предложений ЖК Soul',
                'mail-text':
                    '<p><b>Благодарим вас за интерес!</b></p>' +
                    '<p>Вы просматривали предложения на сайте ЖК Soul. Презентация предложений приложена к письму.</p>' +
                    '<p>По всем интересующим вас вопросам обращайтесь по телефону: +7 (495) 181-34-77</p>',
                ids: flatsIdsString,
                cm_data: getCookie('cm_data'),
            })
            .then(() => {
                reset();
                window.dataLayer.push({
                    event: 'event-to-gtm',
                    eventCategory: 'Form',
                    eventAction: 'Send',
                    eventLabel: 'Отправить презентацию',
                });
                handleClose();
                dispatch(handleModal({ modal: 'email', value: 'email' }));
            })
            .catch((error) => {
                console.log(error.data);

                dispatch(handleModal({ modal: 'open', value: 'error' }));
            });
    };

    return (
        <>
            <div className={styles.form}>
                <div className={styles.form__close} onClick={() => handleClose()}>
                    <MainPageSvg id='close' />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.container} name={'orderCallModalForm'}>
                    <p className={styles.disclaimer}>Отправить на почту</p>

                    <div className={styles.input__wrapper}>
                        <input
                            className={styles.input}
                            id={'firstName'}
                            name={'email'}
                            placeholder={''}
                            type='email'
                            {...register('email')}
                        />
                        {!errors.email ? (
                            <label htmlFor='firstName' className={styles.input__label}>
                                Укажите Email
                            </label>
                        ) : (
                            <span className={`${styles.error} ${styles.error__input}`}>{errors?.email?.message}</span>
                        )}
                    </div>
                    {isFormOpen && (
                        <div className={styles.input__wrapper}>
                            <textarea className={styles.input} placeholder={' '} id='message' />
                            <label htmlFor='message' className={styles.input__label}>
                                Сообщение
                            </label>
                        </div>
                    )}
                    <div className={styles.checkbox}>
                        <label htmlFor='politics' className={styles.checkbox__label}>
                            Я даю согласие на  обработку моих персональных данных согласно
                            <Link className={`${styles.checkbox__label} ${styles.checkbox__politics}`} href={ROUTES.privacy}>
                                {' '}
                                политике  конфиденциальности.
                            </Link>
                            {errors?.politics && <span className={styles.error}> Обязательное поле</span>}
                        </label>
                        <input
                            id={'politics'}
                            type={'checkbox'}
                            name={'politics'}
                            className={styles.checkbox__input}
                            checked
                            {...register('politics', { required: true })}
                        />
                    </div>
                    <ReusableButton content={'Отправить'} size={'big'} type={'submit'} />
                </form>
                <MainPageSvg id={'soul-icon-big'} addClass={styles.icon} />
            </div>
        </>
    );
};

export default FormEmail;
