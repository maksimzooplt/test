import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as RecordsActions from './records.actions';
import { RecordsEffects } from './records.effects';
import { RecordsFacade } from './records.facade';
import { RecordsEntity } from './records.models';
import {
  RECORDS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './records.reducer';
import { RecordsHttpService } from '../services/records-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

interface TestSchema {
  records: State;
}

describe('RecordsFacade', () => {
  let facade: RecordsFacade;
  let store: Store<TestSchema>;
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

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(RECORDS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([RecordsEffects]),
          HttpClientTestingModule
        ],
        providers: [RecordsFacade,RecordsHttpService],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(RecordsFacade);
    });

    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allRecords$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allRecords$);

      expect(list.length).toBe(0);
    });

    it('allRecords$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allRecords$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        RecordsActions.loadRecordsSuccess({
          records: [createRecordsEntity('AAA'), createRecordsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allRecords$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
