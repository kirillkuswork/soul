//Утилита, рассчитывающая наименьшее значение в массиве объектов по ключу

const calcTheLeast = (array, key, max) => {
    let res = [...array];
    let min = max;

    for (const flat of res) {
        if(key === "price") {
            let price;
            price = flat.currentPrice;

            if (price < min) {
                min = price;
            }
        } else {
            if ( flat[key] < min) {
                min = flat[key];
            }
        }

    }
    return min;
}

export default calcTheLeast;
