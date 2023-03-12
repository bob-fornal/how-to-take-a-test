import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiHandlerService } from './api-handler.service';
import { from, of } from 'rxjs';

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

  it('expects "getUrl" to return the correct URL for github.io', () => {
    const key: string = 'TEST';
    service.endpoints['gh-pages'][key] = 'TEST-URL';
    const _win: any = { location: { host: 'bob.github.io'} };

    const result: string = service.getUrl(key, _win);
    expect(result).toEqual('TEST-URL');
  });

  it('expects "getUrl" to return the correct URL for localhost', () => {
    const key: string = 'TEST';
    service.endpoints['localhost'][key] = 'TEST-URL';
    const _win: any = { location: { host: 'localhost'} };

    const result: string = service.getUrl(key, _win);
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

  it('expect "getTest" to handle error', async () => {
    spyOn(service, 'getUrl').and.returnValue('URL');
    spyOn(service['http'], 'get').and.returnValue(from(Promise.reject('ERROR CODE')));

    await service.getTest();
    expect(console.log).toHaveBeenCalledWith('ERROR CODE');
  });
});
