const sortNumber = (array, parameter, direction) => {
    if (direction === 'asc_') {
        return array?.sort((a, b) => a[parameter] - b[parameter]);
    } else {
        return array?.sort((a, b) => b[parameter] - a[parameter]);
    }
}

export default sortNumber;