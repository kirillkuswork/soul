import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import Footer from '../src/shared/Footer/Footer';
import styles from '../styles/GalleryPage.module.scss';
import { AppState, wrapper } from '../src/entities/store';
import { isMobile, isTablet } from 'react-device-detect';
import GalleryModal from '../src/features/GalleryModal/GalleryModal';
import { disableBodyScrollHeader, enableBodyScrollHeader } from '../src/utils/body-scroll-lock';
import { getGallery, getRunningQueriesThunk } from '../src/entities/gallerySlice';
import SliderGallery from '../src/features/Sliders/SliderGallery/SliderGallery';
import Loader from '../src/shared/Loader/Loader';
import formatPhotosLength from '../src/tools/_format-photos-length';
import { handleCalculateImageStyles } from '../src/tools/calculateImageStyles';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    try {
        store.dispatch(getGallery.initiate(1));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    } catch (e) {
        return { notFound: true };
    }
});

export default function GalleryPage(props) {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const height = useSelector<AppState, number>((state) => state.main.height);
    const orientation = useSelector<AppState, string>((state) => state.main.orientation);
    const [bigImagesStyles, setBigImagesStyles] = useState([]);

    const [isAdaptive, setIsAdaptive] = useState(false);
    const [isGallery, setIsGallery] = useState(false);
    const [isSlider, setIsSlider] = useState(false);
    const [picsLoaded, setPicsLoaded] = useState(false);
    const [galerryI, setGalleryI] = useState(0);
    const [gallerySlider, setGallerySlider] = useState([]);

    const gallery = props.initialState.galleryApi.queries['getGallery(1)'].data;

    useEffect(() => {
        if (gallery && gallery.length > 0) {
            const allCategoriesStyles = [];
            const parsedCategories = gallery.map((el) => {
                const oneCategoryStyles = [];
                const pic1 = el.absolutePath[0];
                const picNum = el.absolutePath.length;
                const picsText = formatPhotosLength(el.absolutePath);
                const bigImagesStyles = handleCalculateImageStyles(el.absolutePath, width, height, orientation);
                oneCategoryStyles.push(bigImagesStyles);
                allCategoriesStyles.push(oneCategoryStyles);
                return {
                    img: pic1,
                    subtitle: `${picNum} ${picsText}`,
                    title: el.title,
                    alt: el.title,
                    onClickHandler,
                    setPicsLoaded,
                };
            });
            setGallerySlider(parsedCategories);
            setIsSlider(true);
            setBigImagesStyles(allCategoriesStyles);
        }
    }, [gallery, width, height, orientation]);

    useHeaderHook({ disappearCoefficient: 0.1 });

    useEffect(() => {
        if (!width) return;

        if (isMobile || isTablet) {
            setIsAdaptive(true);
        }
    }, [width]);

    useEffect(() => {
        if (isGallery) {
            disableBodyScrollHeader();
        } else {
            enableBodyScrollHeader();
        }
    }, [isGallery]);

    const onClickHandler = (i) => {
        setGalleryI(i);
        setIsGallery(true);
    };

    return (
        <div className={styles.wrapper}>
            {!picsLoaded && <Loader />}
            {isGallery && (
                <GalleryModal
                    photos={gallery[galerryI]}
                    isAdaptive={isAdaptive}
                    setIsGallery={setIsGallery}
                    imagesStyles={bigImagesStyles[galerryI]}
                />
            )}

            <div className={styles.container}>
                {isSlider && (
                    <>
                        <h2 className={styles.title}>Галерея </h2>
                        <SliderGallery arr={gallerySlider} isAdaptive={isAdaptive} />
                    </>
                )}
            </div>
            <Footer addClass='blue' />
        </div>
    );
}
