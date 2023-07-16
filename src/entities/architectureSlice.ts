import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IArchSlider } from '../assets/data/interfaces';

export const architectureApi = createApi({
    reducerPath: 'architectureApi',
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
        getArchSlider: builder.query<IArchSlider, number>({
            query: () => api.urlArchSlider,
        }),
        getSecondArchSlider: builder.query<IArchSlider, number>({
            query: () => api.urlSecondArchSlider,
        }),
    }),
});

export default architectureApi.reducer;

export const {
    util: { getRunningQueriesThunk },
} = architectureApi;

export const { getArchSlider, getSecondArchSlider } = architectureApi.endpoints;
