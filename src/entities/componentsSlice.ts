import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    openDemonstration: boolean;
    showFlatDescription: boolean;
    isMobileMenuFilters: boolean;
    isTabletMenuFilters: boolean;
    isLoadSvgFlat: boolean;
}

const initialState: IInitialState = {
    openDemonstration: false,
    showFlatDescription: false,
    isMobileMenuFilters: false,
    isTabletMenuFilters: false,
    isLoadSvgFlat: false,
};

export const componentsSlice = createSlice({
    name: 'componentsstate',
    initialState,
    reducers: {
        handleOpenDemonstration(state, action) {
            state.openDemonstration = action.payload;
        },
        handleShowFlatDescription(state, action) {
            state.showFlatDescription = action.payload;
        },
        handleTabletMenuFilters(state, action) {
            state.isTabletMenuFilters = action.payload;
        },
        handleMobileMenuFilters(state, action) {
            state.isMobileMenuFilters = action.payload;
        },
        handleLoadSvgFlat(state, action) {
            state.isLoadSvgFlat = action.payload;
        },
    },
});

export const { handleOpenDemonstration, handleShowFlatDescription, handleMobileMenuFilters, handleTabletMenuFilters, handleLoadSvgFlat } =
    componentsSlice.actions;

export default componentsSlice.reducer;
