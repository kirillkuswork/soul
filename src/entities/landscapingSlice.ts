import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IArchSlider } from '../assets/data/interfaces';

export const landscapingApi = createApi({
    reducerPath: 'landscapingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PROD_DB_HOST,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getFirstLandscapingSlider: builder.query<IArchSlider, number>({
            query: () => api.urlFirstLandscapingSlider,
        }),
        getLastLandscapingSlider: builder.query<IArchSlider, number>({
            query: () => api.urlLastLandscapingSlider,
        }),
    }),
});

export default landscapingApi.reducer;

export const {
    util: { getRunningQueriesThunk },
} = landscapingApi;

export const { getLastLandscapingSlider, getFirstLandscapingSlider } = landscapingApi.endpoints;
