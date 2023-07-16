const getBulkId = (houseId: string | string[]): number => {
    switch (houseId) {
        default:
        case '1':
            return 9376;
        case '2':
            return 9377;
    }
};

export default getBulkId;
