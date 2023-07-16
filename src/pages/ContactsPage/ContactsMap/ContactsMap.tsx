import styles from './ContactsMap.module.scss';
import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { AppState } from '../../../entities/store';
import ContactsPageSvg from '../../../shared/svgs/ContactsPageSvg';
import { isMobile } from 'react-device-detect';

export default function ContactsMap() {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const [myMap, setMyMap] = useState(null);
    const coordinates = useSelector<AppState, number[]>((state) => state.main.contactsOffice.coordinates);
    const [warningShow, setWarningShow] = useState(false);
    const widthTablet = 1023;

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

    return (
        <div className={styles.container} onTouchMove={(e) => handleMapMove(e)} onTouchEnd={() => setWarningShow(false)}>
            <YMaps
                query={{
                    load: 'package.full',
                    apikey: '',
                }}
            >
                <Map
                    width='100%'
                    height='100%'
                    state={{
                        zoom: 16.4,
                        center: coordinates,
                        controls: ['zoomControl'],
                    }}
                    modules={['templateLayoutFactory', 'Placemark']}
                    instanceRef={(ref) => setMyMap(ref)}
                >
                    <Placemark
                        geometry={coordinates}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '/baloon.png',
                            iconImageSize: isMobile ? [40, 60] : [60, 90],
                            iconImageOffset: isMobile ? [-17, -60] : [-30, -90],
                        }}
                    />
                </Map>
            </YMaps>
            {warningShow && width < widthTablet && (
                <div className={styles.warning}>Чтобы переместить карту, проведите по ней двумя пальцами</div>
            )}
            <div className={styles.zoombuttons}>
                <button className={styles.zoombuttons__button} aria-label='zoomOut'>
                    <div className={'ymaps-2-1-79-zoom__minus'}>
                        <ContactsPageSvg addClass={styles.icon} id={'minus'} />
                    </div>
                </button>
                <button className={styles.zoombuttons__button} aria-label='zoomIn'>
                    <div className={'ymaps-2-1-79-zoom__plus'}>
                        <ContactsPageSvg addClass={styles.icon} id={'plus'} />
                    </div>
                </button>
            </div>
        </div>
    );
}
