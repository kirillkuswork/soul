import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IArchSlider } from '../assets/data/interfaces';

export const infrastructureApi = createApi({
    reducerPath: 'infrastructureApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PROD_DB_HOST,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getInfrastructureFirstSlider: builder.query<IArchSlider, number>({
            query: () => api.urlInfrastructureFirstSlider,
        }),
        getInfrastructureSecondSlider: builder.query<IArchSlider, number>({
            query: () => api.urlInfrastructureSecondSlider,
        }),
    }),
});

export default infrastructureApi.reducer;

export const {
    util: { getRunningQueriesThunk },
} = infrastructureApi;

export const { getInfrastructureFirstSlider, getInfrastructureSecondSlider } = infrastructureApi.endpoints;
