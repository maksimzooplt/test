import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { RecordsEntity, ResponceObject } from '@potronus/records'
import { environment } from '../../../../../apps/potronus-app/src/environments/environment'

@Injectable()
export class RecordsHttpService {
  constructor(private http: HttpClient) {}
  getRecords(): Observable<RecordsEntity[]> {
    return this.http
      .get<ResponceObject>(`/api/getAllEmergencies`)
      .pipe(map((response) => response.content))
  }
}
