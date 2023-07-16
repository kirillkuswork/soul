import { useAppSelector } from '../../hooks/useReduxHooks';
import styles from './RadioSwitch.module.scss';
import Link from 'next/link';

const RadioSwitch = ({ id, type, params }) => {
    const filtersByCheckbox = useAppSelector((state) => state.catalog.filterParameters.byCheckbox);

    const generateNewPath = (value) => {
        const searchParams = Object.keys(filtersByCheckbox)
            .map(key => {
                let activeItems = filtersByCheckbox[key]
                if (key === 'advantages' || key === 'rooms') {
                    activeItems = activeItems.map(item => item.value === value ? ({...item, active: !item.active}) : item)
                }
                activeItems = activeItems.filter(item => item.active)
                if (activeItems.length > 0) {
                    return `${key}=${activeItems.map(item => item.value).join(',')}`
                }

            }).filter(item => !!item).join('&')

        return `/list${searchParams.length > 0 ? ("?" + searchParams) : ""}`
    }

    const buttonsElements = params?.map((item) => {
        if (item.empty !== undefined && item.empty === true) {
            return
        } else {
            return (
            <Link key={item.value} href={generateNewPath(item.value)}>
                <button
                    data-value={item.value}
                    key={id + item.value}
                    className={`${item.active ? styles.radioSwitch__selected : ''} ${item.disabled ? styles.radioSwitch__disabled : ''}`}
                    disabled={item.disabled}
                >
                    {item.name}{' '}
                </button>
            </Link>
            );
        }
    });

    return (
        <div className={styles.radioSwitch}>
            <div className={type === 'buttons' ? styles.radioSwitch__buttons : styles.radioSwitch__checkboxes}>{buttonsElements}</div>
        </div>
    );
};

export default RadioSwitch;
