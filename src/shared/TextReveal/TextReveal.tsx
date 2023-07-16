import styles from './TextReveal.module.scss';
import { Children, useRef } from 'react';

const TextReveal = ({ children }) => {
    const childRefs = useRef([]);
    const childNodeRef = useRef(null);

    return (
        <div className={styles.container}>
            {Children.map(children, (child, index) => {
                childRefs.current[index] = childNodeRef.current;
                return (
                    <div className={styles.child} ref={childNodeRef}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default TextReveal;
