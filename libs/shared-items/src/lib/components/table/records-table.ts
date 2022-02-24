import { Component } from '@angular/core'
import { BaseTableComponent } from './table.component'
import { RecordsEntity } from '@potronus/records'

@Component({
  selector: 'potronus-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class RecordsTableComponent extends BaseTableComponent<RecordsEntity> {}
