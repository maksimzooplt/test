import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import * as RecordsActions from './records.actions';
import { RecordsEffects } from './records.effects';
import { RecordsHttpService } from '../services/records-http.service';
import { initialState, RecordsFacade } from '@potronus/records';

describe('RecordsEffects', () => {
  let actions: Observable<Action>;
  let effects: RecordsEffects;
  let service: RecordsFacade

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        RecordsEffects,
        {provide: RecordsHttpService, useValue: {
            getRecords(){
              return of([])
            }
          }},
        RecordsFacade,
        provideMockActions(() => actions),
        provideMockStore({initialState}),
      ],
    });

    effects = TestBed.inject(RecordsEffects);
    service = TestBed.inject(RecordsFacade);
  });

  describe('init$', () => {
    it('should work', () => {
      service.init();
      actions = of(RecordsActions.init);

      const expected = hot('(a|)', {
        a: RecordsActions.loadRecordsSuccess({ records: [] }),
      });

      effects.init$.subscribe((res) => {
        expect(res).toEqual(RecordsActions.loadRecordsSuccess({ records: [] }));
      })

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
