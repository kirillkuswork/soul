//Кейсы для теста
// +7 (987) 989-98-09
// 8 (987) 989-98-09
// 89879899890
//  9879899890

// 89194900304

interface IInputPhone {
    name: string;
    field: {
        onChange: (...event: any[]) => void;
        onBlur: any;
        value: string;
        name: 'phone';
    };
    addClass: string;
    id: string;
    placeholder: string;
}

const InputPhone = ({ id, addClass, field }: IInputPhone) => {
    const PATTERN = /\D/g;

    const getInputNumbersValue = (value) => {
        return value.replace(PATTERN, '');
    };

    const handlePhoneInput = (event) => {
        const input = event.target;
        let inputNumbersValue = getInputNumbersValue(input.value);
        let formattedInputValue = '';
        const selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            return (input.value = '+7');
        }

        if (input.value.length !== selectionStart) {
            return;
        }

        const firstSymbol = '+7';
        formattedInputValue = firstSymbol + ' ';

        if (inputNumbersValue[0] === '0') {
            inputNumbersValue = '';
        }

        if (inputNumbersValue[0] !== '8' && inputNumbersValue[0] !== '7') {
            inputNumbersValue = '7' + inputNumbersValue;
        }

        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }

        input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (event) => {
        const input = event.target;

        //Функция, удаляющая первый элемент
        if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
            input.value = '';
        }

        //Функции, не позволяющие пользователю удалить символы маски

        if (event.key === 'Backspace' && (input.selectionStart === 2 || input.selectionStart === 1)) {
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.value.split(')')[0].split('(')[1]?.length < 3 && input.selectionStart === 3) {
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.selectionStart === 3) {
            input.setSelectionRange(2, 2);
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.selectionStart === 4) {
            input.setSelectionRange(2, 2);
        }

        if (event.key === 'Backspace' && input.selectionStart === 9) {
            input.setSelectionRange(7, 7);
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.selectionStart === 8) {
            input.setSelectionRange(7, 7);
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.selectionStart === 13) {
            input.setSelectionRange(12, 12);
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && input.selectionStart === 16) {
            input.setSelectionRange(15, 15);
            event.preventDefault();
            return;
        }

        return input;
    };

    //Функция, которая при копировании в инпут с телефоном какого-то текста, зачищает поле, проверяет
    //текст на соответствие паттерну и вставляет его
    const handlePhonePaste = (event) => {
        const pasted = event.clipboardData ?? window['clipboardData'];
        const input = event.target;
        const inputNumbersValue = getInputNumbersValue(input.value);
        input.value = '';

        if (pasted) {
            const pastedText = pasted.getData('Text');
            if (PATTERN.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    };

    return (
        <input
            {...field}
            type='tel'
            autoComplete='tel'
            id={id}
            className={addClass}
            maxLength={18}
            placeholder={' '}
            onInput={(event) => handlePhoneInput(event)}
            onKeyDown={(event) => {
                handlePhoneKeyDown(event);
            }}
            onPaste={(event) => {
                handlePhonePaste(event);
            }}
        />
    );
};

export default InputPhone;
