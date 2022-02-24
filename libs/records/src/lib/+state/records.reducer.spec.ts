import { Action } from '@ngrx/store';

import * as RecordsActions from './records.actions';
import { RecordsEntity } from './records.models';
import { State, initialState, reducer } from './records.reducer';

describe('Records Reducer', () => {
  const createRecordsEntity = (id: string): RecordsEntity => ({
    emergency: {
      emergencyId: id,
      requestTime: new Date()
    },
    device:{
      serialNumber:'defede',
    },
    holder: {
      lastName:'Maks',
      firstName:'Bratukhin'
    }
  });

  describe('valid Records actions', () => {
    it('loadRecordsSuccess should return the list of known Records', () => {
      const records = [
        createRecordsEntity('PRODUCT-AAA'),
        createRecordsEntity('PRODUCT-zzz'),
      ];
      const action = RecordsActions.loadRecordsSuccess({ records });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
