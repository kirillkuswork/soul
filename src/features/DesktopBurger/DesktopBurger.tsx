import styles from './DesktopBurger.module.scss';
import MainPageSvg from '../../shared/svgs/MainPageSvg';
import img from '../../assets/images/header/1.webp';
import NavEl from '../../shared/NavEl/NavEl';
import StripesReveal from '../../shared/StripesAnimation/StripesReveal';
import { LITE_BEIGE_COLOR } from '../../assets/data/consts';
import img2 from '../../assets/images/header/2.webp';
import ImageReveal from '../../shared/ImageReveal/ImageReveal';

export default function DesktopBurger({ burgerMenu, isOpen }) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <section className={`${styles.section} ${isOpen && styles.section__opened}`}>
            {isOpen && (
                <StripesReveal backgroundColor={LITE_BEIGE_COLOR}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <nav className={styles.nav}>
                                <div>
                                    <div className={styles.nav__first}>
                                        {burgerMenu[0].menuItems?.length > 0 && <NavEl burgerEl={burgerMenu[0]} />}
                                    </div>
                                    {burgerMenu[2].menuItems?.length > 0 && <NavEl burgerEl={burgerMenu[2]} />}
                                </div>
                                {burgerMenu[1].menuItems?.length > 0 && <NavEl burgerEl={burgerMenu[1]} />}
                            </nav>
                            <MainPageSvg addClass={styles.logo} id={'soul-desktop-burger'} />
                        </div>
                        <ImageReveal img={img} img2={img2} isTrue={isOpen} />
                    </div>
                </StripesReveal>
            )}
            {arr.reverse().map((el, i) => (
                <div key={i} style={{ backgroundColor: LITE_BEIGE_COLOR }} className={`${styles[`el--${el}`]} ${styles.el}`}></div>
            ))}
        </section>
    );
}
