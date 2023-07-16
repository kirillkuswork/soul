import { createSlice } from '@reduxjs/toolkit';
import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IArchSlider, IPromos } from '../assets/data/interfaces';
import { Anchor } from '../assets/data/enums';

export interface IState {
    width: number;
    height: number;
    orientation: string;
    contacts: {
        coordinates: number[];
        address: string;
        phone: {
            text: string;
            link: string;
        };
        email: string;
        time: string;
        vk: string;
        tg: string;
    };
    contactsOffice: {
        coordinates: number[];
        address: string;
    };
    showHeader: boolean;
    isBurgerOpen: boolean;
    isDesktopBurgerOpen: boolean;
    visibleHeader: boolean;
    currentAnchor: string;
    modal: {
        modalStatus: string;
        modalOpened: boolean;
    };
    appScroll: boolean;
    appScrollStart: boolean;
    heightScroll: boolean;
    isANewUser: boolean;
    isHeaderColorBlack: boolean;
    fetchError: boolean;
    isFormOpen: boolean;
    isAdaptive: boolean;
    metaData: {
        icon: string;
        title: string;
        description: string;
    };
    listFilter: string;
}

const initialState = {
    width: typeof window === 'object' ? window.innerWidth : 0,
    height: typeof window === 'object' ? window.innerHeight : 0,
    orientation: '',
    contacts: {
        coordinates: [55.708673, 37.691099],
        address: 'Москва, ул. Южнопортовая, дом 1, офис 21',
        phone: {
            text: '+7&nbsp;(495)&nbsp;152-80-14',
            link: '+74951528014',
        },
        email: 'sales@forma.ru',
        time: 'Ежедневно с 9.00 до 21.00',
        vk: 'https://vk.com/soul.forma',
        tg: 'https://t.me/soul_forma',
    },
    contactsOffice: {
        coordinates: [55.810481, 37.523662],
        address: 'Москва, ул. Часовая&nbsp;24, стр.&nbsp;15',
    },
    showHeader: true,
    isBurgerOpen: false,
    isDesktopBurgerOpen: false,
    visibleHeader: true,
    currentAnchor: '',
    modal: {
        modalStatus: '',
        modalOpened: false,
    },
    appScroll: false,
    appScrollStart: false,
    heightScroll: false,
    isANewUser: false,
    isHeaderColorBlack: true,
    fetchError: false,
    isFormOpen: false,
    isAdaptive: false,
    metaData: {
        icon: '',
        title: '',
        description: '',
    },
    listFilter: '',
};

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: api.urlMain,
        prepareHeaders: (headers) => {
            const encodedCredentials = Buffer.from(`${process.env.DB_USER}:${process.env.DB_PASS}`).toString('base64');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Credentials', 'true');
            headers.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
            headers.set(
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            );
            headers.set('Authorization', `Basic ${encodedCredentials}`);

            return headers;
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getPromo: builder.query<IPromos, number>({
            query: () => api.urlPromo,
        }),
        getMainSlider: builder.query<IArchSlider, number>({
            query: () => api.urlMainSlider,
        }),
    }),
});

const mainSlice = createSlice({
    name: 'mainState',
    initialState,
    reducers: {
        handleAnchor(state, action) {
            if (Object.values(Anchor).includes(action.payload.currentAnchor)) {
                state.currentAnchor = action.payload.value;
            }
        },
        handleIsAdaptive(state, action) {
            switch (action.payload.isAdaptive) {
                case 'adaptive': {
                    state.isAdaptive = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleNewUser(state, action) {
            switch (action.payload.isANewUser) {
                case 'new': {
                    state.isANewUser = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleBurger(state, action) {
            switch (action.payload.isBurgerOpen) {
                case 'open': {
                    state.isBurgerOpen = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleDesktopBurger(state, action) {
            switch (action.payload.isDesktopBurgerOpen) {
                case 'open': {
                    state.isDesktopBurgerOpen = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleResizeWindow(state, action) {
            switch (action.payload.width) {
                case 'changed': {
                    const delta = state.width - action.payload.value;
                    state.width = action.payload.value;
                    if (Math.abs(delta) > 60) {
                        window.location.reload();
                    }
                    break;
                }
                default:
                    break;
            }
        },
        handleOrientation(state, action) {
            switch (action.payload.orientation) {
                case 'changed': {
                    state.orientation = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleVisibleHeader(state, action) {
            switch (action.payload.visibleHeader) {
                case 'changed': {
                    state.visibleHeader = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleHeaderColor(state, action) {
            switch (action.payload.isHeaderColorBlack) {
                case 'black': {
                    state.isHeaderColorBlack = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleShowHeader(state, action) {
            switch (action.payload.showHeader) {
                case 'visible': {
                    state.showHeader = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleModal(state, action) {
            switch (action.payload.modal) {
                case 'open':
                    state.modal.modalStatus = action.payload.value;
                    state.modal.modalOpened = true;
                    break;
                case 'close':
                    state.modal.modalOpened = false;
                    break;
                case 'email':
                    state.modal.modalStatus = action.payload.value;
                    state.modal.modalOpened = true;
                    break;
                default:
                    break;
            }
        },
        handleAppScroll(state, action) {
            switch (action.payload.appScroll) {
                case 'changed': {
                    state.appScroll = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleHeightScroll(state, action) {
            switch (action.payload.heightScroll) {
                case 'changed': {
                    state.heightScroll = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        handleAppScrollStart(state, action) {
            switch (action.payload.appScrollStart) {
                case 'changed': {
                    state.appScrollStart = action.payload.value;
                    break;
                }
                default:
                    break;
            }
        },
        updateMetaData: (state, action) => {
            return {
                ...state,
                metaData: {
                    ...state.metaData,
                    ...action.payload,
                },
            };
        },
        setListFilter(state, action) {
            state.listFilter = action.payload.value;
        },
    },
});

export const {
    handleBurger,
    handleAnchor,
    handleResizeWindow,
    handleOrientation,
    handleModal,
    handleAppScroll,
    handleAppScrollStart,
    handleHeightScroll,
    handleVisibleHeader,
    handleNewUser,
    handleHeaderColor,
    handleDesktopBurger,
    handleIsAdaptive,
    updateMetaData,
    setListFilter,
} = mainSlice.actions;

export default mainSlice.reducer;

export const {
    util: { getRunningQueriesThunk },
} = mainApi;

export const { getPromo, getMainSlider } = mainApi.endpoints;
