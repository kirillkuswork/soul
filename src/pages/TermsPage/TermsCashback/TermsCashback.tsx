import InfoBlock from '../../../shared/Terms/InfoBlock/InfoBlock';
import { cashBack } from '../../../assets/data/terms';
import styles from './TermsCashback.module.scss';
import { useInView } from 'react-intersection-observer';
import React, { memo, useEffect, useRef, useState } from 'react';
import QASection from '../../../shared/Terms/QASection/QASection';
import { cashBackCategories } from '../../../assets/data/terms';
import HowItWorks from './HowItWorks/HowItWorks';
import CashBackHowToOnline from './CashBackHowToOnline/CashBackHowToOnline';
import ReusableButton from '../../../features/ReusableButton/ReusableButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import { cashBackQA } from '../../../assets/data/terms';
import img from '../../../assets/images/terms/cashback/cashback.webp';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import Form from '../../../features/Form/Form';
import { handleHeightScroll } from '../../../entities/mainSlice';

const TermsCashback = () => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const wrapper = useRef(null);
    const [isForm, setIsForm] = useState(false);
    const dispatch = useDispatch();

    dispatch(handleHeightScroll({ heightScroll: 'changed', value: true }));

    useEffect(() => {
        return () => {
            dispatch(handleHeightScroll({ heightScroll: 'changed', value: false }));
        };
    }, [dispatch]);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    useEffect(() => {
        if (!width) return;

        if (width <= 540) {
            setIsAdaptive(true);
        }
    }, [width]);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    return (
        <div className={styles.container}>
            <InfoBlock
                beige
                title={cashBack.description[0].title}
                item={cashBack.description[0].item}
                text={cashBack.description[0].text}
                img={img.src}
            />

            <HowItWorks ref={ref} inView={inView} isAdaptive={isAdaptive} />

            <div className={styles.howTo}>
                <CashBackHowToOnline isAdaptive={isAdaptive} />
                <QASection width={width} qa={cashBackQA} categories={cashBackCategories} isCashBack />
                {isAdaptive && (
                    <div className={styles.howTo_btn}>
                        <div onClick={() => setIsForm(true)}>
                            <ReusableButton size={'big'} content={'Задать вопрос'} addClass={'black'} />
                        </div>
                    </div>
                )}
            </div>
            {isForm && (
                <div onClick={(e) => handleClose(e)} className={styles.formwrapper}>
                    <div ref={wrapper} className={styles.formwrapper__inner}>
                        <Form formNameData='cashbackForm' formMessage={true} setIsForm={setIsForm} modalForm={true} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(TermsCashback);
