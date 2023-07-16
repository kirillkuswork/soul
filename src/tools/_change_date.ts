const changeDate = (date: string, text = 'Ввод в эксплуатацию до') => {
    let year = '';
    let month = '';
    let day = '';
    const arrayDates = date?.split('-');

    for (let i = 0; i < arrayDates?.length; i++) {
        if (i === 0) {
            year = arrayDates[i];
        } else if (i === 1) {
            month = `${arrayDates[i]}`;
        } else {
            day = arrayDates[i];
        }
    }

    return `${text} ${day}.${month}.${year}`;
};

export default changeDate;
