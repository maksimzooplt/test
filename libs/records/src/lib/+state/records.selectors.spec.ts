import { RecordsEntity } from './records.models';
import {
  recordsAdapter,
  RecordsPartialState,
  initialState,
} from './records.reducer';
import * as RecordsSelectors from './records.selectors';

describe('Records Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRecordsId = (it: RecordsEntity) => it.emergency.emergencyId;
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

  let state: RecordsPartialState;

  beforeEach(() => {
    state = {
      records: recordsAdapter.setAll(
        [
          createRecordsEntity('PRODUCT-AAA'),
          createRecordsEntity('PRODUCT-BBB'),
          createRecordsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Records Selectors', () => {
    it('getAllRecords() should return the list of Records', () => {
      const results = RecordsSelectors.getAllRecords(state);
      const selId = getRecordsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = RecordsSelectors.getSelected(state) as RecordsEntity;
      const selId = getRecordsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getRecordsLoaded() should return the current "loaded" status', () => {
      const result = RecordsSelectors.getRecordsLoaded(state);

      expect(result).toBe(true);
    });

    it('getRecordsError() should return the current "error" state', () => {
      const result = RecordsSelectors.getRecordsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
