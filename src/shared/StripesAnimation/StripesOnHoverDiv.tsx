import React, { Children, useEffect, useRef, useState } from 'react';
import styles from './StripesStyles.module.scss';

const StripesOnHoverDiv = ({ backgroundColor, children, addClass }) => {
    const [inView, setInView] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const childRef = useRef(null);

    const arr = [0, 1, 2, 3, 4, 5, 6, 7];

    useEffect(() => {
        if (!childRef.current) return;

        setHeight(childRef.current.clientHeight);
        setWidth(childRef.current.clientWidth);
    }, []);

    return (
        <div className={styles.container} style={{ height, width }} onMouseOver={() => setInView(true)} onMouseOut={() => setInView(false)}>
            <div
                className={`${styles.fullMask} ${inView ? styles.inView : ''}`}
                style={{ transform: `translateY(${inView ? height + height : -height}px)` }}
            >
                {arr.map((el, i) => (
                    <div key={i} style={{ backgroundColor }} className={`${styles[`el--${el}`]} ${styles.el}`}></div>
                ))}
                {arr.reverse().map((el, i) => (
                    <div key={i} style={{ backgroundColor }} className={`${styles[`el--${el}`]} ${styles.el}`}></div>
                ))}
            </div>
            {Children.map(children, (child) => {
                return (
                    <div className={`${styles.child} ${addClass}`} ref={childRef} style={{ width: 'fit-content', height: 'fit-content' }}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default StripesOnHoverDiv;
