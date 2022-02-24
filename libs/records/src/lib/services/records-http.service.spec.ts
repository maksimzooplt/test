import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecordsHttpService } from './records-http.service';
import { RecordsEntity } from '@potronus/records';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../../apps/potronus-app/src/environments/environment';


describe('RecordsService', () => {
  let service: RecordsHttpService;
  let httpController: HttpTestingController;

  const expectedRecords: RecordsEntity[] =
    [{
      emergency:{
        emergencyId:"2f7d8518-31be-4d81-ba7a-de2abgc2c498",
        requestTime: new Date(),
      },
      device:{
        serialNumber:"RFAZ22FWAKZ",
      },
      holder:{
        firstName:"Jonah",
        lastName:"Johnson"
      }
    }];

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
