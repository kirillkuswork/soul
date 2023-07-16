import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../data/api';

export const fetchDocuments = createAsyncThunk('documentsSlice/fetchDocuments', async (_, thunkApi) => {
    try {
        const response = await axios.get(api.urlDocuments);
        return response.data;
    } catch (error) {
        return onApiError(thunkApi, error);
    }
});

export const fetchFlats = createAsyncThunk('documentsSlice/fetchDate', async (_, thunkApi) => {
    try {
        const response = await axios.get(api.urlFlats);
        return response.data;
    } catch (error) {
        return onApiError(thunkApi, error);
    }
});

const initialState = {
    documents: null,
    flats: null,
    fetchError: false,
};

export const documentsSlice = createSlice({
    name: 'documentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchDocuments.fulfilled, (state, action) => {
                state.documents = action.payload;
            })
            .addCase(fetchDocuments.rejected, (state) => {
                state.fetchError = true;
            })
            .addCase(fetchFlats.fulfilled, (state, action) => {
                state.flats = action.payload;
            })
            .addCase(fetchFlats.rejected, (state) => {
                state.fetchError = true;
            }),
});

export const {} = documentsSlice.actions;

export default documentsSlice.reducer;

function onApiError(thunkApi, error) {
    console.log(error);
    const message = axios.isAxiosError(error)
        ? error.response
            ? error.response.data.message
                ? error.response.data.message
                : error.response.data.error
                ? error.response.data.error
                : JSON.stringify(error.response.data)
            : error.message
            ? error.message
            : JSON.stringify(error)
        : JSON.stringify(error);
    return thunkApi.rejectWithValue(message);
}
