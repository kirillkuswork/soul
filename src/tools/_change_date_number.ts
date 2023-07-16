const changeDateNumber = (date: string) => {
    const dateString = date?.split('-').reverse().join('.');

    // "2026-03-31"
    return dateString;
};

export default changeDateNumber;
