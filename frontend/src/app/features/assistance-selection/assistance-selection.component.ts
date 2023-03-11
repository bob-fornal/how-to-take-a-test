import { Component } from '@angular/core';
import config from "../../core/constants/config.json"
import { AssistanceLevel } from '../../core/interfaces/assistance-level';

@Component({
  selector: 'assistance-selection',
  templateUrl: './assistance-selection.component.html',
  styleUrls: ['./assistance-selection.component.scss']
})
export class AssistanceSelectionComponent {
  levels: AssistanceLevel[] = config['assistance-levels']
  selectedLevel: string = ''

  handleSelectLevel= (level: AssistanceLevel) : void => {
    this.selectedLevel = level.key
  }

  // isSelected = (level: AssistanceLevel) : boolean => {
  //   if(level.key === this.selectedLevel){
  //     return true;
  //   }
  //   return false;
  // }
}
