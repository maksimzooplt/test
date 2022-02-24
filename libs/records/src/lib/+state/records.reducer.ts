import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as RecordsActions from './records.actions';
import { RecordsEntity } from './records.models';

export const RECORDS_FEATURE_KEY = 'records';

export interface State extends EntityState<RecordsEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface RecordsPartialState {
  readonly [RECORDS_FEATURE_KEY]: State;
}

export const recordsAdapter: EntityAdapter<RecordsEntity> =
  createEntityAdapter<RecordsEntity>({
    selectId: (item: RecordsEntity) => item.emergency.emergencyId,
  });

export const initialState: State = recordsAdapter.getInitialState({
  loaded: false,
});

const recordsReducer = createReducer(
  initialState,
  on(RecordsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(RecordsActions.loadRecordsSuccess, (state, { records }) =>
    recordsAdapter.setAll(records, { ...state, loaded: true })
  ),
  on(RecordsActions.loadRecordsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return recordsReducer(state, action);
}
