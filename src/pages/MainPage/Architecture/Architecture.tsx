import Slider from '../../../features/Sliders/Slider/Slider';
import styles from './Architecture.module.scss';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleAnchor } from '../../../entities/mainSlice';
import LinkArrowButton from '../../../shared/LinkArrowButton/LinkArrowButton';
import ROUTES from '../../../data/routes';
import { Anchor } from '../../../assets/data/enums';
import ModalGallery from '../../../features/ModalGallery/ModalGallery';
import { AppState } from '../../../entities/store';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import { architectureSection } from '../../../assets/data/main';

const Architecture = ({ mainSlider }) => {
    const [sliderDataArr, setsliderDataArr] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const isAdaptive = useSelector<AppState, boolean>((state) => state.main.isAdaptive);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.ARCHITECTURE, value: Anchor.ARCHITECTURE }));
    }, [inView, dispatch]);

    useEffect(() => {
        if (isModalOpened) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    }, [isModalOpened]);

    useEffect(() => {
        if (mainSlider) {
            const description = mainSlider.descriptions.map((el) => {
                return { text: el.description, title: el.title };
            });

            const fullUrls = mainSlider.absolutePath.map((el, i) => {
                return { img: el, alt: el, title: description[i].title, text: description[i].text, onClickHandler };
            });
            setsliderDataArr(fullUrls);
        }
    }, [mainSlider]);

    const onClickHandler = (i) => {
        setImageIndex(i);
        setIsModalOpened(true);
    };

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.top}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: architectureSection[0].title }}></h2>
                <LinkArrowButton route={ROUTES.architecture} text={architectureSection[0].text} />
            </div>
            {sliderDataArr.length > 0 && <Slider text={architectureSection[0].sliderText} dark arch arr={sliderDataArr} />}
            {isModalOpened && sliderDataArr.length > 0 && (
                <ModalGallery
                    picIndex={imageIndex}
                    photos={sliderDataArr}
                    isAdaptive={isAdaptive}
                    setIsGallery={setIsModalOpened}
                    withText
                />
            )}
        </div>
    );
};

export default Architecture;
