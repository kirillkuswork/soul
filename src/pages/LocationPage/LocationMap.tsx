import styles from './LocationMap.module.scss';
import React, { useState, useEffect, useReducer } from 'react';
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { AppState } from '../../entities/store';
import { isMobile } from 'react-device-detect';
import ContactsPageSvg from '../../shared/svgs/ContactsPageSvg';
import { filters, locations } from '../../assets/data/location';
import TermsPageSvg from '../../shared/svgs/TermsPageSvg';

const initialState = { locations };

function reducer(state, action) {
    switch (action.type) {
        case 'all':
        default:
            return { locations };
        case 'park':
            return { locations: locations.filter((el) => el.category === 'Парки и скверы') };
        case 'cafe':
            return { locations: locations.filter((el) => el.category === 'Кафе и рестораны') };
        case 'school':
            return { locations: locations.filter((el) => el.category === 'Образование') };
        case 'kinder':
            return { locations: locations.filter((el) => el.category === 'Детские сады') };
        case 'shopping':
            return { locations: locations.filter((el) => el.category === 'Торговые центры') };
        case 'hospital':
            return { locations: locations.filter((el) => el.category === 'Больницы и поликлиники') };
        case 'sport':
            return { locations: locations.filter((el) => el.category === 'Спорт') };
    }
}

