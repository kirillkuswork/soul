import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './QASection.module.scss';
import parse from 'html-react-parser';
import TermsPageSvg from '../../svgs/TermsPageSvg';
import { isMobile, isTablet } from 'react-device-detect';
import { IQASection } from '../../../assets/data/interfaces';
import { cashBackExtra } from '../../../assets/data/terms';
import MainPageSvg from '../../svgs/MainPageSvg';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import Form from '../../../features/Form/Form';

const QASection = ({ qa, categories, width, isCashBack }: IQASection) => {
    const [isAdaptive, setIsAdaptive] = useState(false);
    const [category, setCategory] = useState('faq');
    const [isOpen, setIsOpen] = useState(false);
    const [titleText, setTitleText] = useState('Общие вопросы');
    const [activeIndex, setActiveIndex] = useState(0);

    const itemsRef = useRef([]);

    const handleOpenedDetails = () => {
        itemsRef.current.forEach((el, i) => {
            if (!itemsRef.current[i]) return;

            if (i === 0) {
                el.setAttribute('open', 'true');
            } else {
                el.removeAttribute('open');
            }
        });
    };

    useEffect(() => {
        if (!width) return;

        if (isTablet || isMobile || width <= 768) {
            setIsAdaptive(true);
        }
    }, [width]);

    const onChangeCategory = useMemo(() => {
        return (name) => {
            switch (name) {
                case 'faq':
                default: {
                    return qa.filter((item) => item.is_faq === true);
                }
                case 'mortgage': {
                    return qa.filter((item) => item.qa_category._id === '62c2868b926b8523b154e63f' && item.is_faq !== true);
                }
                case 'choose-project': {
                    return qa.filter((item) => item.qa_category._id === '62c28699926b8523b154e643' && item.is_faq !== true);
                }
                case 'booking': {
                    return qa.filter((item) => item.qa_category._id === '62c286a6926b8523b154e647' && item.is_faq !== true);
                }
                case 'payment': {
                    return qa.filter((item) => item.qa_category._id === '62c2867e926b8523b154e63b' && item.is_faq !== true);
                }
                case 'fail': {
                    return qa.filter((item) => item.qa_category._id === '62c28650926b8523b154e633' && item.is_faq !== true);
                }
                case 'cashback': {
                    return qa.filter((item) => item.name === 'cashback');
                }
            }
        };
    }, [qa]);

    const wrapper = useRef(null);
    const [isForm, setIsForm] = useState(false);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    const renderContent = useCallback(() => {
        if (!isAdaptive) {
            return (
                <aside className={styles.navigation}>
                    <h3 className={styles.navigation_title}>Часто задаваемые вопросы</h3>
                    {categories.map((el, i) => {
                        return (
                            <button
                                className={`${styles.navigation_btn} ${i === activeIndex ? styles.navigation_btn__active : ''}`}
                                key={el.category}
                                onClick={() => {
                                    setActiveIndex(i);
                                    setCategory(el.category);
                                    handleOpenedDetails();
                                }}
                            >
                                <p className={styles.navigation_btn__text} dangerouslySetInnerHTML={{ __html: el.text }} />
                            </button>
                        );
                    })}
                    {isCashBack && (
                        <button
                            className={styles.btn}
                            onClick={() => setIsForm(true)}
                        >
                            <p>Задать вопрос</p>
                            <MainPageSvg addClass={styles.selector_icon} id='arrow' />
                        </button>
                    )}
                </aside>
            );
        } else {
            return (
                <nav className={styles.selector}>
                    <div className={styles.selector_inner} onClick={() => setIsOpen(!isOpen)}>
                        <h5 className={`${styles.selector_title}`} dangerouslySetInnerHTML={{ __html: titleText }} />
                        <TermsPageSvg
                            id={'details-arrow'}
                            addClass={`${styles.selector_icon} ${isOpen ? styles.selector_icon__opened : 'undefined'}`}
                        />
                    </div>

                    <div className={`${styles.selector_questions} ${isOpen ? styles.selector_questions__opened : 'undefined'}`}>
                        {categories.map((el, i) => {
                            if (el.category === category) return;

                            return (
                                <button
                                    key={el.category + i}
                                    className={styles.category}
                                    onClick={() => {
                                        setCategory(el.category);
                                        setTitleText(el.text);
                                        setIsOpen(false);
                                        handleOpenedDetails();
                                    }}
                                >
                                    <p dangerouslySetInnerHTML={{ __html: el.text }} />
                                </button>
                            );
                        })}
                    </div>
                </nav>
            );
        }
    }, [isCashBack, isAdaptive, isOpen, activeIndex, categories, category, titleText]);


  return (
    <section className={styles.container}>
      {isAdaptive && <h2 className={styles.navigation_title}>Часто задаваемые вопросы</h2>}
      {renderContent()}
      {isForm && (
        <div onClick={(e) => handleClose(e)} className={styles.formwrapper}>
          <div ref={wrapper} className={styles.formwrapper__inner}>
            <Form formNameData="cashbackForm" formMessage={true} setIsForm={setIsForm} modalForm={true}/>
          </div>
        </div>
      )}
      <div className={styles.qa}>
        {onChangeCategory(category).map((item, i) => {
          return (
            <details open={i === 0} key={i}
              className={`${styles.qa_block} ${(!isMobile && !isTablet) ? styles.qa_hover : ""}`} ref={(el) => (itemsRef.current[i] = el)}>
              <summary className={styles.qa_question}>
                <p>{parse(item.qa_html_quest.replaceAll("&amp;nbsp;", "\u00A0"))}</p>
                <TermsPageSvg id={'details-arrow'} addClass={styles.qa_icon} />
              </summary>
              <p className={styles.qa_answer}>{parse(item.qa_html_answer.replaceAll('&amp;nbsp;', '\u00A0'))}</p>
            </details>
          );
        })}
          {isCashBack && (
              <div className={styles.qa_extra}>
                  {cashBackExtra.map((el) => {
                      return <p key={el.id} dangerouslySetInnerHTML={{ __html: el.text }}></p>;
                  })}
              </div>
          )}
      </div>
    </section >
  );
};

export default QASection;
