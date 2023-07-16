import { createSlice } from '@reduxjs/toolkit';
import sortNumber from '../tools/_sort-number';
import changeStudioValue from '../tools/_change-studio-value';
import { FlatType } from '../data/models/typesFlat';

const initialState: any = {
    favoriteList: [],
    showedList: [],
    //Колонки таблицы для сортировки
    sortColumns: {
        number: 'Номер',
        rooms: 'Cпальни',
        area: 'Площадь',
        number_stage: 'Корпус',
        floor: 'Этаж',
        advantages: 'Характеристики',
        real_price: 'Стоимость',
        // fav: "",
        // scheme: "",
    },
    //Текущий параметр сортировки
    sortParameters: {
        value: 'area',
        direction: 'asc_',
    },
    //Места вызова функции
    //по клику на заголовок столбца таблицы
    inTableHead: 'inTableHead',
    //после изменения состояния формы
    inForm: 'inForm',
};

const refreshLocalStorage = (favoriteList) => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setLocalFlats: (state, action) => {
            state.favoriteList = [...action.payload];
        },
        resetList: (state) => {
            state.favoriteList = [];
            state.showedList = [];
            refreshLocalStorage(state.favoriteList);
        },
        removeApartmentById: (state, action) => {
            state.favoriteList = state.favoriteList.filter((apartment: FlatType) => apartment.id !== action.payload);
            refreshLocalStorage(state.favoriteList);
        },
        addApartmentToFavorites: (state, action) => {
            state.favoriteList = [...state.favoriteList, action.payload];

            if (!state.favoriteList.find((item) => item.id === action.payload.id)) {
                state.showedList = [...state.showedList, action.payload];
            }

            refreshLocalStorage(state.favoriteList);
        },
        refreshFavoriteList: (state, action) => {
            state.favoriteList = action.payload;
        },
        sortFavoriteList: (state, action) => {
            if (action.payload.includes('asc-') || action.payload.includes('dec-')) {
                const direction = action.payload.slice(0, 3) + '_';
                const params = action.payload.replace('asc-', '').replace('dec-', '');
                if (params === 'rooms') {
                    const array = state.showedList.map((flat) => changeStudioValue(flat, 'studio', '0'));
                    sortNumber(array, 'rooms', direction);
                    state.showedList = array.map((flat) => changeStudioValue(flat, '0', 'studio'));
                } else {
                    sortNumber(state.showedList, params, direction);
                }
            } else {
                const withWhiteBox = state.showedList.filter((item) => item.attributes.whiteBox === true);
                const withoutWhiteBox = state.showedList.filter((item) => item.attributes.whiteBox === false);

                if (action.payload.includes('with-')) {
                    state.showedList = withWhiteBox.concat(withoutWhiteBox);
                } else {
                    state.showedList = withoutWhiteBox.concat(withWhiteBox);
                }
            }
        },
        setShowedList: (state, action) => {
            state.showedList = action.payload;
        },
        sortByTableFlats(state, action) {
            // Исключаем фильтр по характеристикам
            if (action.payload.value !== 'advantages') {
                let direction = state.sortParameters.direction;
                if (action.payload.placeCall === state.inTableHead) {
                    //Если выхов произошел по клику на заголовок таблицы
                    //переключить направления сортировки
                    console.log(action);
                    if (direction === 'asc_') {
                        direction = 'desc_';
                    } else {
                        direction = 'asc_';
                    }
                }

                state.sortParameters = {
                    value: action.payload.value,
                    direction,
                };

                if (action.payload.value === 'rooms') {
                    const array = state[action.payload.array].map((flat) => changeStudioValue(flat, 'studio', '0'));
                    sortNumber(array, state.sortParameters.value, state.sortParameters.direction);
                    state[action.payload.array] = array.map((flat) => changeStudioValue(flat, '0', 'studio'));
                } else if (action.payload.value === 'number_stage') {
                    if (state.sortParameters.direction === 'asc_') {
                        state[action.payload.array].sort((a: FlatType, b: FlatType) => a.number_stage - b.number_stage);
                    } else {
                        state[action.payload.array].sort((a: FlatType, b: FlatType) => b.number_stage - a.number_stage);
                    }
                } else {
                    sortNumber(state[action.payload.array], state.sortParameters.value, state.sortParameters.direction);
                }
            }
        },
    },
});

export const {
    addApartmentToFavorites,
    removeApartmentById,
    resetList,
    refreshFavoriteList,
    sortFavoriteList,
    setShowedList,
    sortByTableFlats,
    setLocalFlats,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
