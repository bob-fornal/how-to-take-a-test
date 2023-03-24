import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelSelectionComponent } from './grade-level-selection.component';

describe('GradeLevelSelectionComponent', () => {
  let component: GradeLevelSelectionComponent;
  let fixture: ComponentFixture<GradeLevelSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeLevelSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeLevelSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the button when clicked', () => {
    const button = fixture.nativeElement.querySelector('#id-3rd-grade');

    button.click();
    fixture.detectChanges();
    expect(button.classList).toContain('selected');
  });

  it('expects "selectGradeLevel" to set the selected key', () => {
    const key: string = 'KEY';

    component.selectGradeLevel(key);
    expect(component.selected).toEqual(key);
  });
});
