import { Component, OnInit } from '@angular/core';
import { RecordsEntity, RecordsFacade } from '@potronus/records';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'potronus-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  readonly dataset$ = this.recordsFacade.allRecords$
  readonly columns = [
    {
      columnDef: 'emergency_id',
      header: 'Emergency Id',
      cell:(item: RecordsEntity) => `${item.emergency.emergencyId}`
    },
    {
      columnDef: 'request_time',
      header: 'Request Time',
      cell:(item: RecordsEntity) => `${this.datePipe.transform(item.emergency.requestTime,'short')}`
    },
    {
      columnDef: 'device',
      header: 'Device',
      cell:(item: RecordsEntity) => `${item.device.serialNumber}`
    },
    {
      columnDef: 'username',
      header: 'User',
      cell:(item: RecordsEntity) => `${item.holder.firstName} ${item.holder.lastName}`
    },
  ]
  constructor(private recordsFacade: RecordsFacade, private datePipe: DatePipe) {
    this.recordsFacade.init()
  }
}
