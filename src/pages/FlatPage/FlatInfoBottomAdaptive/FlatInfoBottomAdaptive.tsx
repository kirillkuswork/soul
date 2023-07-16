import React, { FC, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import Form from '../../../features/Form/Form';
import editRoomsLabel from '../../../tools/_edit-rooms-label';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import FlatAdvantages from '../FlatAdvantages/FlatAdvantages';
import FlatInfoBlock from '../FlatInfoBlock/FlatInfoBlock';
import styles from './FlatInfoBottomAdaptive.module.scss';

const valuePropsAreEqual: (prevValue: IFlatInfoRight, nextValue: IFlatInfoRight) => boolean = (prevValue, nextValue) => {
    return prevValue.flat === nextValue.flat;
};

interface IFlatInfoRight {
    flat: IFlat;
}

const FlatInfoBottomAdaptive: FC<IFlatInfoRight> = ({ flat }) => {
    const rooms = editRoomsLabel(flat);

    const [isForm, setIsForm] = useState(false);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const wrapper = useRef(null);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    return (
        <>
            <div className={styles.flatInfoRight}>
                <div className={styles.flatInfoRight__box}>
                    <FlatInfoBlock description='Количество спален' amount={rooms?.rooms} />
                    <FlatInfoBlock description='Площадь' amount={flat?.area} />
                    {/* <FlatInfoBlock description='Количество санузлов' amount={1} /> */}
                    <FlatInfoBlock description='Этаж' amount={flat?.floor} />
                    <FlatInfoBlock description='Корпус' amount={flat?.bulk?.number} />
                    {/* <FlatInfoBlock description='Балкон' amount={flat?.attributes?.balcony} /> */}
                </div>
                <p className={styles.flatInfoRight__deadline}>Ввод в эксплуатацию до 30.09.2025</p>
                <p className={styles.flatInfoRight__deadline}>Ключи до 30.12.2025</p>
                <div className={styles.flatInfoRight__parameters}>
                    <p className={styles.flatInfoRight__parametersTitle}>Дополнительные параметры</p>
                    {flat && <FlatAdvantages flat={flat} />}
                </div>
                <div className={styles.flatInfoRight__priceBlock}>
                    <p className={styles.flatInfoRight__price}>{flat?.price} ₽</p>
                </div>
                <div className={styles.flatInfoRight__purchase}>
                    <a
                        href={`https://booking.forma.ru/booking?id=${flat?.guid}`}
                        target='_blank'
                        rel='noreferrer'
                        className={`${styles.flatInfoRight__purchaseBtn} ${styles.flatInfoRight__purchaseBtnBlack}`}
                    >
                        Купить
                    </a>
                    <button onClick={() => setIsForm(true)} className={`${styles.flatInfoRight__purchaseBtn}`}>
                        Оставить заявку
                    </button>
                </div>
            </div>
            {isForm && (
                <div onClick={(e) => handleClose(e)} className={styles.flatInfoRight__wrapper}>
                    <div ref={wrapper} className={styles.flatInfoRight__form}>
                        <Form formNameData='flatForm' formMessage={true} numbers={[flat?.number]} setIsForm={setIsForm} modalForm={true} />
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(FlatInfoBottomAdaptive, valuePropsAreEqual);
