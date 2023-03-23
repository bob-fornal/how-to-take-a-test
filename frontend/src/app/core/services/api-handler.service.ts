import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import config from '../constants/config.json';
import { Endpoints } from '../interfaces/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {
  test: BehaviorSubject<any> = new BehaviorSubject<any>({});

  endpoints: Endpoints = config.endpoints;

  constructor(private http: HttpClient) {}

  getUrl = (key: string, _window: any): string => {
    if (_window.location.host.includes('github.io'))
      return this.endpoints['gh-pages'][key];
    return (
      this.endpoints['localhost']['PREFIX'] + this.endpoints['localhost'][key]
    );
  };

  getTest = async (): Promise<void> => {
    const key: string = 'tests';
    const url: string = this.getUrl(key, window);

    try {
      const data: any = await firstValueFrom(this.http.get(url));
      this.test.next(data);
    } catch (error) {
      console.log(error);
    }
  };
}
