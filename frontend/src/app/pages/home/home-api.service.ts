import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ApiHandlerService } from 'src/app/core/services/api-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService extends ApiHandlerService {
  test: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(public http: HttpClient) {
    super();
  }

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
