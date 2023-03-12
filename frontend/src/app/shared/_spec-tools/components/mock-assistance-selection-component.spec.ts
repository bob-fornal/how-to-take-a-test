import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'assistance-selection',
  template: `
  <div>
      <ng-container *ngFor="let level of levels">
        <button 
          class="assistance-level-button"
          mat-raised-button 
          color="primary"
          [id]="'id-' + level.key"
          [class.selected]="level.key === selected"
          (click)="selectGradeLevel(level.key)"
        >{{level.title}}</button>
      </ng-container>
    </div>
  `,
})
export class MockAssistanceSelectionComponent {
  @Input() levels: any[] = [];
  @Input() selected: string = '';
  @Output() selectGradeLevel = new EventEmitter<string>();
}