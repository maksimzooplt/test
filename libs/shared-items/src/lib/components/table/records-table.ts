import { Component } from '@angular/core'
import { BaseTableComponent } from './table.component'
import { RecordsEntity } from '@santander/records'

@Component({
  selector: 'santander-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class RecordsTableComponent extends BaseTableComponent<RecordsEntity> {}
