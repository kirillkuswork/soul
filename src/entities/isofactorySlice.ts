import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IArchSlider } from '../assets/data/interfaces';

export const isofactoryApi = createApi({
    reducerPath: 'isofactoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PROD_DB_HOST,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getIsoFactoryFirstSlider: builder.query<IArchSlider, number>({
            query: () => api.urlIsoFactoryFirstSlider,
        }),
        getIsoFactorySecondSlider: builder.query<IArchSlider, number>({
            query: () => api.urlIsoFactorySecondSlider,
        }),
        getIsoFactoryLastSlider: builder.query<IArchSlider, number>({
            query: () => api.urlIsoFactoryLastSlider,
        }),
    }),
});

export default isofactoryApi.reducer;

export const {
    util: { getRunningQueriesThunk },
} = isofactoryApi;

export const { getIsoFactoryFirstSlider, getIsoFactorySecondSlider, getIsoFactoryLastSlider } = isofactoryApi.endpoints;
