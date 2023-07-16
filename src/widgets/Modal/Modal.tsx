import React from 'react';
import style from './Modal.module.scss';
import { handleModal } from '../../entities/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../entities/store';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import { useRouter } from 'next/router';

export default function Modal() {
    const dispatch = useDispatch();
    const status = useSelector<AppState, string>((store) => store.main.modal.modalStatus);
    const route = useRouter();
    switch (route.pathname) {
        case '/favorites': {
            return (
                <div className={style.modal}>
                    <div className={style.modal__inner}>
                        <button
                            aria-label='close'
                            className={style.modal__btn}
                            onClick={() => {
                                dispatch(handleModal({ modal: 'close' }));
                            }}
                        >
                            <MainPageSvg id='close' />
                        </button>
                        <div>
                            <h3 className={`${status === 'error' ? `${style.red}` : `${style.white}`}`}>
                                {status === 'error' ? 'Что-то пошло не так' : 'Ваша заявка принята '}
                            </h3>
                            {status === 'email' && <p>Вам отправлено письмо</p>}
                            {status === 'success' && <p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей</p>}
                            {status === 'error' && <p>Повторите попытку позже</p>}
                        </div>
                    </div>
                </div>
            );
        }
        default: {
            return (
                <div className={style.modal}>
                    <div className={style.modal__inner}>
                        <button
                            aria-label='close'
                            className={style.modal__btn}
                            onClick={() => {
                                dispatch(handleModal({ modal: 'close' }));
                            }}
                        >
                            <MainPageSvg id='close' />
                        </button>
                        <div>
                            <h3 className={`${status === 'error' ? `${style.red}` : `${style.white}`}`}>
                                {status === 'error' ? 'Что-то пошло не так' : 'Ваша заявка принята '}
                            </h3>
                            {status !== 'error' && <p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей</p>}
                            {status === 'error' && <p>Повторите попытку позже</p>}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
