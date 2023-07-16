const changeEnding = (word: string, digit: number): string => {
    const strDigit = String(digit);
    const unit = parseInt(strDigit[strDigit.length - 1]);

    const options = {
        flat: ['квартира', 'квартиры', 'квартир'],
        window: ['окно', 'окна', 'окон'],
        bedroom: ['спальня', 'спальни', 'спален'],
        penthouse: ['пентхаус', 'пентхауса', 'пентхаусов'],
        offer: ['предложение', 'предложения', 'предложений'],
        apartment: ['апартамент', 'апартамента', 'апартаментов'],
        meter: ['метр', 'метра', 'метров'],
        program: ['программа', 'программы', 'программ'],
        floor: ['этаж', 'этаж', 'этажей'],
    };

    if (options[word]) {
        if (digit < 20 && digit > 9) return options[word][2];
        if (unit === 1) return options[word][0];
        if (unit && unit < 5) return options[word][1];
        return options[word][2];
    }

    return '';
};

export default changeEnding;
