import React, { ReactNode } from 'react';
import styles from './ButtonArrow.module.scss';

interface IButtonArrow {
    description?: string;
    rotate?: string;
    handleClick?: () => void;
    children?: ReactNode;
    type: string;
    flexDirection?: 'row-reverse' | 'row';
    href?: string;
    route?: string;
    routerBack?: () => void;
    target?: '_blank' | '_self';
}

const ButtonArrow: React.FC<IButtonArrow> = ({
    description,
    rotate,
    handleClick,
    children,
    type,
    href,
    routerBack,
    flexDirection = 'row',
    target = '_blank',
}) => {
    switch (type) {
        case 'button': {
            return (
                <div
                    onClick={handleClick}
                    style={{
                        flexDirection: `${flexDirection}`,
                    }}
                    className={styles.buttonIcon}
                >
                    <div
                        className={styles.buttonIcon__icon}
                        style={{
                            transform: `rotate(${rotate}deg)`,
                            flexDirection: `${flexDirection}`,
                        }}
                    >
                        {children}
                    </div>
                    <p className={styles.buttonIcon__text}>{description}</p>
                </div>
            );
        }
        case 'link': {
            return (
                <a
                    href={href}
                    target={target}
                    rel='noreferrer'
                    style={{ flexDirection: `${flexDirection}` }}
                    className={styles.buttonIcon__link}
                >
                    <div className={styles.buttonIcon__icon__link} style={{ transform: `rotate(${rotate}deg)` }}>
                        {children}
                    </div>
                    <p className={styles.buttonIcon__text}>{description}</p>
                </a>
            );
        }
        case 'route': {
            return (
                <div className={styles.buttonIcon}>
                    <div className={styles.buttonIcon__icon} style={{ transform: `rotate(${rotate}deg)` }}>
                        {children}
                    </div>
                    <p className={styles.buttonIcon__text}>{description}</p>
                </div>
            );
        }
        case 'backroute': {
            return (
                <button
                    onClick={() => {
                        routerBack();
                        if(handleClick) handleClick();
                    }}
                    className={styles.buttonIcon}
                >
                    <div className={styles.buttonIcon__icon} style={{ transform: `rotate(${rotate}deg)` }}>
                        {children}
                    </div>
                    <p className={styles.buttonIcon__text}>{description}</p>
                </button>
            );
        }
    }
};

export default ButtonArrow;
