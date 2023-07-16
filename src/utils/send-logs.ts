import axios from 'axios';
export const handleFormButtonClick = () => {
    const el = document.querySelector('.sendbutton');
    const form = el.closest('form');
    const formData = new FormData(form);
    const object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    //console.log(object);
    const json = JSON.stringify(object);
    axios.post('/api/other_information', json, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
