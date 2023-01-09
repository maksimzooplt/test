import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecordsEntity, RecordsFacade } from '@santander/records';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'santander-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  readonly dataset$ = this.recordsFacade.allRecords$
  readonly columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell:(item: RecordsEntity) => `${item.id}`
    },
    {
      columnDef: 'timestamp',
      header: 'Timestamp',
      cell:(item: RecordsEntity) => `${item.timestamp}`
    },
    {
      columnDef: 'bid',
      header: 'Bid',
      cell:(item: RecordsEntity) => `${item.bid}`
    },
    {
      columnDef: 'ask',
      header: 'Ask',
      cell:(item: RecordsEntity) => `${item.ask}`
    },
    {
      columnDef: 'instrument',
      header: 'Instrument',
      cell:(item: RecordsEntity) => `${item.instrument}`
    },
  ]
  constructor(private recordsFacade: RecordsFacade, private datePipe: DatePipe) {
    this.recordsFacade.init()
    setInterval(() => {
      this.recordsFacade.init()
    },1000)
  }
}
