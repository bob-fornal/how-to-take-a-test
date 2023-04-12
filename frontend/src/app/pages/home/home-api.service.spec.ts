import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';

import { HomeApiService } from './home-api.service';

describe('HomeApiService', () => {
  let service: HomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "getTest" to get data', async () => {
    const data: string = 'DATA';
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'get').and.returnValue(of(data));
    spyOn(service.test, 'next').and.stub();

    await service.getTest();
    expect(service.test.next).toHaveBeenCalledWith('DATA');
  });

  it('expect "getTest" to handle error', async () => {
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'get').and.returnValue(
      from(Promise.reject('ERROR CODE'))
    );

    await service.getTest();
    expect(console.log).toHaveBeenCalledWith('ERROR CODE');
  });
});
