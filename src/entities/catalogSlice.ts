import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import calcTheLargest from '../tools/_calc-the-largest';
import calcTheLeast from '../tools/_calc-the-least';
import booleanSwitch from '../tools/_boolean-switch';
import getSelectedParams from '../tools/_get-selected-params';
import resetSortingParameter from '../tools/_reset-sorting-parameter';
import changeStudioValue from '../tools/_change-studio-value';
import sortNumber from '../tools/_sort-number';
import checkParameterAndToggleStatus from '../tools/_check-parameter-and-toggle-status';
import axios from 'axios';
import api from '../data/api';
import { ICatalogState, IFlat } from '../assets/data/interfaces';
import { IFetchCatalog } from '../assets/data/interfacesCatalog';

export const fetchCatalog = createAsyncThunk<IFetchCatalog, undefined>('flatsSlice/fetchFlats', async (_, thunkApi) => {
    try {
        const response = await axios.get(api.urlFlats);
        return response.data;
    } catch (error) {
        return console.log(error, thunkApi);
    }
});

export const fetchFlat: any = createAsyncThunk('flatsSlice/fetchFlat', async (number, thunkApi) => {
    try {
        const response = await axios.get(`https://manager.forma.ru/api/v2/flat/${number}?blockId=1246`);
        return response.data;
    } catch (error) {
        return console.log(error, thunkApi);
    }
});

