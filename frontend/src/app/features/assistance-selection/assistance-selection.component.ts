import { Component } from '@angular/core';

import config from "../../core/constants/config.json"
import { AssistanceLevel } from '../../core/interfaces/assistance-level';

@Component({
  selector: 'assistance-selection',
  templateUrl: './assistance-selection.component.html',
  styleUrls: ['./assistance-selection.component.scss']
})
export class AssistanceSelectionComponent {
  levels: AssistanceLevel[] = config['assistance-levels'];
  selected: string = '';

  selectGradeLevel= (key: string) : void => {
    this.selected = key;
  }
}
