import { Component } from '@angular/core';
import config from "../../core/constants/config.json"
@Component({
  selector: 'assistance-selection',
  templateUrl: './assistance-selection.component.html',
  styleUrls: ['./assistance-selection.component.scss']
})
export class AssistanceSelectionComponent {
  data: any = config['assistance-levels']
}