export default function LocationMap({ isAdaptive }) {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const [ymaps, setYmaps] = useState(null);
    const [myMap, setMyMap] = useState(null);
    const [warningShow, setWarningShow] = useState(false);
    const widthTablet = 1023;
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isOpen, setIsOpen] = useState(false);
    const orientation = useSelector<AppState, string>((state) => state.main.orientation);

    const changeCategory = (value) => {
        switch (value) {
            case 'Парки и скверы': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div  class="${`${styles.filters__item__black} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Кафе и рестораны': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div  class="${`${styles.filters__item__brown} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Образование': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div class="${`${styles.filters__item__blue} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Детские сады': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div class="${`${styles.filters__item__green} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Торговые центры': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div  class="${`${styles.filters__item__orange} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Больницы и поликлиники': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div class="${`${styles.filters__item__purple} ${styles.filters__circle}`}" ></div>`,
                );
            }
            case 'Спорт': {
                return ymaps?.templateLayoutFactory.createClass(
                    `<div  class="${`${styles.filters__item__yellow} ${styles.filters__circle}`}"></div>`,
                );
            }
            default: {
                return ymaps?.templateLayoutFactory.createClass(`<div class="${styles.filters__item__white}" ></div>`);
            }
        }
    };

    // отключаем для мобильной версии drag + в стилях для ymaps указываем "touch-action: auto" = это позволяет скролллить содержимое карты только двумя пальцами, а не одним
    useEffect(() => {
        width < widthTablet ? myMap?.behaviors.disable('drag') : myMap?.behaviors.enable('drag');
        myMap?.behaviors.disable(['scrollZoom']);
    }, [width, widthTablet, myMap]);

    const handleMapMove = (e) => {
        if (e.touches.length === 1) {
            setWarningShow(true);
        }

        if (e.touches.length === 2) {
            setWarningShow(false);
        }
    };

    //закрытие балуна при клике на карту
    useEffect(() => {
        if (!myMap) {
            return;
        }
        const func = () => {
            myMap.balloon.close();
        };

        myMap.events.add('click', func);
        return () => {
            myMap.events.remove('click', func);
        };
    }, [myMap]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container} onTouchMove={(e) => handleMapMove(e)} onTouchEnd={() => setWarningShow(false)}>
                <YMaps
                    query={{
                        load: 'package.full',
                        //apikey: "",
                    }}
                >
                    <Map
                        width='100%'
                        height='100%'
                        onLoad={(ymaps) => setYmaps(ymaps)}
                        state={{
                            zoom: 13.5,
                            center: [55.81217483863523, 37.520952527906154],
                            controls: ['zoomControl'],
                        }}
                        modules={['templateLayoutFactory', 'Placemark']}
                        instanceRef={(ref) => setMyMap(ref)}
                    >
                        <Placemark
                            geometry={[55.81217483863523, 37.520952527906154]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: '/baloon.png',
                                iconImageSize: isMobile ? [40, 60] : [60, 90],
                                iconImageOffset: isMobile ? [-17, -60] : [-30, -90],
                            }}
                        />
                        <Clusterer
                            options={{
                                hasBalloon: false,
                                hasHint: false,
                                preset: 'islands#nightClusterIcons',
                            }}
                            instanceRef={(ref) => {
                                //закрываем baloon при смене категории
                                ref && myMap.balloon.close();
                            }}
                        >
                            {JSON.parse(JSON.stringify(state.locations)).map((el) => {
                                const coordinates = el.coords.split(',');
                                const LayoutClass = changeCategory(el.category);

                                return (
                                    <Placemark
                                        key={el.comment}
                                        geometry={coordinates}
                                        properties={{
                                            balloonContentBody: `
                                                <div id='baloon'>                                                  
                                                   <p>${el.comment}</p>
                                                </div>
                                            `,
                                        }}
                                        options={{
                                            iconContentLayout: LayoutClass,
                                        }}
                                    />
                                );
                            })}
                        </Clusterer>
                    </Map>
                </YMaps>
                {warningShow && width < widthTablet && (
                    <div className={styles.warning}>Чтобы переместить карту, проведите по ней двумя пальцами</div>
                )}
                {!isAdaptive || orientation === 'landscape' ? (
                    <div className={styles.filters}>
                        <div className={styles.filters__top}>
                            <h4 className={styles.filters__title}>Инфраструктура района</h4>
                        </div>
                        <ul className={`${styles.filters__items} ${styles.filters__open} `}>
                            {filters.map((el) => {
                                return (
                                    <li
                                        key={el.color}
                                        className={`${styles.filters__item} ${!isAdaptive ? styles.filters__item__hover : ''} `}
                                        onClick={() => {
                                            dispatch({ type: `${el.group}` });
                                        }}
                                    >
                                        <p>{el.text}</p>
                                        <div className={styles[`filters__item__${el.color}`]}></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className={styles.filters}>
                        <div className={styles.filters__top}>
                            <div
                                key={'white'}
                                className={`${styles.filters__item} ${styles.filters__item__first}`}
                                onClick={() => {
                                    dispatch({ type: 'all' });
                                    setIsOpen(false);
                                }}
                            >
                                <div className={styles[`filters__item__white`]}></div>
                                <p>Показать все</p>
                            </div>
                            <div onClick={() => setIsOpen(!isOpen)}>
                                <TermsPageSvg
                                    addClass={`${styles.filters__icon} ${isOpen && styles.filters__icon__open}`}
                                    id={'details-arrow'}
                                />
                            </div>
                        </div>
                        <ul className={`${styles.filters__items} ${isOpen && styles.filters__open}`}>
                            {filters.map((el, i) => {
                                if (i !== 0)
                                    return (
                                        <li
                                            key={el.color}
                                            className={styles.filters__item}
                                            onClick={() => {
                                                dispatch({ type: `${el.group}` });
                                                setIsOpen(false);
                                            }}
                                        >
                                            <div className={styles[`filters__item__${el.color}`]}></div>
                                            <p>{el.text}</p>
                                        </li>
                                    );
                            })}
                        </ul>
                    </div>
                )}
                <div className={`${styles.zoombuttons} ${isOpen && styles.zoombuttons__mobileinvisible}`}>
                    <button className={styles.zoombuttons__button}>
                        <div className={'ymaps-2-1-79-zoom__minus'}>
                            <ContactsPageSvg addClass={styles.icon} id={'minus'} />
                        </div>
                    </button>
                    <button className={styles.zoombuttons__button}>
                        <div className={'ymaps-2-1-79-zoom__plus'}>
                            <ContactsPageSvg addClass={styles.icon} id={'plus'} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
