import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as RecordsActions from './records.actions';

import * as RecordsSelectors from './records.selectors';

@Injectable()
export class RecordsFacade {
  loaded$ = this.store.pipe(select(RecordsSelectors.getRecordsLoaded));
  allRecords$ = this.store.pipe(select(RecordsSelectors.getAllRecords));
  selectedRecords$ = this.store.pipe(select(RecordsSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(RecordsActions.init());
  }
}
