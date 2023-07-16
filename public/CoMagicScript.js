function setComagicCredentialsDataToForm(iteration) {
    let _cm_data = '';
    // Делаем не больше 300 попыток получения данных от CoMagic
    if (typeof iteration === typeof undefined) {
        iteration = 1;
    }

    try {
        const credentials = window.Comagic.getCredentials();
        _cm_data = '';
        for (let field in credentials) {
            if (field === 'consultant_server_url') {
                continue;
            }
            // Если в объекте CoMagic нет определённого свойства, то запускаем новую попытку
            if (!credentials.hasOwnProperty(field)) {
                throw new Error('has no property');
            }

            // Если определённое свойство CoMagic не заполненно данными, то запускаем новую попытку
            if (!credentials[field]) {
                throw new Error('has no value');
            }

            _cm_data += '' + field + '#' + credentials[field] + '|';
        }
        // Прописываем данные в уже имеющиеся скрытые поля
        writeCmData(_cm_data);
    } catch (e) {
        // Если на каком-то этапе обработки данных от CoMagic ловим ошибку, то запускаем новую попытку
        if (iteration < 300) {
            window.setTimeout(function () {
                iteration++;
                setComagicCredentialsDataToForm(iteration);
            }, 100);
        }
    }
}

function writeCmData(_cm_data) {
    document.cookie = `cm_data=${_cm_data}; path=/; max-age=${60 * 60 * 24};`;
}

if (typeof window !== 'undefined') {
    let canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    if (canUseDOM) {
        setComagicCredentialsDataToForm();
    }
}

// Fetching cm_data from cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

async function jivo_onIntroduction() {
    console.log('Client entered contact details');
    let userContacts = jivo_api.getContactInfo();
    console.log(userContacts);

    let url = "https://comagic.keep-calm.ru/api/o5hthwrqslhvere2ccki9l5fz2z4vkdepsiv6n0h";

    let _cm_data = getCookie('cm_data');

    let data = {
        cm_data: _cm_data,
        formname: "jivoForm",
        message: userContacts.description,
        name: userContacts.client_name,
        phone: userContacts.phone,
        email: userContacts.email
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            console.log('Request sent successfully');
        }
    } catch (error) {
        console.log('There was a problem with the fetch operation: ' + error.message);
    }
}
