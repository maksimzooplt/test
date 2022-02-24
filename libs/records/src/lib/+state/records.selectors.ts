import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RECORDS_FEATURE_KEY, State, recordsAdapter } from './records.reducer';

// Lookup the 'Records' feature state managed by NgRx
export const getRecordsState =
  createFeatureSelector<State>(RECORDS_FEATURE_KEY);

const { selectAll, selectEntities } = recordsAdapter.getSelectors();

export const getRecordsLoaded = createSelector(
  getRecordsState,
  (state: State) => state.loaded
);

export const getRecordsError = createSelector(
  getRecordsState,
  (state: State) => state.error
);

export const getAllRecords = createSelector(getRecordsState, (state: State) =>
  selectAll(state)
);

export const getRecordsEntities = createSelector(
  getRecordsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getRecordsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getRecordsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
