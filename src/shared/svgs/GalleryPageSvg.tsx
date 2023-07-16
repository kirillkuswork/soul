import React from 'react';

export interface ISvg {
    id: string;
    addClass?: string;
}

const GalleryPageSvg = ({ id, addClass }: ISvg) => {
    switch (id) {
        case 'plus-bg': {
            return (
                <svg className={addClass} width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='40' height='40' fill='white' />
                    <rect x='19' y='13' width='2' height='14' fill='#24292E' />
                    <rect x='13' y='21' width='2' height='14' transform='rotate(-90 13 21)' fill='#24292E' />
                </svg>
            );
        }
        case 'minus-bg': {
            return (
                <svg className={addClass} width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='40' height='40' fill='white' />
                    <rect x='13' y='21' width='2' height='14' transform='rotate(-90 13 21)' fill='#24292E' />
                </svg>
            );
        }
        case 'slider-arrow-left': {
            return (
                <svg className={addClass} width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='40' height='40' fill='white' />
                    <line x1='7' y1='11' x2='7' y2='29' stroke='#24292E' strokeWidth='2' />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17.4385 14.116L10.9386 20.0002L17.4385 25.8844L18.7808 24.4017L15.0233 21.0002L33.9185 21.0002L33.9185 19.0002L15.0233 19.0002L18.7808 15.5987L17.4385 14.116Z'
                        fill='#24292E'
                    />
                </svg>
            );
        }
        case 'slider-arrow-right': {
            return (
                <svg className={addClass} width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='40' height='40' transform='matrix(-1 0 0 1 40 0)' fill='white' />
                    <path fillRule='evenodd' clipRule='evenodd' d='M34 29L34 11L32 11L32 29L34 29Z' fill='#24292E' />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M22.5615 14.116L29.0614 20.0002L22.5615 25.8844L21.2192 24.4017L24.9767 21.0002L6.08154 21.0002L6.08154 19.0002L24.9767 19.0002L21.2192 15.5987L22.5615 14.116Z'
                        fill='#24292E'
                    />
                </svg>
            );
        }
        case 'close': {
            return (
                <svg className={addClass} width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M4 4L25.2132 25.2132' stroke='#939598' strokeWidth='3' />
                    <path d='M4 25L25.2132 3.7868' stroke='#939598' strokeWidth='3' />
                </svg>
            );
        }
        default: {
            break;
        }
    }
};

export default GalleryPageSvg;
