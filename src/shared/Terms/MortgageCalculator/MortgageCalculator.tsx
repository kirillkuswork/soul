import _ from 'lodash';
import MortgageCheckbox from '../MortgageCheckbox/MortgageCheckbox';
import OfferItem from '../OfferItem/OfferItem';
import BankSlider from '../BankSlider/BankSlider';
import CalculatorSlider from '../CalculatorSlider/CalculatorSlider';
import FlatToggleButton from '../FlatToggleButton/FlatToggleButton';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { ICalcData } from '../../../assets/data/interfaces';
import { FAMILY_MORTGAGE_TYPE, MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT, ROOM_TYPES } from '../../../assets/data/consts';
import styles from './MortgageCalculator.module.scss';
import { handleMinStandardMortgage } from '../../../entities/termsSlice';

const MortgageCalculator = ({ mortgages, flats }) => {
    const [numberOfRooms, setNumberOfRooms] = useState<string | number>(2);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [mortgageOffers, setMortgageOffers] = useState(null);
    const [isFamilyMortgage, setIsFamilyMortgage] = useState(false);
    const [filters, setFilters] = useState({
        cost: 0,
        term: 20,
        creditAmount: 0,
        initialPayment: 0,
        creditAmountPercent: 0,
        initialPaymentPercent: 20,
    });

    const width = useSelector<AppState, number>((state) => state.main.width);

    const dispatch = useDispatch();

    useEffect(() => {
        if (mortgages?.length) {
            const bankData = {};
            mortgages.forEach(({ bank, ...item }) => {
                if (bankData[bank._id]) {
                    bankData[bank._id].items.push(item);
                } else {
                    bankData[bank._id] = {
                        id: bank._id,
                        title: bank.title,
                        image: bank.imgUrl,
                        items: [item],
                    };
                }
            });
            setMortgageOffers(bankData);
        }
    }, [mortgages]);

    useEffect(() => {
        if (isFamilyMortgage) {
            setFilters((filters) => {
                const cost = filters.cost;
                const term = filters.term;
                let creditAmount;
                if (MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT < cost * 0.8) {
                    creditAmount = MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT;
                } else {
                    creditAmount = cost * 0.8;
                }
                const creditAmountPercent = Math.floor((creditAmount * 100) / cost);
                const initialPaymentPercent = 100 - creditAmountPercent;
                const initialPayment = Math.floor(cost - creditAmount);
                return {
                    cost,
                    term,
                    creditAmount,
                    initialPayment,
                    creditAmountPercent,
                    initialPaymentPercent,
                };
            });
        }
    }, [isFamilyMortgage]);

    useEffect(() => {
        if (flats) {
            const price = getMinPriceByNumberOfRooms(flats.flats, numberOfRooms);

            setFilters((filters) => {
                const cost = price || flats.price.min;
                const term = filters.term;
                let initialPaymentPercent = filters.initialPaymentPercent;
                let creditAmountPercent = 100 - filters.initialPaymentPercent;
                let initialPayment = Math.floor((cost * initialPaymentPercent) / 100);
                let creditAmount = Math.floor(cost - initialPayment);

                if (isFamilyMortgage && creditAmount > MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT) {
                    creditAmount = MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT;
                    creditAmountPercent = Math.floor((creditAmount * 100) / cost);
                    initialPaymentPercent = 100 - creditAmountPercent;
                    initialPayment = Math.floor((cost * initialPaymentPercent) / 100);
                }

                return {
                    cost,
                    term,
                    creditAmount,
                    initialPayment,
                    creditAmountPercent,
                    initialPaymentPercent,
                };
            });
        }
        // eslint-disable-next-line
    }, [flats, numberOfRooms, isFamilyMortgage]);

    const filteredMortgages = useMemo(() => {
        if (mortgageOffers) {
            const filtered = JSON.parse(JSON.stringify(mortgageOffers));
            const regex = new RegExp('семейная', 'iu');
            for (const mortgage in filtered) {
                filtered[mortgage].items = filtered[mortgage].items.filter(
                    (m) =>
                        (isFamilyMortgage
                            ? m.mortgage_type._id === FAMILY_MORTGAGE_TYPE ||
                              (regex.test(m.title) && parseInt(m.mortgage_max_sum) >= filters.creditAmount / 1000000)
                            : m.mortgage_type._id !== FAMILY_MORTGAGE_TYPE && !regex.test(m.title)) &&
                        +m.mortgage_time >= filters.term &&
                        +m.mortgage_an_initial_fee <= filters.initialPaymentPercent,
                );

                if (!filtered[mortgage].items.length) {
                    delete filtered[mortgage];
                }
            }

            setSelectedOffer((selected) =>
                selected ? Object.values(filtered).find((b: any) => b.id === selected.id) : Object.values(filtered)[0],
            );
            return filtered;
        }
        return null;
    }, [mortgageOffers, isFamilyMortgage, filters.term, filters.initialPaymentPercent, filters.creditAmount]);

    const calcMortgage = (name, value) => {
        if ((name === 'creditAmountPercent' && value < 10) || (name === 'initialPaymentPercent' && value > 90)) {
            return filters;
        }

        const newFilters = structuredClone({ ...filters, [name]: value });

        switch (name) {
            case 'cost':
            case 'initialPayment':
                newFilters.creditAmount = Math.floor(newFilters.cost - newFilters.initialPayment);
                newFilters.initialPaymentPercent = Math.floor((newFilters.initialPayment * 100) / newFilters.cost);
                newFilters.creditAmountPercent = 100 - newFilters.initialPaymentPercent;
                break;
            case 'initialPaymentPercent':
                newFilters.creditAmountPercent = 100 - newFilters.initialPaymentPercent;
                newFilters.initialPayment = Math.floor((newFilters.cost * newFilters.initialPaymentPercent) / 100);
                newFilters.creditAmount = Math.floor(newFilters.cost - newFilters.initialPayment);
                break;
            case 'creditAmount':
                newFilters.creditAmountPercent = Math.floor((newFilters.creditAmount * 100) / newFilters.cost);
                newFilters.initialPaymentPercent = 100 - newFilters.creditAmountPercent;
                newFilters.initialPayment = Math.floor((newFilters.cost * newFilters.initialPaymentPercent) / 100);
                break;
            case 'creditAmountPercent':
                newFilters.initialPaymentPercent = 100 - newFilters.creditAmountPercent;
                newFilters.creditAmount = Math.floor((flats.price.max * newFilters.creditAmountPercent) / 100);
                newFilters.cost = Math.floor(newFilters.creditAmount + newFilters.initialPayment);
                break;

            default:
                break;
        }

        if (newFilters.initialPaymentPercent > 90) {
            newFilters.initialPaymentPercent = 90;
            newFilters.creditAmountPercent = 10;
            newFilters.initialPayment = Math.floor((newFilters.cost * newFilters.initialPaymentPercent) / 100);
            newFilters.creditAmount = Math.floor(newFilters.cost - newFilters.initialPayment);
        }

        if (newFilters.cost < 0 || newFilters.creditAmount < 0 || newFilters.initialPayment < 0) {
            return filters;
        }

        return newFilters;
    };

    const handleChange = (name) => (value) => {
        let newFilters = calcMortgage(name, value);

        if (newFilters.cost > flats.price.max) {
            newFilters = calcMortgage('cost', flats.price.max);
        }
        if (newFilters.cost < flats.price.min) {
            newFilters = calcMortgage('cost', flats.price.min);
        }
        if (isFamilyMortgage && newFilters.creditAmount > MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT) {
            newFilters = calcMortgage('creditAmount', MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT);
        }

        setFilters(newFilters);
    };

    //Находит максимальный срок кредита
    const maxCreditDate = parseInt(
        _.maxBy(mortgages, (items: ICalcData) => {
            return items.mortgage_time;
        }).mortgage_time,
    );

    const SelectedOfferTable = () => {
        if (!selectedOffer) return <div>Программы не найдены</div>;

        return (
            <>
                <table className={styles.list}>
                    <thead className={width < 768 ? styles.list_titles : 'undefined'}>
                        <tr className={styles.list_inner}>
                            <th className={`${styles.list_title} ${styles.list_title__1}`}>Ипотечная программа</th>
                            <th className={`${styles.list_title} ${styles.list_title__2}`}>Ставка</th>
                            {width < 768 ? (
                                <div className={styles.hiddenTitles}></div>
                            ) : (
                                <>
                                    <th className={`${styles.list_title} ${styles.list_title__3}`}>Срок кредита</th>
                                    <th className={`${styles.list_title} ${styles.list_title__4}`}>Платеж в месяц</th>
                                </>
                            )}
                        </tr>
                    </thead>

                    {selectedOffer?.items.map((item) => (
                        <OfferItem
                            key={item._id}
                            offer={{ ...item, bank: selectedOffer }}
                            creditTerm={filters.term}
                            creditAmount={filters.creditAmount}
                        />
                    ))}
                </table>

                <p className={styles.notification}>Данный расчет приведен для общей информации и не является публичной офертой</p>
            </>
        );
    };

    //Проверяем есть ли квартиры с опр. количеством комнат
    const flatsByRooms = (rooms) => {
        switch (rooms) {
            case 'studio': {
                return flats.flats.filter((flat) => flat.rooms === 'studio');
            }
            case 1: {
                return flats.flats.filter((flat) => flat.rooms === 1);
            }
            case 2: {
                return flats.flats.filter((flat) => flat.rooms === 2);
            }
            case 3: {
                return flats.flats.filter((flat) => flat.rooms === 3);
            }
            case 4: {
                return flats.flats.filter((flat) => flat.rooms === 4);
            }
            case 5: {
                return flats.flats.filter((flat) => flat.rooms === 5);
            }
        }
    };

    //Получаем минимальную стоимость квартиры в зависимости от количества комнат
    function getMinPriceByNumberOfRooms(flats, numberOfFlats) {
        const filteredFlats = flatsByRooms(numberOfFlats);
        return Math.min.apply(
            Math,
            filteredFlats.map((f) => f.real_price),
        );
    }

    //Получаем минимальную ставку среди стандартных ипотек
    const standard = mortgages.filter((el) => el.mortgage_type.mortgage_type_name === 'Стандартная');
    standard.sort((a, b) => {
        return parseFloat(a.mortgage_rate) - parseFloat(b.mortgage_rate);
    });
    const standardMin = standard[0].mortgage_rate;

    useEffect(() => {
        if (standardMin === '0') return;

        dispatch(handleMinStandardMortgage({ standardMin: 'min', value: standardMin }));
    }, [dispatch, standardMin]);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Калькулятор ипотеки</h2>
            <div className={styles.inner}>
                <div className={styles.filters}>
                    <div className={styles.filters_btns_title}>Сколько спален будет в вашей квартире?</div>
                    <div className={styles.filters_btns}>
                        {ROOM_TYPES.map((room) => (
                            <FlatToggleButton
                                key={room.value}
                                label={room.label}
                                onClick={() => setNumberOfRooms(room.value)}
                                isActive={room.value === numberOfRooms}
                                disabled={flatsByRooms(room.value)}
                            />
                        ))}
                    </div>

                    <CalculatorSlider
                        value={filters.cost}
                        label='Стоимость недвижимости'
                        onChange={handleChange('cost')}
                        minValue={flats.price.min}
                        maxValue={flats.price.max}
                        sliderValue={filters.cost}
                        withCurrency
                        maxSliderValue={flats.price.max}
                        minSliderValue={flats.price.min}
                        onChangeSliderValue={handleChange('cost')}
                    />
                    <CalculatorSlider
                        label={`Первоначальный взнос (${filters.initialPaymentPercent}%)`}
                        value={filters.initialPayment}
                        unitType='percent'
                        minValue={0}
                        maxValue={flats.price.max}
                        onChange={handleChange('initialPayment')}
                        withCurrency
                        sliderValue={filters.initialPaymentPercent}
                        minSliderValue={0}
                        maxSliderValue={100}
                        onChangeSliderValue={handleChange('initialPaymentPercent')}
                    />
                    <CalculatorSlider
                        label={`Сумма кредита (${filters.creditAmountPercent}%)`}
                        value={filters.creditAmount}
                        readOnly
                        onChange={handleChange('creditAmount')}
                        unitType='percent'
                        minValue={0}
                        maxValue={isFamilyMortgage ? MAX_FAMILY_MORTGAGE_CREDIT_AMOUNT : flats.price.max}
                        withCurrency
                        sliderValue={filters.creditAmountPercent}
                        minSliderValue={0}
                        maxSliderValue={100}
                        onChangeSliderValue={handleChange('creditAmountPercent')}
                    />
                    <CalculatorSlider
                        label='Срок кредита'
                        value={filters.term}
                        unitType='year'
                        onChange={handleChange('term')}
                        minValue={1}
                        maxValue={maxCreditDate}
                        minSliderValue={1}
                        maxSliderValue={maxCreditDate}
                        sliderValue={filters.term}
                        onChangeSliderValue={handleChange('term')}
                    />
                    <div className={styles.familyMortgage}>
                        <MortgageCheckbox
                            id='familyMortgage'
                            label='Семейная ипотека'
                            checked={isFamilyMortgage}
                            onChange={setIsFamilyMortgage}
                        />

                        <p onClick={() => setIsFamilyMortgage(!isFamilyMortgage)}>
                            Семьи, в которых <span>с 1 января 2018 года по 31 декабря 2022 года</span> родился первый ребенок или
                            последующие дети, могут рассчитывать на получение ипотеки по льготной ставке до 6%, сумма ипотечного кредита до
                            12 млн руб. Ипотечный кредит можно оформить <span>до 1 марта 2023 года</span>.
                        </p>
                    </div>
                </div>

                <div className={styles.offers}>
                    <BankSlider banks={filteredMortgages} onSelect={setSelectedOffer} />
                    <SelectedOfferTable />
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;
