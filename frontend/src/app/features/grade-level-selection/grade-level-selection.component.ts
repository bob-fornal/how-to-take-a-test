import { Component } from '@angular/core';

import config from '../../core/constants/config.json';
import { GradeDetail } from 'src/app/core/interfaces/grade-detail.interface';

@Component({
  selector: 'grade-level-selection',
  templateUrl: './grade-level-selection.component.html',
  styleUrls: ['./grade-level-selection.component.scss', 'frontend/src/styles.scss']
})
export class GradeLevelSelectionComponent {
  levels: Array<GradeDetail> = config['grade-levels'];
  selected: string = '';

  selectGradeLevel = (key: string): void => {
    this.selected = key;
  };
}
