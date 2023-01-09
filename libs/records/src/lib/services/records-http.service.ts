import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable, of } from 'rxjs'
import { RecordsEntity } from '@santander/records'
import { environment } from '../../../../../apps/santander-app/src/environments/environment'

@Injectable()
export class RecordsHttpService {
  constructor(private http: HttpClient) {}
  getRecords(): Observable<RecordsEntity[]> {
    // return this.http
    //   .get<RecordsEntity[]>(`${environment.url}`)
    return of([
      {
        id: 1,
        instrument: 'EUR/USD',
        bid: Number((Math.random() * 100).toFixed(1)),
        ask: Number((Math.random() * 100).toFixed(1)),
        timestamp: new Date().toTimeString()
      },
      {
        id: 2,
        instrument: 'EUR/JPY',
        bid: Number((Math.random() * 100).toFixed(1)),
        ask: Number((Math.random() * 100).toFixed(1)),
        timestamp: new Date().toTimeString()
      },
      {
        id: 3,
        instrument: 'GBP/USD',
        bid: Number((Math.random() * 100).toFixed(1)),
        ask: Number((Math.random() * 100).toFixed(1)),
        timestamp: new Date().toTimeString()
      },
      {
        id: 4,
        instrument: 'GBP/USD',
        bid: Number((Math.random() * 100).toFixed(1)),
        ask: Number((Math.random() * 100).toFixed(1)),
        timestamp: new Date().toTimeString()
      }
    ])
  }
}
