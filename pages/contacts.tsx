import styles from '../styles/ContactsPage.module.scss';
import ContactsInfo from '../src/pages/ContactsPage/ContactsInfo/ContactsInfo';
import ContactsMap from '../src/pages/ContactsPage/ContactsMap/ContactsMap';
import Footer from '../src/shared/Footer/Footer';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { AppState, wrapper } from '../src/entities/store';
import { getContactsSlider, getRunningQueriesThunk } from '../src/entities/contactsSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isMobile, isTablet } from 'react-device-detect';
import { disableBodyScroll, enableBodyScroll } from '../src/utils/body-scroll-lock';
import formatPhotosLength from '../src/tools/_format-photos-length';
import SliderGallery from '../src/features/Sliders/SliderGallery/SliderGallery';
import ModalGallery from '../src/features/ModalGallery/ModalGallery';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getContactsSlider.initiate(1));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {},
    };
});

export default function ContactsPage({ initialState }) {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const [isGallery, setIsGallery] = useState(false);
    const [isAdaptive, setIsAdaptive] = useState(false);
    const [picIndex, setPicIndex] = useState(0);
    const [sliderDataArr, setsliderDataArr] = useState([]);
    const [isSlider, setisSlider] = useState(false);

    const sliderData = initialState.contactsApi.queries['getContactsSlider(1)'].data;

    useHeaderHook({ disappearCoefficient: 0.1 });

    useEffect(() => {
        if (isGallery) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    }, [isGallery]);

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, [width]);

    const onClickHandler = (i) => {
        setIsGallery(true);
        setPicIndex(i);
    };

    useEffect(() => {
        if (!sliderData) return;

        const fullUrls = sliderData.absolutePath.map((el) => {
            return { img: el, alt: 'infrastructure photo', onClickHandler };
        });
        setsliderDataArr(fullUrls);
        setisSlider(true);
    }, [sliderData]);

    return (
        <div className={styles.containerOuter}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <ContactsInfo isAdaptive={isAdaptive} />
                </div>
                <div className={styles.right}>
                    <ContactsMap />
                </div>
            </div>
            {isSlider && (
                <div className={styles.slider}>
                    <h4 className={styles.title}>Фото дизайн-пространства</h4>
                    <SliderGallery arr={sliderDataArr} isAdaptive={isAdaptive} />
                </div>
            )}
            {isGallery && (
                <ModalGallery picIndex={picIndex} photos={sliderData.absolutePath} isAdaptive={isAdaptive} setIsGallery={setIsGallery} />
            )}
            <Footer addClass='blue' />
        </div>
    );
}
