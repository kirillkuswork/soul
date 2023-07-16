import styles from './ReusableButton.module.scss';
import { handleFormButtonClick } from '../../utils/send-logs';
import { isMobile, isTablet } from 'react-device-detect';
import { useEffect, useState } from 'react';

interface IReusableButton {
    disabled?: boolean;
    content?: string;
    type?: 'submit' | 'button';
    size: 'big' | 'small' | 'medium';
    addClass?: string;
    bg?: 'black' | '';
    id?: string;
    action?: () => void;
}

const ReusableButton = ({ disabled, content, addClass, type, size, bg, id, action }: IReusableButton) => {
    const buttonClassName = `
    ${size === 'big' ? styles.btn : ""}   
    ${size === 'small' ? styles.btnSmall : ""}
    ${disabled ? styles.disabled : ""}
    ${addClass === 'black' ? styles.black : ""}
    ${bg ? styles.btn__blackBg : ""}    
  `;

  const [isAdaptive, setIsAdaptive] = useState<boolean>(false);
   useEffect(() => {
        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, []);

    const onClickHandler = () => {
        if (type === 'submit') handleFormButtonClick();
        if (action) action();
    };
    return (
        <div className={ !isAdaptive ? styles.hover : 'undefined'}>
            <button
                type={type || 'button'}
                disabled={disabled}
                className={type === 'submit' ? buttonClassName + ' ' + 'sendbutton' : buttonClassName}
                onClick={onClickHandler}
                id={id}
            >
                {content}
            </button>
        </div>
    );
};

export default ReusableButton;
