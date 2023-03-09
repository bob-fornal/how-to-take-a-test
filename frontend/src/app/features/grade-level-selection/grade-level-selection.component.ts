import { Component } from '@angular/core';

import config from '../../core/constants/config.json';

@Component({
  selector: 'app-grade-level-selection',
  templateUrl: './grade-level-selection.component.html',
  styleUrls: ['./grade-level-selection.component.scss']
})
export class GradeLevelSelectionComponent {
  levels: Array<any> = config['grade-levels'];
}
