import styles from '../../../styles/ProgressNewsTopic.module.scss';
import formatGalleryLength from '../../utils/formatGalleryLength';
import SliderWithScale from '../../features/Sliders/SliderWithScale/SliderWithScale';
import { narrowBreakpoints } from '../../assets/data/swiper';
import React, { useState } from 'react';
import { Player, BigPlayButton } from 'video-react';
import 'node_modules/video-react/dist/video-react.css';

const ProgressNewsWithVideo = ({ progress, videos, photos, isAdaptive }) => {
    const [isSlider, setIsSlider] = useState(true);

    return (
        <>
            <p className={styles.slider_length}>
                {`${progress.fileUrl.length} ${formatGalleryLength(progress.fileUrl)}`} {`и ${videos.length} видео`}
            </p>
            <div className={styles.controls}>
                <button className={isSlider ? styles.controls_slider : 'undefined'} onClick={() => setIsSlider(true)}>
                    Фотографии
                </button>
                <button className={!isSlider ? styles.controls_videos : 'undefined'} onClick={() => setIsSlider(false)}>
                    Видео
                </button>
            </div>
            {photos.length > 0 && isSlider && (
                <section className={styles.slider}>
                    <SliderWithScale
                        alt={'Ход строительства SOUL'}
                        imgArray={photos}
                        breakpoints={narrowBreakpoints}
                        isAdaptive={isAdaptive}
                    />
                </section>
            )}
            {photos.length > 0 && !isSlider && (
                <Player poster={photos[0]} className={styles.video}>
                    <source src={videos[0]} />
                    <BigPlayButton position='center' className={styles.btn} />
                </Player>
            )}
        </>
    );
};

export default ProgressNewsWithVideo;
