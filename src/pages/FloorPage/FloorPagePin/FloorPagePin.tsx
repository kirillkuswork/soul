import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { IFlat } from '../../../assets/data/interfaces';
import editRoomsLabel from '../../../tools/_edit-rooms-label';
import FloorPageModalInfo from '../FloorPageModalInfo/FloorPageModalInfo';
import styles from './FloorPagePin.module.scss';
import { useInView } from 'react-intersection-observer';

interface IFloorPagePin {
    item: IFlat;
    houseId: string | string[];
    floorId: string | string[];
}

const FloorPagePin: FC<IFloorPagePin> = ({ item, houseId, floorId }) => {
    const rooms = editRoomsLabel(item);
    const router = useRouter();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const changeRoom = (id: string) => {
        const flat = document.getElementById(`fl${id}`);
        const modalFlat = document.getElementById(`${id}__modalinfo`);
        modalFlat?.classList?.add('modalflat__active');
        flat?.classList?.add(`active__label`);
    };

    const hideRoom = (id: string) => {
        const flat = document.getElementById(`fl${id}`);
        const modalFlat = document.getElementById(`${id}__modalinfo`);
        modalFlat?.classList?.remove('modalflat__active');
        flat?.classList?.remove(`active__label`);
    };

    const handleRouteFlat = (id: string) => {
        router.push(`/visual/${houseId}/${floorId}/${id}`);
    };

    useEffect(() => {
        if (!inView) return;

        router.reload();
    }, [router]);

    return (
        <div
            ref={ref}
            onClick={() => {
                handleRouteFlat(item.number);
            }}
            onMouseMove={() => changeRoom(item.number)}
            onMouseLeave={() => hideRoom(item.number)}
            className={styles.pin}
            id={item.number}
            key={item.number + item.rooms}
        >
            <div className={styles.pin__room}>{rooms.rooms}</div>
            <div className={styles.pin__description}>
                <p className={styles.pin__number}>№{item.number}</p>
                <p className={styles.pin__area}>
                    {item.area}м <sup>2</sup>
                </p>
            </div>
            <FloorPageModalInfo item={item} />
        </div>
    );
};

export default FloorPagePin;
