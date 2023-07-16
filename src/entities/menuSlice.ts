import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IBurgerMenuItem } from '../features/BurgerModal/BurgerModal';

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: api.urlMain,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getHeaderMenu: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuHeader,
        }),
        getHeaderMenuTopLeftList: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuBurgerTopLeft,
        }),
        getHeaderMenuTopRightList: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuBurgerTopRight,
        }),
        getHeaderMenuBottomLeftList: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuBurgerBottomLeft,
        }),
        getFooterMenuLeftList: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuFooterLeft,
        }),
        getFooterMenuRightList: builder.query<IBurgerMenuItem, string>({
            query: () => api.urlMenuFooterRight,
        }),
    }),
});

export const {
    useGetHeaderMenuQuery,
    useGetFooterMenuLeftListQuery,
    useGetFooterMenuRightListQuery,
    useGetHeaderMenuBottomLeftListQuery,
    useGetHeaderMenuTopLeftListQuery,
    useGetHeaderMenuTopRightListQuery,
    util: { getRunningQueriesThunk },
} = menuApi;
