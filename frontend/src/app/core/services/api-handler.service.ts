import { Injectable } from '@angular/core';

import config from '../constants/config.json';
import { Endpoints } from '../interfaces/endpoints';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiHandlerService {
  endpoints: Endpoints = config.endpoints;

  constructor() {}

  getUrl = (key: string, _window: any): string => {
    if (_window.location.host.includes('github.io'))
      return this.endpoints['gh-pages'][key];
    return (
      this.endpoints['localhost']['PREFIX'] + this.endpoints['localhost'][key]
    );
  };
}
