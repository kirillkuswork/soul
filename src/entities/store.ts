import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import catalogSlice from './catalogSlice';
import favoriteSlice from './favoriteSlice';
import componentsSlice from './componentsSlice';
import termsSlice from './termsSlice';
import { useDispatch } from 'react-redux';
import { menuApi } from './menuSlice';
import documentsSlice from './documentsSlice';
import { termsApi } from './termsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainApi } from './mainSlice';
import gallerySlice, { galleryApi } from './gallerySlice';
import { architectureApi } from './architectureSlice';
import { newsApi } from './newsSlice';
import { landscapingApi } from './landscapingSlice';
import { isofactoryApi } from './isofactorySlice';
import { locationApi } from './locationSlice';
import { infrastructureApi } from './infrastructureSlice';
import { progressApi } from './progressSlice';
import { historyApi } from './historySlice';
import { contactsApi } from './contactsSlice';

const reducers = combineReducers({
    [termsApi.reducerPath]: termsApi.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [architectureApi.reducerPath]: architectureApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [landscapingApi.reducerPath]: landscapingApi.reducer,
    [isofactoryApi.reducerPath]: isofactoryApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [infrastructureApi.reducerPath]: infrastructureApi.reducer,
    [progressApi.reducerPath]: progressApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    main: mainSlice,
    catalog: catalogSlice,
    favorite: favoriteSlice,
    component: componentsSlice,
    termsInfo: termsSlice,
    docs: documentsSlice,
    gallery: gallerySlice,
});

export const makeStore = () =>
    configureStore({
        reducer: reducers,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                termsApi.middleware,
                mainApi.middleware,
                menuApi.middleware,
                architectureApi.middleware,
                galleryApi.middleware,
                newsApi.middleware,
                landscapingApi.middleware,
                isofactoryApi.middleware,
                locationApi.middleware,
                infrastructureApi.middleware,
                progressApi.middleware,
                historyApi.middleware,
                contactsApi.middleware,
            ),
    });

const store = makeStore();

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);

export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
