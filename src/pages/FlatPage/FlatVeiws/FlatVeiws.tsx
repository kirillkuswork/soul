import Image from 'next/image';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { handleOpenDemonstration } from '../../../entities/componentsSlice';
import styles from './FlatVeiws.module.scss';

interface IFlatVeiws {
    imageSmall?: string;
    imageModal?: string;
}

const FlatVeiws: FC<IFlatVeiws> = ({ imageSmall }) => {
    const dispatch = useAppDispatch();
    const openDemonstration = useAppSelector((state) => state.component.openDemonstration);

    return (
        <>
            <div className={styles.flatVeiws}>
                <div className={styles.flatVeiws__demonstration}>
                    <svg width='45' height='45' viewBox='0 0 45 45' fill='none' className={`${styles.flatVeiws__veiw}`}>
                        <circle cx='22.5' cy='22.5' r='22' stroke='#939598' />
                        <path
                            d='M8.67913 22.5457C8.66608 22.53 8.65347 22.5147 8.6413 22.5C8.65347 22.4853 8.66608 22.47 8.67913 22.4543C8.86748 22.2277 9.14678 21.9021 9.50731 21.5106C10.2289 20.7268 11.273 19.6822 12.5616 18.6386C15.1524 16.5404 18.6661 14.5 22.5 14.5C26.3339 14.5 29.8476 16.5404 32.4384 18.6386C33.727 19.6822 34.7711 20.7268 35.4927 21.5106C35.8532 21.9021 36.1325 22.2277 36.3209 22.4543C36.3339 22.47 36.3465 22.4853 36.3587 22.5C36.3465 22.5147 36.3339 22.53 36.3209 22.5457C36.1325 22.7723 35.8532 23.0979 35.4927 23.4894C34.7711 24.2732 33.727 25.3178 32.4384 26.3614C29.8476 28.4596 26.3339 30.5 22.5 30.5C18.6661 30.5 15.1524 28.4596 12.5616 26.3614C11.273 25.3178 10.2289 24.2732 9.50731 23.4894C9.14678 23.0979 8.86748 22.7723 8.67913 22.5457Z'
                            stroke='#24292E'
                        />
                        <circle cx='22.5' cy='22.5' r='5' fill='white' stroke='#24292E' />
                        <defs>
                            <clipPath className={styles.flatInfoLeft__veiw} id='clip0_1226_10230'>
                                <rect width='45' height='45' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={styles.flatVeiws__image}>
                        <Image src={imageSmall} fill alt='veiwBig' />
                    </div>
                </div>
                <div onClick={() => dispatch(handleOpenDemonstration(!openDemonstration))}>
                    <svg
                        width='45'
                        height='45'
                        viewBox='0 0 45 45'
                        fill={openDemonstration ? '#ce9270' : 'none'}
                        className={styles.flatVeiws__veiw}
                    >
                        <g clipPath='url(#clip0_1226_10230)'>
                            <circle cx='22.5' cy='22.5' r='22' stroke={openDemonstration ? '#FFFFFF' : '#24292E'} />
                            <path
                                d='M8.67913 22.5457C8.66608 22.53 8.65347 22.5147 8.6413 22.5C8.65347 22.4853 8.66608 22.47 8.67913 22.4543C8.86748 22.2277 9.14678 21.9021 9.50731 21.5106C10.2289 20.7268 11.273 19.6822 12.5616 18.6386C15.1524 16.5404 18.6661 14.5 22.5 14.5C26.3339 14.5 29.8476 16.5404 32.4384 18.6386C33.727 19.6822 34.7711 20.7268 35.4927 21.5106C35.8532 21.9021 36.1325 22.2277 36.3209 22.4543C36.3339 22.47 36.3465 22.4853 36.3587 22.5C36.3465 22.5147 36.3339 22.53 36.3209 22.5457C36.1325 22.7723 35.8532 23.0979 35.4927 23.4894C34.7711 24.2732 33.727 25.3178 32.4384 26.3614C29.8476 28.4596 26.3339 30.5 22.5 30.5C18.6661 30.5 15.1524 28.4596 12.5616 26.3614C11.273 25.3178 10.2289 24.2732 9.50731 23.4894C9.14678 23.0979 8.86748 22.7723 8.67913 22.5457Z'
                                stroke={openDemonstration ? '#FFFFFF' : '#24292E'}
                            />
                            <circle
                                cx='22.5'
                                cy='22.5'
                                r='5'
                                fill={openDemonstration ? 'none' : '#FFFFFF'}
                                stroke={openDemonstration ? '#FFFFFF' : '#24292E'}
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_1226_10230'>
                                <rect width='45' height='45' fill={openDemonstration ? '#FFFFFF' : 'none'} />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {openDemonstration && (
                <div className={styles.flatVeiws__vision}>
                    <svg
                        width='45'
                        height='45'
                        viewBox='0 0 45 45'
                        fill={openDemonstration ? '#ce9270' : 'none'}
                        className={`${styles.flatVeiws__veiw}`}
                    >
                        <circle cx='22.5' cy='22.5' r='22' stroke={openDemonstration ? '#FFFFFF' : '#24292E'} />
                        <path
                            d='M8.67913 22.5457C8.66608 22.53 8.65347 22.5147 8.6413 22.5C8.65347 22.4853 8.66608 22.47 8.67913 22.4543C8.86748 22.2277 9.14678 21.9021 9.50731 21.5106C10.2289 20.7268 11.273 19.6822 12.5616 18.6386C15.1524 16.5404 18.6661 14.5 22.5 14.5C26.3339 14.5 29.8476 16.5404 32.4384 18.6386C33.727 19.6822 34.7711 20.7268 35.4927 21.5106C35.8532 21.9021 36.1325 22.2277 36.3209 22.4543C36.3339 22.47 36.3465 22.4853 36.3587 22.5C36.3465 22.5147 36.3339 22.53 36.3209 22.5457C36.1325 22.7723 35.8532 23.0979 35.4927 23.4894C34.7711 24.2732 33.727 25.3178 32.4384 26.3614C29.8476 28.4596 26.3339 30.5 22.5 30.5C18.6661 30.5 15.1524 28.4596 12.5616 26.3614C11.273 25.3178 10.2289 24.2732 9.50731 23.4894C9.14678 23.0979 8.86748 22.7723 8.67913 22.5457Z'
                            stroke={openDemonstration ? '#FFFFFF' : '#24292E'}
                        />
                        <circle cx='22.5' cy='22.5' r='5' fill='white' stroke={openDemonstration ? '#FFFFFF' : '#24292E'} />
                        <defs>
                            <clipPath className={styles.flatInfoLeft__veiw} id='clip0_1226_10230'>
                                <rect width='45' height='45' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
        </>
    );
};

export default FlatVeiws;
