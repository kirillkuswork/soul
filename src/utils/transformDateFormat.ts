import _ from 'lodash';

export default function transformDateFormat(dateString) {
    const dateArray = _.split(dateString, '-');
    const day = dateArray[2];
    const month = dateArray[1];
    const year = dateArray[0];
    return `${day}.${month}.${year}`;
}