import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import styles from './Form.module.scss';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import ReusableButton from '../ReusableButton/ReusableButton';
import InputPhone from '../InputPhone/InputPhone';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal } from '../../entities/mainSlice';
import ROUTES from '../../data/routes';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import { AppState } from '../../entities/store';

interface IData {
    formNameData?: string;
    formMessage?: boolean;
    setIsForm?: (arg?: boolean) => void;
    numbers?: string[];
    modalForm?: boolean;
}
const Form = ({ formNameData, formMessage, setIsForm, numbers, modalForm }: IData) => {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            phone: '',
            name: '',
            politics: false,
            message: '',
        },
    });
    const dispatch = useDispatch();
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);

    useEffect(() => {
        if (width < 540 || isMobile) {
            setIsAdaptive(true);
        }
    }, [width]);

    const validateName = (error) => {
        if (error.type === 'minLength') {
            return 'Слишком короткое имя';
        } else if (error.type === 'maxLength') {
            return 'Слишком длинное имя';
        } else if (error.type === 'required') {
            return 'Пожалуйста, укажите имя';
        } else {
            return 'Запрещенные символы в имени';
        }
    };
    const maskPhonePattern = /^$|^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/i;

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const getFormName = () => {
        if (formNameData) {
            return formNameData;
        } else {
            return 'homepageForm';
        }
    };

    const formName = getFormName();

    useEffect(() => {
        let apartmentsNumbersString = '';
        if (numbers) {
            const localStorageArray = numbers;
            localStorageArray.forEach((item) => {
                if (item) {
                    apartmentsNumbersString += item + ', ';
                } else apartmentsNumbersString += item + ', ';
            });
            apartmentsNumbersString = apartmentsNumbersString.slice(0, -2);
            if (apartmentsNumbersString !== '') {
                console.log(numbers.length);
                setValue('message', `Меня интересуют ${numbers.length == 1 ? 'квартира' : 'квартиры'}  ${apartmentsNumbersString}`);
            }
        }
    }, [numbers, setValue]);

    const onSubmit = async (data) => {
        data['formname'] = formName;
        data['cm_data'] = getCookie('cm_data');

        if (formName.includes('MidRiseBuildingsForm')) {
            data.message = 'Меня интересуют среднеэтажные дома';
        }

        await axios.get('/api/v2/get_token').then((response) => {
            data.sessionID = response.data;
        });

        reset();

        axios
            .post('/api/forms', { ...data }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response);
                window.dataLayer.push({
                    event: 'event-to-gtm',
                    eventCategory: 'Form',
                    eventAction: 'Send',
                    eventLabel: formName,
                });
                setIsForm && setIsForm(false);
                dispatch(handleModal({ modal: 'open', value: 'success' }));
            })
            .catch((error) => {
                console.log(error);
                setIsForm && setIsForm(false);
                dispatch(handleModal({ modal: 'open', value: 'error' }));
            });
    };

    return (
        <div className={styles.form}>
            {isAdaptive && modalForm && (
                <button className={styles.form__closebtn} onClick={() => setIsForm && setIsForm(false)}>
                    <MainPageSvg id='close' />
                </button>
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.container + ' ' + `${formName ? formName : 'homepageForm'}`}
                name={'orderCallModalForm'}
            >
                <p className={styles.disclaimer}>
                    Заполните форму, и наши специалисты перезвонят в течение 10 минут, чтобы предоставить подробные ответы на вопросы.
                </p>

                <div className={styles.input__wrapper}>
                    <input
                        {...register('name', { required: true, minLength: 2, maxLength: 30, pattern: /^[^-\s][a-zA-Zа-яёА-ЯЁ\s\-]+$/ })}
                        className={styles.input}
                        id={'firstName'}
                        name={'name'}
                        placeholder={' '}
                        type='text'
                    />
                    {!errors.name ? (
                        <label htmlFor='firstName' className={styles.input__label}>
                            Имя
                        </label>
                    ) : (
                        <span className={`${styles.error} ${styles.error__input}`}>{validateName(errors?.name)}</span>
                    )}
                </div>
                <div className={`${styles.input__wrapper} ${formMessage ? styles.input__margin : ''}`}>
                    <Controller
                        control={control}
                        name='phone'
                        rules={{ required: true, pattern: maskPhonePattern }}
                        render={({ field: { ...field } }) => (
                            <InputPhone name='phone' field={field} addClass={styles.input} id={'phone'} placeholder={' '} />
                        )}
                    />
                    {!errors.phone ? (
                        <label htmlFor='phone' className={styles.input__label}>
                            Телефон
                        </label>
                    ) : (
                        <span className={`${styles.error} ${styles.error__input}`}>Неправильный номер телефона</span>
                    )}
                </div>
                {formMessage && (
                    <div className={styles.input__wrapper}>
                        <textarea className={styles.input} placeholder={''} id='message' {...register('message')} />
                        <label htmlFor='message' className={styles.input__label}>
                            Сообщение
                        </label>
                    </div>
                )}
                <div className={styles.checkbox}>
                    <label htmlFor='politics' className={styles.checkbox__label}>
                        Я даю согласие на обработку моих персональных данных согласно
                        <Link target='_blank' className={`${styles.checkbox__label} ${styles.checkbox__politics}`} href={ROUTES.privacy}>
                            {' '}
                            политике конфиденциальности.
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
    );
};

export default Form;
