import styles from './MortgageCheckbox.module.scss';

const MortgageCheckbox = (props) => {
    const { id, type = 'checkbox', label, onChange, ...rest } = props;

    const handleChange = (event) => {
        if (onChange) {
            onChange(type === 'checkbox' ? event.target.checked : event.target.value);
        }
    };

    return (
        <div className={styles.container}>
            <input id={id} type={type} onChange={handleChange} className={styles.input} {...rest} />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    );
};

export default MortgageCheckbox;
