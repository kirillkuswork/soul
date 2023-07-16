import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { AppState } from '../../entities/store';
import GalleryPageSvg from '../../shared/svgs/GalleryPageSvg';
import styles from './GalleryModal.module.scss';

export default function GalleryModalInner({ imgStyles, picsrc, isAdaptive, setIsWhiteBtn, activeI, slideIndex }) {
    const imgRef = useRef(null);
    const [transformEl, setTransformEl] = useState(null);
    const [allowPanning, setAllowPanning] = useState(true);
    const [scale, setScale] = useState(1);
    const width = useSelector<AppState, number>((state) => state.main.width);
    const height = useSelector<AppState, number>((state) => state.main.height);

    //при завершения зума колесиком или на тачпаде на адаптивах устанавливается scale и если размер фото доходит до крестика, меняется цвет крестика на белый
    const handleScale = () => {
        const imgCurrentWidth = imgRef?.current.getBoundingClientRect().width;
        const imgCurrentHeight = imgRef?.current.getBoundingClientRect().height;
        const imgOriginalWidth = imgStyles.width;
        const currentScale = imgCurrentWidth / imgOriginalWidth;
        setScale(currentScale);
        if (imgCurrentHeight >= height && imgCurrentWidth >= width) {
            setIsWhiteBtn(true);
        } else {
            setIsWhiteBtn(false);
        }
    };
    //при клике на кнопки зума устанавливается scale и если размер фото доходит до крестика, меняется цвет крестика на белый
    const handleButtonsScale = () => {
        setTimeout(() => {
            const imgCurrentWidth = imgRef?.current.getBoundingClientRect().width;
            const imgCurrentHeight = imgRef?.current.getBoundingClientRect().height;
            const imgOriginalWidth = imgStyles.width;
            const currentScale = imgCurrentWidth / imgOriginalWidth;
            setScale(currentScale);
            if (imgCurrentHeight >= height && imgCurrentWidth >= width - 40) {
                setIsWhiteBtn(true);
            } else {
                setIsWhiteBtn(false);
            }
        }, 400);
    };
    //можно листать слайды свайпами на адаптивах, если только нет зума (зам меньше 1.1)
    useEffect(() => {
        if (!isAdaptive) {
            setAllowPanning(false);
        } else {
            if (scale > 1.1) {
                setAllowPanning(false);
            } else setAllowPanning(true);
        }
    }, [scale, isAdaptive]);

    //при переходе на следующий слайд зум скидывается и цвет крестика становится черным
    useEffect(() => {
        return () => {
            if (slideIndex !== activeI) return;
            setIsWhiteBtn(false);
            transformEl?.resetTransform();
        };
    }, [transformEl, slideIndex, activeI, setIsWhiteBtn]);

    return (
        <TransformWrapper
            initialScale={1}
            panning={{ disabled: allowPanning }}
            doubleClick={{ disabled: true }}
            centerOnInit={true}
            onPinchingStop={() => handleScale()}
            onWheelStop={() => handleScale()}
            onInit={(el) => setTransformEl(el)}
        >
            {({ zoomIn, zoomOut }) => (
                <>
                    <div className={styles.zoombuttons}>
                        <button
                            onClick={() => {
                                zoomOut();
                                handleButtonsScale();
                            }}
                        >
                            <GalleryPageSvg addClass={styles.zoombuttons__icon} id={'minus-bg'} />
                        </button>
                        <button
                            onClick={() => {
                                zoomIn();
                                handleButtonsScale();
                            }}
                        >
                            <GalleryPageSvg addClass={styles.zoombuttons__icon} id={'plus-bg'} />
                        </button>
                    </div>

                    <TransformComponent contentStyle={imgStyles}>
                        <picture>
                            <img className={styles.modalImg} src={picsrc} alt={'picture'} style={imgStyles} ref={imgRef} />
                        </picture>
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
}
