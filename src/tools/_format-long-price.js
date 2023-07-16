function formatLongPrice(number) {
    if(!number) return '';
    let str = number.toString();
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default formatLongPrice;