const initialState = <ICatalogState>{
    urls: {
        getResidential: {
            url: api.urlFlats,
            initial: false,
            status: null,
            error: null,
        },
    },
    sections: [
        { id: '1', visible: false },
        { id: '2', visible: false },
        { id: '3', visible: false },
        { id: '4', visible: false },
        { id: '5', visible: false },
        { id: '6', visible: false },
        { id: '7', visible: false },
        { id: '8', visible: false },
        { id: '9', visible: false },
        { id: '10', visible: false },
    ],
    filterParameters: {
        byCheckbox: {
            redPrice: [
                {
                    name: 'Квартиры по акции                                                        ',
                    value: true,
                    active: false,
                },
            ],
            rooms: [
                { name: 'СТ', value: '0', active: false, disabled: false },
                { name: '1', value: '1', active: false, disabled: false },
                { name: '2', value: '2', active: false, disabled: false },
                { name: '3', value: '3', active: false, disabled: false },
                { name: '4', value: '4', active: false, disabled: true },
                { name: '5+', value: '5', active: false, disabled: true },
            ],
            sections: [
                { name: 'Все корпуса', value: 'Все корпуса', active: false, disabled: false },
                { name: 'Корпус 1', value: '1', active: false, disabled: false },
                { name: 'Корпус 2', value: '2', active: false, disabled: false },
                // { name: 'Корпус 3', value: '3', active: false, disabled: false },
                // { name: 'Корпус 4', value: '4', active: false, disabled: false },
                // { name: 'Корпус 5', value: '5', active: false, disabled: false },
            ],

            advantages: [
                {
                    name: 'Французский балкон',
                    value: 'balcony',
                    active: false,
                    disabled: false
                },
                {
                    name: 'Кухня-гостиная',
                    value: 'livingKitchen',
                    active: false,
                    disabled: false
                },
                // { name: 'Отделка WhiteBox', value: 'whiteBox', active: false },
                // { name: 'Лоджия', value: 'loggia', active: false },

                {
                    name: 'Гардеробная',
                    value: 'dressingRoom',
                    active: false,
                    disabled: false
                },

                {
                    name: 'Панорамное остекление',
                    value: 'panoramicGlazing',
                    active: false,
                    disabled: false
                },
                {
                    name: 'Мастер-спальня',
                    value: 'masterBedroom',
                    active: false,
                    disabled: false
                },
                // {
                //     name: 'Чистовая',
                //     value: 'finish',
                //     active: false,
                // },
                // {
                //     name: 'Предчистовая',
                //     value: 'unfinished',
                //     active: false,
                // },
                // {
                //     name: 'Прачечная',
                //     value: 'laundry',
                //     active: false,
                // },
                // {
                //     name: 'Французский балкон',
                //     value: 'frenchBalcony',
                //     active: false,
                // },
                // { name: 'Угловое остекление', value: 'cornerGlazing', active: false },
                {
                    name: 'Потолок выше 3м',
                    value: 'highCeiling',
                    active: false,
                    disabled: false
                },
                {
                    name: 'Ванная с окном',
                    value: 'oknoVVannoj',
                    active: false,
                    disabled: false
                },

                {
                    name: 'Окна на 2 стороны',
                    value: 'oknaNa2Storony',
                    active: false,
                    disabled: false
                },
                // {
                //     name: 'Вид во двор',
                //     value: 'vidVoDvor',
                //     active: false,
                // },
            ],
        },
        redFlats: false,
        selectedParams: {},
        //Список иконок, возможных для выбора в файле FlatsItemSvg по флагу 'flats_'
        advantagesSvgIcons: [
            'highCeiling',
            'loggia',
            'patio',
            'livingKitchen',
            'sauna',
            'bath',
            'dressingRoom',
            'panoramicGlazing',
            'vidNaReku',
            'vidVoDvor',
            'oknaNa2Storony',
            'cornerGlazing',
        ],

        //Возможные параметры фильтрации
        params: ['floor', 'price', 'area'],
        //Параметры, которые были выбраны пользователем
        interactedParams: {
            floor: {
                min: false,
                max: false
            },
            price: {
                min: false,
                max: false
            },
            area: {
                min: false,
                max: false
            }
        },
        inactiveSliders: {
            floor: false,
            price: false,
            area: false,
        },
        //Параметры фильтрации по range-слайдерам
        //Текущие значения слайдеров
        slidersValues: {
            area: [24.9, 162.7],
            price: [13, 86],
            floor: [1, 20],
        },
        //Крайние значения слайдеров
        slidersExtremeValues: {
            area: [24.9, 162.7],
            price: [13, 86],
            floor: [1, 20],
        },
        //Значения инпутов
        inputsValues: {
            area: [24.9, 162.7],
            price: [13, 86],
            floor: [1, 20],
        },
        //Значения ползунков в фильтре по умолчанию
        initialValues: {
            area: [0, 10],
            price: [0, 10],
            floor: [0, 10],
        },
    },
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
    selectedCategories: [],
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
    //Квартиры, которые выводятся на страницу
    flats: [],
    //Все квартиры, взятые с сервера
    allFlats: [],
    //Похожие квартиры
    similarFlats: [],
    //Квартиры после фильтрации чекбоксами
    filteredByCheckboxFlats: [],
    //Отфильтрован список квартир?
    isFiltered: false,
    //Выбранная квартира
    currentFlat: '',
    apartmentNumber: '',
    flatInfo: null,
    //Статус квартиры
    flatStatus: {
        free: 'free',
        reserve: 'reserve',
    },
    //Список специальных условий
    benefits: [],
    //Активное спец.условие
    activeBenefit: {},
    filtersSelect: {
        selectAmountRoom: 'Любой',
        selectFrame: 'Любой',
        selectRent: 'Любой',
        selectRoom: 'Любоe',
    },

    //Выбор по генплану
    //Выбор секции
    sectionsPage: {
        activeSectionId: null,
        filteredBySection: [],
        studiosArray: [],
        room1Array: [],
        room2Array: [],
        room3Array: [],
        room4Array: [],
        room5Array: [],
        minPrice: {
            studiosArray: null,
            room1Array: null,
            room2Array: null,
            room3Array: null,
            room4Array: null,
            room5Array: null,
        },
    },

    //Выбор этажа
    floorsPage: {
        activeFloorId: null,
        filteredByFloor: [],
        filteredByRooms: [],
        penthouseArray: [],
        arrays: {
            studiosArray: [],
            room1Array: [],
            room2Array: [],
            room3Array: [],
            room4Array: [],
            room5Array: [],
        },
        minPrice: {
            studiosArray: null,
            room1Array: null,
            room2Array: null,
            room3Array: null,
            room4Array: null,
            room5Array: null,
        },
    },
    //Фильтр по чекбоксу
    //Фильтрация по количеству комнат
    filterRooms: [
        { name: 'Ст', value: '0', active: false, disabled: false, array: 'studiosArray' },
        { name: '1', value: '1', active: false, disabled: false, array: 'room1Array' },
        { name: '2', value: '2', active: false, disabled: false, array: 'room2Array' },
        { name: '3', value: '3', active: false, disabled: false, array: 'room3Array' },
        { name: '4', value: '4', active: false, disabled: false, array: 'room4Array' },
        { name: '5', value: '5', active: false, disabled: false, array: 'room5Array' },
    ],

    //Выбор квартиры на этаже
    floorPage: {
        filteredByFloor: [],
    },
    activeFloors: [],
    activeFlat: null,
};

