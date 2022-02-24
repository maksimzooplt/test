import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRecords from './+state/records.reducer';
import { RecordsEffects } from './+state/records.effects';
import { RecordsFacade } from './+state/records.facade';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedItemsModule } from '@potronus/shared-items';
import { RecordsHttpService } from './services/records-http.service';
import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedItemsModule,
    RecordsRoutingModule,
    StoreModule.forFeature(
      fromRecords.RECORDS_FEATURE_KEY,
      fromRecords.reducer
    ),
    EffectsModule.forFeature([RecordsEffects]),
  ],
  providers: [RecordsHttpService,RecordsFacade,DatePipe],
  declarations: [
    MainPageComponent
  ],
})
export class RecordsModule {}
