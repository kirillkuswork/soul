import { AppState } from '../store';

export const selectorsSection = (state: AppState) => state.catalog.sections;
export const selectorsFiltered = (state: AppState) => state.catalog.sectionsPage.filteredBySection;
export const selectorsFlats = (state: AppState) => state.catalog.flats;
export const selectorsInital = (state: AppState) => state.catalog.urls.getResidential.initial;
