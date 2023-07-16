import styles from '../styles/WhiteBoxPage.module.scss';
import { useEffect, useState } from 'react';

//Images for TopSection
import topXS from '../src/assets/images/whitebox/top/xs.webp';
import topMD from '../src/assets/images/whitebox/top/md.webp';
import topBG from '../src/assets/images/whitebox/top/bg.webp';
import topXL from '../src/assets/images/whitebox/top/bg.webp';

//Images for BottomSection
import xs from '../src/assets/images/landing/contacts/xs.webp';
import md from '../src/assets/images/landing/contacts/md.webp';
import bg from '../src/assets/images/landing/contacts/bg.webp';
import xl from '../src/assets/images/landing/contacts/xl.webp';

//Images for WhiteBoxPhoto
import midXs from '../src/assets/images/whitebox/wb/xs.webp';
import midMd from '../src/assets/images/whitebox/wb/md.webp';
import midBg from '../src/assets/images/whitebox/wb/bg.webp';

import { handleHeaderColor } from '../src/entities/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import useHeaderHook from '../src/hooks/useHeaderHook';
import { AppState } from '../src/entities/store';
import { whiteBoxText, whiteBoxSlider, points } from '../src/assets/data/whitebox';

import TopScreen from '../src/shared/TopScreen/TopScreen';
import BottomScreen from '../src/shared/BottomScreen/BottomScreen';
import Picture from '../src/shared/Picture/Picture';
import { BEIGE, BLACK, DARK_BLUE } from '../src/assets/data/consts';
import { isMobile } from 'react-device-detect';
import WhiteBoxSvg from '../src/shared/svgs/WhiteBoxSvg';

const imagesTop = [topXS.src, topMD.src, topBG.src, topXL.src];
const imagesBottom = [xs, md, bg, xl];
const imagesWb = [midXs.src, midMd.src, midBg.src];

interface ITextBlock {
    title: string;
    firstText: string;
    pb?: boolean;
}

