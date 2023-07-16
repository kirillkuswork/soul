//Утилита, возвращающая объект, если его параметр соответствует указанному диапозону

const checkComplianceRange = (object, parameter, range) => {
    //здесь правки на диапозон нужны, чтобы при уходе со страницы и возврате на нее через кнопку "назад"
    //повторная фильтрация массива давала корректный результат (учитывала округления)
    switch (parameter) {
        case 'floor': {
            return object[parameter] >= range[0] && object[parameter] <= range[1];
        }
        case 'real_price': {
            return object[parameter] >= range[0] && object[parameter] <= range[1]+1;
        }
        default: {
            return object[parameter] >= range[0] && object[parameter] <= range[1];
        }
    }
};

export default checkComplianceRange;
