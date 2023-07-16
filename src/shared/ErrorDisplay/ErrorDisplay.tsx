import styles from './ErrorDisplay.module.scss';
import lottie from 'lottie-web';
import { useCallback, useEffect, useRef, useState } from 'react';
import ErrorPageSvg from '../svgs/ErrorPageSvg';
import { useDispatch, useSelector } from 'react-redux';
import { handleHeaderColor } from '../../entities/mainSlice';
import { isMobile, isTablet } from 'react-device-detect';
import { AppState } from '../../entities/store';
import Lottie from 'lottie-react';
import animation from './FS_404_.json';
import MainPageSvg from '../svgs/MainPageSvg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ErrorDisplay = ({ type }) => {
  const [isAdaptive, setIsAdaptive] = useState(false);
  const width = useSelector<AppState, number>((state) => state.main.width);
  const container = useRef(null);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!width) return;

    if (isMobile || isTablet || width < 1023) {
      setIsAdaptive(true);
    }
  }, [width]);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('./FS_404_.json'),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  useEffect(() => {
    dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));
    return () => {
      dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
    };
  }, [dispatch]);

  const renderAnimation = () => {
    if (isAdaptive) {
      return <Lottie animationData={animation} loop={true} className={styles.animation} />;
    } else {
      return <div ref={container} className={styles.animation} />;
    }
  };

  const moveCursor = (e) => {
    if (!isMobile && !isTablet && cursorRef.current && containerRef.current) {
      const h = containerRef.current.getBoundingClientRect().top;
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY - h
        }px, 0)`;
    }
  };

  const renderContent = useCallback(() => {
    if (type === 500) {
      return (
        <>
          <p className={styles.text}>
            К сожалению, мы не смогли загрузить необходимые данные, вы можете перезагрузить страницу нажав на кнопку ниже
          </p>
          <button className={styles.btn} type='button' onClick={() => router.reload()}
            onMouseEnter={() => !isMobile && !isTablet && setVisible(false)}
            onMouseLeave={() => setVisible(true)}
          >
            Перезагрузить страницу
            <MainPageSvg id={'arrow-white'} />
          </button>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.text}>
            К сожалению, мы не нашли нужную вам страницу, вернитесь на главную или воспользуйтесь навигацией
          </p>
          <Link href='/' className={styles.btn}
            onMouseEnter={() => !isMobile && !isTablet && setVisible(false)}
            onMouseLeave={() => setVisible(true)}
          >
            Вернуться на главную
            <MainPageSvg id={'arrow-white'} />
          </Link>
        </>
      );
    }
  }, [type, router]);

  return (
    <main className={styles.container}
      ref={containerRef}
      onMouseMove={moveCursor}
      onMouseEnter={() => !isMobile && !isTablet && setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className={styles.content}
       onMouseEnter={() => !isMobile && !isTablet && setIsGreen(true)}
       onMouseLeave={() => setIsGreen(false)}
      >
        <div className={styles.icon} onMouseEnter={() => lottie.play()} onMouseLeave={() => lottie.stop()}>
          <ErrorPageSvg id={'soul-logo'} />
        </div>
        {renderContent()}
      </div>
      {renderAnimation()}

      <div
        ref={cursorRef}
        className={`${styles.cursor} ${visible ? styles.cursor__visible : ""} ${isGreen ? styles.cursor__green : ""}`}
      >
        <div className={styles.cursor__inner}>
         {
          isGreen ?
          <ErrorPageSvg addClass={`${styles.cursor__img} `} id="cursor-green" />
          :
          <ErrorPageSvg addClass={`${styles.cursor__img} `} id="cursor-orange" />
         }
        </div>
      </div>
    </main>
  );
};

export default ErrorDisplay;
