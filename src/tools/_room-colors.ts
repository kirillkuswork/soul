export function rooms<T>(room: T): { room: string; color: string } {
    let rooms = {
        room: '',
        color: '',
    };
    if (room === 'Ст') {
        rooms = {
            room: 'Ст',
            color: '#8DC2B3',
        };
    } else if (room === '1') {
        rooms = {
            room: '1',
            color: '#90BFD0',
        };
    } else if (room === '2') {
        rooms = {
            room: '2',
            color: '#D9B8A5',
        };
    } else if (room === '3') {
        rooms = {
            room: '3',
            color: '#E5A299',
        };
    } else if (room === '4') {
        rooms = {
            room: '4',
            color: '#C37D40',
        };
    } else if (room === '5') {
        rooms = {
            room: `${room}+`,
            color: '#3A8EAE',
        };
    }

    return rooms;
}
