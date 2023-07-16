import styles from './WindowsAnimation.module.scss';
import React, { useRef, useState } from 'react';
import bg from '../../assets/images/landing/topSection/back.webp';
import useToggleDisplay from '../../hooks/useToggleDisplay';
import Image from 'next/image';
import Loader from '../Loader/Loader';

const WindowsAnimation = () => {
    const [isRenderLoading, setIsRenderLoading] = useState(false);
    const houseTenPartOneRef = useRef(null);
    const houseTenPartTwoRef = useRef(null);
    const houseEighteenRef = useRef(null);
    const houseNinePartOneRef = useRef(null);
    const houseNinePartTwoRef = useRef(null);
    const houseSeventeenPartOneRef = useRef(null);
    const houseSeventeenPartTwoRef = useRef(null);
    const houseSixteenPartOneRef = useRef(null);
    const houseSixteenPartTwoRef = useRef(null);
    const houseFifteenPartOneRef = useRef(null);
    const houseFifteenPartTwoRef = useRef(null);
    const houseFourteenPartOneRef = useRef(null);
    const houseFourteenPartTwoRef = useRef(null);
    const houseThirteenPartOneRef = useRef(null);
    const houseThirteenPartTwoRef = useRef(null);
    const houseTwelvePartOneRef = useRef(null);
    const houseTwelvePartTwoRef = useRef(null);
    const houseElevenPartOneRef = useRef(null);
    const houseElevenPartTwoRef = useRef(null);
    const houseEightPartOneRef = useRef(null);
    const houseEightPartTwoRef = useRef(null);
    const houseSevenRef = useRef(null);
    const houseSixRef = useRef(null);
    const houseFiveRef = useRef(null);
    const houseFourRef = useRef(null);
    const houseThreeRef = useRef(null);
    const houseTwoRef = useRef(null);
    const houseOneRef = useRef(null);

    useToggleDisplay(houseTenPartOneRef);
    useToggleDisplay(houseTenPartTwoRef);
    useToggleDisplay(houseEighteenRef);
    useToggleDisplay(houseNinePartOneRef);
    useToggleDisplay(houseNinePartTwoRef);
    useToggleDisplay(houseSeventeenPartOneRef);
    useToggleDisplay(houseSeventeenPartTwoRef);
    useToggleDisplay(houseSixteenPartOneRef);
    useToggleDisplay(houseSixteenPartTwoRef);
    useToggleDisplay(houseFifteenPartOneRef);
    useToggleDisplay(houseFifteenPartTwoRef);
    useToggleDisplay(houseFourteenPartOneRef);
    useToggleDisplay(houseFourteenPartTwoRef);
    useToggleDisplay(houseThirteenPartOneRef);
    useToggleDisplay(houseThirteenPartTwoRef);
    useToggleDisplay(houseTwelvePartOneRef);
    useToggleDisplay(houseTwelvePartTwoRef);
    useToggleDisplay(houseElevenPartOneRef);
    useToggleDisplay(houseElevenPartTwoRef);
    useToggleDisplay(houseEightPartOneRef);
    useToggleDisplay(houseEightPartTwoRef);
    useToggleDisplay(houseSevenRef);
    useToggleDisplay(houseSixRef);
    useToggleDisplay(houseFiveRef);
    useToggleDisplay(houseFourRef);
    useToggleDisplay(houseThreeRef);
    useToggleDisplay(houseTwoRef);
    useToggleDisplay(houseOneRef);

    return (
        <>
            {!isRenderLoading && <Loader />}
            <div className={styles.background}>
                <Image
                    src={bg}
                    fill
                    priority
                    unoptimized
                    alt={'Жилой район Soul'}
                    sizes='(max-width: 768px) 100vw,
                 (max-width: 1200px) 100vw'
                    onLoadingComplete={() =>
                        setTimeout(() => {
                            setIsRenderLoading(true);
                        }, 300)
                    }
                />

                <svg id='Layer' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1059.59 643.33' className={styles.background_front}>
                    <g id='mask'>
                        <g id='dom18' ref={houseEighteenRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='230.9 546.99 224.17 548.27 224.17 551.98 230.9 550.7 230.9 546.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='240.49 545.18 233.75 546.47 233.75 550.18 240.49 548.9 240.49 545.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='250.08 543.38 243.34 544.66 243.34 548.38 250.08 547.1 250.08 543.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='259.67 541.58 252.93 542.86 252.93 546.57 259.67 545.29 259.67 541.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='269.25 539.77 262.52 541.06 262.52 544.77 269.25 543.49 269.25 539.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='278.84 537.97 272.1 539.25 272.1 542.97 278.84 541.69 278.84 537.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='288.43 536.17 281.69 537.45 281.69 541.17 288.43 539.88 288.43 536.17'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='298.02 534.37 291.28 535.65 291.28 539.36 298.02 538.08 298.02 534.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='307.6 532.56 300.87 533.84 300.87 537.56 307.6 536.28 307.6 532.56'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='317.19 530.76 310.45 532.04 310.45 535.76 317.19 534.47 317.19 530.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='326.78 528.96 320.04 530.24 320.04 533.95 326.78 532.67 326.78 528.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='336.37 527.15 329.63 528.43 329.63 532.15 336.37 530.87 336.37 527.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='345.95 525.35 339.22 526.63 339.22 530.35 345.95 529.07 345.95 525.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='355.54 523.55 348.8 524.83 348.8 528.54 355.54 527.26 355.54 523.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='365.13 521.74 358.39 523.03 358.39 526.74 365.13 525.46 365.13 521.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='374.72 519.94 367.98 521.22 367.98 524.94 374.72 523.66 374.72 519.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='384.3 518.14 377.57 519.42 377.57 523.13 384.3 521.85 384.3 518.14'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='393.89 516.33 387.16 517.62 387.16 521.33 393.89 520.05 393.89 516.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='403.48 514.53 396.74 515.81 396.74 519.53 403.48 518.25 403.48 514.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='413.07 512.73 406.33 514.01 406.33 517.73 413.07 516.44 413.07 512.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='422.66 510.92 415.92 512.21 415.92 515.92 422.66 514.64 422.66 510.92'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='432.24 509.12 425.51 510.4 425.51 514.12 432.24 512.84 432.24 509.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='441.83 507.32 435.09 508.6 435.09 512.32 441.83 511.03 441.83 507.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='451.42 505.52 444.68 506.8 444.68 510.51 451.42 509.23 451.42 505.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='461.01 503.71 454.27 504.99 454.27 508.71 461.01 507.43 461.01 503.71'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='471.34 497.21 468.67 497.72 468.67 502.99 471.34 502.48 471.34 497.21'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='475.99 496.32 473.32 496.83 473.32 502.1 475.99 501.59 475.99 496.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='471.34 506.27 468.67 506.77 468.67 512.04 471.34 511.54 471.34 506.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='475.99 505.38 473.32 505.88 473.32 511.15 475.99 510.65 475.99 505.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='475.99 514.43 473.32 514.94 473.32 519.05 474.55 519.97 475.99 519.7 475.99 514.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='482.97 494.99 480.31 495.5 480.31 500.77 482.97 500.26 482.97 494.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='489.97 493.67 487.3 494.18 487.3 499.45 489.97 498.94 489.97 493.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='180.73 552.59 178.06 553.1 178.06 558.37 180.73 557.86 180.73 552.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='187.72 551.26 185.05 551.77 185.05 557.04 187.72 556.53 187.72 551.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='194.7 549.93 192.04 550.44 192.04 555.7 194.7 555.2 194.7 549.93'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='201.69 548.6 199.03 549.1 199.03 554.37 201.69 553.86 201.69 548.6'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='208.68 547.26 206.02 547.77 206.02 553.04 208.68 552.53 208.68 547.26'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom17'>
                            <g ref={houseSeventeenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 446.96 43.92 447.92 43.92 457.75 48.99 456.78 48.99 446.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='56.19 431.91 52.73 432.57 52.73 442.38 56.19 441.73 56.19 431.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='61.36 430.93 57.9 431.59 57.9 441.41 61.36 440.74 61.36 430.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='73.64 428.59 70.18 429.25 70.18 439.05 73.64 438.42 73.64 428.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='82.4 426.91 77.32 427.89 77.32 437.7 82.4 436.72 82.4 426.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 433.28 43.92 434.25 43.92 444.07 48.99 443.1 48.99 433.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='67.5 429.76 64.04 430.42 64.04 440.23 67.5 439.57 67.5 429.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='56.19 413.66 52.73 414.32 52.73 423.38 56.19 422.72 56.19 413.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='61.36 412.68 57.9 413.33 57.9 422.41 61.36 421.74 61.36 412.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='73.64 410.34 70.18 411 70.18 420.05 73.64 419.42 73.64 410.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='82.4 408.66 77.32 409.64 77.32 418.7 82.4 417.72 82.4 408.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 415.03 43.92 416 43.92 425.07 48.99 424.1 48.99 415.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='67.5 411.51 64.04 412.17 64.04 421.23 67.5 420.57 67.5 411.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='56.19 425.37 52.73 426.03 52.73 429.86 56.19 429.2 56.19 425.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='61.36 424.39 57.9 425.04 57.9 428.88 61.36 428.21 61.36 424.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='73.64 422.05 70.18 422.71 70.18 426.52 73.64 425.89 73.64 422.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='82.4 420.37 77.32 421.35 77.32 425.18 82.4 424.19 82.4 420.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 426.74 43.92 427.7 43.92 431.55 48.99 430.58 48.99 426.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='67.5 423.22 64.04 423.88 64.04 427.7 67.5 427.05 67.5 423.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 460.65 43.92 461.62 43.92 471.44 48.99 470.48 48.99 460.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 474.32 43.92 475.28 43.92 485.11 48.99 484.14 48.99 474.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 488.01 43.92 488.97 43.92 498.8 48.99 497.83 48.99 488.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 501.69 43.92 502.66 43.92 512.48 48.99 511.51 48.99 501.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 515.38 43.92 516.35 43.92 526.17 48.99 525.2 48.99 515.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 529.06 43.92 530.03 43.92 539.85 48.99 538.89 48.99 529.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='48.99 542.76 43.92 543.73 43.92 561.1 48.99 560.13 48.99 542.76'
                                    fill='#212f3e'
                                />
                            </g>
                            <g id='_Group_' ref={houseSeventeenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 443.14 37.42 440.87 37.42 431.05 40.42 433.3 40.42 443.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 429.54 32.42 427.27 32.42 437.09 35.42 439.35 35.42 429.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 425.76 27.42 423.49 27.42 433.31 30.42 435.57 30.42 425.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 421.98 22.42 419.71 22.42 429.53 25.42 431.79 25.42 421.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 418.2 17.42 415.93 17.42 425.74 20.42 428.01 20.42 418.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 414.41 12.42 412.15 12.42 421.96 15.42 424.22 15.42 414.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 410.63 7.42 408.36 7.42 418.18 10.42 420.45 10.42 410.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 406.85 2.42 404.58 2.42 414.4 5.42 416.66 5.42 406.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 415.08 37.42 412.83 37.42 421.83 40.42 424.1 40.42 415.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 411.32 32.42 409.05 32.42 418.05 35.42 420.31 35.42 411.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 407.54 27.42 405.27 27.42 414.27 30.42 416.53 30.42 407.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 403.76 22.42 401.49 22.42 410.49 25.42 412.75 25.42 403.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 399.97 17.42 397.7 17.42 406.7 20.42 408.97 20.42 399.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 396.19 12.42 393.92 12.42 402.92 15.42 405.18 15.42 396.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 392.41 7.42 390.14 7.42 399.14 10.42 401.41 10.42 392.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 388.63 2.42 386.36 2.42 395.36 5.42 397.62 5.42 388.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 426.77 37.42 424.52 37.42 428.37 40.42 430.64 40.42 426.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 423.01 32.42 420.74 32.42 424.59 35.42 426.86 35.42 423.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 419.23 27.42 416.96 27.42 420.82 30.42 423.08 30.42 419.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 415.45 22.42 413.18 22.42 417.04 25.42 419.29 25.42 415.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 411.67 17.42 409.4 17.42 413.24 20.42 415.51 20.42 411.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 407.88 12.42 405.62 12.42 409.46 15.42 411.72 15.42 407.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 404.1 7.42 401.83 7.42 405.68 10.42 407.95 10.42 404.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 400.32 2.42 398.05 2.42 401.9 5.42 404.17 5.42 400.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 446.99 37.42 444.74 37.42 454.55 40.42 456.82 40.42 446.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 443.23 32.42 440.96 32.42 450.77 35.42 453.04 35.42 443.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 439.44 27.42 437.18 27.42 447 30.42 449.26 30.42 439.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 435.66 22.42 433.39 22.42 443.22 25.42 445.48 25.42 435.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 431.88 17.42 429.61 17.42 439.42 20.42 441.69 20.42 431.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 428.1 12.42 425.83 12.42 435.64 15.42 437.91 15.42 428.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 424.32 7.42 422.05 7.42 431.86 10.42 434.13 10.42 424.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 420.54 2.42 418.27 2.42 428.08 5.42 430.35 5.42 420.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 460.67 37.42 458.42 37.42 468.24 40.42 470.5 40.42 460.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 456.91 32.42 454.64 32.42 464.45 35.42 466.72 35.42 456.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 453.13 27.42 450.86 27.42 460.68 30.42 462.94 30.42 453.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 449.35 22.42 447.08 22.42 456.9 25.42 459.16 25.42 449.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 445.57 17.42 443.3 17.42 453.11 20.42 455.38 20.42 445.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 441.78 12.42 439.52 12.42 449.33 15.42 451.59 15.42 441.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 438 7.42 435.73 7.42 445.55 10.42 447.82 10.42 438'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 434.22 2.42 431.95 2.42 441.76 5.42 444.03 5.42 434.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 474.36 37.42 472.11 37.42 481.92 40.42 484.19 40.42 474.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 470.6 32.42 468.33 32.42 478.14 35.42 480.41 35.42 470.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 466.81 27.42 464.54 27.42 474.37 30.42 476.63 30.42 466.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 463.03 22.42 460.76 22.42 470.59 25.42 472.84 25.42 463.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 459.25 17.42 456.98 17.42 466.79 20.42 469.06 20.42 459.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 455.47 12.42 453.2 12.42 463.01 15.42 465.27 15.42 455.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 451.69 7.42 449.42 7.42 459.23 10.42 461.5 10.42 451.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 447.91 2.42 445.64 2.42 455.45 5.42 457.72 5.42 447.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 488.04 37.42 485.79 37.42 495.61 40.42 497.87 40.42 488.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 484.28 32.42 482.01 32.42 491.82 35.42 494.09 35.42 484.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 480.5 27.42 478.23 27.42 488.05 30.42 490.31 30.42 480.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 476.72 22.42 474.45 22.42 484.27 25.42 486.53 25.42 476.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 472.93 17.42 470.67 17.42 480.48 20.42 482.75 20.42 472.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 469.15 12.42 466.88 12.42 476.7 15.42 478.96 15.42 469.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 465.37 7.42 463.1 7.42 472.92 10.42 475.18 10.42 465.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 461.59 2.42 459.32 2.42 469.13 5.42 471.4 5.42 461.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 501.73 37.42 499.48 37.42 509.29 40.42 511.56 40.42 501.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 497.96 32.42 495.7 32.42 505.51 35.42 507.78 35.42 497.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 494.18 27.42 491.91 27.42 501.74 30.42 504 30.42 494.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 490.4 22.42 488.13 22.42 497.95 25.42 500.21 25.42 490.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 486.62 17.42 484.35 17.42 494.16 20.42 496.43 20.42 486.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 482.84 12.42 480.57 12.42 490.38 15.42 492.64 15.42 482.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 479.06 7.42 476.79 7.42 486.6 10.42 488.87 10.42 479.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 475.27 2.42 473.01 2.42 482.82 5.42 485.09 5.42 475.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 515.41 37.42 513.16 37.42 522.97 40.42 525.24 40.42 515.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 511.65 32.42 509.38 32.42 519.19 35.42 521.46 35.42 511.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 507.87 27.42 505.6 27.42 515.42 30.42 517.68 30.42 507.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 504.09 22.42 501.82 22.42 511.64 25.42 513.9 25.42 504.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 500.3 17.42 498.04 17.42 507.85 20.42 510.12 20.42 500.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 496.52 12.42 494.25 12.42 504.07 15.42 506.33 15.42 496.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 492.74 7.42 490.47 7.42 500.28 10.42 502.55 10.42 492.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 488.96 2.42 486.69 2.42 496.5 5.42 498.77 5.42 488.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 529.1 37.42 526.85 37.42 536.66 40.42 538.93 40.42 529.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 525.33 32.42 523.06 32.42 532.88 35.42 535.15 35.42 525.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 521.55 27.42 519.28 27.42 529.11 30.42 531.36 30.42 521.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 517.77 22.42 515.5 22.42 525.32 25.42 527.58 25.42 517.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 513.99 17.42 511.72 17.42 521.53 20.42 523.8 20.42 513.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 510.21 12.42 507.94 12.42 517.75 15.42 520.01 15.42 510.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 506.43 7.42 504.16 7.42 513.97 10.42 516.24 10.42 506.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 502.64 2.42 500.37 2.42 510.19 5.42 512.46 5.42 502.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='40.42 542.78 37.42 540.53 37.42 558.04 40.42 560.31 40.42 542.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='35.42 539.02 32.42 536.75 32.42 554.26 35.42 556.53 35.42 539.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='30.42 535.24 27.42 532.97 27.42 550.49 30.42 552.75 30.42 535.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='25.42 531.45 22.42 529.19 22.42 546.71 25.42 548.97 25.42 531.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='20.42 527.67 17.42 525.4 17.42 542.91 20.42 545.18 20.42 527.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='15.42 523.89 12.42 521.62 12.42 539.13 15.42 541.4 15.42 523.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='10.42 520.11 7.42 517.84 7.42 535.35 10.42 537.62 10.42 520.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='5.42 516.33 2.42 514.06 2.42 531.57 5.42 533.84 5.42 516.33'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom16'>
                            <g ref={houseSixteenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 502 124.16 502.57 124.16 512.22 127.16 511.65 127.16 502'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 498.86 140.65 499.43 140.65 509.08 143.65 508.51 143.65 498.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 495.73 154.5 496.8 154.5 506.45 160.14 505.38 160.14 495.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 500.18 131.09 501.25 131.09 510.9 136.73 509.83 136.73 500.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 497.55 147.58 498.12 147.58 507.77 150.58 507.2 150.58 497.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 503.32 116.77 503.98 116.77 513.63 120.24 512.97 120.24 503.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 515.66 124.16 516.23 124.16 525.88 127.16 525.31 127.16 515.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 512.52 140.65 513.09 140.65 522.74 143.65 522.17 143.65 512.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 509.38 154.5 510.46 154.5 520.11 160.14 519.04 160.14 509.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 513.84 131.09 514.91 131.09 524.56 136.73 523.49 136.73 513.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 511.2 147.58 511.78 147.58 521.43 150.58 520.86 150.58 511.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 516.98 116.77 517.64 116.77 527.29 120.24 526.63 120.24 516.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 529.32 124.16 529.89 124.16 539.54 127.16 538.97 127.16 529.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 526.18 140.65 526.75 140.65 536.4 143.65 535.83 143.65 526.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 523.04 154.5 524.12 154.5 533.77 160.14 532.69 160.14 523.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 527.5 131.09 528.57 131.09 538.22 136.73 537.15 136.73 527.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 524.86 147.58 525.43 147.58 535.09 150.58 534.51 150.58 524.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 530.64 116.77 531.29 116.77 540.95 120.24 540.29 120.24 530.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 542.98 124.16 543.55 124.16 553.2 127.16 552.63 127.16 542.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 539.84 140.65 540.41 140.65 550.06 143.65 549.49 143.65 539.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 536.7 154.5 537.78 154.5 547.43 160.14 546.35 160.14 536.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 541.16 131.09 542.23 131.09 551.88 136.73 550.81 136.73 541.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 538.52 147.58 539.09 147.58 548.74 150.58 548.17 150.58 538.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 544.3 116.77 544.95 116.77 554.61 120.24 553.95 120.24 544.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 556.64 124.16 557.21 124.16 566.86 127.16 566.29 127.16 556.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 553.5 140.65 554.07 140.65 563.72 143.65 563.15 143.65 553.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 550.36 154.5 551.44 154.5 561.09 160.14 560.01 160.14 550.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 554.82 131.09 555.89 131.09 565.54 136.73 564.47 136.73 554.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 552.18 147.58 552.75 147.58 562.4 150.58 561.83 150.58 552.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 557.95 116.77 558.61 116.77 568.27 120.24 567.61 120.24 557.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 570.3 124.16 570.87 124.16 580.52 127.16 579.95 127.16 570.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 567.16 140.65 567.73 140.65 577.38 143.65 576.81 143.65 567.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 564.02 154.5 565.09 154.5 574.75 160.14 573.67 160.14 564.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 568.48 131.09 569.55 131.09 579.2 136.73 578.13 136.73 568.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 565.84 147.58 566.41 147.58 576.06 150.58 575.49 150.58 565.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 571.61 116.77 572.27 116.77 581.93 120.24 581.26 120.24 571.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 583.96 124.16 584.53 124.16 594.18 127.16 593.61 127.16 583.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 580.82 140.65 581.39 140.65 591.04 143.65 590.47 143.65 580.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 577.68 154.5 578.75 154.5 588.4 160.14 587.33 160.14 577.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 582.14 131.09 583.21 131.09 592.86 136.73 591.79 136.73 582.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 579.5 147.58 580.07 147.58 589.72 150.58 589.15 150.58 579.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 585.27 116.77 585.93 116.77 595.59 120.24 594.92 120.24 585.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 597.61 124.16 598.19 124.16 607.84 127.16 607.27 127.16 597.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 594.48 140.65 595.05 140.65 604.7 143.65 604.13 143.65 594.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 591.34 154.5 592.41 154.5 602.06 160.14 600.99 160.14 591.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 595.79 131.09 596.87 131.09 606.52 136.73 605.45 136.73 595.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 593.16 147.58 593.73 147.58 603.38 150.58 602.81 150.58 593.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 598.93 116.77 599.59 116.77 609.25 120.24 608.58 120.24 598.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 611.25 124.16 611.82 124.16 627.07 127.16 626.5 127.16 611.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 608.11 140.65 608.68 140.65 623.93 143.65 623.36 143.65 608.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 604.97 154.5 606.05 154.5 621.3 160.14 620.23 160.14 604.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 609.43 131.09 610.5 131.09 625.75 136.73 624.68 136.73 609.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 606.79 147.58 607.36 147.58 622.62 150.58 622.05 150.58 606.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 612.57 116.77 613.22 116.77 628.48 120.24 627.82 120.24 612.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.16 479.3 124.16 479.87 124.16 492.76 127.16 492.19 127.16 479.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='124.16 498.45 127.16 497.88 127.16 494.88 124.16 495.45 124.16 498.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='143.65 476.16 140.65 476.73 140.65 489.62 143.65 489.05 143.65 476.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='140.65 495.31 143.65 494.74 143.65 491.74 140.65 492.31 140.65 495.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='160.14 473.02 154.5 474.1 154.5 486.99 160.14 485.91 160.14 473.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='154.5 492.68 160.14 491.6 160.14 488.6 154.5 489.68 154.5 492.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='136.73 477.48 131.09 478.55 131.09 491.44 136.73 490.37 136.73 477.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='131.09 497.13 136.73 496.06 136.73 493.06 131.09 494.13 131.09 497.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='147.58 493.99 150.58 493.42 150.58 490.42 147.58 490.99 147.58 493.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='150.58 474.84 147.58 475.41 147.58 488.3 150.58 487.73 150.58 474.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='116.77 499.86 120.24 499.19 120.24 496.19 116.77 496.85 116.77 499.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='120.24 480.61 116.77 481.27 116.77 494.16 120.24 493.5 120.24 480.61'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseSixteenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 503.03 109.59 500.76 109.59 510.41 112.59 512.68 112.59 503.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 499.25 104.59 496.98 104.59 506.63 107.59 508.9 107.59 499.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 495.47 99.59 493.2 99.59 502.85 102.59 505.12 102.59 495.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 491.68 94.59 489.41 94.59 499.07 97.59 501.34 97.59 491.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 487.9 89.59 485.63 89.59 495.29 92.59 497.56 92.59 487.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='87.59 461.41 84.59 459.15 84.59 463.63 87.59 465.9 87.59 461.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 516.68 109.59 514.42 109.59 524.07 112.59 526.34 112.59 516.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 512.9 104.59 510.63 104.59 520.29 107.59 522.56 107.59 512.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 509.12 99.59 506.85 99.59 516.51 102.59 518.77 102.59 509.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 505.34 94.59 503.07 94.59 512.72 97.59 514.99 97.59 505.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 501.56 89.59 499.29 89.59 508.94 92.59 511.21 92.59 501.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 530.34 109.59 528.07 109.59 537.73 112.59 539.99 112.59 530.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 526.56 104.59 524.29 104.59 533.94 107.59 536.21 107.59 526.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 522.78 99.59 520.51 99.59 530.16 102.59 532.43 102.59 522.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 519 94.59 516.73 94.59 526.38 97.59 528.65 97.59 519'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 515.21 89.59 512.94 89.59 522.6 92.59 524.87 92.59 515.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 544 109.59 541.73 109.59 551.38 112.59 553.65 112.59 544'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 540.21 104.59 537.95 104.59 547.6 107.59 549.87 107.59 540.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 536.43 99.59 534.16 99.59 543.82 102.59 546.09 102.59 536.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 532.65 94.59 530.38 94.59 540.04 97.59 542.3 97.59 532.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 528.87 89.59 526.6 89.59 536.25 92.59 538.52 92.59 528.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 557.65 109.59 555.38 109.59 565.04 112.59 567.31 112.59 557.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 553.87 104.59 551.6 104.59 561.26 107.59 563.52 107.59 553.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 550.09 99.59 547.82 99.59 557.47 102.59 559.74 102.59 550.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 546.31 94.59 544.04 94.59 553.69 97.59 555.96 97.59 546.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 542.53 89.59 540.26 89.59 549.91 92.59 552.18 92.59 542.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 571.31 109.59 569.04 109.59 578.69 112.59 580.96 112.59 571.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 567.53 104.59 565.26 104.59 574.91 107.59 577.18 107.59 567.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 563.74 99.59 561.48 99.59 571.13 102.59 573.4 102.59 563.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 559.96 94.59 557.69 94.59 567.35 97.59 569.62 97.59 559.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 556.18 89.59 553.91 89.59 563.57 92.59 565.83 92.59 556.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 584.96 109.59 582.69 109.59 592.35 112.59 594.62 112.59 584.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 581.18 104.59 578.91 104.59 588.57 107.59 590.84 107.59 581.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 577.4 99.59 575.13 99.59 584.79 102.59 587.05 102.59 577.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 573.62 94.59 571.35 94.59 581 97.59 583.27 97.59 573.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 569.84 89.59 567.57 89.59 577.22 92.59 579.49 92.59 569.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 598.62 109.59 596.35 109.59 606 112.59 608.27 112.59 598.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 594.84 104.59 592.57 104.59 602.22 107.59 604.49 107.59 594.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 591.06 99.59 588.79 99.59 598.44 102.59 600.71 102.59 591.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 587.27 94.59 585.01 94.59 594.66 97.59 596.93 97.59 587.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 583.49 89.59 581.22 89.59 590.88 92.59 593.15 92.59 583.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 612.28 109.59 610.01 109.59 625.13 112.59 627.4 112.59 612.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 608.49 104.59 606.22 104.59 621.35 107.59 623.62 107.59 608.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 604.71 99.59 602.44 99.59 617.57 102.59 619.84 102.59 604.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 600.93 94.59 598.66 94.59 613.79 97.59 616.06 97.59 600.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 597.15 89.59 594.88 89.59 610.01 92.59 612.28 92.59 597.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='112.59 480.32 109.59 478.05 109.59 490.95 112.59 493.21 112.59 480.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.59 496.63 112.59 498.9 112.59 495.9 109.59 493.63 109.59 496.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='104.59 492.85 107.59 495.12 107.59 492.12 104.59 489.85 104.59 492.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='107.59 476.54 104.59 474.27 104.59 487.16 107.59 489.43 107.59 476.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='99.59 489.07 102.59 491.34 102.59 488.34 99.59 486.07 99.59 489.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='102.59 472.76 99.59 470.49 99.59 483.38 102.59 485.65 102.59 472.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='94.59 485.29 97.59 487.56 97.59 484.56 94.59 482.29 94.59 485.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.59 468.98 94.59 466.71 94.59 479.6 97.59 481.87 97.59 468.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='89.59 481.51 92.59 483.78 92.59 480.78 89.59 478.51 89.59 481.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='92.59 465.2 89.59 462.93 89.59 475.82 92.59 478.09 92.59 465.2'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom15'>
                            <g ref={houseFifteenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='141.68 440.38 138.22 441.04 138.22 445.23 141.68 447.87 141.68 440.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 438.97 145.61 439.63 145.61 449.28 149.07 448.62 149.07 438.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 437.56 152.99 438.21 152.99 447.87 156.45 447.21 156.45 437.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 436.14 160.38 436.8 160.38 446.46 163.84 445.79 163.84 436.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 434.73 167.77 435.39 167.77 445.05 171.23 444.38 171.23 434.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='141.68 426.84 138.22 427.49 138.22 437.15 141.68 436.49 141.68 426.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 425.42 145.61 426.08 145.61 435.74 149.07 435.07 149.07 425.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 424.01 152.99 424.67 152.99 434.33 156.45 433.66 156.45 424.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 422.6 160.38 423.26 160.38 432.92 163.84 432.25 163.84 422.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 421.19 167.77 421.85 167.77 431.5 171.23 430.84 171.23 421.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='141.68 413.29 138.22 413.95 138.22 423.61 141.68 422.94 141.68 413.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 411.88 145.61 412.54 145.61 422.2 149.07 421.53 149.07 411.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 410.47 152.99 411.13 152.99 420.78 156.45 420.12 156.45 410.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 409.06 160.38 409.72 160.38 419.37 163.84 418.71 163.84 409.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 407.64 167.77 408.3 167.77 417.96 171.23 417.3 171.23 407.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='169.27 466.38 165.8 467.04 165.8 474.51 169.27 473.85 169.27 466.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='176.65 464.97 173.19 465.62 173.19 473.1 176.65 472.43 176.65 464.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='161.88 454.25 158.42 454.9 158.42 460.49 161.88 463.06 161.88 454.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='169.27 452.83 165.8 453.49 165.8 463.15 169.27 462.48 169.27 452.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='176.65 451.42 173.19 452.08 173.19 461.74 176.65 461.07 176.65 451.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='141.68 399.75 138.22 400.41 138.22 410.06 141.68 409.4 141.68 399.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='138.58 440.97 135.12 441.63 135.12 442.71 138.58 445.51 138.58 440.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='138.58 427.42 135.12 428.08 135.12 437.74 138.58 437.07 138.58 427.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='138.58 413.88 135.12 414.54 135.12 424.2 138.58 423.53 138.58 413.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='138.58 400.34 135.12 400.99 135.12 410.65 138.58 409.99 138.58 400.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 398.34 145.61 399 145.61 408.65 149.07 407.99 149.07 398.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 396.92 152.99 397.58 152.99 407.24 156.45 406.58 156.45 396.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 395.51 160.38 396.17 160.38 405.83 163.84 405.16 163.84 395.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 394.1 167.77 394.76 167.77 404.42 171.23 403.75 171.23 394.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 384.79 145.61 385.45 145.61 395.11 149.07 394.44 149.07 384.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 383.38 152.99 384.04 152.99 393.7 156.45 393.03 156.45 383.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 381.97 160.38 382.63 160.38 392.29 163.84 391.62 163.84 381.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 380.56 167.77 381.22 167.77 390.87 171.23 390.21 171.23 380.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 371.25 145.61 371.91 145.61 381.57 149.07 380.9 149.07 371.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 369.84 152.99 370.5 152.99 380.15 156.45 379.49 156.45 369.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 368.43 160.38 369.08 160.38 378.74 163.84 378.08 163.84 368.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 367.01 167.77 367.67 167.77 377.33 171.23 376.67 171.23 367.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 357.71 145.61 358.36 145.61 368.02 149.07 367.36 149.07 357.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 356.29 152.99 356.95 152.99 366.61 156.45 365.95 156.45 356.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 354.88 160.38 355.54 160.38 365.2 163.84 364.53 163.84 354.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 353.47 167.77 354.13 167.77 363.79 171.23 363.12 171.23 353.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 344.16 145.61 344.82 145.61 354.48 149.07 353.81 149.07 344.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 342.75 152.99 343.41 152.99 353.07 156.45 352.4 156.45 342.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 341.34 160.38 342 160.38 351.66 163.84 350.99 163.84 341.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 339.93 167.77 340.59 167.77 350.24 171.23 349.58 171.23 339.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 330.62 145.61 331.28 145.61 340.94 149.07 340.27 149.07 330.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 329.21 152.99 329.87 152.99 339.52 156.45 338.86 156.45 329.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 327.8 160.38 328.45 160.38 338.11 163.84 337.45 163.84 327.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 326.38 167.77 327.04 167.77 336.7 171.23 336.03 171.23 326.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='149.07 357.71 145.61 358.36 145.61 368.02 149.07 367.36 149.07 357.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='156.45 356.29 152.99 356.95 152.99 366.61 156.45 365.95 156.45 356.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='163.84 354.88 160.38 355.54 160.38 365.2 163.84 364.53 163.84 354.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='171.23 353.47 167.77 354.13 167.77 363.79 171.23 363.12 171.23 353.47'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseFifteenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='113 442.85 110.28 440.86 110.28 443.42 113 442.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='108.28 439.35 105.28 437.08 105.28 444.51 108.28 443.78 108.28 439.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.28 435.57 100.28 433.3 100.28 442.95 103.28 445.22 103.28 435.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='98.28 431.78 95.28 429.52 95.28 439.17 98.28 441.44 98.28 431.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='93.28 428 90.28 425.73 90.28 435.39 93.28 437.66 93.28 428'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.27 440.17 125.28 438.66 125.28 440.55 127.27 440.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='123.28 437.15 120.28 434.88 120.28 441.5 123.28 440.86 123.28 437.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='118.28 433.37 115.28 431.1 115.28 440.75 117.07 442.11 118.28 441.84 118.28 433.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='113.28 429.59 110.28 427.32 110.28 436.97 113.28 439.24 113.28 429.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='108.28 425.8 105.28 423.54 105.28 433.19 108.28 435.46 108.28 425.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.28 422.02 100.28 419.75 100.28 429.41 103.28 431.68 103.28 422.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='98.28 418.24 95.28 415.97 95.28 425.63 98.28 427.9 98.28 418.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='93.28 414.46 90.28 412.19 90.28 421.84 93.28 424.11 93.28 414.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='128.28 427.39 125.28 425.12 125.28 434.77 128.28 437.04 128.28 427.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='123.28 423.61 120.28 421.34 120.28 430.99 123.28 433.26 123.28 423.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='118.28 419.82 115.28 417.56 115.28 427.21 118.28 429.48 118.28 419.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='113.28 416.04 110.28 413.77 110.28 423.43 113.28 425.7 113.28 416.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='108.28 412.26 105.28 409.99 105.28 419.65 108.28 421.91 108.28 412.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.28 408.48 100.28 406.21 100.28 415.86 103.28 418.13 103.28 408.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='98.28 404.7 95.28 402.43 95.28 412.08 98.28 414.35 98.28 404.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='93.28 400.92 90.28 398.65 90.28 408.3 93.28 410.57 93.28 400.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='128.28 413.84 125.28 411.58 125.28 421.23 128.28 423.5 128.28 413.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='123.28 410.06 120.28 407.79 120.28 417.45 123.28 419.72 123.28 410.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='118.28 406.28 115.28 404.01 115.28 413.67 118.28 415.93 118.28 406.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='113.28 402.5 110.28 400.23 110.28 409.88 113.28 412.15 113.28 402.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='108.28 398.72 105.28 396.45 105.28 406.1 108.28 408.37 108.28 398.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.28 394.94 100.28 392.67 100.28 402.32 103.28 404.59 103.28 394.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='98.28 391.15 95.28 388.89 95.28 398.54 98.28 400.81 98.28 391.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='93.28 387.37 90.28 385.1 90.28 394.76 93.28 397.03 93.28 387.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='128.28 400.3 125.28 398.03 125.28 407.69 128.28 409.95 128.28 400.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='123.28 396.52 120.28 394.25 120.28 403.9 123.28 406.17 123.28 396.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='118.28 392.74 115.28 390.47 115.28 400.12 118.28 402.39 118.28 392.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='113.28 388.96 110.28 386.69 110.28 396.34 113.28 398.61 113.28 388.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='108.28 385.17 105.28 382.91 105.28 392.56 108.28 394.83 108.28 385.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.28 381.39 100.28 379.12 100.28 388.78 103.28 391.05 103.28 381.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='98.28 377.61 95.28 375.34 95.28 385 98.28 387.26 98.28 377.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='93.28 373.83 90.28 371.56 90.28 381.21 93.28 383.48 93.28 373.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='139.6 370.35 135.74 368.2 135.74 377.87 139.6 380.03 139.6 370.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='133.61 367.01 129.75 364.85 129.75 374.53 133.61 376.68 133.61 367.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.63 363.66 123.77 361.51 123.77 371.19 127.63 373.34 127.63 363.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='121.64 360.32 117.79 358.17 117.78 367.85 121.64 370 121.64 360.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='115.66 356.98 111.8 354.83 111.8 364.5 115.66 366.66 115.66 356.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.67 353.64 105.82 351.48 105.81 361.16 109.67 363.32 109.67 353.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.69 350.3 99.83 348.14 99.83 357.82 103.69 359.97 103.69 350.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='139.59 383.75 135.74 381.6 135.74 386.26 139.59 388.42 139.59 383.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='133.61 380.41 129.75 378.26 129.75 382.92 133.61 385.07 133.61 380.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.63 377.07 123.77 374.91 123.77 379.58 127.63 381.73 127.63 377.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='121.64 373.72 117.78 371.57 117.78 376.24 121.64 378.39 121.64 373.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='115.66 370.38 111.8 368.23 111.8 372.89 115.66 375.05 115.66 370.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.67 367.04 105.81 364.89 105.81 369.55 109.67 371.71 109.67 367.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.69 363.7 99.83 361.54 99.83 366.21 103.69 368.36 103.69 363.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='139.6 356.67 135.74 354.52 135.74 364.19 139.6 366.35 139.6 356.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='133.62 353.33 129.76 351.17 129.75 360.85 133.61 363 133.62 353.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.63 349.98 123.77 347.83 123.77 357.51 127.63 359.66 127.63 349.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='121.65 346.64 117.79 344.49 117.79 354.17 121.64 356.32 121.65 346.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='115.66 343.3 111.8 341.15 111.8 350.82 115.66 352.98 115.66 343.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.68 339.96 105.82 337.8 105.82 347.48 109.68 349.64 109.68 339.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.69 336.62 99.83 334.46 99.83 344.14 103.69 346.29 103.69 336.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='139.6 342.99 135.74 340.84 135.74 350.51 139.6 352.67 139.6 342.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='133.61 339.65 129.75 337.49 129.75 347.17 133.61 349.32 133.61 339.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.63 336.3 123.77 334.15 123.77 343.83 127.63 345.98 127.63 336.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='121.64 332.96 117.79 330.81 117.78 340.49 121.64 342.64 121.64 332.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='115.66 329.62 111.8 327.47 111.8 337.14 115.66 339.3 115.66 329.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.67 326.28 105.82 324.12 105.81 333.8 109.67 335.95 109.67 326.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.69 322.93 99.83 320.78 99.83 330.46 103.69 332.61 103.69 322.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='139.6 329.31 135.74 327.15 135.74 336.83 139.6 338.99 139.6 329.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='133.61 325.97 129.75 323.81 129.75 333.49 133.61 335.64 133.61 325.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='127.63 322.62 123.77 320.47 123.77 330.15 127.63 332.3 127.63 322.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='121.64 319.28 117.79 317.13 117.78 326.81 121.64 328.96 121.64 319.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='115.66 315.94 111.8 313.79 111.8 323.46 115.66 325.62 115.66 315.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='109.67 312.6 105.82 310.44 105.81 320.12 109.67 322.27 109.67 312.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='103.69 309.25 99.83 307.1 99.83 316.78 103.69 318.93 103.69 309.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='91.35 343.43 91.35 353.1 97.7 356.63 97.71 346.95 91.35 343.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='91.34 356.83 91.34 361.49 95.2 363.63 97.7 365.02 97.7 360.36 91.34 356.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='91.35 329.74 91.35 339.42 97.71 342.95 97.71 333.27 91.35 329.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.7 329.27 97.71 319.59 91.35 316.06 91.35 325.74 97.7 329.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='97.7 315.59 97.71 305.91 91.35 302.38 91.35 312.06 97.7 315.59'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom14'>
                            <g ref={houseFourteenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 464.76 249.05 465.43 249.05 463.15 252.51 462.49 252.51 464.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 461.08 256.44 461.74 256.44 463.95 259.9 463.28 259.9 461.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='245.13 450.36 241.67 451.02 241.67 460.68 245.13 460.01 245.13 450.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 448.95 249.05 449.61 249.05 459.27 252.51 458.6 252.51 448.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 447.54 256.44 448.2 256.44 457.86 259.9 457.19 259.9 447.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 446.13 263.83 446.79 263.83 452.5 267.29 451.83 267.29 446.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 444.72 271.21 445.37 271.21 451.13 274.68 450.47 274.68 444.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 443.3 278.6 443.96 278.6 449.71 282.06 449.04 282.06 443.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='245.13 436.82 241.67 437.48 241.67 447.14 245.13 446.47 245.13 436.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 435.41 249.05 436.07 249.05 445.72 252.51 445.06 252.51 435.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 434 256.44 434.65 256.44 444.31 259.9 443.65 259.9 434'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 432.58 263.83 433.24 263.83 442.9 267.29 442.23 267.29 432.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 431.17 271.21 431.83 271.21 441.49 274.68 440.82 274.68 431.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 429.76 278.6 430.42 278.6 440.08 282.06 439.41 282.06 429.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='245.13 423.28 241.67 423.93 241.67 433.59 245.13 432.93 245.13 423.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 421.86 249.05 422.52 249.05 432.18 252.51 431.52 252.51 421.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 420.45 256.44 421.11 256.44 430.77 259.9 430.1 259.9 420.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 419.04 263.83 419.7 263.83 429.36 267.29 428.69 267.29 419.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 417.63 271.21 418.29 271.21 427.94 274.68 427.28 274.68 417.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 416.22 278.6 416.88 278.6 426.53 282.06 425.87 282.06 416.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 402.18 249.05 402.84 249.05 412.5 252.51 411.83 252.51 402.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 400.77 256.44 401.43 256.44 411.08 259.9 410.42 259.9 400.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 399.36 263.83 400.01 263.83 409.67 267.29 409.01 267.29 399.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 397.94 271.21 398.6 271.21 408.26 274.68 407.59 274.68 397.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 396.53 278.6 397.19 278.6 406.85 282.06 406.18 282.06 396.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 388.64 249.05 389.29 249.05 398.95 252.51 398.29 252.51 388.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 387.22 256.44 387.88 256.44 397.54 259.9 396.87 259.9 387.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 385.81 263.83 386.47 263.83 396.13 267.29 395.46 267.29 385.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 384.4 271.21 385.06 271.21 394.72 274.68 394.05 274.68 384.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 382.99 278.6 383.65 278.6 393.3 282.06 392.64 282.06 382.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 415.32 249.05 415.98 249.05 419.63 252.51 418.97 252.51 415.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 413.91 256.44 414.57 256.44 418.22 259.9 417.56 259.9 413.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 412.5 263.83 413.15 263.83 416.81 267.29 416.15 267.29 412.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 411.08 271.21 411.74 271.21 415.4 274.68 414.73 274.68 411.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 409.67 278.6 410.33 278.6 413.99 282.06 413.32 282.06 409.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='252.51 375.26 249.05 375.92 249.05 385.82 252.51 385.16 252.51 375.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='259.9 373.85 256.44 374.5 256.44 384.41 259.9 383.74 259.9 373.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='267.29 372.43 263.83 373.09 263.83 383 267.29 382.33 267.29 372.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='274.68 371.02 271.21 371.68 271.21 381.59 274.68 380.92 274.68 371.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='282.06 369.61 278.6 370.27 278.6 380.17 282.06 379.51 282.06 369.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 357.73 246.63 358.39 246.63 368.05 250.09 367.38 250.09 357.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 356.32 254.02 356.98 254.02 366.64 257.48 365.97 257.48 356.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 354.91 261.41 355.57 261.41 365.22 264.87 364.56 264.87 354.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 353.5 268.79 354.16 268.79 363.81 272.26 363.15 272.26 353.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 352.08 276.18 352.74 276.18 362.4 279.64 361.74 279.64 352.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 344.19 246.63 344.85 246.63 354.5 250.09 353.84 250.09 344.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 342.78 254.02 343.44 254.02 353.09 257.48 352.43 257.48 342.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 341.36 261.41 342.02 261.41 351.68 264.87 351.02 264.87 341.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 339.95 268.79 340.61 268.79 350.27 272.26 349.6 272.26 339.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 338.54 276.18 339.2 276.18 348.86 279.64 348.19 279.64 338.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 330.64 246.63 331.3 246.63 340.96 250.09 340.3 250.09 330.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 329.23 254.02 329.89 254.02 339.55 257.48 338.88 257.48 329.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 327.82 261.41 328.48 261.41 338.14 264.87 337.47 264.87 327.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 326.41 268.79 327.07 268.79 336.73 272.26 336.06 272.26 326.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 325 276.18 325.66 276.18 335.31 279.64 334.65 279.64 325'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 317.1 246.63 317.76 246.63 327.42 250.09 326.75 250.09 317.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 315.69 254.02 316.35 254.02 326.01 257.48 325.34 257.48 315.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 314.28 261.41 314.94 261.41 324.59 264.87 323.93 264.87 314.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 312.87 268.79 313.52 268.79 323.18 272.26 322.52 272.26 312.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 311.45 276.18 312.11 276.18 321.77 279.64 321.11 279.64 311.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 303.56 246.63 304.22 246.63 313.87 250.09 313.21 250.09 303.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 302.15 254.02 302.8 254.02 312.46 257.48 311.8 257.48 302.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 300.73 261.41 301.39 261.41 311.05 264.87 310.39 264.87 300.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 299.32 268.79 299.98 268.79 309.64 272.26 308.97 272.26 299.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 297.91 276.18 298.57 276.18 308.23 279.64 307.56 279.64 297.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 290.01 246.63 290.67 246.63 300.33 250.09 299.67 250.09 290.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 288.6 254.02 289.26 254.02 298.92 257.48 298.25 257.48 288.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 287.19 261.41 287.85 261.41 297.51 264.87 296.84 264.87 287.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 285.78 268.79 286.44 268.79 296.1 272.26 295.43 272.26 285.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 284.37 276.18 285.03 276.18 294.68 279.64 294.02 279.64 284.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 276.47 246.63 277.13 246.63 286.79 250.09 286.12 250.09 276.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 275.06 254.02 275.72 254.02 285.38 257.48 284.71 257.48 275.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 273.65 261.41 274.31 261.41 283.96 264.87 283.3 264.87 273.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 272.24 268.79 272.89 268.79 282.55 272.26 281.89 272.26 272.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 270.82 276.18 271.48 276.18 281.14 279.64 280.47 279.64 270.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='250.09 262.93 246.63 263.59 246.63 273.24 250.09 272.58 250.09 262.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='257.48 261.52 254.02 262.17 254.02 271.83 257.48 271.17 257.48 261.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='264.87 260.1 261.41 260.76 261.41 270.42 264.87 269.75 264.87 260.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='272.26 258.69 268.79 259.35 268.79 269.01 272.26 268.34 272.26 258.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='279.64 257.28 276.18 257.94 276.18 267.6 279.64 266.93 279.64 257.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='245.13 463.91 241.67 464.56 241.67 465.26 243.4 466.47 245.13 466.13 245.13 463.91'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseFourteenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.67 465.57 217.67 463.3 217.67 466.11 220.67 465.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 461.79 212.67 459.52 212.67 467.06 215.67 466.46 215.67 461.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 458.01 207.67 455.74 207.67 465.39 210.67 467.66 210.67 458.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 454.23 202.67 451.96 202.67 461.61 205.67 463.88 205.67 454.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 450.44 197.67 448.18 197.67 457.83 200.67 460.1 200.67 450.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='234.94 462.82 232.67 461.1 232.67 463.3 234.94 462.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.67 459.59 227.67 457.32 227.67 464.32 230.67 463.64 230.67 459.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.67 464.59 225.67 455.81 222.67 453.54 222.67 463.19 224.82 464.83 225.67 464.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.67 452.03 217.67 449.76 217.67 459.41 220.67 461.68 220.67 452.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 448.25 212.67 445.98 212.67 455.63 215.67 457.9 215.67 448.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 444.46 207.67 442.2 207.67 451.85 210.67 454.12 210.67 444.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 440.68 202.67 438.41 202.67 448.07 205.67 450.34 205.67 440.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 436.9 197.67 434.63 197.67 444.29 200.67 446.55 200.67 436.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.67 449.83 232.67 447.56 232.67 457.21 235.67 459.48 235.67 449.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.67 446.05 227.67 443.78 227.67 453.43 230.67 455.7 230.67 446.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.67 442.27 222.67 440 222.67 449.65 225.67 451.92 225.67 442.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.67 438.48 217.67 436.21 217.67 445.87 220.67 448.14 220.67 438.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 434.7 212.67 432.43 212.67 442.09 215.67 444.36 215.67 434.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 430.92 207.67 428.65 207.67 438.31 210.67 440.57 210.67 430.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 427.14 202.67 424.87 202.67 434.52 205.67 436.79 205.67 427.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 423.36 197.67 421.09 197.67 430.74 200.67 433.01 200.67 423.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.67 436.29 232.67 434.02 232.67 443.67 235.67 445.94 235.67 436.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.67 432.5 227.67 430.23 227.67 439.89 230.67 442.16 230.67 432.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.67 428.72 222.67 426.45 222.67 436.11 225.67 438.38 225.67 428.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.67 424.94 217.67 422.67 217.67 432.33 220.67 434.59 220.67 424.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 421.16 212.67 418.89 212.67 428.54 215.67 430.81 215.67 421.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 417.38 207.67 415.11 207.67 424.76 210.67 427.03 210.67 417.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 413.6 202.67 411.33 202.67 420.98 205.67 423.25 205.67 413.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 409.81 197.67 407.54 197.67 417.2 200.67 419.47 200.67 409.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.67 422.74 232.67 420.47 232.67 430.13 235.67 432.4 235.67 422.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.67 418.96 227.67 416.69 227.67 426.34 230.67 428.61 230.67 418.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.67 415.18 222.67 412.91 222.67 422.56 225.67 424.83 225.67 415.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.67 411.4 217.67 409.13 217.67 418.78 220.67 421.05 220.67 411.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 407.62 212.67 405.35 212.67 415 215.67 417.27 215.67 407.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 403.83 207.67 401.56 207.67 411.22 210.67 413.49 210.67 403.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 400.05 202.67 397.78 202.67 407.44 205.67 409.71 205.67 400.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 396.27 197.67 394 197.67 403.66 200.67 405.92 200.67 396.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 394.07 212.67 391.8 212.67 401.46 215.67 403.73 215.67 394.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 390.29 207.67 388.02 207.67 397.67 210.67 399.94 210.67 390.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 386.51 202.67 384.24 202.67 393.89 205.67 396.16 205.67 386.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 382.73 197.67 380.46 197.67 390.11 200.67 392.38 200.67 382.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='242.17 401.61 239.17 399.34 239.17 409 242.17 411.27 242.17 401.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='237.17 397.83 234.17 395.56 234.17 405.22 237.17 407.48 237.17 397.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 380.53 212.67 378.26 212.67 387.91 215.67 390.18 215.67 380.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 376.75 207.67 374.48 207.67 384.13 210.67 386.4 210.67 376.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 372.96 202.67 370.7 202.67 380.35 205.67 382.62 205.67 372.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 369.18 197.67 366.91 197.67 376.57 200.67 378.84 200.67 369.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='242.17 388.07 239.17 385.8 239.17 395.45 242.17 397.72 242.17 388.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='237.17 384.29 234.17 382.02 234.17 391.67 237.17 393.94 237.17 384.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.67 366.98 212.67 364.72 212.67 374.37 215.67 376.64 215.67 366.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.67 363.2 207.67 360.93 207.67 370.59 210.67 372.86 210.67 363.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='205.67 359.42 202.67 357.15 202.67 366.81 205.67 369.08 205.67 359.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='200.67 355.64 197.67 353.37 197.67 363.02 200.67 365.29 200.67 355.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='242.17 374.53 239.17 372.26 239.17 381.91 242.17 384.18 242.17 374.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='237.17 370.74 234.17 368.47 234.17 378.13 237.17 380.4 237.17 370.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='232.17 366.96 229.17 364.69 229.17 374.35 232.17 376.62 232.17 366.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='232.17 380.51 229.17 378.24 229.17 387.89 232.17 390.16 232.17 380.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='232.17 394.05 229.17 391.78 229.17 401.43 232.17 403.7 232.17 394.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 357.55 237.33 355.28 237.33 364.93 240.33 367.2 240.33 357.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 353.77 232.33 351.5 232.33 361.15 235.33 363.42 235.33 353.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 349.98 227.33 347.71 227.33 357.37 230.33 359.64 230.33 349.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 346.2 222.33 343.93 222.33 353.59 225.33 355.86 225.33 346.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 342.42 217.33 340.15 217.33 349.81 220.33 352.07 220.33 342.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 338.64 212.33 336.37 212.33 346.02 215.33 348.29 215.33 338.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 334.86 207.33 332.59 207.33 342.24 210.33 344.51 210.33 334.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 344 237.33 341.73 237.33 351.39 240.33 353.66 240.33 344'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 340.22 232.33 337.95 232.33 347.61 235.33 349.88 235.33 340.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 336.44 227.33 334.17 227.33 343.83 230.33 346.09 230.33 336.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 332.66 222.33 330.39 222.33 340.04 225.33 342.31 225.33 332.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 328.88 217.33 326.61 217.33 336.26 220.33 338.53 220.33 328.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 325.1 212.33 322.83 212.33 332.48 215.33 334.75 215.33 325.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 321.31 207.33 319.04 207.33 328.7 210.33 330.97 210.33 321.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 330.46 237.33 328.19 237.33 337.84 240.33 340.11 240.33 330.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 326.68 232.33 324.41 232.33 334.06 235.33 336.33 235.33 326.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 322.9 227.33 320.63 227.33 330.28 230.33 332.55 230.33 322.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 319.12 222.33 316.85 222.33 326.5 225.33 328.77 225.33 319.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 315.33 217.33 313.06 217.33 322.72 220.33 324.99 220.33 315.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 311.55 212.33 309.28 212.33 318.94 215.33 321.21 215.33 311.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 307.77 207.33 305.5 207.33 315.16 210.33 317.42 210.33 307.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 316.92 237.33 314.65 237.33 324.3 240.33 326.57 240.33 316.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 313.13 232.33 310.87 232.33 320.52 235.33 322.79 235.33 313.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 309.35 227.33 307.08 227.33 316.74 230.33 319.01 230.33 309.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 305.57 222.33 303.3 222.33 312.96 225.33 315.23 225.33 305.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 301.79 217.33 299.52 217.33 309.17 220.33 311.44 220.33 301.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 298.01 212.33 295.74 212.33 305.39 215.33 307.66 215.33 298.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 294.23 207.33 291.96 207.33 301.61 210.33 303.88 210.33 294.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 303.37 237.33 301.1 237.33 310.76 240.33 313.03 240.33 303.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 299.59 232.33 297.32 232.33 306.98 235.33 309.25 235.33 299.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 295.81 227.33 293.54 227.33 303.19 230.33 305.46 230.33 295.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 292.03 222.33 289.76 222.33 299.41 225.33 301.68 225.33 292.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 288.25 217.33 285.98 217.33 295.63 220.33 297.9 220.33 288.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 284.46 212.33 282.2 212.33 291.85 215.33 294.12 215.33 284.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 280.68 207.33 278.41 207.33 288.07 210.33 290.34 210.33 280.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 289.83 237.33 287.56 237.33 297.21 240.33 299.48 240.33 289.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 286.05 232.33 283.78 232.33 293.43 235.33 295.7 235.33 286.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 282.27 227.33 280 227.33 289.65 230.33 291.92 230.33 282.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 278.48 222.33 276.22 222.33 285.87 225.33 288.14 225.33 278.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 274.7 217.33 272.43 217.33 282.09 220.33 284.36 220.33 274.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 270.92 212.33 268.65 212.33 278.31 215.33 280.58 215.33 270.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 267.14 207.33 264.87 207.33 274.52 210.33 276.79 210.33 267.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 276.29 237.33 274.02 237.33 283.67 240.33 285.94 240.33 276.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 272.5 232.33 270.24 232.33 279.89 235.33 282.16 235.33 272.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 268.72 227.33 266.45 227.33 276.11 230.33 278.38 230.33 268.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 264.94 222.33 262.67 222.33 272.33 225.33 274.59 225.33 264.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 261.16 217.33 258.89 217.33 268.54 220.33 270.81 220.33 261.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 257.38 212.33 255.11 212.33 264.76 215.33 267.03 215.33 257.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 253.6 207.33 251.33 207.33 260.98 210.33 263.25 210.33 253.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='240.33 262.74 237.33 260.47 237.33 270.13 240.33 272.4 240.33 262.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='235.33 258.96 232.33 256.69 232.33 266.35 235.33 268.61 235.33 258.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='230.33 255.18 227.33 252.91 227.33 262.56 230.33 264.83 230.33 255.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='225.33 251.4 222.33 249.13 222.33 258.78 225.33 261.05 225.33 251.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='220.33 247.62 217.33 245.35 217.33 255 220.33 257.27 220.33 247.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='215.33 243.83 212.33 241.57 212.33 251.22 215.33 253.49 215.33 243.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='210.33 240.05 207.33 237.78 207.33 247.44 210.33 249.71 210.33 240.05'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom13'>
                            <g ref={houseThirteenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 428 352.99 428.66 352.99 438.32 356.46 437.65 356.46 428'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 414.46 352.99 415.12 352.99 424.77 356.46 424.11 356.46 414.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 400.91 352.99 401.57 352.99 411.23 356.46 410.56 356.46 400.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 399.5 360.38 400.16 360.38 407.66 363.84 407 363.84 399.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 398.09 367.77 398.75 367.77 406.25 371.23 405.58 371.23 398.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 396.68 375.15 397.34 375.15 404.84 378.62 404.17 378.62 396.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 395.27 382.54 395.93 382.54 403.43 386 402.76 386 395.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 393.85 389.93 394.51 389.93 402.01 393.39 401.35 393.39 393.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 387.37 352.99 388.03 352.99 397.69 356.46 397.02 356.46 387.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 385.96 360.38 386.62 360.38 396.27 363.84 395.61 363.84 385.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 384.55 367.77 385.21 367.77 394.86 371.23 394.2 371.23 384.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 383.13 375.15 383.79 375.15 393.45 378.62 392.79 378.62 383.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 381.72 382.54 382.38 382.54 392.04 386 391.37 386 381.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 380.31 389.93 380.97 389.93 390.63 393.39 389.96 393.39 380.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 360.56 352.99 361.22 352.99 370.87 356.46 370.21 356.46 360.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 359.15 360.38 359.8 360.38 369.46 363.84 368.8 363.84 359.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 357.73 367.77 358.39 367.77 368.05 371.23 367.38 371.23 357.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 356.32 375.15 356.98 375.15 366.64 378.62 365.97 378.62 356.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 354.91 382.54 355.57 382.54 365.23 386 364.56 386 354.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 353.5 389.93 354.16 389.93 363.81 393.39 363.15 393.39 353.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 347.01 352.99 347.67 352.99 357.33 356.46 356.66 356.46 347.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 345.6 360.38 346.26 360.38 355.92 363.84 355.25 363.84 345.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 344.19 367.77 344.85 367.77 354.51 371.23 353.84 371.23 344.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 342.78 375.15 343.44 375.15 353.09 378.62 352.43 378.62 342.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 341.37 382.54 342.03 382.54 351.68 386 351.02 386 341.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 339.95 389.93 340.61 389.93 350.27 393.39 349.61 393.39 339.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 333.47 352.99 334.13 352.99 343.79 356.46 343.12 356.46 333.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 332.06 360.38 332.72 360.38 342.37 363.84 341.71 363.84 332.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 330.65 367.77 331.31 367.77 340.96 371.23 340.3 371.23 330.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 329.23 375.15 329.89 375.15 339.55 378.62 338.89 378.62 329.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 327.82 382.54 328.48 382.54 338.14 386 337.47 386 327.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 326.41 389.93 327.07 389.93 336.73 393.39 336.06 393.39 326.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 319.93 352.99 320.59 352.99 330.24 356.46 329.58 356.46 319.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 318.51 360.38 319.17 360.38 328.83 363.84 328.17 363.84 318.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 317.1 367.77 317.76 367.77 327.42 371.23 326.75 371.23 317.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 315.69 375.15 316.35 375.15 326.01 378.62 325.34 378.62 315.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 314.28 382.54 314.94 382.54 324.6 386 323.93 386 314.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 312.87 389.93 313.53 389.93 323.18 393.39 322.52 393.39 312.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 306.38 352.99 307.04 352.99 316.7 356.46 316.03 356.46 306.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 304.97 360.38 305.63 360.38 315.29 363.84 314.62 363.84 304.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 303.56 367.77 304.22 367.77 313.88 371.23 313.21 371.23 303.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 302.15 375.15 302.81 375.15 312.46 378.62 311.8 378.62 302.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 300.74 382.54 301.39 382.54 311.05 386 310.39 386 300.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 299.32 389.93 299.98 389.93 309.64 393.39 308.98 393.39 299.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='356.46 292.84 352.99 293.5 352.99 303.16 356.46 302.49 356.46 292.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 291.43 360.38 292.09 360.38 301.74 363.84 301.08 363.84 291.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 290.02 367.77 290.67 367.77 300.33 371.23 299.67 371.23 290.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 288.6 375.15 289.26 375.15 298.92 378.62 298.26 378.62 288.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 287.19 382.54 287.85 382.54 297.51 386 296.84 386 287.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='393.39 285.78 389.93 286.44 389.93 296.1 393.39 295.43 393.39 285.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 277.88 360.38 278.54 360.38 288.2 363.84 287.54 363.84 277.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 276.47 367.77 277.13 367.77 286.79 371.23 286.12 371.23 276.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 275.06 375.15 275.72 375.15 285.38 378.62 284.71 378.62 275.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 273.65 382.54 274.31 382.54 283.96 386 283.3 386 273.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='363.84 264.34 360.38 265 360.38 274.66 363.84 273.99 363.84 264.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 262.93 367.77 263.59 367.77 273.25 371.23 272.58 371.23 262.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 261.52 375.15 262.18 375.15 271.83 378.62 271.17 378.62 261.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 260.11 382.54 260.76 382.54 270.42 386 269.76 386 260.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 249.39 367.77 250.04 367.77 259.7 371.23 259.04 371.23 249.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 247.97 375.15 248.63 375.15 258.29 378.62 257.62 378.62 247.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 246.56 382.54 247.22 382.54 256.88 386 256.21 386 246.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='371.23 235.84 367.77 236.5 367.77 246.16 371.23 245.49 371.23 235.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='378.62 234.43 375.15 235.09 375.15 244.75 378.62 244.08 378.62 234.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='386 233.02 382.54 233.68 382.54 243.33 386 242.67 386 233.02'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseThirteenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 440.09 341.47 437.82 341.47 442.04 344.47 441.51 344.47 440.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 436.31 336.47 434.04 336.47 443.69 337.42 444.41 337.52 442.92 339.47 442.49 339.47 436.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 432.52 331.47 430.26 331.47 439.91 334.47 442.18 334.47 432.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 428.74 326.47 426.47 326.47 436.13 329.47 438.4 329.47 428.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 424.96 321.47 422.69 321.47 432.35 324.47 434.61 324.47 424.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 421.18 316.47 418.91 316.47 428.56 319.47 430.83 319.47 421.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 417.4 311.47 415.13 311.47 424.78 314.47 427.05 314.47 417.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='309.47 413.62 306.47 411.35 306.47 421 309.47 423.27 309.47 413.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 426.54 341.47 424.28 341.47 433.93 344.47 436.2 344.47 426.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 422.76 336.47 420.49 336.47 430.15 339.47 432.42 339.47 422.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 418.98 331.47 416.71 331.47 426.37 334.47 428.63 334.47 418.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 415.2 326.47 412.93 326.47 422.58 329.47 424.85 329.47 415.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 411.42 321.47 409.15 321.47 418.8 324.47 421.07 324.47 411.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 407.64 316.47 405.37 316.47 415.02 319.47 417.29 319.47 407.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 403.85 311.47 401.59 311.47 411.24 314.47 413.51 314.47 403.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='309.47 400.07 306.47 397.8 306.47 407.46 309.47 409.73 309.47 400.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 413 341.47 410.73 341.47 420.39 344.47 422.65 344.47 413'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 409.22 336.47 406.95 336.47 416.6 339.47 418.87 339.47 409.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 405.44 331.47 403.17 331.47 412.82 334.47 415.09 334.47 405.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 401.66 326.47 399.39 326.47 409.04 329.47 411.31 329.47 401.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 397.87 321.47 395.61 321.47 405.26 324.47 407.53 324.47 397.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 394.09 316.47 391.82 316.47 401.48 319.47 403.75 319.47 394.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 390.31 311.47 388.04 311.47 397.7 314.47 399.96 314.47 390.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='309.47 386.53 306.47 384.26 306.47 393.91 309.47 396.18 309.47 386.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 399.46 341.47 397.19 341.47 406.84 344.47 409.11 344.47 399.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 395.68 336.47 393.41 336.47 403.06 339.47 405.33 339.47 395.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 391.89 331.47 389.62 331.47 399.28 334.47 401.55 334.47 391.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 388.11 326.47 385.84 326.47 395.5 329.47 397.77 329.47 388.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 384.33 321.47 382.06 321.47 391.72 324.47 393.98 324.47 384.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 380.55 316.47 378.28 316.47 387.93 319.47 390.2 319.47 380.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 376.77 311.47 374.5 311.47 384.15 314.47 386.42 314.47 376.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='309.47 372.99 306.47 370.72 306.47 380.37 309.47 382.64 309.47 372.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 385.91 341.47 383.64 341.47 393.3 344.47 395.57 344.47 385.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 382.13 336.47 379.86 336.47 389.52 339.47 391.79 339.47 382.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 378.35 331.47 376.08 331.47 385.74 334.47 388 334.47 378.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 374.57 326.47 372.3 326.47 381.95 329.47 384.22 329.47 374.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 370.79 321.47 368.52 321.47 378.17 324.47 380.44 324.47 370.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 367.01 316.47 364.74 316.47 374.39 319.47 376.66 319.47 367.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 363.22 311.47 360.95 311.47 370.61 314.47 372.88 314.47 363.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='309.47 359.44 306.47 357.17 306.47 366.83 309.47 369.1 309.47 359.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 358.83 341.47 356.56 341.47 366.21 344.47 368.48 344.47 358.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 355.05 336.47 352.78 336.47 362.43 339.47 364.7 339.47 355.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 351.26 331.47 348.99 331.47 358.65 334.47 360.92 334.47 351.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 347.48 326.47 345.21 326.47 354.87 329.47 357.14 329.47 347.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 343.7 321.47 341.43 321.47 351.08 324.47 353.35 324.47 343.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 339.92 316.47 337.65 316.47 347.3 319.47 349.57 319.47 339.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 336.14 311.47 333.87 311.47 343.52 314.47 345.79 314.47 336.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 345.28 341.47 343.01 341.47 352.67 344.47 354.94 344.47 345.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 341.5 336.47 339.23 336.47 348.89 339.47 351.16 339.47 341.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 337.72 331.47 335.45 331.47 345.1 334.47 347.37 334.47 337.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 333.94 326.47 331.67 326.47 341.32 329.47 343.59 329.47 333.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 330.16 321.47 327.89 321.47 337.54 324.47 339.81 324.47 330.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 326.37 316.47 324.11 316.47 333.76 319.47 336.03 319.47 326.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 322.59 311.47 320.32 311.47 329.98 314.47 332.25 314.47 322.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 331.74 341.47 329.47 341.47 339.12 344.47 341.39 344.47 331.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 327.96 336.47 325.69 336.47 335.34 339.47 337.61 339.47 327.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 324.18 331.47 321.91 331.47 331.56 334.47 333.83 334.47 324.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 320.39 326.47 318.13 326.47 327.78 329.47 330.05 329.47 320.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 316.61 321.47 314.34 321.47 324 324.47 326.27 324.47 316.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 312.83 316.47 310.56 316.47 320.22 319.47 322.49 319.47 312.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 309.05 311.47 306.78 311.47 316.43 314.47 318.7 314.47 309.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 318.2 341.47 315.93 341.47 325.58 344.47 327.85 344.47 318.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 314.41 336.47 312.15 336.47 321.8 339.47 324.07 339.47 314.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 310.63 331.47 308.36 331.47 318.02 334.47 320.29 334.47 310.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 306.85 326.47 304.58 326.47 314.24 329.47 316.51 329.47 306.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 303.07 321.47 300.8 321.47 310.45 324.47 312.72 324.47 303.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 299.29 316.47 297.02 316.47 306.67 319.47 308.94 319.47 299.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 295.51 311.47 293.24 311.47 302.89 314.47 305.16 314.47 295.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 304.65 341.47 302.38 341.47 312.04 344.47 314.31 344.47 304.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 300.87 336.47 298.6 336.47 308.26 339.47 310.52 339.47 300.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 297.09 331.47 294.82 331.47 304.47 334.47 306.74 334.47 297.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 293.31 326.47 291.04 326.47 300.69 329.47 302.96 329.47 293.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 289.53 321.47 287.26 321.47 296.91 324.47 299.18 324.47 289.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='319.47 285.74 316.47 283.48 316.47 293.13 319.47 295.4 319.47 285.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='314.47 281.96 311.47 279.69 311.47 289.35 314.47 291.62 314.47 281.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='344.47 291.11 341.47 288.84 341.47 298.49 344.47 300.76 344.47 291.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='339.47 287.33 336.47 285.06 336.47 294.71 339.47 296.98 339.47 287.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='334.47 283.55 331.47 281.28 331.47 290.93 334.47 293.2 334.47 283.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='329.47 279.76 326.47 277.5 326.47 287.15 329.47 289.42 329.47 279.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='324.47 275.98 321.47 273.71 321.47 283.37 324.47 285.64 324.47 275.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='351.5 275.4 348.5 273.14 348.5 279.1 351.5 281.37 351.5 275.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='346.5 271.62 343.5 269.35 343.5 275.32 346.5 277.58 346.5 271.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='341.5 267.84 338.5 265.57 338.5 271.53 341.5 273.8 341.5 267.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='336.5 264.06 333.5 261.79 333.5 267.75 336.5 270.02 336.5 264.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='331.5 260.28 328.5 258.01 328.5 263.97 331.5 266.24 331.5 260.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='326.5 256.5 323.5 254.23 323.5 262.83 326.5 262.3 326.5 256.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='321.5 252.71 318.5 250.45 318.5 260.1 321.5 262.37 321.5 252.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='341.5 254.3 338.5 252.03 338.5 261.68 341.5 263.95 341.5 254.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='336.5 250.52 333.5 248.25 333.5 257.9 336.5 260.17 336.5 250.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='346.5 258.12 343.5 255.85 343.5 265.5 346.5 267.77 346.5 258.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='351.5 261.92 348.5 259.65 348.5 269.3 351.5 271.57 351.5 261.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='331.5 246.73 328.5 244.47 328.5 254.12 331.5 256.39 331.5 246.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='326.5 242.95 323.5 240.68 323.5 250.34 326.5 252.61 326.5 242.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='321.5 239.17 318.5 236.9 318.5 246.56 321.5 248.83 321.5 239.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='341.5 240.75 338.5 238.49 338.5 248.14 341.5 250.41 341.5 240.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='336.5 236.97 333.5 234.7 333.5 244.36 336.5 246.63 336.5 236.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='331.5 233.19 328.5 230.92 328.5 240.58 331.5 242.85 331.5 233.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='326.5 229.41 323.5 227.14 323.5 236.79 326.5 239.06 326.5 229.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='321.5 225.63 318.5 223.36 318.5 233.01 321.5 235.28 321.5 225.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='341.5 227.21 338.5 224.94 338.5 234.6 341.5 236.86 341.5 227.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='336.5 223.43 333.5 221.16 333.5 230.81 336.5 233.08 336.5 223.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='331.5 219.65 328.5 217.38 328.5 227.03 331.5 229.3 331.5 219.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='326.5 215.87 323.5 213.6 323.5 223.25 326.5 225.52 326.5 215.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='321.5 212.08 318.5 209.82 318.5 219.47 321.5 221.74 321.5 212.08'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom12'>
                            <g ref={houseTwelvePartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 347.99 437.73 348.65 437.73 354.3 441.19 353.64 441.19 347.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 346.58 445.11 347.24 445.11 352.89 448.58 352.23 448.58 346.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 345.17 452.5 345.83 452.5 351.48 455.96 350.82 455.96 345.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 343.76 459.89 344.42 459.89 350.07 463.35 349.4 463.35 343.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 342.35 467.28 343 467.28 348.66 470.74 347.99 470.74 342.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 334.45 437.73 335.11 437.73 344.77 441.19 344.1 441.19 334.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 333.04 445.11 333.7 445.11 343.35 448.58 342.69 448.58 333.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 331.63 452.5 332.28 452.5 341.94 455.96 341.28 455.96 331.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 330.21 459.89 330.87 459.89 340.53 463.35 339.86 463.35 330.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 328.8 467.28 329.46 467.28 339.12 470.74 338.45 470.74 328.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 320.91 437.73 321.56 437.73 331.22 441.19 330.56 441.19 320.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 319.49 445.11 320.15 445.11 329.81 448.58 329.14 448.58 319.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 318.08 452.5 318.74 452.5 328.4 455.96 327.73 455.96 318.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 316.67 459.89 317.33 459.89 326.99 463.35 326.32 463.35 316.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 315.26 467.28 315.92 467.28 325.57 470.74 324.91 470.74 315.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 307.36 437.73 308.02 437.73 317.68 441.19 317.01 441.19 307.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 305.95 445.11 306.61 445.11 316.27 448.58 315.6 448.58 305.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 304.54 452.5 305.2 452.5 314.85 455.96 314.19 455.96 304.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 303.13 459.89 303.79 459.89 313.44 463.35 312.78 463.35 303.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 301.71 467.28 302.37 467.28 312.03 470.74 311.37 470.74 301.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 293.82 437.73 294.48 437.73 304.13 441.19 303.47 441.19 293.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 292.41 445.11 293.07 445.11 302.72 448.58 302.06 448.58 292.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 291 452.5 291.65 452.5 301.31 455.96 300.65 455.96 291'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 289.58 459.89 290.24 459.89 299.9 463.35 299.23 463.35 289.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 288.17 467.28 288.83 467.28 298.49 470.74 297.82 470.74 288.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='441.19 280.28 437.73 280.93 437.73 290.59 441.19 289.93 441.19 280.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='448.58 278.86 445.11 279.52 445.11 289.18 448.58 288.51 448.58 278.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='455.96 277.45 452.5 278.11 452.5 287.77 455.96 287.1 455.96 277.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='463.35 276.04 459.89 276.7 459.89 286.36 463.35 285.69 463.35 276.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='470.74 274.63 467.28 275.29 467.28 284.94 470.74 284.28 470.74 274.63'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseTwelvePartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 400.37 424.6 398.1 424.6 407.76 427.6 410.03 427.6 400.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 396.59 419.6 394.32 419.6 403.98 422.6 406.25 422.6 396.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 392.81 414.6 390.54 414.6 400.19 417.6 402.46 417.6 392.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 389.03 409.6 386.76 409.6 396.41 412.6 398.68 412.6 389.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 385.25 404.6 382.98 404.6 392.63 407.6 394.9 407.6 385.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 381.46 399.6 379.2 399.6 388.85 402.6 391.12 402.6 381.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 377.68 396.49 376.82 396.49 386.48 397.6 387.34 397.6 377.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 386.83 424.6 384.56 424.6 394.21 427.6 396.48 427.6 386.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 383.05 419.6 380.78 419.6 390.43 422.6 392.7 422.6 383.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 379.27 414.6 377 414.6 386.65 417.6 388.92 417.6 379.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 375.48 409.6 373.22 409.6 382.87 412.6 385.14 412.6 375.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 371.7 404.6 369.43 404.6 379.09 407.6 381.36 407.6 371.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 367.92 399.6 365.65 399.6 375.31 402.6 377.58 402.6 367.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 364.14 396.49 363.3 396.49 369.1 394.6 369.59 394.6 371.52 397.6 373.79 397.6 364.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 373.29 424.6 371.02 424.6 380.67 427.6 382.94 427.6 373.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 369.5 419.6 367.24 419.6 376.89 422.6 379.16 422.6 369.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 365.72 414.6 363.45 414.6 373.11 417.6 375.38 417.6 365.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 361.94 409.6 359.67 409.6 369.33 412.6 371.6 412.6 361.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 358.16 404.6 355.89 404.6 365.54 407.6 367.81 407.6 358.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 354.38 399.6 352.11 399.6 361.76 402.6 364.03 402.6 354.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 350.6 396.49 349.74 396.49 359.39 397.6 360.25 397.6 350.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 359.74 424.6 357.47 424.6 367.13 427.6 369.4 427.6 359.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 355.96 419.6 353.69 419.6 363.35 422.6 365.61 422.6 355.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 352.18 414.6 349.91 414.6 359.56 417.6 361.83 417.6 352.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 348.4 409.6 346.13 409.6 355.78 412.6 358.05 412.6 348.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 344.62 404.6 342.35 404.6 352 407.6 354.27 407.6 344.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 340.83 399.6 338.57 399.6 348.22 402.6 350.49 402.6 340.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 337.05 396.49 336.19 396.49 345.85 397.6 346.71 397.6 337.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 346.2 424.6 343.93 424.6 353.58 427.6 355.85 427.6 346.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 342.42 419.6 340.15 419.6 349.8 422.6 352.07 422.6 342.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 338.64 414.6 336.37 414.6 346.02 417.6 348.29 417.6 338.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 334.85 409.6 332.59 409.6 342.24 412.6 344.51 412.6 334.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 331.07 404.6 328.8 404.6 338.46 407.6 340.73 407.6 331.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 327.29 399.6 325.02 399.6 334.68 402.6 336.94 402.6 327.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 323.51 396.49 322.65 396.49 332.3 397.6 333.16 397.6 323.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 332.66 424.6 330.39 424.6 340.04 427.6 342.31 427.6 332.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 328.87 419.6 326.61 419.6 336.26 422.6 338.53 422.6 328.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 325.09 414.6 322.82 414.6 332.48 417.6 334.75 417.6 325.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 321.31 409.6 319.04 409.6 328.7 412.6 330.96 412.6 321.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 317.53 404.6 315.26 404.6 324.91 407.6 327.18 407.6 317.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 313.75 399.6 311.48 399.6 321.13 402.6 323.4 402.6 313.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 309.97 396.49 309.11 396.49 318.76 397.6 319.62 397.6 309.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 319.11 424.6 316.84 424.6 326.5 427.6 328.77 427.6 319.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 315.33 419.6 313.06 419.6 322.72 422.6 324.98 422.6 315.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 311.55 414.6 309.28 414.6 318.93 417.6 321.2 417.6 311.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 307.77 409.6 305.5 409.6 315.15 412.6 317.42 412.6 307.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 303.99 404.6 301.72 404.6 311.37 407.6 313.64 407.6 303.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 300.2 399.6 297.94 399.6 307.59 402.6 309.86 402.6 300.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 296.42 396.49 295.56 396.49 305.22 397.6 306.08 397.6 296.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 305.57 424.6 303.3 424.6 312.95 427.6 315.22 427.6 305.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 301.79 419.6 299.52 419.6 309.17 422.6 311.44 422.6 301.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 298.01 414.6 295.74 414.6 305.39 417.6 307.66 417.6 298.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 294.22 409.6 291.95 409.6 301.61 412.6 303.88 412.6 294.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 290.44 404.6 288.17 404.6 297.83 407.6 300.1 407.6 290.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 286.66 399.6 284.39 399.6 294.05 402.6 296.31 402.6 286.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 282.88 396.49 282.02 396.49 291.67 397.6 292.53 397.6 282.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 292.03 424.6 289.76 424.6 299.41 427.6 301.68 427.6 292.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 288.24 419.6 285.97 419.6 295.63 422.6 297.9 422.6 288.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 284.46 414.6 282.19 414.6 291.85 417.6 294.12 417.6 284.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 280.68 409.6 278.41 409.6 288.07 412.6 290.33 412.6 280.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 276.9 404.6 274.63 404.6 284.28 407.6 286.55 407.6 276.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 273.12 399.6 270.85 399.6 280.5 402.6 282.77 402.6 273.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 269.34 394.6 267.07 394.6 276.1 396.42 277.33 396.6 278.23 397.6 278.99 397.6 269.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='427.6 278.48 424.6 276.21 424.6 285.87 427.6 288.14 427.6 278.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='422.6 274.7 419.6 272.43 419.6 282.08 422.6 284.35 422.6 274.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='417.6 270.92 414.6 268.65 414.6 278.3 417.6 280.57 417.6 270.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='412.6 267.14 409.6 264.87 409.6 274.52 412.6 276.79 412.6 267.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='407.6 263.36 404.6 261.09 404.6 270.74 407.6 273.01 407.6 263.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='402.6 259.57 399.6 257.3 399.6 266.96 402.6 269.23 402.6 259.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='397.6 255.79 394.6 253.52 394.6 263.18 397.6 265.45 397.6 255.79'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom11'>
                            <g ref={houseElevenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='542.04 304.84 538.57 305.5 538.57 315.16 542.04 314.49 542.04 304.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='549.42 303.43 545.96 304.09 545.96 313.75 549.42 313.08 549.42 303.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 302.02 553.35 302.68 553.35 312.33 556.81 311.67 556.81 302.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 300.61 560.73 301.26 560.73 310.92 564.2 310.26 564.2 300.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 299.19 568.12 299.85 568.12 309.51 571.58 308.85 571.58 299.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 297.78 575.51 298.44 575.51 308.1 578.97 307.43 578.97 297.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='542.04 291.3 538.57 291.96 538.57 301.61 542.04 300.95 542.04 291.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='549.42 289.89 545.96 290.54 545.96 300.2 549.42 299.54 549.42 289.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 288.47 553.35 289.13 553.35 298.79 556.81 298.13 556.81 288.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 287.06 560.73 287.72 560.73 297.38 564.2 296.71 564.2 287.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 285.65 568.12 286.31 568.12 295.97 571.58 295.3 571.58 285.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 284.24 575.51 284.9 575.51 294.55 578.97 293.89 578.97 284.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='542.04 277.75 538.57 278.41 538.57 288.07 542.04 287.41 542.04 277.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='549.42 276.34 545.96 277 545.96 286.66 549.42 285.99 549.42 276.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 274.93 553.35 275.59 553.35 285.25 556.81 284.58 556.81 274.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 273.52 560.73 274.18 560.73 283.83 564.2 283.17 564.2 273.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 272.11 568.12 272.77 568.12 282.42 571.58 281.76 571.58 272.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 270.7 575.51 271.35 575.51 281.01 578.97 280.35 578.97 270.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='542.04 264.21 538.57 264.87 538.57 274.53 542.04 273.86 542.04 264.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='549.42 262.8 545.96 263.46 545.96 273.11 549.42 272.45 549.42 262.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 261.39 553.35 262.05 553.35 271.7 556.81 271.04 556.81 261.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 259.98 560.73 260.63 560.73 270.29 564.2 269.63 564.2 259.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 258.56 568.12 259.22 568.12 268.88 571.58 268.21 571.58 258.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 257.15 575.51 257.81 575.51 267.47 578.97 266.8 578.97 257.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='542.04 250.67 538.57 251.33 538.57 260.98 542.04 260.32 542.04 250.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='549.42 249.26 545.96 249.91 545.96 259.57 549.42 258.91 549.42 249.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 247.84 553.35 248.5 553.35 258.16 556.81 257.49 556.81 247.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 246.43 560.73 247.09 560.73 256.75 564.2 256.08 564.2 246.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 245.02 568.12 245.68 568.12 255.34 571.58 254.67 571.58 245.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 243.61 575.51 244.27 575.51 253.92 578.97 253.26 578.97 243.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 234.3 553.35 234.96 553.35 244.62 556.81 243.95 556.81 234.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 232.89 560.73 233.55 560.73 243.2 564.2 242.54 564.2 232.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 231.48 568.12 232.14 568.12 241.79 571.58 241.13 571.58 231.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 230.06 575.51 230.72 575.51 240.38 578.97 239.72 578.97 230.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 220.76 553.35 221.42 553.35 231.07 556.81 230.41 556.81 220.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 219.34 560.73 220 560.73 229.66 564.2 229 564.2 219.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 217.93 568.12 218.59 568.12 228.25 571.58 227.58 571.58 217.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 216.52 575.51 217.18 575.51 226.84 578.97 226.17 578.97 216.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='556.81 207.21 553.35 207.87 553.35 217.53 556.81 216.86 556.81 207.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='564.2 205.8 560.73 206.46 560.73 216.12 564.2 215.45 564.2 205.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='571.58 204.39 568.12 205.05 568.12 214.71 571.58 214.04 571.58 204.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='578.97 202.98 575.51 203.64 575.51 213.29 578.97 212.63 578.97 202.98'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseElevenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 332.25 496.39 329.99 496.39 339.64 499.39 341.91 499.39 332.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 333.84 516.39 331.57 516.39 336.05 519.39 335.68 519.39 333.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 330.06 511.39 327.79 511.39 337.09 514.39 336.51 514.39 330.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 326.27 506.39 324.01 506.39 333.66 509.39 335.93 509.39 326.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 322.49 501.39 320.22 501.39 329.88 504.39 332.15 504.39 322.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 318.71 496.39 316.44 496.39 326.1 499.39 328.36 499.39 318.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 331.64 531.39 329.37 531.39 334.26 534.39 336.53 534.39 331.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 327.86 526.39 325.59 526.39 334.26 529.39 333.62 529.39 327.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 324.08 521.39 321.81 521.39 331.46 524.39 333.73 524.39 324.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 320.29 516.39 318.03 516.39 327.68 519.39 329.95 519.39 320.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 316.51 511.39 314.24 511.39 323.9 514.39 326.17 514.39 316.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 312.73 506.39 310.46 506.39 320.12 509.39 322.38 509.39 312.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 308.95 501.39 306.68 501.39 316.33 504.39 318.6 504.39 308.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='502.24 338.85 504.39 338.42 504.39 336 501.39 333.73 501.39 343.38 502.27 343.86 502.24 338.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 305.17 496.39 302.9 496.39 312.55 499.39 314.82 499.39 305.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 318.1 531.39 315.83 531.39 325.48 534.39 327.75 534.39 318.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 314.31 526.39 312.04 526.39 321.7 529.39 323.97 529.39 314.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 310.53 521.39 308.26 521.39 317.92 524.39 320.19 524.39 310.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 306.75 516.39 304.48 516.39 314.14 519.39 316.4 519.39 306.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 302.97 511.39 300.7 511.39 310.35 514.39 312.62 514.39 302.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 299.19 506.39 296.92 506.39 306.57 509.39 308.84 509.39 299.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 295.41 501.39 293.14 501.39 302.79 504.39 305.06 504.39 295.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 291.62 496.39 289.36 496.39 299.01 499.39 301.28 499.39 291.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 304.55 531.39 302.28 531.39 311.94 534.39 314.21 534.39 304.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 300.77 526.39 298.5 526.39 308.16 529.39 310.42 529.39 300.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 296.99 521.39 294.72 521.39 304.37 524.39 306.64 524.39 296.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 293.21 516.39 290.94 516.39 300.59 519.39 302.86 519.39 293.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 289.43 511.39 287.16 511.39 296.81 514.39 299.08 514.39 289.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 285.64 506.39 283.37 506.39 293.03 509.39 295.3 509.39 285.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 281.86 501.39 279.59 501.39 289.25 504.39 291.52 504.39 281.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 278.08 496.39 275.81 496.39 285.47 499.39 287.73 499.39 278.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 291.01 531.39 288.74 531.39 298.39 534.39 300.66 534.39 291.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 287.23 526.39 284.96 526.39 294.61 529.39 296.88 529.39 287.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 283.45 521.39 281.18 521.39 290.83 524.39 293.1 524.39 283.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 279.66 516.39 277.39 516.39 287.05 519.39 289.32 519.39 279.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 275.88 511.39 273.61 511.39 283.27 514.39 285.54 514.39 275.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 272.1 506.39 269.83 506.39 279.49 509.39 281.75 509.39 272.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 268.32 501.39 266.05 501.39 275.7 504.39 277.97 504.39 268.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 264.54 496.39 262.27 496.39 271.92 499.39 274.19 499.39 264.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 277.46 531.39 275.2 531.39 284.85 534.39 287.12 534.39 277.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 273.68 526.39 271.41 526.39 281.07 529.39 283.34 529.39 273.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 269.9 521.39 267.63 521.39 277.29 524.39 279.56 524.39 269.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 266.12 516.39 263.85 516.39 273.5 519.39 275.77 519.39 266.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 262.34 511.39 260.07 511.39 269.72 514.39 271.99 514.39 262.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 258.56 506.39 256.29 506.39 265.94 509.39 268.21 509.39 258.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 254.78 501.39 252.51 501.39 262.16 504.39 264.43 504.39 254.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 250.99 496.39 248.72 496.39 258.38 499.39 260.65 499.39 250.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 263.92 531.39 261.65 531.39 271.31 534.39 273.58 534.39 263.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 260.14 526.39 257.87 526.39 267.52 529.39 269.79 529.39 260.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 256.36 521.39 254.09 521.39 263.74 524.39 266.01 524.39 256.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 252.58 516.39 250.31 516.39 259.96 519.39 262.23 519.39 252.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 248.79 511.39 246.53 511.39 256.18 514.39 258.45 514.39 248.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 245.01 506.39 242.74 506.39 252.4 509.39 254.67 509.39 245.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 241.23 501.39 238.96 501.39 248.62 504.39 250.89 504.39 241.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 237.45 496.39 235.18 496.39 244.83 499.39 247.1 499.39 237.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.39 250.38 531.39 248.11 531.39 257.76 534.39 260.03 534.39 250.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='529.39 246.6 526.39 244.33 526.39 253.98 529.39 256.25 529.39 246.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='524.39 242.81 521.39 240.55 521.39 250.2 524.39 252.47 524.39 242.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='519.39 239.03 516.39 236.76 516.39 246.42 519.39 248.69 519.39 239.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='514.39 235.25 511.39 232.98 511.39 242.64 514.39 244.91 514.39 235.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='509.39 231.47 506.39 229.2 506.39 238.85 509.39 241.12 509.39 231.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.39 227.69 501.39 225.42 501.39 235.07 504.39 237.34 504.39 227.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='499.39 223.91 496.39 221.64 496.39 231.29 499.39 233.56 499.39 223.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='546.27 220.18 542.4 218.17 542.4 227.82 546.27 229.84 546.27 220.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='540.27 217.06 536.4 215.04 536.4 224.7 540.27 226.71 540.27 217.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.27 213.93 530.4 211.92 530.4 221.57 534.27 223.59 534.27 213.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='528.27 210.81 524.4 208.79 524.4 218.45 528.27 220.46 528.27 210.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='522.27 207.68 518.4 205.67 518.4 215.32 522.27 217.33 522.27 207.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='516.27 204.56 512.4 202.54 512.4 212.2 516.27 214.21 516.27 204.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='510.27 201.43 506.4 199.42 506.4 209.07 510.27 211.08 510.27 201.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.27 198.31 500.4 196.29 500.4 205.95 504.27 207.96 504.27 198.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='546.27 233.55 542.4 231.54 542.4 236.19 546.27 238.2 546.27 233.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='540.27 230.43 536.4 228.41 536.4 233.07 540.27 235.08 540.27 230.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.27 227.3 530.4 225.29 530.4 229.94 534.27 231.95 534.27 227.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='528.27 224.17 524.4 222.16 524.4 226.82 528.27 228.83 528.27 224.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='522.27 221.05 518.4 219.04 518.4 223.69 522.27 225.7 522.27 221.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='516.27 217.92 512.4 215.91 512.4 220.57 516.27 222.58 516.27 217.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='510.27 214.8 506.4 212.79 506.4 217.44 510.27 219.45 510.27 214.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.27 211.67 500.4 209.66 500.4 214.31 504.27 216.33 504.27 211.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='546.27 206.54 542.4 204.52 542.4 214.18 546.27 216.19 546.27 206.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='540.27 203.41 536.4 201.4 536.4 211.05 540.27 213.06 540.27 203.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='534.27 200.28 530.4 198.27 530.4 207.93 534.27 209.94 534.27 200.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='528.27 197.16 524.4 195.15 524.4 204.8 528.27 206.81 528.27 197.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='522.27 194.03 518.4 192.02 518.4 201.68 522.27 203.69 522.27 194.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='516.27 190.91 512.4 188.9 512.4 198.55 516.27 200.56 516.27 190.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='510.27 187.78 506.4 185.77 506.4 195.42 510.27 197.44 510.27 187.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='504.27 184.66 500.4 182.65 500.4 192.3 504.27 194.31 504.27 184.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='501.76 197.02 497.89 195.01 497.89 204.66 501.76 206.67 501.76 197.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='501.76 210.39 497.89 208.38 497.89 213.03 501.76 215.04 501.76 210.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='501.76 183.37 497.89 181.36 497.89 191.02 501.76 193.03 501.76 183.37'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom10'>
                            <g ref={houseTenPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 256.07 653.72 256.73 653.72 266.38 657.18 265.72 657.18 256.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 254.65 661.1 255.31 661.1 264.97 664.57 264.31 664.57 254.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 269.61 653.72 270.27 653.72 279.93 657.18 279.26 657.18 269.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='649.79 284.57 646.33 285.22 646.33 294.88 649.79 294.22 649.79 284.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='649.79 298.11 646.33 298.77 646.33 308.43 649.79 307.76 649.79 298.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='649.79 311.65 646.33 312.31 646.33 319.04 649.79 318.37 649.79 311.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 253.24 668.49 253.9 668.49 263.56 671.95 262.89 671.95 253.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 251.83 675.88 252.49 675.88 262.15 679.34 261.48 679.34 251.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 250.42 683.27 251.08 683.27 260.74 686.73 260.07 686.73 250.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 242.52 653.72 243.18 653.72 252.84 657.18 252.17 657.18 242.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 241.11 661.1 241.77 661.1 251.43 664.57 250.76 664.57 241.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 239.7 668.49 240.36 668.49 250.02 671.95 249.35 671.95 239.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 238.29 675.88 238.95 675.88 248.6 679.34 247.94 679.34 238.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 236.88 683.27 237.53 683.27 247.19 686.73 246.53 686.73 236.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 283.15 653.72 283.81 653.72 293.47 657.18 292.8 657.18 283.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 296.7 653.72 297.36 653.72 307.01 657.18 306.35 657.18 296.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 310.24 653.72 310.9 653.72 317.62 657.18 316.96 657.18 310.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 268.2 661.1 268.86 661.1 278.51 664.57 277.85 664.57 268.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 266.79 668.49 267.45 668.49 277.1 671.95 276.44 671.95 266.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 265.37 675.88 266.03 675.88 275.69 679.34 275.03 679.34 265.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 263.96 683.27 264.62 683.27 274.28 686.73 273.61 686.73 263.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 281.74 661.1 282.4 661.1 288.75 664.57 288.08 664.57 281.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 280.33 668.49 280.99 668.49 287.33 671.95 286.67 671.95 280.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 278.92 675.88 279.58 675.88 285.92 679.34 285.26 679.34 278.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 277.51 683.27 278.17 683.27 284.51 686.73 283.85 686.73 277.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 229.14 653.72 229.8 653.72 239.46 657.18 238.8 657.18 229.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 227.73 661.1 228.39 661.1 238.05 664.57 237.38 664.57 227.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 226.32 668.49 226.98 668.49 236.64 671.95 235.97 671.95 226.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 224.91 675.88 225.57 675.88 235.23 679.34 234.56 679.34 224.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 223.5 683.27 224.16 683.27 233.81 686.73 233.15 686.73 223.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 215.77 653.72 216.43 653.72 226.08 657.18 225.42 657.18 215.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 214.35 661.1 215.01 661.1 224.67 664.57 224.01 664.57 214.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 212.94 668.49 213.6 668.49 223.26 671.95 222.59 671.95 212.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 211.53 675.88 212.19 675.88 221.85 679.34 221.18 679.34 211.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 210.12 683.27 210.78 683.27 220.44 686.73 219.77 686.73 210.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 202.39 653.72 203.05 653.72 212.7 657.18 212.04 657.18 202.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 200.98 661.1 201.63 661.1 211.29 664.57 210.63 664.57 200.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 199.56 668.49 200.22 668.49 209.88 671.95 209.22 671.95 199.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 198.15 675.88 198.81 675.88 208.47 679.34 207.8 679.34 198.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 196.74 683.27 197.4 683.27 207.06 686.73 206.39 686.73 196.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='657.18 189.01 653.72 189.67 653.72 199.33 657.18 198.66 657.18 189.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='664.57 187.6 661.1 188.26 661.1 197.91 664.57 197.25 664.57 187.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='671.95 186.19 668.49 186.84 668.49 196.5 671.95 195.84 671.95 186.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='679.34 184.77 675.88 185.43 675.88 195.09 679.34 194.43 679.34 184.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='686.73 183.36 683.27 184.02 683.27 193.68 686.73 193.01 686.73 183.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='652.8 171.88 649.34 172.54 649.34 176.98 652.8 176.32 652.8 171.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='660.18 170.47 656.72 171.13 656.72 175.57 660.18 174.9 660.18 170.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='667.57 169.06 664.11 169.72 664.11 174.16 667.57 173.49 667.57 169.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='674.96 167.65 671.5 168.31 671.5 172.75 674.96 172.08 674.96 167.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='682.35 166.24 678.88 166.9 678.88 171.33 682.35 170.67 682.35 166.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='652.8 158.34 649.34 159 649.34 168.66 652.8 167.99 652.8 158.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='660.18 156.93 656.72 157.59 656.72 167.25 660.18 166.58 660.18 156.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='667.57 155.52 664.11 156.18 664.11 165.83 667.57 165.17 667.57 155.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='674.96 154.11 671.5 154.76 671.5 164.42 674.96 163.76 674.96 154.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='682.35 152.69 678.88 153.35 678.88 163.01 682.35 162.35 682.35 152.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='652.8 144.8 649.34 145.46 649.34 155.11 652.8 154.45 652.8 144.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='660.18 143.39 656.72 144.04 656.72 153.7 660.18 153.04 660.18 143.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='667.57 141.97 664.11 142.63 664.11 152.29 667.57 151.63 667.57 141.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='674.96 140.56 671.5 141.22 671.5 150.88 674.96 150.21 674.96 140.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='682.35 139.15 678.88 139.81 678.88 149.47 682.35 148.8 682.35 139.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='652.8 131.25 649.34 131.91 649.34 141.57 652.8 140.91 652.8 131.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='660.18 129.84 656.72 130.5 656.72 140.16 660.18 139.49 660.18 129.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='667.57 128.43 664.11 129.09 664.11 138.75 667.57 138.08 667.57 128.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='674.96 127.02 671.5 127.68 671.5 137.34 674.96 136.67 674.96 127.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='682.35 125.61 678.88 126.27 678.88 135.92 682.35 135.26 682.35 125.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='652.8 117.71 649.34 118.37 649.34 128.03 652.8 127.36 652.8 117.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='660.18 116.3 656.72 116.96 656.72 126.62 660.18 125.95 660.18 116.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='667.57 114.89 664.11 115.55 664.11 125.2 667.57 124.54 667.57 114.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='674.96 113.48 671.5 114.13 671.5 123.79 674.96 123.13 674.96 113.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='682.35 112.06 678.88 112.72 678.88 122.38 682.35 121.71 682.35 112.06'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseTenPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 315.94 610.37 313.67 610.37 323.33 613.37 325.59 613.37 315.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 312.16 605.37 309.89 605.37 319.54 608.37 321.81 608.37 312.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 308.38 600.37 306.11 600.37 315.76 603.37 318.03 603.37 308.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='637.64 320.76 635.37 319.04 635.37 321.24 637.64 320.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='633.37 317.52 630.37 315.26 630.37 322.25 633.37 321.57 633.37 317.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='623.37 309.96 620.37 307.69 620.37 317.35 623.37 319.61 623.37 309.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 306.18 615.37 303.91 615.37 313.56 618.37 315.83 618.37 306.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 302.4 610.37 300.13 610.37 309.78 613.37 312.05 613.37 302.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 298.62 605.37 296.35 605.37 306 608.37 308.27 608.37 298.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 294.83 600.37 292.57 600.37 302.22 603.37 304.49 603.37 294.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='638.37 307.76 635.37 305.49 635.37 315.15 638.37 317.42 638.37 307.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='633.37 303.98 630.37 301.71 630.37 311.37 633.37 313.63 633.37 303.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='628.37 300.2 625.37 297.93 625.37 307.58 628.37 309.85 628.37 300.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='628.37 313.8 625.37 311.53 625.37 321.18 628.37 323.45 628.37 313.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='628.37 327.4 625.37 325.13 625.37 334.78 628.37 337.05 628.37 327.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='623.37 296.42 620.37 294.15 620.37 303.8 623.37 306.07 623.37 296.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 292.64 615.37 290.37 615.37 300.02 618.37 302.29 618.37 292.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 288.85 610.37 286.58 610.37 296.24 613.37 298.51 613.37 288.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 285.07 605.37 282.8 605.37 292.46 608.37 294.73 608.37 285.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 281.29 600.37 279.02 600.37 288.68 603.37 290.94 603.37 281.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 267.73 600.37 265.46 600.37 275.11 603.37 277.38 603.37 267.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 254.17 600.37 251.9 600.37 261.55 603.37 263.82 603.37 254.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='638.37 294.22 635.37 291.95 635.37 301.6 638.37 303.87 638.37 294.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='633.37 290.44 630.37 288.17 630.37 297.82 633.37 300.09 633.37 290.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='628.37 286.66 625.37 284.39 625.37 294.04 628.37 296.31 628.37 286.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='623.37 323.54 620.37 321.27 620.37 330.93 623.37 333.2 623.37 323.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 319.76 615.37 317.49 615.37 327.15 618.37 329.41 618.37 319.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='623.37 282.87 620.37 280.6 620.37 290.26 623.37 292.53 623.37 282.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 279.09 615.37 276.82 615.37 286.48 618.37 288.75 618.37 279.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 275.31 610.37 273.04 610.37 282.7 613.37 284.96 613.37 275.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 271.53 605.37 269.26 605.37 278.91 608.37 281.18 608.37 271.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 265.53 615.37 263.26 615.37 272.91 618.37 275.18 618.37 265.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 261.75 610.37 259.48 610.37 269.13 613.37 271.4 613.37 261.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 257.97 605.37 255.7 605.37 265.35 608.37 267.62 608.37 257.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 240.6 600.37 238.33 600.37 247.99 603.37 250.26 603.37 240.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 251.97 615.37 249.7 615.37 259.35 618.37 261.62 618.37 251.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 248.19 610.37 245.92 610.37 255.57 613.37 257.84 613.37 248.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 244.4 605.37 242.14 605.37 251.79 608.37 254.06 608.37 244.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 227.04 600.37 224.77 600.37 234.43 603.37 236.69 603.37 227.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 238.4 615.37 236.14 615.37 245.79 618.37 248.06 618.37 238.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 234.62 610.37 232.35 610.37 242.01 613.37 244.28 613.37 234.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 230.84 605.37 228.57 605.37 238.23 608.37 240.5 608.37 230.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='603.37 213.48 600.37 211.21 600.37 220.86 603.37 223.13 603.37 213.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='618.37 224.84 615.37 222.57 615.37 232.23 618.37 234.5 618.37 224.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='613.37 221.06 610.37 218.79 610.37 228.45 613.37 230.71 613.37 221.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='608.37 217.28 605.37 215.01 605.37 224.66 608.37 226.93 608.37 217.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='638.37 280.68 635.37 278.41 635.37 288.06 638.37 290.33 638.37 280.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='633.37 276.89 630.37 274.62 630.37 284.28 633.37 286.55 633.37 276.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='628.37 273.11 625.37 270.84 625.37 280.5 628.37 282.77 628.37 273.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='623.37 269.33 620.37 267.06 620.37 276.72 623.37 278.98 623.37 269.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 211.48 638.53 209.21 638.53 218.87 641.53 221.13 641.53 211.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 207.7 633.53 205.43 633.53 215.08 636.53 217.35 636.53 207.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 203.92 628.53 201.65 628.53 211.3 631.53 213.57 631.53 203.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 200.14 623.53 197.87 623.53 207.52 626.53 209.79 626.53 200.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 196.35 618.53 194.09 618.53 203.74 621.53 206.01 621.53 196.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 192.57 613.53 190.3 613.53 199.96 616.53 202.23 616.53 192.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 197.94 638.53 195.67 638.53 205.32 641.53 207.59 641.53 197.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 194.16 633.53 191.89 633.53 201.54 636.53 203.81 636.53 194.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 190.37 628.53 188.1 628.53 197.76 631.53 200.03 631.53 190.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 186.59 623.53 184.32 623.53 193.98 626.53 196.25 626.53 186.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 182.81 618.53 180.54 618.53 190.2 621.53 192.46 621.53 182.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 179.03 613.53 176.76 613.53 186.41 616.53 188.68 616.53 179.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 184.39 638.53 182.12 638.53 191.78 641.53 194.05 641.53 184.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 180.61 633.53 178.34 633.53 188 636.53 190.27 636.53 180.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 215.3 643.53 213.03 643.53 222.68 646.53 224.95 646.53 215.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 201.76 643.53 199.49 643.53 209.14 646.53 211.41 646.53 201.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 224.99 638.53 222.72 638.53 232.37 641.53 234.64 641.53 224.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 221.2 633.53 218.94 633.53 228.59 636.53 230.86 636.53 221.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 228.81 643.53 226.54 643.53 236.19 646.53 238.46 646.53 228.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 238.51 638.53 236.24 638.53 245.9 641.53 248.16 641.53 238.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 234.73 633.53 232.46 633.53 242.11 636.53 244.38 636.53 234.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 242.33 643.53 240.06 643.53 249.72 646.53 251.98 646.53 242.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 252.04 638.53 249.77 638.53 259.42 641.53 261.69 641.53 252.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 248.25 633.53 245.99 633.53 255.64 636.53 257.91 636.53 248.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 255.86 643.53 253.59 643.53 263.24 646.53 265.51 646.53 255.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 265.56 638.53 263.29 638.53 267.39 641.53 269.66 641.53 265.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 261.78 633.53 259.51 633.53 263.61 636.53 265.87 636.53 261.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 269.38 643.53 267.11 643.53 271.21 646.53 273.48 646.53 269.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='646.53 188.21 643.53 185.94 643.53 195.6 646.53 197.87 646.53 188.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 176.83 628.53 174.56 628.53 184.22 631.53 186.48 631.53 176.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 173.05 623.53 170.78 623.53 180.43 626.53 182.7 626.53 173.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 169.27 618.53 167 618.53 176.65 621.53 178.92 621.53 169.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 165.49 613.53 163.22 613.53 172.87 616.53 175.14 616.53 165.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 170.85 638.53 168.58 638.53 178.23 641.53 180.5 641.53 170.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 167.07 633.53 164.8 633.53 174.45 636.53 176.72 636.53 167.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 163.29 628.53 161.02 628.53 170.67 631.53 172.94 631.53 163.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 159.51 623.53 157.24 623.53 166.89 626.53 169.16 626.53 159.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 155.72 618.53 153.45 618.53 163.11 621.53 165.38 621.53 155.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 151.94 613.53 149.67 613.53 159.33 616.53 161.6 616.53 151.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 157.31 638.53 155.04 638.53 164.69 641.53 166.96 641.53 157.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 153.52 633.53 151.26 633.53 160.91 636.53 163.18 636.53 153.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 149.74 628.53 147.47 628.53 157.13 631.53 159.4 631.53 149.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 145.96 623.53 143.69 623.53 153.35 626.53 155.62 626.53 145.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 142.18 618.53 139.91 618.53 149.56 621.53 151.83 621.53 142.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 138.4 613.53 136.13 613.53 145.78 616.53 148.05 616.53 138.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 143.76 638.53 141.49 638.53 151.15 641.53 153.42 641.53 143.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 139.98 633.53 137.71 633.53 147.37 636.53 149.64 636.53 139.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 136.2 628.53 133.93 628.53 143.58 631.53 145.85 631.53 136.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 132.42 623.53 130.15 623.53 139.8 626.53 142.07 626.53 132.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 128.64 618.53 126.37 618.53 136.02 621.53 138.29 621.53 128.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 124.85 613.53 122.59 613.53 132.24 616.53 134.51 616.53 124.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 130.22 638.53 127.95 638.53 137.6 641.53 139.87 641.53 130.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 126.44 633.53 124.17 633.53 133.82 636.53 136.09 636.53 126.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 122.66 628.53 120.39 628.53 130.04 631.53 132.31 631.53 122.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 118.87 623.53 116.61 623.53 126.26 626.53 128.53 626.53 118.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 115.09 618.53 112.82 618.53 122.48 621.53 124.75 621.53 115.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 111.31 613.53 109.04 613.53 118.7 616.53 120.97 616.53 111.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='641.53 116.68 638.53 114.41 638.53 124.06 641.53 126.33 641.53 116.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='636.53 112.89 633.53 110.63 633.53 120.28 636.53 122.55 636.53 112.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='631.53 109.11 628.53 106.84 628.53 116.5 631.53 118.77 631.53 109.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='626.53 105.33 623.53 103.06 623.53 112.72 626.53 114.98 626.53 105.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='621.53 101.55 618.53 99.28 618.53 108.93 621.53 111.2 621.53 101.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='616.53 97.77 613.53 95.5 613.53 105.15 616.53 107.42 616.53 97.77'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom9'>
                            <g ref={houseNinePartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 299.86 732.12 300.09 733.71 301.29 733.71 299.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 298.45 737.63 299.1 737.63 304.28 741.09 306.87 741.09 298.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 297.03 745.02 297.69 745.02 307.35 748.48 306.69 748.48 297.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 295.62 752.41 296.28 752.41 305.94 755.87 305.27 755.87 295.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 294.21 759.79 294.87 759.79 304.53 763.26 303.86 763.26 294.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 292.8 767.18 293.46 767.18 303.12 770.64 302.45 770.64 292.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 291.39 774.57 292.05 774.57 301.7 778.03 301.04 778.03 291.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 289.98 781.95 290.63 781.95 300.29 785.42 299.63 785.42 289.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 284.9 737.63 285.56 737.63 295.22 741.09 294.55 741.09 284.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 283.49 745.02 284.15 745.02 293.81 748.48 293.14 748.48 283.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 282.08 752.41 282.74 752.41 292.4 755.87 291.73 755.87 282.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 280.67 759.79 281.33 759.79 290.98 763.26 290.32 763.26 280.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 279.26 767.18 279.91 767.18 289.57 770.64 288.91 770.64 279.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 277.84 774.57 278.5 774.57 288.16 778.03 287.49 778.03 277.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 276.43 781.95 277.09 781.95 286.75 785.42 286.08 785.42 276.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 272.77 730.25 273.43 730.25 283.09 733.71 282.42 733.71 272.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 271.36 737.63 272.02 737.63 281.68 741.09 281.01 741.09 271.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 269.95 745.02 270.61 745.02 280.26 748.48 279.6 748.48 269.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 268.54 752.41 269.19 752.41 278.85 755.87 278.19 755.87 268.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 267.12 759.79 267.78 759.79 277.44 763.26 276.77 763.26 267.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 265.71 767.18 266.37 767.18 276.03 770.64 275.36 770.64 265.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 264.3 774.57 264.96 774.57 274.62 778.03 273.95 778.03 264.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 262.89 781.95 263.55 781.95 273.2 785.42 272.54 785.42 262.89'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 259.23 730.25 259.89 730.25 269.54 733.71 268.88 733.71 259.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 257.82 737.63 258.47 737.63 268.13 741.09 267.47 741.09 257.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 256.4 745.02 257.06 745.02 266.72 748.48 266.05 748.48 256.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 254.99 752.41 255.65 752.41 265.31 755.87 264.64 755.87 254.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 253.58 759.79 254.24 759.79 263.9 763.26 263.23 763.26 253.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 252.17 767.18 252.83 767.18 262.48 770.64 261.82 770.64 252.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 250.76 774.57 251.42 774.57 261.07 778.03 260.41 778.03 250.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 249.34 781.95 250 781.95 259.66 785.42 259 785.42 249.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 245.68 730.25 246.34 730.25 256 733.71 255.34 733.71 245.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 244.27 737.63 244.93 737.63 254.59 741.09 253.92 741.09 244.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 242.86 745.02 243.52 745.02 253.18 748.48 252.51 748.48 242.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 241.45 752.41 242.11 752.41 251.76 755.87 251.1 755.87 241.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 240.04 759.79 240.7 759.79 250.35 763.26 249.69 763.26 240.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 238.62 767.18 239.28 767.18 248.94 770.64 248.28 770.64 238.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 237.21 774.57 237.87 774.57 247.53 778.03 246.86 778.03 237.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 235.8 781.95 236.46 781.95 246.12 785.42 245.45 785.42 235.8'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 232.14 730.25 232.8 730.25 242.46 733.71 241.79 733.71 232.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 230.73 737.63 231.39 737.63 241.04 741.09 240.38 741.09 230.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 229.32 745.02 229.98 745.02 239.63 748.48 238.97 748.48 229.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 227.91 752.41 228.56 752.41 238.22 755.87 237.56 755.87 227.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 226.49 759.79 227.15 759.79 236.81 763.26 236.14 763.26 226.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 225.08 767.18 225.74 767.18 235.4 770.64 234.73 770.64 225.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 223.67 774.57 224.33 774.57 233.99 778.03 233.32 778.03 223.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 222.26 781.95 222.92 781.95 232.57 785.42 231.91 785.42 222.26'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 218.6 730.25 219.26 730.25 228.91 733.71 228.25 733.71 218.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 217.19 737.63 217.84 737.63 227.5 741.09 226.84 741.09 217.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 215.77 745.02 216.43 745.02 226.09 748.48 225.42 748.48 215.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 214.36 752.41 215.02 752.41 224.68 755.87 224.01 755.87 214.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 212.95 759.79 213.61 759.79 223.27 763.26 222.6 763.26 212.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 211.54 767.18 212.2 767.18 221.85 770.64 221.19 770.64 211.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 210.13 774.57 210.78 774.57 220.44 778.03 219.78 778.03 210.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 208.71 781.95 209.37 781.95 219.03 785.42 218.37 785.42 208.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 205.05 730.25 205.71 730.25 215.37 733.71 214.7 733.71 205.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 203.64 737.63 204.3 737.63 213.96 741.09 213.29 741.09 203.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 202.23 745.02 202.89 745.02 212.55 748.48 211.88 748.48 202.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 200.82 752.41 201.48 752.41 211.13 755.87 210.47 755.87 200.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 199.41 759.79 200.06 759.79 209.72 763.26 209.06 763.26 199.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 197.99 767.18 198.65 767.18 208.31 770.64 207.65 770.64 197.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 196.58 774.57 197.24 774.57 206.9 778.03 206.23 778.03 196.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 195.17 781.95 195.83 781.95 205.49 785.42 204.82 785.42 195.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 191.51 730.25 192.17 730.25 201.83 733.71 201.16 733.71 191.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 190.1 737.63 190.76 737.63 200.41 741.09 199.75 741.09 190.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 188.69 745.02 189.35 745.02 199 748.48 198.34 748.48 188.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 187.27 752.41 187.93 752.41 197.59 755.87 196.93 755.87 187.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 185.86 759.79 186.52 759.79 196.18 763.26 195.51 763.26 185.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 184.45 767.18 185.11 767.18 194.77 770.64 194.1 770.64 184.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 183.04 774.57 183.7 774.57 193.36 778.03 192.69 778.03 183.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 181.63 781.95 182.29 781.95 191.94 785.42 191.28 785.42 181.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 177.97 730.25 178.63 730.25 188.28 733.71 187.62 733.71 177.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 176.55 737.63 177.21 737.63 186.87 741.09 186.21 741.09 176.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 175.14 745.02 175.8 745.02 185.46 748.48 184.79 748.48 175.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 173.73 752.41 174.39 752.41 184.05 755.87 183.38 755.87 173.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 172.32 759.79 172.98 759.79 182.64 763.26 181.97 763.26 172.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 170.91 767.18 171.57 767.18 181.22 770.64 180.56 770.64 170.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 169.5 774.57 170.15 774.57 179.81 778.03 179.15 778.03 169.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 168.08 781.95 168.74 781.95 178.4 785.42 177.73 785.42 168.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 164.42 730.25 165.08 730.25 174.74 733.71 174.07 733.71 164.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 163.01 737.63 163.67 737.63 173.33 741.09 172.66 741.09 163.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 161.6 745.02 162.26 745.02 171.92 748.48 171.25 748.48 161.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 160.19 752.41 160.85 752.41 170.5 755.87 169.84 755.87 160.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 158.78 759.79 159.43 759.79 169.09 763.26 168.43 763.26 158.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 157.36 767.18 158.02 767.18 167.68 770.64 167.02 770.64 157.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 155.95 774.57 156.61 774.57 166.27 778.03 165.6 778.03 155.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 154.54 781.95 155.2 781.95 164.86 785.42 164.19 785.42 154.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 150.88 730.25 151.54 730.25 161.2 733.71 160.53 733.71 150.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 149.47 737.63 150.13 737.63 159.78 741.09 159.12 741.09 149.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 148.06 745.02 148.71 745.02 158.37 748.48 157.71 748.48 148.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 146.64 752.41 147.3 752.41 156.96 755.87 156.3 755.87 146.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 145.23 759.79 145.89 759.79 155.55 763.26 154.88 763.26 145.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 143.82 767.18 144.48 767.18 154.14 770.64 153.47 770.64 143.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 142.41 774.57 143.07 774.57 152.72 778.03 152.06 778.03 142.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 141 781.95 141.66 781.95 151.31 785.42 150.65 785.42 141'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 137.34 730.25 137.99 730.25 147.65 733.71 146.99 733.71 137.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 135.92 737.63 136.58 737.63 146.24 741.09 145.58 741.09 135.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 134.51 745.02 135.17 745.02 144.83 748.48 144.16 748.48 134.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 133.1 752.41 133.76 752.41 143.42 755.87 142.75 755.87 133.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 131.69 759.79 132.35 759.79 142 763.26 141.34 763.26 131.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 130.28 767.18 130.94 767.18 140.59 770.64 139.93 770.64 130.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 128.87 774.57 129.52 774.57 139.18 778.03 138.52 778.03 128.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 127.45 781.95 128.11 781.95 137.77 785.42 137.1 785.42 127.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 123.79 730.25 124.45 730.25 134.11 733.71 133.44 733.71 123.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 122.38 737.63 123.04 737.63 132.7 741.09 132.03 741.09 122.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 120.97 745.02 121.63 745.02 131.29 748.48 130.62 748.48 120.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 119.56 752.41 120.22 752.41 129.87 755.87 129.21 755.87 119.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 118.15 759.79 118.8 759.79 128.46 763.26 127.8 763.26 118.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 116.73 767.18 117.39 767.18 127.05 770.64 126.38 770.64 116.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 115.32 774.57 115.98 774.57 125.64 778.03 124.97 778.03 115.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 113.91 781.95 114.57 781.95 124.23 785.42 123.56 785.42 113.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 110.25 730.25 110.91 730.25 120.57 733.71 119.9 733.71 110.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 108.84 737.63 109.5 737.63 119.15 741.09 118.49 741.09 108.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 107.43 745.02 108.08 745.02 117.74 748.48 117.08 748.48 107.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 106.01 752.41 106.67 752.41 116.33 755.87 115.66 755.87 106.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 104.6 759.79 105.26 759.79 114.92 763.26 114.25 763.26 104.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 103.19 767.18 103.85 767.18 113.51 770.64 112.84 770.64 103.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 101.78 774.57 102.44 774.57 112.09 778.03 111.43 778.03 101.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 100.37 781.95 101.03 781.95 110.68 785.42 110.02 785.42 100.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 96.71 730.25 97.36 730.25 107.02 733.71 106.36 733.71 96.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 95.29 737.63 95.95 737.63 105.61 741.09 104.94 741.09 95.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 93.88 745.02 94.54 745.02 104.2 748.48 103.53 748.48 93.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 92.47 752.41 93.13 752.41 102.79 755.87 102.12 755.87 92.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 91.06 759.79 91.72 759.79 101.37 763.26 100.71 763.26 91.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 89.65 767.18 90.31 767.18 99.96 770.64 99.3 770.64 89.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 88.23 774.57 88.89 774.57 98.55 778.03 97.89 778.03 88.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 86.82 781.95 87.48 781.95 97.14 785.42 96.47 785.42 86.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 83.16 730.25 83.82 730.25 93.48 733.71 92.81 733.71 83.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 81.75 737.63 82.41 737.63 92.07 741.09 91.4 741.09 81.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 80.34 745.02 81 745.02 90.65 748.48 89.99 748.48 80.34'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 78.93 752.41 79.59 752.41 89.24 755.87 88.58 755.87 78.93'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 77.51 759.79 78.17 759.79 87.83 763.26 87.17 763.26 77.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 76.1 767.18 76.76 767.18 86.42 770.64 85.75 770.64 76.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 74.69 774.57 75.35 774.57 85.01 778.03 84.34 778.03 74.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 73.28 781.95 73.94 781.95 83.6 785.42 82.93 785.42 73.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 69.62 730.25 70.28 730.25 79.93 733.71 79.27 733.71 69.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='741.09 68.21 737.63 68.87 737.63 78.52 741.09 77.86 741.09 68.21'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 66.79 745.02 67.45 745.02 77.11 748.48 76.45 748.48 66.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 65.38 752.41 66.04 752.41 75.7 755.87 75.03 755.87 65.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 63.97 759.79 64.63 759.79 74.29 763.26 73.62 763.26 63.97'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 62.56 767.18 63.22 767.18 72.88 770.64 72.21 770.64 62.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 61.15 774.57 61.81 774.57 71.46 778.03 70.8 778.03 61.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 59.74 781.95 60.39 781.95 70.05 785.42 69.39 785.42 59.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 53.25 741.09 54.65 741.09 64.3 748.48 62.9 748.48 53.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 51.84 752.41 52.5 752.41 62.16 755.87 61.49 755.87 51.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 50.43 759.79 51.09 759.79 60.74 763.26 60.08 763.26 50.43'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 49.02 767.18 49.67 767.18 59.33 770.64 58.67 770.64 49.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 47.6 774.57 48.26 774.57 57.92 778.03 57.26 778.03 47.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 46.19 781.95 46.85 781.95 56.51 785.42 55.84 785.42 46.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='748.48 36.71 741.09 38.1 741.09 50.76 748.48 49.36 748.48 36.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='755.87 35.3 752.41 35.95 752.41 48.61 755.87 47.95 755.87 35.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='763.26 33.88 759.79 34.54 759.79 47.2 763.26 46.54 763.26 33.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='770.64 32.47 767.18 33.13 767.18 45.79 770.64 45.12 770.64 32.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='778.03 31.06 774.57 31.72 774.57 44.38 778.03 43.71 778.03 31.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='785.42 29.65 781.95 30.31 781.95 42.96 785.42 42.3 785.42 29.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='733.71 286.31 730.25 286.97 730.25 296.63 733.71 295.97 733.71 286.31'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseNinePartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 286.03 723.06 283.76 723.06 293.41 726.06 295.68 726.06 286.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 282.24 718.06 279.97 718.06 289.63 721.06 291.9 721.06 282.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 278.46 713.06 276.19 713.06 285.85 716.06 288.12 716.06 278.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 274.68 708.06 272.41 708.06 282.07 711.06 284.33 711.06 274.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 270.9 703.06 268.63 703.06 278.28 706.06 280.55 706.06 270.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 272.48 723.06 270.21 723.06 279.87 726.06 282.14 726.06 272.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 268.7 718.06 266.43 718.06 276.09 721.06 278.35 721.06 268.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 264.92 713.06 262.65 713.06 272.3 716.06 274.57 716.06 264.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 261.14 708.06 258.87 708.06 268.52 711.06 270.79 711.06 261.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 257.36 703.06 255.09 703.06 264.74 706.06 267.01 706.06 257.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 258.94 723.06 256.67 723.06 266.32 726.06 268.59 726.06 258.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 255.16 718.06 252.89 718.06 262.54 721.06 264.81 721.06 255.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 251.38 713.06 249.11 713.06 258.76 716.06 261.03 716.06 251.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 247.59 708.06 245.32 708.06 254.98 711.06 257.25 711.06 247.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 243.81 703.06 241.54 703.06 251.2 706.06 253.47 706.06 243.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 245.39 723.06 243.13 723.06 252.78 726.06 255.05 726.06 245.39'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 241.61 718.06 239.34 718.06 249 721.06 251.27 721.06 241.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 237.83 713.06 235.56 713.06 245.22 716.06 247.49 716.06 237.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 234.05 708.06 231.78 708.06 241.43 711.06 243.7 711.06 234.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 230.27 703.06 228 703.06 237.65 706.06 239.92 706.06 230.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 231.85 723.06 229.58 723.06 239.24 726.06 241.51 726.06 231.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 228.07 718.06 225.8 718.06 235.45 721.06 237.72 721.06 228.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 224.29 713.06 222.02 713.06 231.67 716.06 233.94 716.06 224.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 220.51 708.06 218.24 708.06 227.89 711.06 230.16 711.06 220.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 216.72 703.06 214.46 703.06 224.11 706.06 226.38 706.06 216.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 218.31 723.06 216.04 723.06 225.69 726.06 227.96 726.06 218.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 214.53 718.06 212.26 718.06 221.91 721.06 224.18 721.06 214.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 210.74 713.06 208.48 713.06 218.13 716.06 220.4 716.06 210.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 206.96 708.06 204.69 708.06 214.35 711.06 216.62 711.06 206.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 203.18 703.06 200.91 703.06 210.57 706.06 212.84 706.06 203.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 204.76 723.06 202.5 723.06 212.15 726.06 214.42 726.06 204.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 200.98 718.06 198.71 718.06 208.37 721.06 210.64 721.06 200.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 197.2 713.06 194.93 713.06 204.59 716.06 206.85 716.06 197.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 193.42 708.06 191.15 708.06 200.8 711.06 203.07 711.06 193.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 189.64 703.06 187.37 703.06 197.02 706.06 199.29 706.06 189.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 191.22 723.06 188.95 723.06 198.61 726.06 200.87 726.06 191.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 187.44 718.06 185.17 718.06 194.82 721.06 197.09 721.06 187.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 183.66 713.06 181.39 713.06 191.04 716.06 193.31 716.06 183.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 179.88 708.06 177.61 708.06 187.26 711.06 189.53 711.06 179.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 176.09 703.06 173.83 703.06 183.48 706.06 185.75 706.06 176.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 177.68 723.06 175.41 723.06 185.06 726.06 187.33 726.06 177.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 173.9 718.06 171.63 718.06 181.28 721.06 183.55 721.06 173.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 170.11 713.06 167.85 713.06 177.5 716.06 179.77 716.06 170.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 166.33 708.06 164.06 708.06 173.72 711.06 175.99 711.06 166.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 162.55 703.06 160.28 703.06 169.94 706.06 172.2 706.06 162.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 164.13 723.06 161.86 723.06 171.52 726.06 173.79 726.06 164.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 160.35 718.06 158.08 718.06 167.74 721.06 170.01 721.06 160.35'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 156.57 713.06 154.3 713.06 163.96 716.06 166.22 716.06 156.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 152.79 708.06 150.52 708.06 160.17 711.06 162.44 711.06 152.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 149.01 703.06 146.74 703.06 156.39 706.06 158.66 706.06 149.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 150.59 723.06 148.32 723.06 157.98 726.06 160.24 726.06 150.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 146.81 718.06 144.54 718.06 154.19 721.06 156.46 721.06 146.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 143.03 713.06 140.76 713.06 150.41 716.06 152.68 716.06 143.03'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 139.25 708.06 136.98 708.06 146.63 711.06 148.9 711.06 139.25'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 135.46 703.06 133.19 703.06 142.85 706.06 145.12 706.06 135.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 137.05 723.06 134.78 723.06 144.43 726.06 146.7 726.06 137.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 133.27 718.06 131 718.06 140.65 721.06 142.92 721.06 133.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 129.48 713.06 127.21 713.06 136.87 716.06 139.14 716.06 129.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 125.7 708.06 123.43 708.06 133.09 711.06 135.36 711.06 125.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 121.92 703.06 119.65 703.06 129.31 706.06 131.57 706.06 121.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 123.5 723.06 121.23 723.06 130.89 726.06 133.16 726.06 123.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 119.72 718.06 117.45 718.06 127.11 721.06 129.38 721.06 119.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 115.94 713.06 113.67 713.06 123.32 716.06 125.59 716.06 115.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 112.16 708.06 109.89 708.06 119.54 711.06 121.81 711.06 112.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 108.38 703.06 106.11 703.06 115.76 706.06 118.03 706.06 108.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 109.96 723.06 107.69 723.06 117.34 726.06 119.61 726.06 109.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 106.18 718.06 103.91 718.06 113.56 721.06 115.83 721.06 106.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 102.4 713.06 100.13 713.06 109.78 716.06 112.05 716.06 102.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 98.61 708.06 96.35 708.06 106 711.06 108.27 711.06 98.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 94.83 703.06 92.56 703.06 102.22 706.06 104.49 706.06 94.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 96.42 723.06 94.15 723.06 103.8 726.06 106.07 726.06 96.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 92.63 718.06 90.37 718.06 100.02 721.06 102.29 721.06 92.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 88.85 713.06 86.58 713.06 96.24 716.06 98.51 716.06 88.85'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 85.07 708.06 82.8 708.06 92.46 711.06 94.73 711.06 85.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 81.29 703.06 79.02 703.06 88.67 706.06 90.94 706.06 81.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 82.87 723.06 80.6 723.06 90.26 726.06 92.53 726.06 82.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 79.09 718.06 76.82 718.06 86.48 721.06 88.74 721.06 79.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 75.31 713.06 73.04 713.06 82.69 716.06 84.96 716.06 75.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 71.53 708.06 69.26 708.06 78.91 711.06 81.18 711.06 71.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 67.75 703.06 65.48 703.06 75.13 706.06 77.4 706.06 67.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='726.06 69.33 723.06 67.06 723.06 76.71 726.06 78.98 726.06 69.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 65.55 718.06 63.28 718.06 72.93 721.06 75.2 721.06 65.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 61.77 713.06 59.5 713.06 69.15 716.06 71.42 716.06 61.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 57.98 708.06 55.72 708.06 65.37 711.06 67.64 711.06 57.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='706.06 54.2 703.06 51.93 703.06 61.59 706.06 63.86 706.06 54.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 52 718.06 49.74 718.06 59.39 721.06 61.66 721.06 52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 48.22 713.06 45.95 713.06 55.61 716.06 57.88 716.06 48.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 44.44 708.06 42.17 708.06 51.83 711.06 54.09 711.06 44.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='721.06 35.46 718.06 33.19 718.06 45.85 721.06 48.11 721.06 35.46'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='716.06 31.68 713.06 29.41 713.06 42.06 716.06 44.33 716.06 31.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='711.06 27.9 708.06 25.63 708.06 38.28 711.06 40.55 711.06 27.9'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom8'>
                            <g ref={houseEightPartOneRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.77 496.77 1015.31 497.43 1015.31 507.09 1018.77 506.42 1018.77 496.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1026.16 495.36 1022.69 496.02 1022.69 505.67 1026.16 505.01 1026.16 495.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.54 493.95 1030.08 494.61 1030.08 504.26 1033.54 503.6 1033.54 493.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.93 492.53 1037.47 493.19 1037.47 502.85 1040.93 502.19 1040.93 492.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.32 491.12 1044.85 491.78 1044.85 501.44 1048.32 500.77 1048.32 491.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.7 489.71 1052.24 490.37 1052.24 500.03 1055.7 499.36 1055.7 489.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1026.16 481.81 1022.69 482.47 1022.69 492.13 1026.16 491.47 1026.16 481.81'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.54 480.4 1030.08 481.06 1030.08 490.72 1033.54 490.05 1033.54 480.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.93 478.99 1037.47 479.65 1037.47 489.31 1040.93 488.64 1040.93 478.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.32 477.58 1044.85 478.24 1044.85 487.9 1048.32 487.23 1048.32 477.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.7 476.17 1052.24 476.83 1052.24 486.48 1055.7 485.82 1055.7 476.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.77 469.68 1015.31 470.34 1015.31 480 1018.77 479.33 1018.77 469.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1026.16 468.27 1022.69 468.93 1022.69 478.59 1026.16 477.92 1026.16 468.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.54 466.86 1030.08 467.52 1030.08 477.18 1033.54 476.51 1033.54 466.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.93 465.45 1037.47 466.11 1037.47 475.76 1040.93 475.1 1040.93 465.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.32 464.04 1044.85 464.69 1044.85 474.35 1048.32 473.69 1048.32 464.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.7 462.62 1052.24 463.28 1052.24 472.94 1055.7 472.28 1055.7 462.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.77 456.14 1015.31 456.8 1015.31 466.46 1018.77 465.79 1018.77 456.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1026.16 454.73 1022.69 455.39 1022.69 465.04 1026.16 464.38 1026.16 454.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.54 453.32 1030.08 453.97 1030.08 463.63 1033.54 462.97 1033.54 453.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.93 451.9 1037.47 452.56 1037.47 462.22 1040.93 461.56 1040.93 451.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.32 450.49 1044.85 451.15 1044.85 460.81 1048.32 460.14 1048.32 450.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.7 449.08 1052.24 449.74 1052.24 459.4 1055.7 458.73 1055.7 449.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.77 442.6 1015.31 443.26 1015.31 452.91 1018.77 452.25 1018.77 442.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1026.16 441.18 1022.69 441.84 1022.69 451.5 1026.16 450.84 1026.16 441.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.54 439.77 1030.08 440.43 1030.08 450.09 1033.54 449.42 1033.54 439.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.93 438.36 1037.47 439.02 1037.47 448.68 1040.93 448.01 1040.93 438.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.32 436.95 1044.85 437.61 1044.85 447.27 1048.32 446.6 1048.32 436.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.7 435.54 1052.24 436.2 1052.24 445.85 1055.7 445.19 1055.7 435.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 413.36 1015.12 414.02 1015.12 423.68 1018.58 423.01 1018.58 413.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 411.95 1022.51 412.61 1022.51 422.27 1025.97 421.6 1025.97 411.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 410.54 1029.89 411.2 1029.89 420.85 1033.36 420.19 1033.36 410.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 409.13 1037.28 409.79 1037.28 419.44 1040.74 418.78 1040.74 409.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 407.71 1044.67 408.37 1044.67 418.03 1048.13 417.37 1048.13 407.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 406.3 1052.06 406.96 1052.06 416.62 1055.52 415.95 1055.52 406.3'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 399.82 1015.12 400.48 1015.12 410.13 1018.58 409.47 1018.58 399.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 398.41 1022.51 399.07 1022.51 408.72 1025.97 408.06 1025.97 398.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 397 1029.89 397.65 1029.89 407.31 1033.36 406.65 1033.36 397'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 395.58 1037.28 396.24 1037.28 405.9 1040.74 405.23 1040.74 395.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 394.17 1044.67 394.83 1044.67 404.49 1048.13 403.82 1048.13 394.17'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 392.76 1052.06 393.42 1052.06 403.08 1055.52 402.41 1055.52 392.76'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 386.28 1015.12 386.93 1015.12 396.59 1018.58 395.93 1018.58 386.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 384.86 1022.51 385.52 1022.51 395.18 1025.97 394.51 1025.97 384.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 383.45 1029.89 384.11 1029.89 393.77 1033.36 393.1 1033.36 383.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 382.04 1037.28 382.7 1037.28 392.36 1040.74 391.69 1040.74 382.04'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 380.63 1044.67 381.29 1044.67 390.94 1048.13 390.28 1048.13 380.63'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 379.22 1052.06 379.87 1052.06 389.53 1055.52 388.87 1055.52 379.22'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 372.73 1015.12 373.39 1015.12 383.05 1018.58 382.38 1018.58 372.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 371.32 1022.51 371.98 1022.51 381.64 1025.97 380.97 1025.97 371.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 369.91 1029.89 370.57 1029.89 380.22 1033.36 379.56 1033.36 369.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 368.5 1037.28 369.15 1037.28 378.81 1040.74 378.15 1040.74 368.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 367.08 1044.67 367.74 1044.67 377.4 1048.13 376.74 1048.13 367.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 365.67 1052.06 366.33 1052.06 375.99 1055.52 375.32 1055.52 365.67'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 359.19 1015.12 359.85 1015.12 369.5 1018.58 368.84 1018.58 359.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 357.78 1022.51 358.44 1022.51 368.09 1025.97 367.43 1025.97 357.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 356.36 1029.89 357.02 1029.89 366.68 1033.36 366.02 1033.36 356.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 354.95 1037.28 355.61 1037.28 365.27 1040.74 364.6 1040.74 354.95'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 353.54 1044.67 354.2 1044.67 363.86 1048.13 363.19 1048.13 353.54'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 352.13 1052.06 352.79 1052.06 362.45 1055.52 361.78 1055.52 352.13'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.58 345.64 1015.12 346.3 1015.12 355.96 1018.58 355.3 1018.58 345.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 344.23 1022.51 344.89 1022.51 354.55 1025.97 353.88 1025.97 344.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 342.82 1029.89 343.48 1029.89 353.14 1033.36 352.47 1033.36 342.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 341.41 1037.28 342.07 1037.28 351.73 1040.74 351.06 1040.74 341.41'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 340 1044.67 340.66 1044.67 350.31 1048.13 349.65 1048.13 340'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1055.52 338.59 1052.06 339.24 1052.06 348.9 1055.52 348.24 1055.52 338.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 330.69 1022.51 331.35 1022.51 341.01 1025.97 340.34 1025.97 330.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 329.28 1029.89 329.94 1029.89 339.59 1033.36 338.93 1033.36 329.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 327.87 1037.28 328.52 1037.28 338.18 1040.74 337.52 1040.74 327.87'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 326.45 1044.67 327.11 1044.67 336.77 1048.13 336.11 1048.13 326.45'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1025.97 317.15 1022.51 317.8 1022.51 327.46 1025.97 326.8 1025.97 317.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 315.73 1029.89 316.39 1029.89 326.05 1033.36 325.39 1033.36 315.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 314.32 1037.28 314.98 1037.28 324.64 1040.74 323.97 1040.74 314.32'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 312.91 1044.67 313.57 1044.67 323.23 1048.13 322.56 1048.13 312.91'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1023.16 287.29 1020.16 285.02 1020.16 294.67 1023.16 296.94 1023.16 287.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 302.19 1029.89 302.85 1029.89 312.51 1033.36 311.84 1033.36 302.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 300.78 1037.28 301.44 1037.28 311.09 1040.74 310.43 1040.74 300.78'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 299.37 1044.67 300.03 1044.67 309.68 1048.13 309.02 1048.13 299.37'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1023.16 273.75 1020.16 271.48 1020.16 281.13 1023.16 283.4 1023.16 273.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 288.65 1029.89 289.31 1029.89 298.96 1033.36 298.3 1033.36 288.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 287.24 1037.28 287.89 1037.28 297.55 1040.74 296.89 1040.74 287.24'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 285.82 1044.67 286.48 1044.67 296.14 1048.13 295.47 1048.13 285.82'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1023.16 260.2 1020.16 257.93 1020.16 267.59 1023.16 269.86 1023.16 260.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 275.1 1029.89 275.76 1029.89 285.42 1033.36 284.75 1033.36 275.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 273.69 1037.28 274.35 1037.28 284.01 1040.74 283.34 1040.74 273.69'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 272.28 1044.67 272.94 1044.67 282.6 1048.13 281.93 1048.13 272.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1023.16 246.66 1020.16 244.39 1020.16 254.04 1023.16 256.31 1023.16 246.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 261.56 1029.89 262.22 1029.89 271.88 1033.36 271.21 1033.36 261.56'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 260.15 1037.28 260.81 1037.28 270.46 1040.74 269.8 1040.74 260.15'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 258.74 1044.67 259.4 1044.67 269.05 1048.13 268.39 1048.13 258.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1023.16 233.12 1020.16 230.85 1020.16 240.5 1023.16 242.77 1023.16 233.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 248.02 1029.89 248.68 1029.89 258.33 1033.36 257.67 1033.36 248.02'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 246.6 1037.28 247.26 1037.28 256.92 1040.74 256.26 1040.74 246.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 245.19 1044.67 245.85 1044.67 255.51 1048.13 254.84 1048.13 245.19'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1033.36 234.47 1029.89 235.13 1029.89 244.79 1033.36 244.12 1033.36 234.47'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1040.74 233.06 1037.28 233.72 1037.28 243.38 1040.74 242.71 1040.74 233.06'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1048.13 231.65 1044.67 232.31 1044.67 241.97 1048.13 241.3 1048.13 231.65'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1018.77 483.23 1015.31 483.89 1015.31 493.54 1018.77 492.88 1018.77 483.23'
                                    fill='#212f3e'
                                />
                            </g>
                            <g ref={houseEightPartTwoRef}>
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='971.66 454.68 968.66 452.41 968.66 457.24 971.66 456.61 971.66 454.68'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='986.66 452.48 983.66 450.21 983.66 454.57 986.66 453.77 986.66 452.48'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='981.66 448.7 978.66 446.43 978.66 455.33 981.66 454.72 981.66 448.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='976.66 444.92 973.66 442.65 973.66 452.3 976.66 454.57 976.66 444.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='971.66 441.14 968.66 438.87 968.66 448.52 971.66 450.79 971.66 441.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1006.66 454.07 1003.66 451.8 1003.66 461.45 1006.66 463.72 1006.66 454.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1001.66 450.28 998.66 448.02 998.66 457.67 1001.66 459.94 1001.66 450.28'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='996.66 446.5 993.66 444.23 993.66 453.89 996.66 456.16 996.66 446.5'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='991.66 442.72 988.66 440.45 988.66 450.11 991.66 452.38 991.66 442.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='986.66 438.94 983.66 436.67 983.66 446.32 986.66 448.59 986.66 438.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='981.66 435.16 978.66 432.89 978.66 442.54 981.66 444.81 981.66 435.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='976.66 431.38 973.66 429.11 973.66 438.76 976.66 441.03 976.66 431.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='971.66 427.59 968.66 425.33 968.66 434.98 971.66 437.25 971.66 427.59'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1006.66 440.52 1003.66 438.25 1003.66 447.91 1006.66 450.18 1006.66 440.52'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1001.66 436.74 998.66 434.47 998.66 444.13 1001.66 446.39 1001.66 436.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='996.66 432.96 993.66 430.69 993.66 440.34 996.66 442.61 996.66 432.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='991.66 429.18 988.66 426.91 988.66 436.56 991.66 438.83 991.66 429.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='986.66 425.4 983.66 423.13 983.66 432.78 986.66 435.05 986.66 425.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='981.66 421.61 978.66 419.35 978.66 429 981.66 431.27 981.66 421.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='976.66 417.83 973.66 415.56 973.66 425.22 976.66 427.49 976.66 417.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='971.66 414.05 968.66 411.78 968.66 421.44 971.66 423.71 971.66 414.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 412.61 1005.16 410.34 1005.16 420 1008.16 422.27 1008.16 412.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 408.83 1000.16 406.56 1000.16 416.22 1003.16 418.48 1003.16 408.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 405.05 995.16 402.78 995.16 412.43 998.16 414.7 998.16 405.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 401.27 990.16 399 990.16 408.65 993.16 410.92 993.16 401.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 397.49 985.16 395.22 985.16 404.87 988.16 407.14 988.16 397.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='983.16 393.7 980.16 391.44 980.16 401.09 983.16 403.36 983.16 393.7'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='978.16 389.92 975.16 387.65 975.16 397.31 978.16 399.58 978.16 389.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='973.16 386.14 970.16 383.87 970.16 393.53 973.16 395.8 973.16 386.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 399.07 1005.16 396.8 1005.16 406.45 1008.16 408.72 1008.16 399.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 395.29 1000.16 393.02 1000.16 402.67 1003.16 404.94 1003.16 395.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 391.51 995.16 389.24 995.16 398.89 998.16 401.16 998.16 391.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 387.72 990.16 385.46 990.16 395.11 993.16 397.38 993.16 387.72'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 383.94 985.16 381.67 985.16 391.33 988.16 393.6 988.16 383.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='983.16 380.16 980.16 377.89 980.16 387.55 983.16 389.81 983.16 380.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='978.16 376.38 975.16 374.11 975.16 383.76 978.16 386.03 978.16 376.38'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='973.16 372.6 970.16 370.33 970.16 379.98 973.16 382.25 973.16 372.6'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 385.53 1005.16 383.26 1005.16 392.91 1008.16 395.18 1008.16 385.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 381.74 1000.16 379.48 1000.16 389.13 1003.16 391.4 1003.16 381.74'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 377.96 995.16 375.69 995.16 385.35 998.16 387.62 998.16 377.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 374.18 990.16 371.91 990.16 381.57 993.16 383.83 993.16 374.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 370.4 985.16 368.13 985.16 377.78 988.16 380.05 988.16 370.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='983.16 366.62 980.16 364.35 980.16 374 983.16 376.27 983.16 366.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='978.16 362.84 975.16 360.57 975.16 370.22 978.16 372.49 978.16 362.84'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='973.16 359.05 970.16 356.79 970.16 366.44 973.16 368.71 973.16 359.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 371.98 1005.16 369.71 1005.16 379.37 1008.16 381.64 1008.16 371.98'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 368.2 1000.16 365.93 1000.16 375.59 1003.16 377.85 1003.16 368.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 364.42 995.16 362.15 995.16 371.8 998.16 374.07 998.16 364.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 360.64 990.16 358.37 990.16 368.02 993.16 370.29 993.16 360.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 356.86 985.16 354.59 985.16 364.24 988.16 366.51 988.16 356.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='983.16 353.07 980.16 350.81 980.16 360.46 983.16 362.73 983.16 353.07'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='978.16 349.29 975.16 347.02 975.16 356.68 978.16 358.95 978.16 349.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 358.44 1005.16 356.17 1005.16 365.82 1008.16 368.09 1008.16 358.44'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 354.66 1000.16 352.39 1000.16 362.04 1003.16 364.31 1003.16 354.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 350.88 995.16 348.61 995.16 358.26 998.16 360.53 998.16 350.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 347.09 990.16 344.82 990.16 354.48 993.16 356.75 993.16 347.09'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 343.31 985.16 341.04 985.16 350.7 988.16 352.97 988.16 343.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='983.16 339.53 980.16 337.26 980.16 346.92 983.16 349.18 983.16 339.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='978.16 335.75 975.16 333.48 975.16 343.13 978.16 345.4 978.16 335.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1008.16 344.9 1005.16 342.63 1005.16 352.28 1008.16 354.55 1008.16 344.9'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1003.16 341.11 1000.16 338.84 1000.16 348.5 1003.16 350.77 1003.16 341.11'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='998.16 337.33 995.16 335.06 995.16 344.72 998.16 346.99 998.16 337.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='993.16 333.55 990.16 331.28 990.16 340.94 993.16 343.2 993.16 333.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='988.16 329.77 985.16 327.5 985.16 337.15 988.16 339.42 988.16 329.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1014.48 315.4 1011.48 313.13 1011.48 322.78 1014.48 325.05 1014.48 315.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1009.48 311.61 1006.48 309.35 1006.48 319 1009.48 321.27 1009.48 311.61'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 307.83 1001.48 305.56 1001.48 315.22 1004.48 317.49 1004.48 307.83'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 304.05 996.48 301.78 996.48 311.44 999.48 313.71 999.48 304.05'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 300.27 991.48 298 991.48 307.65 994.48 309.92 994.48 300.27'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 296.49 986.48 294.22 986.48 303.87 989.48 306.14 989.48 296.49'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 292.71 981.48 290.44 981.48 300.09 984.48 302.36 984.48 292.71'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 294.29 1001.48 292.02 1001.48 301.67 1004.48 303.94 1004.48 294.29'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1014.48 328.92 1011.48 326.65 1011.48 331.48 1014.48 333.75 1014.48 328.92'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1009.48 325.14 1006.48 322.87 1006.48 327.7 1009.48 329.97 1009.48 325.14'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 321.36 1001.48 319.09 1001.48 323.92 1004.48 326.18 1004.48 321.36'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 317.58 996.48 315.31 996.48 320.13 999.48 322.4 999.48 317.58'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 313.79 991.48 311.53 991.48 316.35 994.48 318.62 994.48 313.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 310.01 986.48 307.74 986.48 315.31 989.48 314.96 989.48 310.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 306.23 981.48 303.96 981.48 313.62 984.48 315.88 984.48 306.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 290.51 996.48 288.24 996.48 297.89 999.48 300.16 999.48 290.51'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 286.73 991.48 284.46 991.48 294.11 994.48 296.38 994.48 286.73'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 282.94 986.48 280.68 986.48 290.33 989.48 292.6 989.48 282.94'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 279.16 981.48 276.89 981.48 286.55 984.48 288.82 984.48 279.16'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 280.75 1001.48 278.48 1001.48 288.13 1004.48 290.4 1004.48 280.75'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 276.96 996.48 274.7 996.48 284.35 999.48 286.62 999.48 276.96'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 273.18 991.48 270.91 991.48 280.57 994.48 282.84 994.48 273.18'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 269.4 986.48 267.13 986.48 276.79 989.48 279.05 989.48 269.4'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 265.62 981.48 263.35 981.48 273 984.48 275.27 984.48 265.62'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 267.2 1001.48 264.93 1001.48 274.59 1004.48 276.86 1004.48 267.2'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 263.42 996.48 261.15 996.48 270.81 999.48 273.07 999.48 263.42'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 259.64 991.48 257.37 991.48 267.02 994.48 269.29 994.48 259.64'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 255.86 986.48 253.59 986.48 263.24 989.48 265.51 989.48 255.86'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 252.08 981.48 249.81 981.48 259.46 984.48 261.73 984.48 252.08'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 253.66 1001.48 251.39 1001.48 261.04 1004.48 263.31 1004.48 253.66'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 249.88 996.48 247.61 996.48 257.26 999.48 259.53 999.48 249.88'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 246.1 991.48 243.83 991.48 253.48 994.48 255.75 994.48 246.1'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 242.31 986.48 240.05 986.48 249.7 989.48 251.97 989.48 242.31'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 238.53 981.48 236.26 981.48 245.92 984.48 248.19 984.48 238.53'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 240.12 1001.48 237.85 1001.48 247.5 1004.48 249.77 1004.48 240.12'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 236.33 996.48 234.07 996.48 243.72 999.48 245.99 999.48 236.33'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 232.55 991.48 230.28 991.48 239.94 994.48 242.21 994.48 232.55'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 228.77 986.48 226.5 986.48 236.16 989.48 238.42 989.48 228.77'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 224.99 981.48 222.72 981.48 232.37 984.48 234.64 984.48 224.99'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='1004.48 226.57 1001.48 224.3 1001.48 233.96 1004.48 236.23 1004.48 226.57'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='999.48 222.79 996.48 220.52 996.48 230.18 999.48 232.44 999.48 222.79'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='994.48 219.01 991.48 216.74 991.48 226.39 994.48 228.66 994.48 219.01'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='989.48 215.23 986.48 212.96 986.48 222.61 989.48 224.88 989.48 215.23'
                                    fill='#212f3e'
                                />
                                <polygon
                                    onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                    points='984.48 211.45 981.48 209.18 981.48 218.83 984.48 221.1 984.48 211.45'
                                    fill='#212f3e'
                                />
                            </g>
                        </g>
                        <g id='dom7' ref={houseSevenRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.79 508.44 560.95 506.22 560.95 498.68 563.79 500.9 563.79 508.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.79 489.27 560.95 487.05 560.95 494.59 563.79 496.81 563.79 489.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.79 477.64 560.95 475.43 560.95 482.97 563.79 485.19 563.79 477.64'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='558.62 496.94 555.78 494.72 555.78 502.26 558.62 504.48 558.62 496.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='558.62 485.31 555.78 483.1 555.78 490.64 558.62 492.86 558.62 485.31'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='558.62 473.69 555.78 471.47 555.78 479.01 558.62 481.23 558.62 473.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='553.46 492.98 550.62 490.77 550.62 498.31 553.46 500.52 553.46 492.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='553.46 481.36 550.62 479.14 550.62 486.68 553.46 488.9 553.46 481.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='553.46 469.73 550.62 467.51 550.62 475.06 553.46 477.27 553.46 469.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='503.99 443.97 501.15 441.75 501.15 449.29 503.99 451.51 503.99 443.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='503.99 432.34 501.15 430.12 501.15 437.67 503.99 439.88 503.99 432.34'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='503.99 420.72 501.15 418.5 501.15 426.04 503.99 428.26 503.99 420.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='498.83 440.01 495.99 437.79 495.99 445.33 498.83 447.55 498.83 440.01'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='498.83 428.38 495.99 426.17 495.99 433.71 498.83 435.93 498.83 428.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='498.83 416.76 495.99 414.54 495.99 422.08 498.83 424.3 498.83 416.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='493.66 436.05 490.82 433.84 490.82 441.38 493.66 443.6 493.66 436.05'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='493.66 424.43 490.82 422.21 490.82 429.75 493.66 431.97 493.66 424.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='493.66 412.8 490.82 410.59 490.82 418.13 493.66 420.34 493.66 412.8'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='503.99 455.59 501.15 453.37 501.15 460.92 503.99 463.13 503.99 455.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='498.83 451.64 495.99 449.42 495.99 456.96 498.83 459.18 498.83 451.64'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='493.66 447.68 490.82 445.46 490.82 453 493.66 455.22 493.66 447.68'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.14 427.27 645.3 425.05 645.3 432.6 648.14 434.81 648.14 427.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.14 415.65 645.3 413.43 645.3 420.97 648.14 423.19 648.14 415.65'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.14 404.02 645.3 401.8 645.3 409.35 648.14 411.56 648.14 404.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='642.97 423.32 640.13 421.1 640.13 428.64 642.97 430.86 642.97 423.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='642.97 411.69 640.13 409.47 640.13 417.01 642.97 419.23 642.97 411.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='642.97 400.06 640.13 397.85 640.13 405.39 642.97 407.61 642.97 400.06'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='637.81 419.36 634.97 417.14 634.97 424.68 637.81 426.9 637.81 419.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='637.81 407.73 634.97 405.52 634.97 413.06 637.81 415.28 637.81 407.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='637.81 396.11 634.97 393.89 634.97 401.43 637.81 403.65 637.81 396.11'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.14 438.9 645.3 436.68 645.3 444.22 646.51 445.17 648.14 444.93 648.14 438.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='653.31 431.15 650.47 428.93 650.47 436.47 653.31 438.69 653.31 431.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='653.31 419.52 650.47 417.31 650.47 424.85 653.31 427.06 653.31 419.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='653.31 407.9 650.47 405.68 650.47 413.22 653.31 415.44 653.31 407.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='653.31 442.77 650.47 440.56 650.47 444.41 651 444.21 653.31 446.01 653.31 442.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='642.97 434.94 640.13 432.72 640.13 440.27 642.97 442.48 642.97 434.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='637.81 430.98 634.97 428.77 634.97 436.31 637.81 438.53 637.81 430.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.55 415.4 629.71 413.18 629.71 420.72 632.55 422.94 632.55 415.4'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.55 403.77 629.71 401.55 629.71 409.1 632.55 411.31 632.55 403.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.55 392.15 629.71 389.93 629.71 397.47 632.55 399.69 632.55 392.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='627.38 411.44 624.54 409.22 624.54 416.76 627.38 418.98 627.38 411.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='627.38 399.81 624.54 397.6 624.54 405.14 627.38 407.36 627.38 399.81'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='627.38 388.19 624.54 385.97 624.54 393.51 627.38 395.73 627.38 388.19'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='622.22 407.48 619.38 405.27 619.38 412.81 622.22 415.03 622.22 407.48'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='622.22 395.86 619.38 393.64 619.38 401.18 622.22 403.4 622.22 395.86'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='622.22 384.23 619.38 382.02 619.38 389.56 622.22 391.77 622.22 384.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.55 427.02 629.71 424.8 629.71 432.35 632.55 434.56 632.55 427.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='627.38 423.07 624.54 420.85 624.54 428.39 627.38 430.61 627.38 423.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='622.22 419.11 619.38 416.89 619.38 424.43 622.22 426.65 622.22 419.11'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='616.96 403.52 614.12 401.3 614.12 408.85 616.96 411.06 616.96 403.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='616.96 391.9 614.12 389.68 614.12 397.22 616.96 399.44 616.96 391.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='616.96 380.27 614.12 378.05 614.12 385.59 616.96 387.81 616.96 380.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='616.96 415.15 614.12 412.93 614.12 420.47 616.96 422.69 616.96 415.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='642.64 445.9 640.13 443.94 640.13 446.4 642.64 445.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='637.81 442.2 634.97 439.99 634.97 447.38 637.81 446.82 637.81 442.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.55 438.24 629.71 436.02 629.71 443.56 632.55 445.78 632.55 438.24'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='690.47 443.7 687.63 441.48 687.63 449.02 690.47 451.24 690.47 443.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='690.47 432.07 687.63 429.86 687.63 437.4 690.47 439.61 690.47 432.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='685.3 439.74 682.46 437.52 682.46 445.07 685.3 447.28 685.3 439.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='685.3 428.12 682.46 425.9 682.46 433.44 685.3 435.66 685.3 428.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='696.06 447.84 693.22 445.62 693.22 453.16 696.06 455.38 696.06 447.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='696.06 436.21 693.22 434 693.22 441.54 696.06 443.76 696.06 436.21'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='680.04 435.78 677.21 433.56 677.21 441.1 680.04 443.32 680.04 435.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='680.04 424.15 677.21 421.94 677.21 429.48 680.04 431.69 680.04 424.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='627.38 434.28 624.54 432.07 624.54 439.61 627.38 441.83 627.38 434.28'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='622.22 430.33 619.38 428.11 619.38 435.65 622.22 437.87 622.22 430.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='616.96 426.36 614.12 424.15 614.12 431.69 616.96 433.91 616.96 426.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='602.68 363.04 599.85 360.83 599.85 367.32 602.68 366.79 602.68 363.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='597.42 382.33 594.59 380.11 594.59 387.66 597.42 389.87 597.42 382.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='597.42 370.71 594.59 368.49 594.59 376.03 597.42 378.25 597.42 370.71'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='597.42 359.08 594.59 356.86 594.59 364.4 597.42 366.62 597.42 359.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='474.33 418.61 472.91 417.54 472.91 425.08 474.33 426.15 474.33 418.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='474.33 406.98 472.91 405.91 472.91 413.46 474.33 414.53 474.33 406.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='474.33 395.36 472.91 394.29 472.91 401.83 474.33 402.9 474.33 395.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='470.58 415.8 467.75 413.58 467.75 421.12 470.58 423.34 470.58 415.8'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='470.58 404.17 467.75 401.96 467.75 409.5 470.58 411.72 470.58 404.17'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='470.58 392.55 467.75 390.33 467.75 397.87 470.58 400.09 470.58 392.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='465.42 411.84 462.58 409.63 462.58 417.17 465.42 419.39 465.42 411.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='465.42 400.22 462.58 398 462.58 405.54 465.42 407.76 465.42 400.22'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='465.42 388.59 462.58 386.38 462.58 393.92 465.42 396.13 465.42 388.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='474.33 430.24 472.91 429.16 472.91 436.71 474.33 437.78 474.33 430.24'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='470.58 427.43 467.75 425.21 467.75 432.75 470.58 434.97 470.58 427.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='465.42 423.47 462.58 421.25 462.58 428.79 465.42 431.01 465.42 423.47'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='459.72 407.9 456.89 405.68 456.89 413.22 459.72 415.44 459.72 407.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='459.72 396.27 456.89 394.06 456.89 401.6 459.72 403.82 459.72 396.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='459.72 384.65 456.89 382.43 456.89 389.97 459.72 392.19 459.72 384.65'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='454.56 403.94 451.72 401.73 451.72 409.27 454.56 411.48 454.56 403.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='454.56 392.32 451.72 390.1 451.72 397.64 454.56 399.86 454.56 392.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='454.56 380.69 451.72 378.47 451.72 386.02 454.56 388.23 454.56 380.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='449.39 399.99 446.56 397.77 446.56 405.31 449.39 407.53 449.39 399.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='449.39 388.36 446.56 386.14 446.56 393.69 449.39 395.9 449.39 388.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='449.39 376.74 446.56 374.52 446.56 382.06 449.39 384.28 449.39 376.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='459.72 419.52 456.89 417.31 456.89 424.85 459.72 427.07 459.72 419.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='454.56 415.57 451.72 413.35 451.72 420.89 454.56 423.11 454.56 415.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='449.39 411.61 446.56 409.39 446.56 416.94 449.39 419.15 449.39 411.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='443.7 396.04 440.86 393.82 440.86 401.37 443.7 403.58 443.7 396.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='443.7 384.42 440.86 382.2 440.86 389.74 443.7 391.96 443.7 384.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='443.7 372.79 440.86 370.57 440.86 378.12 443.7 380.33 443.7 372.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='443.7 407.67 440.86 405.45 440.86 412.99 443.7 415.21 443.7 407.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='534.91 461.99 532.07 459.77 532.07 467.31 534.91 469.53 534.91 461.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='534.91 450.36 532.07 448.15 532.07 455.69 534.91 457.9 534.91 450.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='534.91 438.74 532.07 436.52 532.07 444.06 534.91 446.28 534.91 438.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='529.74 458.03 526.91 455.81 526.91 463.36 529.74 465.57 529.74 458.03'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='529.74 446.41 526.91 444.19 526.91 451.73 529.74 453.95 529.74 446.41'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='529.74 434.78 526.91 432.56 526.91 440.11 529.74 442.32 529.74 434.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='534.91 484.78 532.07 482.57 532.07 490.11 534.91 492.33 534.91 484.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='534.91 473.16 532.07 470.94 532.07 478.48 534.91 480.7 534.91 473.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='529.74 480.83 526.91 478.61 526.91 486.15 529.74 488.37 529.74 480.83'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='529.74 469.2 526.91 466.98 526.91 474.53 529.74 476.74 529.74 469.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='540.68 468.34 537.84 466.12 537.84 473.66 540.68 475.88 540.68 468.34'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='540.68 456.72 537.84 454.5 537.84 462.04 540.68 464.26 540.68 456.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='540.68 479.51 537.84 477.29 537.84 484.84 540.68 487.05 540.68 479.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='520.37 453.15 517.53 450.94 517.53 458.48 520.37 460.69 520.37 453.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='520.37 441.53 517.53 439.31 517.53 446.85 520.37 449.07 520.37 441.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='520.37 464.32 517.53 462.11 517.53 469.65 520.37 471.86 520.37 464.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='515.34 449.16 512.51 446.94 512.51 454.48 515.34 456.7 515.34 449.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='515.34 437.53 512.51 435.32 512.51 442.86 515.34 445.08 515.34 437.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='515.34 460.33 512.51 458.11 512.51 465.65 515.34 467.87 515.34 460.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='668.38 430.38 665.55 428.17 665.55 435.71 668.38 437.92 668.38 430.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='668.38 418.76 665.55 416.54 665.55 424.08 668.38 426.3 668.38 418.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='668.38 441.55 665.55 439.34 665.55 446.4 668.38 445.78 668.38 441.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='587.2 380.91 584.36 378.7 584.36 386.24 584.81 386.59 587.2 386.2 587.2 380.91'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='587.2 369.29 584.36 367.07 584.36 374.61 587.2 376.83 587.2 369.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='587.2 357.66 584.36 355.45 584.36 362.99 587.2 365.21 587.2 357.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='592.67 385.12 589.83 382.91 589.83 385.63 591.39 385.34 592.67 386.34 592.67 385.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='592.67 373.5 589.83 371.28 589.83 378.82 592.67 381.04 592.67 373.5'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='592.67 361.87 589.83 359.66 589.83 367.2 592.67 369.42 592.67 361.87'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='581.94 376.95 579.11 374.73 579.11 382.28 581.94 384.49 581.94 376.95'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='581.94 365.33 579.11 363.11 579.11 370.65 581.94 372.87 581.94 365.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='581.94 353.7 579.11 351.48 579.11 359.03 581.94 361.24 581.94 353.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='442.09 478.49 437.7 479.32 437.7 485.48 442.09 484.65 442.09 478.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='450.55 476.84 446.15 477.67 446.15 483.84 450.55 483.01 450.55 476.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='582.53 477.1 576.21 478.29 576.21 485.81 582.53 484.62 582.53 477.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='590.39 475.58 586 476.41 586 483.93 590.39 483.1 590.39 475.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='598.85 473.94 594.46 474.77 594.46 482.28 598.85 481.45 598.85 473.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='607.3 472.29 602.91 473.12 602.91 480.63 607.3 479.8 607.3 472.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='582.53 489.01 576.21 490.2 576.21 497.72 582.53 496.53 582.53 489.01'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='590.39 487.49 586 488.32 586 495.83 590.39 495 590.39 487.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='598.85 485.84 594.46 486.67 594.46 494.19 598.85 493.36 598.85 485.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='607.3 484.2 602.91 485.03 602.91 492.54 607.3 491.71 607.3 484.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='582.53 500.92 576.21 502.11 576.21 509.63 582.53 508.43 582.53 500.92'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='590.39 499.4 586 500.23 586 507.74 590.39 506.91 590.39 499.4'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='598.85 497.75 594.46 498.58 594.46 506.1 598.85 505.27 598.85 497.75'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='607.3 496.1 602.91 496.93 602.91 504.45 607.3 503.62 607.3 496.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.51 464.42 644.12 465.25 644.12 472.77 648.51 471.94 648.51 464.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='656.97 462.78 652.58 463.61 652.58 471.12 656.97 470.29 656.97 462.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='665.43 461.13 661.03 461.96 661.03 469.47 665.43 468.64 665.43 461.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.51 476.33 644.12 477.16 644.12 484.68 648.51 483.85 648.51 476.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='656.97 474.68 652.58 475.51 652.58 483.03 656.97 482.2 656.97 474.68'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='665.43 473.04 661.03 473.87 661.03 481.38 665.43 480.55 665.43 473.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.51 488.24 644.12 489.07 644.12 496.58 648.51 495.75 648.51 488.24'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='656.97 486.59 652.58 487.42 652.58 494.94 656.97 494.11 656.97 486.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.97 478.89 628.57 479.72 628.57 487.24 632.97 486.41 632.97 478.89'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='639.55 477.71 635.16 478.54 635.16 486.06 639.55 485.23 639.55 477.71'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='632.97 490.8 628.57 491.63 628.57 499.15 632.97 498.32 632.97 490.8'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='639.55 489.62 635.16 490.45 635.16 497.97 639.55 497.14 639.55 489.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='665.43 484.95 661.03 485.78 661.03 493.29 665.43 492.46 665.43 484.95'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='708.64 438.18 704.25 439.01 704.25 446.53 708.64 445.7 708.64 438.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='717.09 436.53 712.7 437.36 712.7 444.88 717.09 444.05 717.09 436.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='725.55 434.89 721.16 435.72 721.16 443.23 725.55 442.4 725.55 434.89'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='708.64 450.09 704.25 450.92 704.25 458.43 708.64 457.6 708.64 450.09'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='717.09 448.44 712.7 449.27 712.7 456.79 717.09 455.96 717.09 448.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='725.55 446.79 721.16 447.62 721.16 455.14 725.55 454.31 725.55 446.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='708.64 462 704.25 462.83 704.25 470.34 708.64 469.51 708.64 462'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='717.09 460.35 712.7 461.18 712.7 468.69 717.09 467.86 717.09 460.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='725.55 458.7 721.16 459.53 721.16 467.05 725.55 466.22 725.55 458.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='734 433.21 729.61 434.04 729.61 441.55 734 440.72 734 433.21'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='734 445.12 729.61 445.95 729.61 453.46 734 452.63 734 445.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='734 457.02 729.61 457.85 729.61 465.37 734 464.54 734 457.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='708.64 473.9 704.25 474.73 704.25 482.25 708.64 481.42 708.64 473.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='717.09 472.26 712.7 473.09 712.7 480.6 717.09 479.77 717.09 472.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='725.55 470.61 721.16 471.44 721.16 478.95 725.55 478.12 725.55 470.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='734 468.93 729.61 469.76 729.61 477.28 734 476.45 734 468.93'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='648.51 499.88 644.12 500.71 644.12 508.22 648.51 507.39 648.51 499.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='656.97 498.23 652.58 499.06 652.58 506.58 656.97 505.75 656.97 498.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='613.39 483.11 611.35 483.5 611.35 491.02 613.39 490.62 613.39 483.11'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='621.85 481.46 617.46 482.29 617.46 489.81 621.85 488.98 621.85 481.46'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='613.39 495.02 611.35 495.41 611.35 502.93 613.39 502.53 613.39 495.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='621.85 493.37 617.46 494.2 617.46 501.71 621.85 500.88 621.85 493.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='613.39 506.66 609 507.49 609 515 613.39 514.17 613.39 506.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='621.85 505.01 617.46 505.84 617.46 513.35 621.85 512.52 621.85 505.01'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='665.43 496.58 661.03 497.41 661.03 504.93 665.43 504.1 665.43 496.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='588.2 407.9 583.81 408.73 583.81 416.25 588.2 415.42 588.2 407.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='596.65 406.25 592.26 407.08 592.26 414.6 596.65 413.77 596.65 406.25'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='605.11 404.61 600.72 405.44 600.72 412.95 605.11 412.12 605.11 404.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='588.2 419.81 583.81 420.64 583.81 428.15 588.2 427.32 588.2 419.81'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='596.65 418.16 592.26 418.99 592.26 426.51 596.65 425.68 596.65 418.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='605.11 416.51 600.72 417.34 600.72 424.86 605.11 424.03 605.11 416.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='588.2 431.72 583.81 432.55 583.81 437.15 586.89 439.48 588.2 439.23 588.2 431.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='596.65 430.07 592.26 430.9 592.26 438.41 596.65 437.58 596.65 430.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='605.11 428.42 600.72 429.25 600.72 436.77 605.11 435.94 605.11 428.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='596.65 441.71 592.26 442.54 592.26 450.05 596.65 449.22 596.65 441.71'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='605.11 440.06 600.72 440.89 600.72 448.41 605.11 447.58 605.11 440.06'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='596.65 453.35 592.94 454.05 596.65 456.94 596.65 453.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='605.11 451.7 600.72 452.53 600.72 458.65 605.11 457.82 605.11 451.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='693.91 467.72 689.51 468.55 689.51 476.07 693.91 475.24 693.91 467.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='693.91 479.63 689.51 480.46 689.51 487.97 693.91 487.14 693.91 479.63'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='693.91 491.27 689.51 492.1 689.51 499.61 693.91 498.78 693.91 491.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='676.71 468.8 672.32 469.63 672.32 477.14 676.71 476.31 676.71 468.8'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='678.48 480.35 672.32 481.53 672.32 489.05 678.48 487.86 678.48 480.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='685.17 467.15 679.01 468.33 679.01 475.85 685.17 474.66 685.17 467.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='685.17 479.06 680.77 479.89 680.77 487.4 685.17 486.57 685.17 479.06'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='527.78 354.04 523.38 354.87 523.38 362.38 527.78 361.55 527.78 354.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='536.23 352.39 531.84 353.22 531.84 360.73 536.23 359.9 536.23 352.39'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='544.69 350.74 540.3 351.57 540.3 359.09 544.69 358.26 544.69 350.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='527.78 365.94 523.38 366.77 523.38 374.29 527.78 373.46 527.78 365.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='536.23 364.3 531.84 365.13 531.84 372.64 536.23 371.81 536.23 364.3'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='544.69 362.65 540.3 363.48 540.3 371 544.69 370.17 544.69 362.65'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='527.78 378.14 523.38 378.97 523.38 385.33 524.66 386.24 527.78 385.65 527.78 378.14'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='536.23 376.49 531.84 377.32 531.84 384.84 536.23 384.01 536.23 376.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='544.69 374.84 540.3 375.67 540.3 383.19 544.69 382.36 544.69 374.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='536.23 388.4 531.84 389.23 531.84 393.99 534.75 396.19 536.23 395.91 536.23 388.4'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='544.69 386.75 540.3 387.58 540.3 395.1 544.69 394.27 544.69 386.75'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='555.41 355.26 551.02 356.09 551.02 363.61 555.41 362.78 555.41 355.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.86 353.62 559.47 354.45 559.47 361.96 563.86 361.13 563.86 353.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='572.32 351.97 567.93 352.8 567.93 360.31 572.32 359.48 572.32 351.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='555.41 367.17 551.02 368 551.02 375.52 555.41 374.69 555.41 367.17'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.86 365.52 559.47 366.35 559.47 373.87 563.86 373.04 563.86 365.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='572.32 363.88 567.93 364.71 567.93 372.22 572.32 371.39 572.32 363.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='555.41 379.06 551.02 379.89 551.02 387.41 555.41 386.58 555.41 379.06'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.86 377.41 559.47 378.24 559.47 385.76 563.86 384.93 563.86 377.41'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='572.32 375.77 567.93 376.6 567.93 384.11 572.32 383.28 572.32 375.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='555.41 390.97 551.02 391.8 551.02 397.62 555.41 396.79 555.41 390.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='563.86 390.59 563.86 389.32 559.47 390.15 559.47 395.97 562.52 395.4 562.51 390.97 563.86 390.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='572.32 387.67 567.93 388.5 567.93 389.94 572.32 389.11 572.32 387.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='498.64 364.58 494.25 365.41 494.25 368.03 496.77 369.82 498.64 369.49 498.64 364.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='507.1 362.94 502.71 363.77 502.71 368.75 504.9 368.28 507.1 370.15 507.1 362.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='515.55 361.29 511.16 362.12 511.16 369.63 515.55 368.8 515.55 361.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='515.55 373.2 512.1 373.85 515.55 376.49 515.55 373.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='556.7 327.76 553.86 325.54 553.86 333.08 554.75 333.77 556.7 333.4 556.7 327.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='550.4 334.6 548.61 333.2 548.61 334.94 550.4 334.6'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='551.44 323.79 548.61 321.58 548.61 329.12 551.44 331.33 551.44 323.79'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom6' ref={houseSixRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='374.87 439.94 372.68 438.23 372.68 440.41 374.87 439.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='375.52 428.82 372.68 426.61 372.68 434.15 375.52 436.36 375.52 428.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='370.5 436.46 367.66 434.24 367.66 439.07 370.5 441.28 370.5 436.46'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='370.5 424.83 367.66 422.61 367.66 430.15 370.5 432.37 370.5 424.83'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='390.21 438.23 388.65 437.01 388.65 438.51 390.21 438.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='386.46 435.23 383.62 433.01 383.62 439.53 386.46 438.86 386.46 435.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.75 427.52 358.91 425.3 358.91 432.85 361.75 435.06 361.75 427.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.75 415.9 358.91 413.68 358.91 421.22 361.75 423.44 361.75 415.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.27 438.32 358.91 436.47 358.91 438.78 361.27 438.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='171.65 504.26 167.26 505.09 167.26 497.58 171.65 496.75 171.65 504.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='181.45 494.86 177.06 495.69 177.06 503.21 181.45 502.38 181.45 494.86'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='191.25 492.98 186.85 493.81 186.85 501.33 191.25 500.5 191.25 492.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='171.65 508.55 167.26 509.38 167.26 516.9 171.65 516.07 171.65 508.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='181.45 506.67 177.06 507.5 177.06 515.02 181.45 514.19 181.45 506.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='191.25 504.79 186.85 505.62 186.85 513.13 191.25 512.3 191.25 504.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='171.65 520.36 167.26 521.19 167.26 527.94 171.65 527.11 171.65 520.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='181.45 518.48 177.06 519.31 177.06 526.05 181.45 525.22 181.45 518.48'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='191.25 516.6 186.85 517.43 186.85 524.17 191.25 523.34 191.25 516.6'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='201.94 495.46 197.55 496.29 197.55 503.81 201.94 502.98 201.94 495.46'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='211.74 493.58 207.35 494.41 207.35 501.93 211.74 501.1 211.74 493.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='221.54 491.7 217.15 492.53 217.15 500.04 221.54 499.21 221.54 491.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='201.94 507.27 197.55 508.1 197.55 515.62 201.94 514.79 201.94 507.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='211.74 505.39 207.35 506.22 207.35 513.73 211.74 512.9 211.74 505.39'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='221.54 503.51 217.15 504.34 217.15 511.85 221.54 511.02 221.54 503.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='260.21 483.74 255.82 484.57 255.82 492.09 260.21 491.26 260.21 483.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='270.01 481.86 265.62 482.69 265.62 490.2 270.01 489.37 270.01 481.86'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='279.8 479.98 275.41 480.81 275.41 488.32 279.8 487.49 279.8 479.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='260.21 495.55 255.82 496.38 255.82 503.89 260.21 503.06 260.21 495.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='270.01 493.67 265.62 494.5 265.62 502.01 270.01 501.18 270.01 493.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='279.8 491.79 275.41 492.62 275.41 500.13 279.8 499.3 279.8 491.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='260.21 507.36 255.82 508.19 255.82 515.7 260.21 514.87 260.21 507.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='270.01 505.48 265.62 506.31 265.62 513.82 270.01 512.99 270.01 505.48'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='279.8 503.59 275.41 504.42 275.41 511.94 279.8 511.11 279.8 503.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='296.33 471.08 290 472.27 290 479.79 296.33 478.6 296.33 471.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='304.19 469.56 299.8 470.39 299.8 477.9 304.19 477.07 304.19 469.56'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='314.59 467.49 308.27 468.68 308.27 476.19 314.59 475 314.59 467.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='296.33 482.89 290 484.08 290 491.59 296.33 490.4 296.33 482.89'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='304.19 481.37 299.8 482.2 299.8 489.71 304.19 488.88 304.19 481.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='314.59 479.3 308.27 480.49 308.27 488 314.59 486.81 314.59 479.3'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='296.33 494.7 290 495.89 290 503.4 296.33 502.21 296.33 494.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='304.19 493.17 299.8 494 299.8 501.52 304.19 500.69 304.19 493.17'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='314.59 491.1 308.27 492.29 308.27 499.81 314.59 498.62 314.59 491.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='322.46 465.97 318.07 466.8 318.07 474.31 322.46 473.48 322.46 465.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='425.77 445.93 419.45 447.12 419.45 454.64 425.77 453.45 425.77 445.93'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='433.63 444.41 429.24 445.24 429.24 452.76 433.63 451.93 433.63 444.41'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='442.09 442.77 437.7 443.6 437.7 451.11 442.09 450.28 442.09 442.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='450.55 441.12 446.15 441.95 446.15 449.46 450.55 448.63 450.55 441.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='425.77 457.84 419.45 459.03 419.45 466.55 425.77 465.36 425.77 457.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='433.63 456.32 429.24 457.15 429.24 464.66 433.63 463.83 433.63 456.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='442.09 454.67 437.7 455.5 437.7 463.02 442.09 462.19 442.09 454.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='450.55 453.03 446.15 453.86 446.15 461.37 450.55 460.54 450.55 453.03'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='425.77 469.75 419.45 470.94 419.45 478.46 425.77 477.26 425.77 469.75'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='433.63 468.23 429.24 469.06 429.24 476.57 433.63 475.74 433.63 468.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='442.09 466.58 437.7 467.41 437.7 474.93 442.09 474.1 442.09 466.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='450.55 464.93 446.15 465.76 446.15 473.28 450.55 472.45 450.55 464.93'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='425.77 481.66 419.45 482.85 419.45 489.01 425.77 487.82 425.77 481.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='433.63 480.14 429.24 480.97 429.24 487.13 433.63 486.3 433.63 480.14'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='322.46 477.77 318.07 478.6 318.07 486.12 322.46 485.29 322.46 477.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='322.46 489.58 318.07 490.41 318.07 497.93 322.46 497.1 322.46 489.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='296.33 506.25 290 507.44 290 514.07 296.33 512.88 296.33 506.25'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='304.19 504.73 299.8 505.56 299.8 512.19 304.19 511.36 304.19 504.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='314.59 502.65 308.27 503.85 308.27 510.48 314.59 509.29 314.59 502.65'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='322.46 501.13 318.07 501.96 318.07 508.6 322.46 507.77 322.46 501.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='240.82 480.88 233.22 482.28 233.22 489.79 240.82 488.39 240.82 480.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='250.61 478.99 246.22 479.82 246.22 487.34 250.61 486.51 250.61 478.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='237.61 493.26 233.22 494.09 233.22 501.6 237.61 500.77 237.61 493.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='250.61 490.8 243.01 492.21 243.01 499.72 250.61 498.32 250.61 490.8'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='237.61 516.96 233.22 517.79 233.22 524.05 237.61 523.22 237.61 516.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='250.61 514.5 243.01 515.91 243.01 522.17 250.61 520.77 250.61 514.5'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='240.82 504.49 233.22 505.9 233.22 513.41 240.82 512.01 240.82 504.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='250.61 502.61 246.22 503.44 246.22 510.95 250.61 510.12 250.61 502.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.96 462.08 357.57 462.91 357.57 470.43 361.96 469.6 361.96 462.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='370.55 460.48 366.16 461.31 366.16 468.82 370.55 467.99 370.55 460.48'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='378.95 458.92 374.56 459.75 374.56 467.26 378.95 466.43 378.95 458.92'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='390.09 458.72 386.46 459.38 386.46 466.89 390.09 466.23 390.09 458.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='396.67 457.5 393.05 458.16 393.05 465.67 396.67 465.01 396.67 457.5'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='390.09 469.88 386.46 470.55 386.46 478.06 390.09 477.4 390.09 469.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='396.67 468.66 393.05 469.33 393.05 476.84 396.67 476.18 396.67 468.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='390.09 481.05 386.46 481.71 386.46 489.23 390.09 488.57 390.09 481.05'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='396.67 479.83 393.05 480.49 393.05 488.01 396.67 487.35 396.67 479.83'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='403.42 455.24 399.79 455.9 399.79 463.41 403.42 462.75 403.42 455.24'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='410 454.02 406.37 454.68 406.37 462.19 410 461.53 410 454.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='403.42 466.41 399.79 467.07 399.79 474.58 403.42 473.92 403.42 466.41'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='410 465.19 406.37 465.85 406.37 473.36 410 472.7 410 465.19'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='403.42 477.57 399.79 478.24 399.79 485.75 403.42 485.09 403.42 477.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='410 476.35 406.37 477.02 406.37 484.53 410 483.87 410 476.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='346.18 467.59 342.55 468.25 342.55 475.76 346.18 475.1 346.18 467.59'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='352.76 466.37 349.13 467.03 349.13 474.54 352.76 473.88 352.76 466.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='346.18 478.75 342.55 479.42 342.55 486.93 346.18 486.27 346.18 478.75'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='352.76 477.53 349.13 478.2 349.13 485.71 352.76 485.05 352.76 477.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='346.18 489.92 342.55 490.58 342.55 498.1 346.18 497.44 346.18 489.92'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='352.76 488.7 349.13 489.36 349.13 496.88 352.76 496.22 352.76 488.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='328.34 469.88 326.31 470.33 326.31 477.85 328.34 477.4 328.34 469.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='334.92 468.66 331.29 469.33 331.29 476.84 334.92 476.18 334.92 468.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='328.34 481.05 326.31 481.5 326.31 489.01 328.34 488.57 328.34 481.05'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='334.92 479.83 331.29 480.49 331.29 488.01 334.92 487.35 334.92 479.83'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='328.34 492.22 326.31 492.67 326.31 500.18 328.34 499.74 328.34 492.22'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='334.92 491 331.29 491.66 331.29 499.18 334.92 498.51 334.92 491'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.96 473.89 357.57 474.72 357.57 482.23 361.96 481.4 361.96 473.89'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='370.55 472.29 366.16 473.12 366.16 480.63 370.55 479.8 370.55 472.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='378.95 470.72 374.56 471.55 374.56 479.07 378.95 478.24 378.95 470.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='361.96 485.7 357.57 486.53 357.57 494.04 361.96 493.21 361.96 485.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='370.55 484.09 366.16 484.92 366.16 492.44 370.55 491.61 370.55 484.09'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='378.95 482.53 374.56 483.36 374.56 490.88 378.95 490.05 378.95 482.53'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom5' ref={houseFiveRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='970.47 482.99 966.07 483.82 966.07 491.33 970.47 490.5 970.47 482.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='978.92 481.34 974.53 482.17 974.53 489.69 978.92 488.86 978.92 481.34'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='970.47 494.9 966.07 495.73 966.07 503.24 970.47 502.41 970.47 494.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='978.92 493.25 974.53 494.08 974.53 501.6 978.92 500.77 978.92 493.25'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='970.47 506.81 966.07 507.64 966.07 516.44 970.47 515.61 970.47 506.81'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='978.92 505.16 974.53 505.99 974.53 514.8 978.92 513.97 978.92 505.16'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom4' ref={houseFourRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='990.87 474.25 987.65 474.86 987.65 481.37 990.87 480.76 990.87 474.25'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='997.06 473.05 993.84 473.65 993.84 480.16 997.06 479.55 997.06 473.05'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='1003.25 471.84 1000.04 472.45 1000.04 478.95 1003.25 478.34 1003.25 471.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='990.87 483.97 987.65 484.58 987.65 491.09 990.87 490.48 990.87 483.97'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='997.06 482.77 993.84 483.37 993.84 489.88 997.06 489.27 997.06 482.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='1003.25 481.56 1000.04 482.17 1000.04 488.67 1003.25 488.06 1003.25 481.56'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='990.87 493.69 987.65 494.3 987.65 500.81 990.87 500.2 990.87 493.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='997.06 492.49 993.84 493.09 993.84 499.6 997.06 498.99 997.06 492.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='1003.25 491.28 1000.04 491.89 1000.04 498.39 1003.25 497.78 1003.25 491.28'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom3' ref={houseThreeRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='948.85 502.01 945.63 502.62 945.63 509.13 948.85 508.52 948.85 502.01'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='948.85 482.57 945.63 483.18 945.63 489.69 948.85 489.08 948.85 482.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='955.04 481.37 951.82 481.97 951.82 488.48 955.04 487.87 955.04 481.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='961.23 480.16 958.02 480.77 958.02 487.27 961.23 486.66 961.23 480.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='948.85 492.29 945.63 492.9 945.63 499.41 948.85 498.8 948.85 492.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='955.04 491.09 951.82 491.69 951.82 498.2 955.04 497.59 955.04 491.09'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='961.23 489.88 958.02 490.49 958.02 496.99 961.23 496.38 961.23 489.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='955.04 500.81 951.82 501.41 951.82 507.92 955.04 507.31 955.04 500.81'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='961.23 499.6 958.02 500.21 958.02 506.71 961.23 506.1 961.23 499.6'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom2' ref={houseTwoRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='716.56 347.13 713.72 344.92 713.72 352.46 714.84 353.33 716.56 352.99 716.56 347.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='716.56 335.51 713.72 333.29 713.72 340.83 716.56 343.05 716.56 335.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='710.47 354.08 708.56 352.58 708.56 354.46 710.47 354.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='711.4 343.18 708.56 340.96 708.56 348.5 711.4 350.72 711.4 343.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='711.4 331.55 708.56 329.33 708.56 336.88 711.4 339.09 711.4 331.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='721.73 351.01 718.89 348.79 718.89 352.51 721.73 354.73 721.73 351.01'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='721.73 339.38 718.89 337.17 718.89 344.71 721.73 346.93 721.73 339.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='687.36 313.69 684.52 311.47 684.52 317.62 687.36 317.07 687.36 313.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='682.2 309.73 679.36 307.51 679.36 315.05 682.2 317.27 682.2 309.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='676.94 317.39 674.1 315.18 674.1 319.67 676.94 319.03 676.94 317.39'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='676.94 305.77 674.1 303.55 674.1 311.09 676.94 313.31 676.94 305.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='754.26 377.16 751.42 374.94 751.42 382.48 754.26 384.7 754.26 377.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='754.26 365.53 751.42 363.31 751.42 370.86 754.26 373.07 754.26 365.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='754.26 353.91 751.42 351.69 751.42 359.23 754.26 361.45 754.26 353.91'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='754.26 388.78 751.42 386.56 751.42 394.11 754.26 396.32 754.26 388.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='749 373.19 746.16 370.98 746.16 378.52 749 380.74 749 373.19'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='749 361.57 746.16 359.35 746.16 366.89 749 369.11 749 361.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='749 384.82 746.16 382.6 746.16 390.14 749 392.36 749 384.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='754.26 400 751.42 397.78 751.42 405.32 754.26 407.54 754.26 400'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='749 396.04 746.16 393.82 746.16 401.36 749 403.58 749 396.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='730.75 350.71 728.57 348.88 728.57 356.42 730.75 358.25 730.75 350.71'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='731.41 339.47 728.57 337.25 728.57 344.79 730.75 346.5 730.75 342.05 731.41 341.95 731.41 339.47'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='726.15 347.13 723.31 344.92 723.31 352.46 726.15 354.67 726.15 347.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='726.15 335.51 723.31 333.29 723.31 340.83 726.15 343.05 726.15 335.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='765.36 385.33 762.52 383.11 762.52 390.65 765.36 392.87 765.36 385.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='765.36 396.96 762.52 394.74 762.52 402.28 765.36 404.5 765.36 396.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='760.1 381.37 757.26 379.15 757.26 386.69 760.1 388.91 760.1 381.37'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='760.1 369.74 757.26 367.52 757.26 375.07 760.1 377.28 760.1 369.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='760.1 358.12 757.26 355.9 757.26 363.44 760.1 365.66 760.1 358.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='760.1 392.99 757.26 390.78 757.26 398.32 760.1 400.53 760.1 392.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='764.23 407.29 762.52 405.96 762.52 407.5 764.23 407.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='760.1 404.21 757.26 401.99 757.26 408.41 760.1 408.05 760.1 404.21'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='791.25 396.96 788.41 394.74 788.41 402.28 790.12 403.62 790.2 401.58 791.25 401.38 791.25 396.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='785.99 404.62 783.15 402.4 783.15 407.37 783.83 407.91 785.99 407.5 785.99 404.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='785.99 392.99 783.15 390.78 783.15 398.32 785.99 400.53 785.99 392.99'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='776.11 426.83 771.72 427.66 771.72 435.17 776.11 434.34 776.11 426.83'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='784.57 425.18 780.17 426.01 780.17 433.53 784.57 432.7 784.57 425.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='793.02 423.53 788.63 424.36 788.63 431.88 793.02 431.05 793.02 423.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='776.11 438.74 771.72 439.57 771.72 447.08 776.11 446.25 776.11 438.74'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='784.57 437.09 780.17 437.92 780.17 445.43 784.57 444.6 784.57 437.09'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='793.02 435.44 788.63 436.27 788.63 443.79 793.02 442.96 793.02 435.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='776.11 450.64 771.72 451.47 771.72 458.99 776.11 458.16 776.11 450.64'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='784.57 449 780.17 449.83 780.17 457.34 784.57 456.51 784.57 449'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='793.02 447.35 788.63 448.18 788.63 455.69 793.02 454.86 793.02 447.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='776.11 462.55 771.72 463.38 771.72 470.9 776.11 470.07 776.11 462.55'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='784.57 460.9 780.17 461.73 780.17 469.25 784.57 468.42 784.57 460.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='793.02 459.26 788.63 460.09 788.63 467.6 793.02 466.77 793.02 459.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='776.11 474.46 771.72 475.29 771.72 484.06 776.11 483.23 776.11 474.46'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='784.57 472.81 780.17 473.64 780.17 482.41 784.57 481.58 784.57 472.81'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='793.02 471.17 788.63 472 788.63 480.76 793.02 479.93 793.02 471.17'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='801.48 469.49 797.08 470.32 797.08 479.09 801.48 478.26 801.48 469.49'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='655.1 337.18 650.71 338.01 650.71 345.52 655.1 344.69 655.1 337.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='663.56 335.53 659.17 336.36 659.17 343.87 663.56 343.04 663.56 335.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='672.01 333.88 667.62 334.71 667.62 342.23 672.01 341.4 672.01 333.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='655.1 349.08 650.71 349.91 650.71 357.43 655.1 356.6 655.1 349.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='663.56 347.44 659.17 348.27 659.17 355.78 663.56 354.95 663.56 347.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='672.01 345.79 667.62 346.62 667.62 354.14 672.01 353.31 672.01 345.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='655.1 360.72 650.71 361.55 652.48 363.25 655.1 362.77 655.1 360.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='663.56 359.08 659.17 359.91 659.17 362 660.69 361.71 663.56 363.9 663.56 359.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='672.01 357.43 667.62 358.26 667.62 365.77 672.01 364.94 672.01 357.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='837.48 414.26 833.09 415.09 833.09 422.6 837.48 421.77 837.48 414.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='845.94 412.61 841.55 413.44 841.55 420.95 845.94 420.12 845.94 412.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='854.39 410.96 850 411.79 850 419.31 854.39 418.48 854.39 410.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='837.48 426.16 833.09 426.99 833.09 434.51 837.48 433.68 837.48 426.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='845.94 424.52 841.55 425.35 841.55 432.86 845.94 432.03 845.94 424.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='854.39 422.87 850 423.7 850 431.21 854.39 430.38 854.39 422.87'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='837.48 438.07 833.09 438.9 833.09 446.42 837.48 445.59 837.48 438.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='845.94 436.42 841.55 437.25 841.55 444.77 845.94 443.94 845.94 436.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='854.39 434.78 850 435.61 850 443.12 854.39 442.29 854.39 434.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='862.85 409.35 858.46 410.18 858.46 417.69 862.85 416.86 862.85 409.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='862.85 421.26 858.46 422.09 858.46 429.6 862.85 428.77 862.85 421.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='862.85 433.16 858.46 433.99 858.46 441.51 862.85 440.68 862.85 433.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='837.48 449.98 833.09 450.81 833.09 458.32 837.48 457.49 837.48 449.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='845.94 448.33 841.55 449.16 841.55 456.68 845.94 455.85 845.94 448.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='854.39 446.68 850 447.52 850 455.03 854.39 454.2 854.39 446.68'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='862.85 445.07 858.46 445.9 858.46 453.42 862.85 452.59 862.85 445.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='903.78 414.26 899.39 415.09 899.39 422.6 903.78 421.77 903.78 414.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='912.24 412.61 907.84 413.44 907.84 420.95 912.24 420.12 912.24 412.61'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='920.69 410.96 916.3 411.79 916.3 419.31 920.69 418.48 920.69 410.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='903.78 426.16 899.39 426.99 899.39 434.51 903.78 433.68 903.78 426.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='912.24 424.52 907.84 425.35 907.84 432.86 912.24 432.03 912.24 424.52'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='920.69 422.87 916.3 423.7 916.3 431.21 920.69 430.38 920.69 422.87'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='903.78 438.07 899.39 438.9 899.39 446.42 903.78 445.59 903.78 438.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='912.24 436.42 907.84 437.25 907.84 444.77 912.24 443.94 912.24 436.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='920.69 434.78 916.3 435.61 916.3 443.12 920.69 442.29 920.69 434.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='903.78 449.98 899.39 450.81 899.39 459.81 903.78 458.98 903.78 449.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='912.24 448.33 907.84 449.16 907.84 458.17 912.24 457.34 912.24 448.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='920.69 446.68 916.3 447.52 916.3 456.52 920.69 455.69 920.69 446.68'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='948.88 416.95 942.19 418.22 942.19 425.73 948.88 424.46 948.88 416.95'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='936.75 415.27 930.07 416.54 930.07 425.73 936.75 424.46 936.75 415.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='936.75 429.54 930.07 430.81 930.07 440 936.75 438.73 936.75 429.54'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='948.88 428.86 942.19 430.13 942.19 437.64 948.88 436.37 948.88 428.86'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='947.97 441.04 943.58 441.87 943.58 451.43 947.97 450.6 947.97 441.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='956.43 439.39 952.03 440.22 952.03 449.78 956.43 448.95 956.43 439.39'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='964.88 437.78 960.49 438.61 960.49 448.17 964.88 447.34 964.88 437.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='889.01 423.43 885.79 424.03 885.79 430.54 889.01 429.93 889.01 423.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='895.2 422.22 891.99 422.83 891.99 429.33 895.2 428.72 895.2 422.22'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='889.01 433.15 885.79 433.75 885.79 440.26 889.01 439.65 889.01 433.15'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='895.2 431.94 891.99 432.55 891.99 439.05 895.2 438.44 895.2 431.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='889.01 442.87 885.79 443.47 885.79 449.98 889.01 449.37 889.01 442.87'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='895.2 441.66 891.99 442.27 891.99 448.77 895.2 448.16 895.2 441.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='872.12 373 868.9 373.61 868.9 380.11 872.12 379.51 872.12 373'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='878.31 371.79 875.09 372.4 875.09 378.91 878.31 378.3 878.31 371.79'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='872.12 382.72 868.9 383.33 868.9 389.83 872.12 389.23 872.12 382.72'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='878.31 381.51 875.09 382.12 875.09 388.63 878.31 388.02 878.31 381.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='872.12 392.44 868.9 393.05 868.9 399.55 872.12 398.94 872.12 392.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='878.31 397.12 878.31 391.23 875.09 391.84 875.09 398.35 877.22 397.94 877.21 397.41 878.31 397.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='883.96 368.84 880.75 369.45 880.75 375.95 883.96 375.35 883.96 368.84'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='890.16 367.63 886.94 368.24 886.94 374.75 890.16 374.14 890.16 367.63'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='883.96 378.56 880.75 379.17 880.75 385.67 883.96 385.07 883.96 378.56'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='890.16 377.35 886.94 377.96 886.94 384.47 890.16 383.86 890.16 377.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='883.96 388.28 880.75 388.89 880.75 395.39 883.96 394.78 883.96 388.28'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='890.16 387.07 886.94 387.68 886.94 394.19 890.16 393.58 890.16 387.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='805.38 438.18 802.16 438.79 802.16 445.3 805.38 444.69 805.38 438.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='811.58 436.98 808.36 437.59 808.36 444.09 811.58 443.48 811.58 436.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='805.38 428.33 802.16 428.94 802.16 435.44 805.38 434.83 805.38 428.33'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='811.58 427.12 808.36 427.73 808.36 434.23 811.58 433.63 811.58 427.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='805.38 447.9 802.16 448.51 802.16 455.02 805.38 454.41 805.38 447.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='811.58 446.7 808.36 447.31 808.36 453.81 811.58 453.2 811.58 446.7'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='805.38 457.62 802.16 458.23 802.16 464.74 805.38 464.13 805.38 457.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='811.58 456.42 808.36 457.03 808.36 463.53 811.58 462.92 811.58 456.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='817.52 422.1 815.05 422.6 815.05 429.11 817.52 428.61 817.52 422.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='823.71 420.9 820.49 421.51 820.49 428.01 823.71 427.4 823.71 420.9'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='817.52 431.82 815.05 432.32 815.05 438.83 817.52 438.33 817.52 431.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='823.71 430.62 820.49 431.23 820.49 437.73 823.71 437.12 823.71 430.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='817.52 441.54 815.05 442.04 815.05 448.55 817.52 448.05 817.52 441.54'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='823.71 440.34 820.49 440.95 820.49 447.45 823.71 446.84 823.71 440.34'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='774.23 359.08 769.84 359.91 769.84 367.42 774.23 366.59 774.23 359.08'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='782.69 357.43 778.3 358.26 778.3 365.77 782.69 364.94 782.69 357.43'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='791.15 355.78 786.75 356.61 786.75 364.13 791.15 363.3 791.15 355.78'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='774.23 370.98 769.84 371.81 769.84 379.33 774.23 378.5 774.23 370.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='782.69 369.34 778.3 370.17 778.3 377.68 782.69 376.85 782.69 369.34'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='791.15 367.69 786.75 368.52 786.75 376.03 791.15 375.2 791.15 367.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='799.65 354.32 795.26 355.15 795.26 362.66 799.65 361.83 799.65 354.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='799.65 366.23 795.26 367.06 795.26 374.57 799.65 373.74 799.65 366.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='844.16 370.92 839.77 371.75 839.77 379.26 844.16 378.43 844.16 370.92'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='852.62 369.27 848.22 370.1 848.22 377.61 852.62 376.78 852.62 369.27'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='861.07 367.62 856.68 368.45 856.68 375.97 861.07 375.14 861.07 367.62'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='844.16 382.82 839.77 383.65 839.77 390.9 844.16 390.07 844.16 382.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='852.62 381.18 848.22 382.01 848.22 389.17 849.02 389.02 849.43 389.29 852.62 388.69 852.62 381.18'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='861.07 379.53 856.68 380.36 856.68 387.87 861.07 387.04 861.07 379.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='861.07 391.44 856.68 392.27 856.68 394.64 861.07 398.18 861.07 391.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='715.36 372.96 710.97 373.79 710.97 381.3 715.36 380.47 715.36 372.96'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='723.81 371.31 719.42 372.14 719.42 379.66 723.81 378.83 723.81 371.31'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='732.27 369.67 727.88 370.5 727.88 378.01 732.27 377.18 732.27 369.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='715.36 384.87 710.97 385.7 710.97 393.21 715.36 392.38 715.36 384.87'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='723.81 383.22 719.42 384.05 719.42 391.56 723.81 390.73 723.81 383.22'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='732.27 381.57 727.88 382.4 727.88 389.92 732.27 389.09 732.27 381.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='715.36 396.51 710.97 397.34 710.97 404.51 711.48 404.75 715.36 404.02 715.36 396.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='723.81 394.86 719.42 395.69 719.42 403.2 723.81 402.37 723.81 394.86'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='732.27 393.21 727.88 394.04 727.88 401.56 732.27 400.73 732.27 393.21'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='723.81 406.77 719.42 407.6 719.42 412.99 721.66 414.69 723.81 414.28 723.81 406.77'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='732.27 405.12 727.88 405.95 727.88 413.46 732.27 412.63 732.27 405.12'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='732.27 416.36 727.88 417.19 727.88 419.45 732.27 422.78 732.27 416.36'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='684.1 337.32 679.71 338.15 679.71 345.66 684.1 344.83 684.1 337.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='692.55 335.67 688.16 336.5 688.16 344.02 692.55 343.19 692.55 335.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='701.01 334.02 696.62 334.85 696.62 342.37 701.01 341.54 701.01 334.02'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='684.1 349.23 679.71 350.06 679.71 357.57 684.1 356.74 684.1 349.23'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='692.55 347.58 688.16 348.41 688.16 355.92 692.55 355.09 692.55 347.58'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='684.1 361.06 679.71 361.89 679.71 365.14 684.1 364.31 684.1 361.06'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='690.38 359.76 688.16 360.25 688.16 363.49 690.38 363 690.38 359.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='701.01 345.93 696.62 346.76 696.62 354.28 701.01 353.45 701.01 345.93'
                                fill='#212f3e'
                            />
                        </g>
                        <g id='dom1' ref={houseOneRef}>
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 484.45 78.96 482.18 78.96 491.83 81.96 494.1 81.96 484.45'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 480.67 73.96 478.4 73.96 488.05 76.96 490.32 76.96 480.67'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 476.88 68.96 474.62 68.96 484.27 71.96 486.54 71.96 476.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 473.1 63.96 470.83 63.96 480.49 66.96 482.76 66.96 473.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 469.32 58.96 467.05 58.96 476.71 61.96 478.97 61.96 469.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 465.54 53.96 463.27 53.96 472.92 56.96 475.19 56.96 465.54'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 469.44 78.96 467.17 78.96 478.05 81.96 480.32 81.96 469.44'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 465.66 73.96 463.39 73.96 474.27 76.96 476.54 76.96 465.66'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 461.88 68.96 459.61 68.96 470.49 71.96 472.76 71.96 461.88'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 458.1 63.96 455.83 63.96 466.71 66.96 468.98 66.96 458.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 454.31 58.96 452.05 58.96 462.93 61.96 465.2 61.96 454.31'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 450.53 53.96 448.26 53.96 459.15 56.96 461.41 56.96 450.53'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 498.1 78.96 495.83 78.96 505.49 81.96 507.76 81.96 498.1'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 494.32 73.96 492.05 73.96 501.71 76.96 503.98 76.96 494.32'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 490.54 68.96 488.27 68.96 497.93 71.96 500.19 71.96 490.54'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 486.76 63.96 484.49 63.96 494.14 66.96 496.41 66.96 486.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 482.98 58.96 480.71 58.96 490.36 61.96 492.63 61.96 482.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 479.2 53.96 476.93 53.96 486.58 56.96 488.85 56.96 479.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 511.76 78.96 509.49 78.96 519.14 81.96 521.41 81.96 511.76'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 507.98 73.96 505.71 73.96 515.36 76.96 517.63 76.96 507.98'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 504.2 68.96 501.93 68.96 511.58 71.96 513.85 71.96 504.2'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 500.41 63.96 498.15 63.96 507.8 66.96 510.07 66.96 500.41'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 496.63 58.96 494.36 58.96 504.02 61.96 506.29 61.96 496.63'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 492.85 53.96 490.58 53.96 500.24 56.96 502.5 56.96 492.85'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 525.42 78.96 523.15 78.96 532.8 81.96 535.07 81.96 525.42'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 521.63 73.96 519.36 73.96 529.02 76.96 531.29 76.96 521.63'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 517.85 68.96 515.58 68.96 525.24 71.96 527.51 71.96 517.85'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 514.07 63.96 511.8 63.96 521.46 66.96 523.72 66.96 514.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 510.29 58.96 508.02 58.96 517.67 61.96 519.94 61.96 510.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 506.51 53.96 504.24 53.96 513.89 56.96 516.16 56.96 506.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 539.07 78.96 536.8 78.96 546.46 81.96 548.72 81.96 539.07'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 535.29 73.96 533.02 73.96 542.67 76.96 544.94 76.96 535.29'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 531.51 68.96 529.24 68.96 538.89 71.96 541.16 71.96 531.51'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 527.73 63.96 525.46 63.96 535.11 66.96 537.38 66.96 527.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 523.94 58.96 521.68 58.96 531.33 61.96 533.6 61.96 523.94'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 520.16 53.96 517.89 53.96 527.55 56.96 529.82 56.96 520.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 552.73 78.96 550.46 78.96 560.11 81.96 562.38 81.96 552.73'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 548.95 73.96 546.68 73.96 556.33 76.96 558.6 76.96 548.95'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 545.16 68.96 542.89 68.96 552.55 71.96 554.82 71.96 545.16'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 541.38 63.96 539.11 63.96 548.77 66.96 551.04 66.96 541.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 537.6 58.96 535.33 58.96 544.99 61.96 547.25 61.96 537.6'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 533.82 53.96 531.55 53.96 541.2 56.96 543.47 56.96 533.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 566.38 78.96 564.11 78.96 573.77 81.96 576.04 81.96 566.38'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 562.6 73.96 560.33 73.96 569.99 76.96 572.25 76.96 562.6'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 558.82 68.96 556.55 68.96 566.2 71.96 568.47 71.96 558.82'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 555.04 63.96 552.77 63.96 562.42 66.96 564.69 66.96 555.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 551.26 58.96 548.99 58.96 558.64 61.96 560.91 61.96 551.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 547.47 53.96 545.21 53.96 554.86 56.96 557.13 56.96 547.47'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 580.04 78.96 577.77 78.96 587.42 81.96 589.69 81.96 580.04'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 576.26 73.96 573.99 73.96 583.64 76.96 585.91 76.96 576.26'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 572.48 68.96 570.21 68.96 579.86 71.96 582.13 71.96 572.48'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 568.69 63.96 566.42 63.96 576.08 66.96 578.35 66.96 568.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 564.91 58.96 562.64 58.96 572.3 61.96 574.57 61.96 564.91'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 561.13 53.96 558.86 53.96 568.52 56.96 570.78 56.96 561.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='81.96 593.69 78.96 591.43 78.96 606.26 81.96 608.53 81.96 593.69'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='76.96 589.91 73.96 587.64 73.96 602.48 76.96 604.75 76.96 589.91'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='71.96 586.13 68.96 583.86 68.96 598.7 71.96 600.97 71.96 586.13'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='66.96 582.35 63.96 580.08 63.96 594.91 66.96 597.18 66.96 582.35'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='61.96 578.57 58.96 576.3 58.96 591.13 61.96 593.4 61.96 578.57'
                                fill='#212f3e'
                            />
                            <polygon
                                onMouseOver={(e) => ((e.target as HTMLElement).style.display = 'none')}
                                points='56.96 574.79 53.96 572.52 53.96 587.35 56.96 589.62 56.96 574.79'
                                fill='#212f3e'
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </>
    );
};

export default WindowsAnimation;
