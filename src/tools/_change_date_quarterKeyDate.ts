const changeDateQuarterKeyDate = (date: string) => {
    let year = '';
    let quarter = '';
    const arrayDates = date?.split('-');

    for (let i = 0; i < arrayDates?.length; i++) {
        if (i === 0) {
            year = arrayDates[i];
        } else if (i === 1) {
            if (+arrayDates[i] <= 3) {
                quarter = '1';
            } else if (+arrayDates[i] <= 6) {
                quarter = '2';
            } else if (+arrayDates[i] <= 9) {
                quarter = '3';
            } else if (+arrayDates[i] <= 12) {
                quarter = '4';
            }
        }
    }

    return `${quarter} квартал ${year}`;
};

export default changeDateQuarterKeyDate;