const catalogSlice = createSlice({
    name: 'flatsSlice',
    initialState,
    reducers: {
        //Получение минимальных и максимальных параметров для фильтрации по range-слайдерам
        setExtremeSlidersValues(state) {
            if (state.allFlats.length === 0) {
                state.filterParameters.params.forEach(param => {
                    const maxParam = state.filterParameters.initialValues[param][1],
                        minParam = state.filterParameters.initialValues[param][0];

                    state.filterParameters.slidersExtremeValues[param] = [minParam, maxParam];
                    state.filterParameters.slidersValues[param] = [minParam, maxParam];
                    state.filterParameters.inputsValues[param] = [minParam, maxParam];
                })
            }

            // Расчет максимумов и минимумов для слайдеров с обновленными данными
            state.filterParameters.params.forEach(param => {
                const interactedParams = state.filterParameters.interactedParams[param]

                const maxParam = calcTheLargest(state.flats, param),
                    minParam = calcTheLeast(state.flats, param, maxParam)

                if (minParam === maxParam && minParam !== 0) {
                    const [initialMinParam, initialMaxParam] = state.filterParameters.initialValues[param];

                    if (!interactedParams.min) {
                        state.filterParameters.slidersValues[param][0] = initialMinParam;
                        state.filterParameters.inputsValues[param][0] = minParam;
                        state.filterParameters.slidersExtremeValues[param][0] = initialMinParam;
                    }

                    if (!interactedParams.max) {
                        state.filterParameters.slidersValues[param][1] = initialMaxParam;
                        state.filterParameters.inputsValues[param][1] = maxParam;
                        state.filterParameters.slidersExtremeValues[param][1] = initialMaxParam;
                    }

                    if (!interactedParams.min && !interactedParams.max) {
                        state.filterParameters.inactiveSliders[param] = true;
                    }

                } else if (minParam !== 0 && minParam !== maxParam) {
                    state.filterParameters.inactiveSliders[param] = false;

                    if (!interactedParams.min) {
                        state.filterParameters.slidersValues[param][0] = minParam;
                        state.filterParameters.inputsValues[param][0] = minParam;
                        state.filterParameters.slidersExtremeValues[param][0] = minParam;
                    }

                    if (!interactedParams.max) {
                        state.filterParameters.slidersValues[param][1] = maxParam;
                        state.filterParameters.inputsValues[param][1] = maxParam;
                        state.filterParameters.slidersExtremeValues[param][1] = maxParam;
                    }
            }
            })
        },
        checkRelevantAttributes(state) {
            //Делаем все характеристики пустыми
            const attributes = state.filterParameters.byCheckbox.advantages.map(item =>
                ({value: item.value, empty: true})
            );

            //Если характеристика заполнена хотя бы у одной квартиры, то делаем её не пустой
            for (let i = 0; i < state.allFlats.length; i++) {
                const flat = state.allFlats[i];

                Object.keys(flat.attributes).forEach(key => {
                    if (flat.attributes[key]) {
                        attributes.forEach(item => {
                            if (item.value === key) {
                                item.empty = false;
                            }
                        })
            }
                })
            }

            state.filterParameters.byCheckbox.advantages =
                state.filterParameters.byCheckbox.advantages
                    .filter((item, index) => !attributes[index].empty);
        },
        //Обновить значения для отображения в изменяемом range-слайдере
        updateInputValues(state, action) {
            //Записываем новые значения в активный слайдер
            state.filterParameters.inputsValues[action.payload.slider] = [+action.payload.values[0], +action.payload.values[1]];
        },
        //Обновить значения для расчетов в изменяемом range-слайдере
        updateSliderValues(state, action) {
            //Проверка на изменение значений - если значения отличаются от максимальных/минимальных, то
            //пользователь взаимодействовал с ползунками, записываем это в interactedParams и
            //записываем новые значения в slidersValues
            //иначе - пользователь вернул значения в исходное положение, записываем false в interactedParams
            //и записываем значения из initialValues в slidersValues
            const slider = action.payload.slider;
            const newSliderValues = [+action.payload.values[0], +action.payload.values[1]]
            const extremeValues = state.filterParameters.slidersExtremeValues[action.payload.slider]
            const initialValues = state.filterParameters.initialValues[action.payload.slider]
            // const newValuesAreEqual = newSliderValues[0] === newSliderValues[1] ;

            newSliderValues.forEach((value, index) => {
                const key = index === 0 ? "min" : "max";
                // const preposition = index === 0 ? "от " : "до ";

                if (value !== extremeValues[index]) {
                    state.filterParameters.interactedParams[slider][key] = true;
                    state.filterParameters.slidersValues[slider][index] = value;
                    // state.filterParameters.ableToResetParams[slider][index] =
                    //     newValuesAreEqual
                    //         ? value
                    //         : (preposition
                    //             + " "
                    //             + (action.payload.values[0] > 1000000 ? editPriceInMillions(value)
                    //                 .toFixed(1) : value)
                    //             + (slider === "price" ? " млн. руб." : slider === "area" ? " м²" : ""))
                } else {
                    state.filterParameters.interactedParams[slider][key] = false;
                    state.filterParameters.slidersValues[slider][index] = initialValues[index];
                    // state.filterParameters.ableToResetParams[slider][index] = "";
                }
            })

            catalogSlice.caseReducers.filterFlats(state);
        },

        filterFlats(state) {
            //Фильтрация по range-слайдерам
            const interactedParams = state.filterParameters.interactedParams;

            const slidersValues = {
                price: [0, 0],
                area: [0, 0],
                floor: [0, 0]
            }

            Object.keys(interactedParams).forEach(key => {
                if (interactedParams[key].min) {
                    slidersValues[key][0] = state.filterParameters.slidersValues[key][0]
                } else {
                    slidersValues[key][0] = state.filterParameters.initialValues[key][0]
                }

                if (interactedParams[key].max) {
                    slidersValues[key][1] = state.filterParameters.slidersValues[key][1]
                } else {
                    slidersValues[key][1] = state.filterParameters.initialValues[key][1]
                }
            })

            const bySliders = (flat) => {
                return flat.currentPrice >= slidersValues.price[0] && flat.currentPrice <= slidersValues.price[1] &&
                    flat.area >= slidersValues.area[0] && flat.area <= slidersValues.area[1] &&
                    flat.floor >= slidersValues.floor[0] && flat.floor <= slidersValues.floor[1];
            }

            const filtered = state.allFlats.filter(bySliders);

            //Фильтрация по чекбоксам

            //Получение актуальных параметров для фильтрации
            state.filterParameters.selectedParams = {
                rooms: getSelectedParams(state.filterParameters.byCheckbox, 'rooms').replace('0', 'studio'),
                sections: getSelectedParams(state.filterParameters.byCheckbox, 'sections'),
                advantages: getSelectedParams(state.filterParameters.byCheckbox, 'advantages').split(','),
            }

            //Делаем все не выбранные характеристики недоступными
            Object.keys(state.filterParameters.byCheckbox).forEach(key => {
                state.filterParameters.byCheckbox[key].forEach(item => {
                    item.disabled = !item.active;
                })
            })

            const bySections = (flat) => {
                return state.filterParameters.selectedParams.sections ? state.filterParameters.selectedParams.sections.includes(flat.bulk.number) : true;
            }

            const byAdvantages = (flat) => {
                for (let i = 0; i < state.filterParameters.selectedParams.advantages.length; i++) {
                    if (!flat.attributes[state.filterParameters.selectedParams.advantages[i]]) {
                        return false;
                    }
                }
                return true;
            }

            const byRooms = (flat) => {
                return state.filterParameters.selectedParams.rooms ? state.filterParameters.selectedParams.rooms.includes(flat.rooms) : true;
            }

            const byCheckbox = {
                rooms: byRooms,
                sections: bySections,
                advantages: byAdvantages
            }

            const findRoom = (flat) => {
                state.filterParameters.byCheckbox.rooms.forEach(item => {
                    if ((item.value === "0" && flat.rooms === "studio") || (flat.rooms === +item.value)) {
                        item.disabled = false;
                    }
                })
                }

            const findSection = (flat) => {
                state.filterParameters.byCheckbox.sections.forEach(item => {
                    if ((item.value === "Все корпуса") || (flat.bulk.number === +item.value)) {
                        item.disabled = false;
                    }
                })
            }

            const findAdvantage = (flat) => {
                state.filterParameters.byCheckbox.advantages.forEach(item => {
                    if (flat.attributes[item.value as string]) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        item.disabled = false;
                    }
                })
            }

            const findCheckbox = {
                rooms: findRoom,
                sections: findSection,
                advantages: findAdvantage
            }

            const params = ['rooms', 'sections', 'advantages']
            const chosenParams = []
            Object.keys(state.filterParameters.selectedParams).forEach(key => {
                const param = state.filterParameters.selectedParams[key];
                if ((param && !param.length) || (param.length && param[0]) ) {
                    chosenParams.push(key)
                }
            })

            const amountOfChosenParams = chosenParams.length

            if (amountOfChosenParams === 0) {
                state.flats = filtered;
                catalogSlice.caseReducers.setAvailableCheckboxes(state)
            }

            if (amountOfChosenParams === 1) {
                if (chosenParams[0] !== 'advantages') {
                    filtered.forEach(flat => {
                        findCheckbox[chosenParams[0]](flat)
                    })
                }

                state.flats = filtered.filter(byCheckbox[chosenParams[0]])
                state.flats.forEach(flat => {
                    findCheckbox.advantages(flat)
                })

                const restOfParams = params.filter(param => param !== chosenParams[0] && param !== 'advantages')

                state.flats.forEach(flat => {
                    restOfParams.forEach(param => {
                        findCheckbox[param](flat)
                    })
                })
            }

            if (amountOfChosenParams === 2) {
                const thirdParam = params.filter(param => param !== chosenParams[0] && param !== chosenParams[1])[0]

                state.flats = filtered.filter(byCheckbox[chosenParams[0]]).filter(byCheckbox[chosenParams[1]])
                state.flats.forEach(flat => {
                    findCheckbox.advantages(flat)
                    findCheckbox[thirdParam](flat)
                })

                const filteredByFirstParam = filtered.filter(byCheckbox[chosenParams[0]])
                filteredByFirstParam.forEach(flat => {
                    findCheckbox[chosenParams[1]](flat)
                })

                const filteredBySecondParam = filtered.filter(byCheckbox[chosenParams[1]])
                filteredBySecondParam.forEach(flat => {
                    findCheckbox[chosenParams[0]](flat)
                })
            }

            if (amountOfChosenParams === 3) {
                state.flats = filtered.filter(byCheckbox.sections).filter(byCheckbox.rooms).filter(byCheckbox.advantages)

                state.flats.forEach(flat => {
                    findCheckbox.advantages(flat)
                })

                const filteredBySectionsAndAttributes = filtered.filter(byCheckbox.sections).filter(byCheckbox.advantages)
                filteredBySectionsAndAttributes.forEach(flat => {
                    findCheckbox.rooms(flat)
                })

                const filteredByRoomsAndAttributes = filtered.filter(byCheckbox.rooms).filter(byCheckbox.advantages)
                filteredByRoomsAndAttributes.forEach(flat => {
                    findCheckbox.sections(flat)
                })
            }

            catalogSlice.caseReducers.setExtremeSlidersValues(state);
        },
        setAvailableCheckboxes(state) {
            //Делаем все не выбранные характеристики недоступными
            Object.keys(state.filterParameters.byCheckbox).forEach(key => {
                state.filterParameters.byCheckbox[key].forEach(item => {
                    item.disabled = !item.active;
                })
            })
            //Если характеристика заполнена хотя бы у одной квартиры, то делаем её доступной
            for (let i = 0; i < state.flats.length; i++) {
                const flat = state.flats[i];

                Object.keys(flat.attributes).forEach(key => {
                    if (flat.attributes[key]) {
                        state.filterParameters.byCheckbox.advantages.forEach(item => {
                            if (item.value === key) {
                                item.disabled = false;
                            }
                        })
                    }
                })

                state.filterParameters.byCheckbox.sections.forEach(item => {
                    if ((item.value === "Все корпуса") || (flat.bulk.number === +item.value)) {
                        item.disabled = false;
                    }
                })

                state.filterParameters.byCheckbox.rooms.forEach(item => {
                    if ((item.value === "0" && flat.rooms === "studio") || (flat.rooms === +item.value)) {
                        item.disabled = false;
                    }
                })
            }
        },

        resetOnlyCheckboxes(state) {
            const checkboxParams = Object.keys(state.filterParameters.byCheckbox);

            checkboxParams.forEach(item => {
                state.filterParameters.byCheckbox[item] = resetSortingParameter(state.filterParameters.byCheckbox[item]);
            })
        },

        resetFilters(state) {
            const checkboxParams = Object.keys(state.filterParameters.byCheckbox);

            checkboxParams.forEach(item => {
                state.filterParameters.byCheckbox[item] = resetSortingParameter(state.filterParameters.byCheckbox[item]);
            })

            const interactedParams = Object.keys(state.filterParameters.interactedParams);
            interactedParams.forEach(item => {
                state.filterParameters.interactedParams[item].max = false;
                state.filterParameters.interactedParams[item].min = false;
            })

            // Object.keys(state.filterParameters.ableToResetParams).forEach(key => state.filterParameters.ableToResetParams[key] = []);

            state.flats = state.allFlats;
            catalogSlice.caseReducers.setExtremeSlidersValues(state);
            catalogSlice.caseReducers.setAvailableCheckboxes(state)
        },

        toggleActiveSearchParams(state, action) {
            if (action.payload.id.includes('rooms')) {
                booleanSwitch(state.filterParameters.byCheckbox, 'rooms', 'active', action.payload.value);
            } else if (action.payload.id.includes('sections')) {
                if (action.payload.value === 'Все корпуса') {
                    state.filterParameters.byCheckbox.sections = state.filterParameters.byCheckbox.sections.map((item) => {
                        return { name: item.name, value: item.value, active: false, disabled: false };
                    });
                } else {
                    booleanSwitch(state.filterParameters.byCheckbox, 'sections', 'active', action.payload.value);
                }
            } else if (action.payload.id.includes('red')) {
                booleanSwitch(state.filterParameters.byCheckbox, 'redPrice', 'active', action.payload.value);
            } else if (action.payload.id.includes('view')) {
                booleanSwitch(state.filterParameters.byCheckbox, 'view', 'active', action.payload.value);
            } else if (action.payload.id.includes('windows')) {
                booleanSwitch(state.filterParameters.byCheckbox, 'windows', 'active', action.payload.value);
            } else {
                booleanSwitch(state.filterParameters.byCheckbox, 'advantages', 'active', action.payload.value);
            }

            catalogSlice.caseReducers.filterFlats(state);
        },
        filterBySection(state, action) {
            if (state.sectionsPage.activeSectionId !== action.payload && state.allFlats.length !== 0) {
                state.sectionsPage.activeSectionId = action.payload;
                state.sectionsPage.filteredBySection = state.allFlats.filter(
                    (item: IFlat) => item.bulk.number === +state.sectionsPage.activeSectionId,
                );

                const rooms = [
                    {
                        number: 'studio',
                        array: 'studiosArray',
                        value: '0',
                    },
                    {
                        number: 1,
                        array: 'room1Array',
                        value: '1',
                    },
                    {
                        number: 2,
                        array: 'room2Array',
                        value: '2',
                    },
                    {
                        number: 3,
                        array: 'room3Array',
                        value: '3',
                    },
                    {
                        number: 4,
                        array: 'room4Array',
                        value: '4',
                    },
                    {
                        number: 5,
                        array: 'room5Array',
                        value: '5',
                    },
                ];

                rooms.forEach((room) => {
                    //Расчет количества квартир с разным количеством комнат в одной секции (доме)
                    state.sectionsPage[room.array] = state.sectionsPage.filteredBySection.filter((item) => item.rooms === room.number);

                    //Сначала ищем в отфильтрованных по этажу квартирах все квартиры с определенным количеством комнат
                    state.sectionsPage.minPrice[`${room.array}`] = state.sectionsPage[`${room.array}`];

                    if (state.sectionsPage.minPrice[`${room.array}`].length !== 0) {
                        //Считаем максимальную и минимальную стоимость квартир по ключу mainBenefit.benefitPrice
                        const maxPrice = calcTheLargest(state.sectionsPage.minPrice[`${room.array}`], 'currentPrice');
                        state.floorsPage.minPrice[`${room.array}`] = calcTheLeast(
                            state.sectionsPage.minPrice[`${room.array}`],
                            'currentPrice',
                            maxPrice,
                        );
                    }
                    // state.filterRooms.find((e) => e.value === room.value)['active'] = false;
                    //Если в секции (доме) нет квартир с определенным количеством комнат, то в форме фильтрации делаем кнопку не активной
                    // if (state.sectionsPage[room.array].length === 0) {
                    //     state.filterRooms.find((e) => e.value === room.value)['disabled'] = true;
                    // } else {
                    //     state.filterRooms.find((e) => e.value === room.value)['disabled'] = false;
                    // }
                });
            }
        },
        filterByFloor(state, action) {
            state.floorsPage.activeFloorId = action.payload.floorId;
            state.sectionsPage.activeSectionId = action.payload.houseId;

            state.sectionsPage.filteredBySection = state.allFlats.filter(
                (item: IFlat) => item.bulk.number === +state.sectionsPage.activeSectionId,
            );

            state.floorPage.filteredByFloor = state.sectionsPage.filteredBySection.filter((item: IFlat) => {
                return item?.floor === +state.floorsPage.activeFloorId;
            });
        },
        filterByRoom(state, action) {
            if (state.floorsPage.activeFloorId === action.payload.id) {
                state.floorsPage.activeFloorId = action.payload.id;
                state.sectionsPage.filteredBySection = state.allFlats.filter((item: IFlat) => {
                    return item.bulk.number === +action.payload.houseId;
                });
                //Если квартиры по этажу не отфильтрованы

                //Вариации квартир
                const rooms = [
                    {
                        id: 'studio',
                        array: 'studiosArray',
                    },
                    {
                        id: 1,
                        array: 'room1Array',
                    },
                    {
                        id: 2,
                        array: 'room2Array',
                    },
                    {
                        id: 3,
                        array: 'room3Array',
                    },
                    {
                        id: 4,
                        array: 'room4Array',
                    },
                    {
                        id: 5,
                        array: 'room5Array',
                    },
                ];

                rooms.forEach((item) => {
                    //Сначала ищем в отфильтрованных по этажу квартирах все квартиры с определенным количеством комнат
                    state.floorsPage.arrays[`${item.array}`] = state.floorPage.filteredByFloor.filter(
                        (elem) => elem.rooms === (item.id === 'studio' ? item.id : +item.id),
                    );

                    //Если квартиры с данным количеством комнат есть
                    if (state.floorsPage.arrays[`${item.array}`].length !== 0) {
                        //Считаем максимальную и минимальную стоимость квартир по ключу mainBenefit.benefitPrice
                        const maxPrice = calcTheLargest(state.floorsPage.arrays[`${item.array}`], 'real_price');
                        state.floorsPage.minPrice[`${item.array}`] = calcTheLeast(
                            state.floorsPage.arrays[`${item.array}`],
                            'price',
                            maxPrice,
                        );
                    }
                });
            }
        },
        setActiveFloors(state, action) {
            state.activeFloors = [];
            state.sectionsPage.activeSectionId = action.payload.houseId;
            state.sectionsPage.filteredBySection = state.allFlats.filter(
                (item: IFlat) => item.bulk.number === +state.sectionsPage.activeSectionId,
            );
            //Считаем самый первый и самый последний этаж
            const maxFloor = calcTheLargest(state.sectionsPage.filteredBySection, 'floor');
            const minFloor = calcTheLeast(state.sectionsPage.filteredBySection, 'floor', maxFloor);
            for (let i = minFloor; i <= maxFloor; ++i) {
                const filtered = state.sectionsPage.filteredBySection.filter((item) => item.floor === i);

                if (filtered.length !== 0) {
                    state.activeFloors.push({
                        id: i,
                        disabled: false,
                    });
                } else {
                    state.activeFloors.push({
                        id: i,
                        disabled: true,
                    });
                }
            }
        },
        sortFlats(state, action) {
            // Исключаем фильтр по характеристикам
            if (action.payload.value !== 'advantages') {
                let direction = state.sortParameters.direction;

                if (action.payload.placeCall === state.inTableHead) {
                    //Если выхов произошел по клику на заголовок таблицы
                    //переключить направления сортировки
                    //   if (action.payload.direction) {
                    //       if (action.payload.direction === 'asc_') {
                    //           direction = 'asc_';
                    //       } else {
                    //           direction = 'desc_';
                    //       }
                    //   }

                    if (direction === 'asc_') {
                        direction = 'desc_';
                    } else {
                        direction = 'asc_';
                    }
                    state.sortParameters = {
                        value: action.payload.value,
                        direction,
                    };
                }

                if (action.payload.value === 'rooms') {
                    const array = state[action.payload.array].map((flat: IFlat) => changeStudioValue(flat, 'studio', '0'));
                    sortNumber(array, state.sortParameters.value, state.sortParameters.direction);
                    state[action.payload.array] = array.map((flat: IFlat) => changeStudioValue(flat, '0', 'studio'));
                } else if (action.payload.value === 'number_stage') {
                    if (state.sortParameters.direction === 'asc_') {
                        state[action.payload.array]?.sort((a: IFlat, b: IFlat) => a.bulk.number - b.bulk.number);
                    } else {
                        state[action.payload.array]?.sort((a: IFlat, b: IFlat) => b.bulk.number - a.bulk.number);
                    }
                } else if (action.payload.value === 'real_price') {
                    if (state.sortParameters.direction === 'asc_') {
                        state[action.payload.array].sort((a: IFlat, b: IFlat) => a.currentPrice - b.currentPrice);
                    } else {
                        state[action.payload.array].sort((a: IFlat, b: IFlat) => b.currentPrice - a.currentPrice);
                    }
                } else {
                    sortNumber(state[action.payload.array], state.sortParameters.value, state.sortParameters.direction);
                }
            }
        },
        resetCurrentFlat(state) {
            state.currentFlat = '';
            state.apartmentNumber = '';
        },
        setBenefits(state, action) {
            //При переходе на страницу записываем в стейт все доступные формы привелегий,
            //"Выгодная цена" по умолчанию активна
            state.benefits = action.payload.map((item) => checkParameterAndToggleStatus(item.id, 125191, item, 116457));
            state.activeBenefit = state.benefits.find((item) => item.checked === true);
        },
        toggleActiveBenefit(state, action) {
            if (action.payload !== state.activeBenefit.id) {
                state.benefits = state.benefits.map((item) => checkParameterAndToggleStatus(item.id, action.payload, item));
                state.activeBenefit = state.benefits.find((item) => item.checked === true);
            }
        },
        setCurrentFlat(state: any, action) {
            state.apartmentNumber = action.payload;
            state.currentFlat = state.flats.find((item) => {
                return item.number === state.apartmentNumber;
            });
        },
        setActiveFlat(state, action) {
            state.activeFlat = action.payload;
        },
        handleBenefits(state: any, action) {
            state.filterBenefits = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.urls.getResidential.status = 'loading';
                state.urls.getResidential.error = null;
                console.log('Идет запрос на сервер...');
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.allFlats = action.payload?.flats;
                state.flats = action.payload?.flats;
                console.log('Квартиры загрузились');

                const maxFloor = calcTheLargest(state.flats, 'floor')
                const minFloor = calcTheLeast(state.flats, 'floor', maxFloor)

                state.filterParameters.initialValues = {
                    area: [action.payload.area.min, action.payload.area.max],
                    price: [action.payload.price.min, action.payload.price.max],
                    floor: [minFloor, maxFloor]
                }

                catalogSlice.caseReducers.checkRelevantAttributes(state);
                catalogSlice.caseReducers.setExtremeSlidersValues(state);
                catalogSlice.caseReducers.setAvailableCheckboxes(state)

                state.redFlats = action.payload?.flats.filter((item) => item.redPrice).length < 0;
                state.urls.getResidential.initial = true;
                state.urls.getResidential.status = true;

                catalogSlice.caseReducers.sortFlats(state, {
                    payload: {
                        value: state.sortParameters.value,
                        placeCall: state.inForm,
                        array: "flats"
                    },
                    type: ""
                });

                state.sections = state.sections.map((el, i: number) => {
                    if (+el.id === action.payload.bulks[i]?.number) {
                        return { id: el.id, visible: true };
                    } else {
                        return { id: el.id, visible: false };
                    }
                });
            })
            .addCase(fetchCatalog.rejected, (state) => {
                console.log('Ошибка при запросе на сервер');
                state.urls.getResidential.error = 'error';
                state.urls.getResidential.status = null;
            })
            .addCase(fetchFlat.pending, () => {
                console.log('Квартира загружается');
            })
            .addCase(fetchFlat.fulfilled, (state, action) => {
                console.log('Квартира доступна');
                state.flatInfo = action.payload;
                state.similarFlats = action.payload.similar;
            })
            .addCase(fetchFlat.rejected, () => {
                console.log('Ошибка загрузки квартиры');
            }),
});

export const {
    resetOnlyCheckboxes,
    toggleActiveSearchParams,
    filterBySection,
    filterByFloor,
    filterByRoom,
    sortFlats,
    setActiveFloors,
    resetFilters,
    updateInputValues,
    updateSliderValues,
    filterFlats
} = catalogSlice.actions;

export default catalogSlice.reducer;
