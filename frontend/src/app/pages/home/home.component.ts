import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../../core/services/api-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiHandlerService) {
    api.test.subscribe(this.handler.bind(this));
  }

  ngOnInit(): void {
    this.init();
  }

  init = (): void => {
    this.api.getTest();
  };

  handler = (data: any) => {
    console.log(data);
  };
}
