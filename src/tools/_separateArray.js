export const separateArray = (arr, amount) => {
    let count = 0;

    const result = {
        visible: [],
        unvisible: [],
    };

    const resultPush = (num) => {
        result.visible.push(num);
        count++;
    };

    arr.forEach((num) => {
        count < amount ? resultPush(num) : result.unvisible.push(num);
    });

    return result;
};
