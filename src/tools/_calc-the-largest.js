//Утилита, рассчитывающая наибольшее значение в массиве объектов по ключу

const calcTheLargest = (array, key) => {
    let res = [...array];
    let max = 0;

    for (const flat of res) {
        if(key === "price") {
            let price;
            price = flat.currentPrice

            if ( price > max) {
                max = price;
            }
        } else {
            if ( flat[key] > max) {
                max = flat[key];
            }
        }
    }

    return max;
}

export default calcTheLargest;
