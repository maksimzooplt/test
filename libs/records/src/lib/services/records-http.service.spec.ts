import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecordsHttpService } from './records-http.service';
import { RecordsEntity } from '@santander/records';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../../apps/santander-app/src/environments/environment';


describe('RecordsService', () => {
  let service: RecordsHttpService;
  let httpController: HttpTestingController;

  const expectedRecords: RecordsEntity[] =
    [{
      id: 2,
      instrument: 'EUR/JPY',
      bid: 119.60,
      ask: 119.90,
      timestamp: '01-06-2020 12:01:02:001'
    },];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[RecordsHttpService]
    });
    service = TestBed.inject(RecordsHttpService);
    httpController = TestBed.inject(HttpTestingController);
  });


  it('should call getAllEmergencies and return an array of emergencies', () => {

    service.getRecords().subscribe((res) => {
      expect(res).toEqual(expectedRecords);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.url}/getAllEmergencies`,
    });

    req.flush(expectedRecords);
  });
})
