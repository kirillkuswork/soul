const editRoomsLabel = (flat) => {
    //Вывод корректных лейблов с количеством спален

    let rooms = {
        rooms: '',
        classRooms: '',
        color: '',
    };

    if (flat?.rooms === 'studio') {
        rooms = {
            ...rooms,
            rooms: 'Cт',
            classRooms: 0,
            color: '#8DC2B3',
        };
    } else if (flat?.rooms === 1) {
        rooms = {
            ...rooms,
            rooms: flat?.rooms,
            classRooms: flat?.rooms,
            color: '#90BFD0',
        };
    } else if (flat?.rooms === 2) {
        rooms = {
            ...rooms,
            rooms: flat?.rooms,
            classRooms: flat?.rooms,
            color: '#D9B8A5',
        };
    } else if (flat?.rooms === 3) {
        rooms = {
            ...rooms,
            rooms: flat?.rooms,
            classRooms: flat?.rooms,
            color: '#E5A299',
        };
    } else if (flat?.rooms === 4) {
        rooms = {
            ...rooms,
            rooms: flat?.rooms,
            classRooms: flat?.rooms,
            color: '#C37D40',
        };
    } else if (flat?.rooms === 5) {
        rooms = {
            ...rooms,
            rooms: `${flat?.rooms}+`,
            classRooms: flat?.rooms,
            color: '#3A8EAE',
        };
    }

    return rooms;
};

export default editRoomsLabel;
