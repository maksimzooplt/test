import { createAction, props } from '@ngrx/store';
import { RecordsEntity } from './records.models';

export const init = createAction('[Records Page] Init');

export const loadRecordsSuccess = createAction(
  '[Records/API] Load Records Success',
  props<{ records: RecordsEntity[] }>()
);

export const loadRecordsFailure = createAction(
  '[Records/API] Load Records Failure',
  props<{ error: any }>()
);
