import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import Form from '../../features/Form/Form';
import { disableBodyScroll, enableBodyScroll } from '../../utils/body-scroll-lock';
import styles from './NoSuitableFlats.module.scss';

interface INoSuitable {
    favorite?: string;
}

const NoSuitableFlats: FC<INoSuitable> = ({ favorite }) => {
    const [isForm, setIsForm] = useState(false);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const wrapper = useRef(null);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    switch (favorite) {
        case 'favorite': {
            return (
                <div className={styles.noSuitableFlats}>
                    <div className={styles.noSuitableFlats__box}>
                        <h4 className={styles.noSuitableFlats__title}>Вы еще ничего не добавили</h4>
                        <p className={styles.noSuitableFlats__descriptionFav}>
                            Добавьте квартиру в избранное с помощью выбора по параметрам
                        </p>
                        <Link href={'/list'} className={styles.noSuitableFlats__submit}>
                            Выбрать квартиру
                        </Link>
                    </div>
                </div>
            );
        }
        default: {
            return (
                <div className={styles.noSuitableFlats}>
                    <div className={styles.noSuitableFlats__box}>
                        <h4 className={styles.noSuitableFlats__title}>Нет подходящих квартир</h4>
                        <p className={styles.noSuitableFlats__description}>
                            К сожалению, по заданным параметрам нет подходящих квартир. Оставьте заявку и наши менеджеры помогут вам с
                            выбором
                        </p>
                        <button onClick={() => setIsForm(true)} className={styles.noSuitableFlats__submit}>
                            Оставить заявку
                        </button>
                    </div>

                    {isForm && (
                        <div onClick={(e) => handleClose(e)} className={styles.noSuitableFlats__wrapper}>
                            <div ref={wrapper} className={styles.noSuitableFlats__form}>
                                <Form formNameData='zeroflatsForm' setIsForm={setIsForm} modalForm={true} />
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }
};

export default NoSuitableFlats;
