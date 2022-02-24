import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RecordsTableComponent } from './components/table/records-table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations:[
    RecordsTableComponent
  ],
  exports:[
    RecordsTableComponent
  ]
})
export class SharedItemsModule {}
