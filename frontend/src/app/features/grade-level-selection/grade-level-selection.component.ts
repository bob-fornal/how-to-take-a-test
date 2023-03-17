import { Component } from '@angular/core';
import { GradeDetail } from 'src/app/core/interfaces/grade-detail.interface';

import config from '../../core/constants/config.json';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'grade-level-selection',
  templateUrl: './grade-level-selection.component.html',
  styleUrls: ['./grade-level-selection.component.scss', '../../../../src/styles.scss']
})
export class GradeLevelSelectionComponent {
  levels: Array<GradeDetail> = config['grade-levels'];
  selected: string = '';

  selectGradeLevel = (key: string): void => {
    this.selected = key;
  };
}
