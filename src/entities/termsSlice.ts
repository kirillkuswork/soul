import { createSlice } from '@reduxjs/toolkit';
import api from '../data/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { ICalcData, IFlats, INavList, IQA, ITermsPageData } from '../assets/data/interfaces';

export const termsApi = createApi({
    reducerPath: 'termsApi',
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
        getNavList: builder.query<INavList, string>({
            query: () => api.urlNavList
        }),
        getTradeIn: builder.query<ITermsPageData[], any>({
            query: () => api.urlTradeIn
        }),
        getQa: builder.query<IQA[], any>({
            query: () => api.urlQa
        }),
        getSpecialMortgages: builder.query<ITermsPageData[], any>({
            query: () => api.urlSpecialMortgages
        }),
        getMortgages: builder.query<ITermsPageData, any>({
            query: () => api.urlMortgages
        }),
        getCalcData: builder.query<ICalcData[], any>({
            query: () => api.urlCalcData
        }),
        getInstallments: builder.query<ITermsPageData[], any>({
            query: () => api.urlInstallments
        }),
        getSpecialInstallments: builder.query<ITermsPageData[], any>({
            query: () => api.urlSpecialInstallments
        }),
        getCash: builder.query<ITermsPageData, any>({
            query: () => api.urlCash
        }),
        getFlats: builder.query<IFlats, any>({
            query: () => api.urlFlats
        }),
    }),
});

const initialState = {
    standardMin: '0',
};

export const termsSlice = createSlice({
    name: 'termsSlice',
    initialState,
    reducers: {
        handleMinStandardMortgage(state, action) {
            switch (action.payload.standardMin) {
                case 'min':
                default: {
                    state.standardMin = action.payload.value;
                }
            }
        },
    },
});

export const { handleMinStandardMortgage } = termsSlice.actions;

export default termsSlice.reducer;

export const {
    useGetNavListQuery,
    util: { getRunningQueriesThunk },
} = termsApi;

export const {
    getTradeIn,
    getQa,
    getSpecialMortgages,
    getMortgages,
    getCalcData,
    getInstallments,
    getSpecialInstallments,
    getCash,
    getFlats
} = termsApi.endpoints;
