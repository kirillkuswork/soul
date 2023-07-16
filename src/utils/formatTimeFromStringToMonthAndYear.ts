import _ from 'lodash';

export default function formatTimeFromStringToMonthAndYear(dateString) {
    const date = new Date(dateString);
    const monthNames = [
        "январь", "февраль", "март",
        "апрель", "май", "июнь", "июль",
        "август", "сентябрь", "октябрь",
        "ноябрь", "декабрь"
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${_.capitalize(monthNames[monthIndex])} ${year}`;
}
