import { useSelector } from 'react-redux';
import formatPrice from '../../../utils/formatPrice';
import numberOfYearsToString from '../../../utils/numberOfYearsToString';
import React, { useCallback, useState } from 'react';
import styles from './OfferItem.module.scss';
import { AppState } from '../../../entities/store';
import Image from 'next/image';
import { IBank } from '../../../assets/data/interfaces';

interface IOffer {
    _id: string;
    title: string;
    mortgage_type: {
        _id: string;
        mortgage_type_name: string;
        __v: number;
    };
    mortgage_an_initial_fee: string;
    mortgage_rate: string;
    mortgage_time: string;
    mortgage_max_sum: string;
    mortgage_year_offset: string;
    mortgage_minus_one_year: boolean;
    mortgage_activation_date: string;
    mortgage_disable: boolean;
    __v: number;
    bank?: IBank;
}

interface IOfferItem {
    creditAmount: number;
    creditTerm: number;
    offer: IOffer;
}

const OfferItem = ({ offer, creditTerm, creditAmount }: IOfferItem) => {
    const [isOpen, setIsOpen] = useState(false);
    const { bank, mortgage_rate, mortgage_time, mortgage_minus_one_year, title } = offer;
    const width = useSelector<AppState, number>((state) => state.main.width);

    const monthlyPayment = (() => {
        const p = +mortgage_rate.replace(',', '.') / 100 / 12;
        const n = mortgage_minus_one_year ? (+creditTerm - 1) * 12 : +creditTerm * 12;
        const payment = Math.round((creditAmount * p) / (1 - Math.pow(1 + p, -n)));

        return formatPrice(payment);
    })();

    const RateAndTerm = useCallback(() => {
        return (
            <>
                {width < 768 ? (
                    <tr>
                        <td>
                            <button
                                className={`${styles.btn} ${isOpen ? styles.btn__opened : 'undefined'}`}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        </td>
                    </tr>
                ) : (
                    <>
                        <tr className={styles.term}>
                            <td>до {numberOfYearsToString(mortgage_time)}</td>
                        </tr>
                        <tr className={styles.payment}>
                            <td>{monthlyPayment}</td>
                        </tr>
                    </>
                )}
            </>
        );
    }, [width, isOpen, monthlyPayment, mortgage_time]);

    const MobileToggleWindow = useCallback(() => {
        if (!isOpen) return;

        return (
            <tfoot className={styles.container}>
                <td className={`${styles.rate} ${isOpen ? styles.rate__wide : 'undefined'}`}>от {mortgage_rate}%</td>
                <td className={`${styles.term} ${isOpen ? styles.term__wide : 'undefined'}`}>до {numberOfYearsToString(mortgage_time)}</td>
                <td className={`${styles.payment} ${isOpen ? styles.payment__wide : 'undefined'}`}>
                    {isOpen && <span>Платеж в месяц</span>}
                    <span>{monthlyPayment}</span>
                </td>
            </tfoot>
        );
    }, [isOpen, mortgage_rate, mortgage_time, monthlyPayment]);

    return (
        <>
            <tbody className={styles.container}>
                <tr className={styles.title}>
                    <td>
                        <div className={styles.image}>
                            <Image fill src={bank.image} alt={bank.title} unoptimized />
                        </div>
                    </td>
                    <td className={styles.name}>
                        <span>{bank.title}</span>
                        <p>{title}</p>
                    </td>
                </tr>

                <tr>
                    <td className={styles.term}>от {mortgage_rate}%</td>
                </tr>

                <RateAndTerm />
            </tbody>

            <MobileToggleWindow />
        </>
    );
};

export default OfferItem;
