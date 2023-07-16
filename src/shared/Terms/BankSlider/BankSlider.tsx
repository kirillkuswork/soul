import BankItem from '../BankItem/BankItem';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TermsPageSvg from '../../svgs/TermsPageSvg';
import styles from './BankSlider.module.scss';
import { IBank } from '../../../assets/data/interfaces';

interface IBankSlider {
    banks: IBank[];
    onSelect: (bank) => any;
}

const BankSlider = ({ banks, onSelect }: IBankSlider) => {
    const [swiper, setSwiper] = useState(null);

    if (!banks) {
        return null;
    }

    const banksArray = Object.values(banks);

    //Сортируем банки в слайдере, от наименьшей ставки
    banksArray.forEach((el: IBank) => {
        el.items.sort((a, b) => {
            return Number(a.mortgage_rate.replace(/,/, '.')) - Number(b.mortgage_rate.replace(/,/, '.'));
        });
    });

    banksArray.sort((a: IBank, b: IBank) => {
        return Number(a.items[0].mortgage_rate.replace(/,/, '.')) - Number(b.items[0].mortgage_rate.replace(/,/, '.'));
    });

    const handleIndexChange = (swiper) => {
        if (swiper.params.slidesPerView === 1) {
            const index =
                swiper.activeIndex === 0 ? banksArray.length - 1 : swiper.activeIndex > banksArray.length ? 0 : swiper.activeIndex - 1;
            onSelect(banksArray[index]);
        }
    };

    return (
        <div className={styles.container}>
            <button onClick={() => swiper?.slidePrev()} className={styles.control}>
                {<TermsPageSvg id={'prev-arrow'} />}
            </button>

            <Swiper
                loop
                onSwiper={setSwiper}
                slidesPerView={'auto'}
                slidesOffsetAfter={0}
                centeredSlides
                loopFillGroupWithBlank={false}
                onActiveIndexChange={handleIndexChange}
                breakpoints={{
                    0: {
                        spaceBetween: 20,
                    },
                    520: {
                        spaceBetween: 30,
                    },
                    670: {
                        spaceBetween: 35,
                    },
                    768: {
                        spaceBetween: 35,
                    },
                    980: {
                        spaceBetween: 35,
                    },
                    1140: {
                        spaceBetween: 35,
                    },
                    1281: {
                        spaceBetween: 50,
                    },
                    1430: {
                        spaceBetween: 35,
                    },
                    1530: {
                        spaceBetween: 50,
                    },
                    1654: {
                        spaceBetween: 50,
                    },
                }}
            >
                {banksArray.map((bank: IBank) => (
                    <SwiperSlide key={bank.title}>
                        <BankItem bank={bank} onClick={() => onSelect(bank)} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={() => swiper?.slideNext()} className={styles.control}>
                {<TermsPageSvg id={'next-arrow'} />}
            </button>
        </div>
    );
};

export default BankSlider;
