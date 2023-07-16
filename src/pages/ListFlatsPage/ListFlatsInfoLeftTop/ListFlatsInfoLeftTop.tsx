import React, { FC } from 'react';
import { FlatType } from '../../../data/models/typesFlat';
// import ButtonArrow from "../../../features/ButtonArrow/ButtonArrow";
import styles from './ListFlatsInfoLeftTop.module.scss';

interface IListFlatsInfoLeftTop {
    flats: FlatType[];
}

const ListFlatsInfoLeftTop: FC<IListFlatsInfoLeftTop> = ({ flats }) => {
    return (
        <div className={styles.listLeft}>
            <div className={styles.listLeft__names}>
                <h6 className={styles.listLeft__name}>Квартиры</h6>
                <span className={styles.listLeft__amount}>({flats?.length})</span>
            </div>
            {/* <div className={styles.listLeft__icon}>
        <ButtonArrow
          type="button"
          flexDirection="row-reverse"
          description="Выбор на генплане"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_2101_3150)">
              <path
                d="M0 10H16M16 10L12.0913 6.5M16 10L12.0913 13.5"
                stroke="#24292E"
                strokeWidth="1.5"
              />
              <path d="M19 5L19 15" stroke="#24292E" strokeWidth="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_2101_3150">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ButtonArrow>
      </div> */}
        </div>
    );
};

export default ListFlatsInfoLeftTop;
