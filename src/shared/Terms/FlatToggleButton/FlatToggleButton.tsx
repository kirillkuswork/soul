import styles from './FlatToggleButton.module.scss';
import { IFlats } from '../../../assets/data/interfaces';

interface IFlatToggleButton {
    label: string;
    isActive: boolean;
    onClick: () => void;
    disabled?: IFlats;
}

const FlatToggleButton = ({ label, isActive, onClick, disabled }: IFlatToggleButton) => {
    const isDisabled = !!(disabled + '') === false;

    return (
        <button
            type='button'
            onClick={onClick}
            className={`${styles.btn} ${isActive ? styles.btn_active : 'undefined'} ${isDisabled ? styles.btn_disabled : 'undefined'}`}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
};

export default FlatToggleButton;
