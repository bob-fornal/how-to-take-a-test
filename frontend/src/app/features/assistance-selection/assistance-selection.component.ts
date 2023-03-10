import { Component } from '@angular/core';
import config from "../../core/constants/config.json"
import { AssistanceLevel } from '../../core/interfaces/assistance-level';

@Component({
  selector: 'assistance-selection',
  templateUrl: './assistance-selection.component.html',
  styleUrls: ['./assistance-selection.component.scss']
})
export class AssistanceSelectionComponent {
  data: AssistanceLevel[] = config['assistance-levels']
  selectedLevel: string = ''

  handleSelectLevel= (level: any) : void => {
    this.selectedLevel = level.key
    console.log(this.selectedLevel)
  }
}
