import React, { FC, ReactNode } from 'react';
import style from './ModalFullPage.module.scss';

interface IModalFullPage {
    children: ReactNode;
    handleClose?: () => void;
    grey?: boolean;
}

const ModalFullPage: FC<IModalFullPage> = ({ children, handleClose, grey }) => {
    return (
        <div className={style.modalFullpage}>
            {children}
            <svg
                onClick={() => {
                    handleClose();
                }}
                className={style.modalFullpage__close}
                width='45'
                height='45'
                viewBox='0 0 45 45'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M8.46191 36.8203L36.5382 8.74401' stroke={grey ? '#24292E' : 'white'} strokeWidth='3' />
                <path d='M8.46191 7.94141L36.5382 36.0177' stroke={grey ? '#24292E' : 'white'} strokeWidth='3' />
            </svg>
        </div>
    );
};

export default ModalFullPage;
