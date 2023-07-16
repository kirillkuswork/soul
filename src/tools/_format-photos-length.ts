const formatPhotosLength = (array) => {
    if (array.length === 1) {
        return 'фотография';
    } else if (array.length > 1 && array.length < 5) {
        return 'фотографии';
    } else {
        return 'фотографий';
    }
};

export default formatPhotosLength;