const WhiteBoxPage = () => {
    const width = useSelector<AppState, number>((state) => state.main.width);
    const dispatch = useDispatch();
    const [isAdaptive, setIsAdaptive] = useState(false);

    useEffect(() => {
        dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: false }));

        return () => {
            dispatch(handleHeaderColor({ isHeaderColorBlack: 'black', value: true }));
        };
    }, [dispatch]);

    useHeaderHook({ disappearCoefficient: 0.15, BGCoefficientDesktop: 0.95, BGCoefficientMobile: 1.05 });

    useEffect(() => {
        if (!width) return;

        if ((isMobile && width <= 540) || width <= 540) {
            setIsAdaptive(true);
        }
    }, [width]);

    const handleHoover = (i, type) => {
        if (isAdaptive) return;
        let temp = i + 1;
        //фильтра hoverLi и hoverSpan для 12го пункта (эленент с индексом 11) не существует, меняем на 5
        if (i === 10) temp = 4;

        const hoverLi = document.getElementById(`hoverLi_${temp}`);
        const hoverDiv = document.getElementById(`hoverDiv_${i + 1}`);
        const hoverSpan = document.getElementById(`hoverSpan_${temp}`);
        const baloon = document.getElementById(`baloon_${i + 1}`);

        baloon.style.display = 'block';
        if (type === 'div') {
            hoverLi.style.color = BEIGE;
            hoverDiv.style.backgroundColor = BEIGE;
            hoverSpan.style.color = BEIGE;
        } else {
            hoverDiv.style.backgroundColor = BEIGE;
            hoverLi.style.color = BEIGE;
            hoverSpan.style.color = BEIGE;
            if (i === 3) {
                //если наводим мышь на фильтр 4 (эленент с индексом 3), нужно показать еще и 11ый элемент (у которого тоже цифра 4)
                const extraDiv = document.getElementById(`hoverDiv_11`);
                const extraBaloon = document.getElementById(`baloon_11`);
                extraDiv.style.backgroundColor = BEIGE;
                extraBaloon.style.display = 'block';
            }
        }
    };

    const handleNoHoover = (i, type) => {
        if (isAdaptive) return;
        let temp = i + 1;
        //фильтра hoverLi и hoverSpan для 11го пункта (эленент с индексом 10) не существует, меняем на 4
        if (i === 10) temp = 4;

        const hoverLi = document.getElementById(`hoverLi_${temp}`);
        const hoverDiv = document.getElementById(`hoverDiv_${i + 1}`);
        const hoverSpan = document.getElementById(`hoverSpan_${temp}`);
        const baloon = document.getElementById(`baloon_${i + 1}`);

        baloon.style.display = 'none';
        if (type === 'div') {
            hoverLi.style.color = BLACK;
            hoverDiv.style.backgroundColor = DARK_BLUE;
            hoverSpan.style.color = BLACK;
        } else {
            hoverDiv.style.backgroundColor = DARK_BLUE;
            hoverLi.style.color = BLACK;
            hoverSpan.style.color = BLACK;
            if (i === 3) {
                const extraDiv = document.getElementById(`hoverDiv_11`);
                const extraBaloon = document.getElementById(`baloon_11`);
                extraDiv.style.backgroundColor = DARK_BLUE;
                extraBaloon.style.display = 'none';
            }
        }
    };

    const TextRow = ({ title, firstText, pb }: ITextBlock) => {
        return (
            <div className={`${styles.textRow} ${pb ? styles.textRow_pb : ''}`}>
                <h2 className={styles.textRow_title} dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p className={styles.textRow_text} dangerouslySetInnerHTML={{ __html: firstText }}></p>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <TopScreen imgArray={imagesTop} alt={'Отделка White box'} title={'Отделка White box'} />
            <main>
                <TextRow title={whiteBoxText[0].title} firstText={whiteBoxText[0].firstText} />
                <div className={styles.whitebox}>
                    <div className={styles.preview}>
                        <Picture alt='whiteBox' imgArray={imagesWb} addClass={styles.picture} />
                        {!isAdaptive &&
                            points.map((el, i) => {
                                const n = el.number;
                                return (
                                    <div
                                        key={el.left}
                                        className={styles.preview__point}
                                        id={`hoverDiv_${i + 1}`}
                                        style={{ top: `${el.top}%`, left: `${el.left}%` }}
                                        onMouseEnter={() => handleHoover(i, 'div')}
                                        onMouseLeave={() => handleNoHoover(i, 'div')}
                                    >
                                        <div className={styles.preview__num}>{n}</div>
                                        <div
                                            className={`${styles.preview__baloon} ${n === 7 ? styles.preview__baloon_eight : ''}`}
                                            id={`baloon_${i + 1}`}
                                        >
                                            <p dangerouslySetInnerHTML={{ __html: el.text }}></p>
                                            <div className={`${styles.preview__tail} ${n === 7 ? styles.preview__tail_eight : ''}`}></div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className={styles.whitebox__content}>
                        <h2 className={styles.whitebox__title}> Особенности White box </h2>
                        <ul className={styles.whitebox__list}>
                            {points.map((el, i) => {
                                const n = el.number;
                                const num = n < 10 ? `0${n}.` : `${n}.`;
                                if (i !== 10)
                                    return (
                                        <li
                                            key={el.top}
                                            className={styles.whitebox__item}
                                            id={`hoverLi_${n}`}
                                            onMouseEnter={() => handleHoover(i, 'li')}
                                            onMouseLeave={() => handleNoHoover(i, 'li')}
                                        >
                                            <span id={`hoverSpan_${n}`}>{num}</span>
                                            <p dangerouslySetInnerHTML={{ __html: el.text }}></p>
                                        </li>
                                    );
                            })}
                        </ul>
                    </div>
                </div>
                <TextRow title={whiteBoxText[1].title} firstText={whiteBoxText[1].firstText} pb />
                <div className={styles.cards}>
                    {whiteBoxSlider.map((card) => {
                        return (
                            <div className={styles.card} key={card.svgId}>
                                <WhiteBoxSvg id={card.svgId} addClass={styles.card_icon} />
                                <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                            </div>
                        );
                    })}
                </div>
            </main>
            <BottomScreen formNameData={'whiteboxForm'} imgArray={imagesBottom} width={width} />
        </div>
    );
};

export default WhiteBoxPage;
