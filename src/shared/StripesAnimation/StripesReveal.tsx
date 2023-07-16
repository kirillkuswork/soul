import {Children, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import styles from './StripesStyles.module.scss';
import {IStripes} from "../../assets/data/interfaces";

const StripesReveal = ({backgroundColor, children}: IStripes) => {
    const [width, setWidth] = useState<string | number>(0);
    const [height, setHeight] = useState<string | number>(0);
    const childRef = useRef(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const arr = [0,1,2,3,4,5,6,7];

    useEffect(() => {
        if(!childRef.current) return;

        setHeight(childRef.current.clientHeight);
        setWidth(childRef.current.clientWidth);
    }, [ref])

    return (
        <div className={styles.container} style={{height, width}} ref={ref}>
            <div className={`${styles.fullMask} ${inView ? styles.inView : ""}`}>
                {arr.map((el, i) => <div key={i} style={{backgroundColor}} className={`${styles[`el--${i}`]} ${styles.el}`}></div>)}
                <div className={styles.mask} style={{height, width, backgroundColor}}></div>
            </div>
            {Children.map(children, child => {
                    return (<div className={styles.child} ref={childRef} style={{width: 'fit-content', height: 'fit-content'}}>
                        {child}
                    </div>)
                }
            )}
        </div>
    )
}

export default StripesReveal;
