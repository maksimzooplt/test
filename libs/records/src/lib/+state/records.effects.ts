import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as RecordsActions from './records.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { RecordsHttpService } from '../services/records-http.service';

@Injectable()
export class RecordsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecordsActions.init),
      switchMap(() => this.recordsHttp.getRecords()
        .pipe(
          map(items => RecordsActions.loadRecordsSuccess({records: items})),
          catchError(err => of(RecordsActions.loadRecordsFailure({error: err})))
        )
      ),
    )
  );

  constructor(private readonly actions$: Actions, private recordsHttp: RecordsHttpService) {}
}
