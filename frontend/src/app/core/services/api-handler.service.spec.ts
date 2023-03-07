import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiHandlerService } from './api-handler.service';
import { of } from 'rxjs';

describe('ApiHandlerService', () => {
  let service: ApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects "getUrl" to return the correct URL', () => {
    const key: string = 'TEST';
    service.endpoints[key] = 'TEST-URL';

    const result: string = service.getUrl(key);
    expect(result).toEqual('TEST-URL');
  });

  it('expects "getTest" to get data', async () => {
    const data: string = 'DATA';
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'get').and.returnValue(of(data));
    spyOn(service.test, 'next').and.stub();

    await service.getTest();
    expect(service.test.next).toHaveBeenCalledWith('DATA');
  });

  // TODO: Write the Failing Unit Tests
});
