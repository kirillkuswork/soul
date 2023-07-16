import { useEffect, useRef, useState } from 'react';

const useOutsideAlerter = (initialsVisible: boolean) => {
    const [isShow, setIsShow] = useState(initialsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        console.log(ref.current, ref.current.contains(event.target));
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isShow, setIsShow };
};

export default useOutsideAlerter;
