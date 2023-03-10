import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelSelectionComponent } from './grade-level-selection.component';
import config from '../../core/constants/config.json'; //did something break here?

describe('GradeLevelSelectionComponent', () => {
  let component: GradeLevelSelectionComponent;
  let fixture: ComponentFixture<GradeLevelSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLevelSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeLevelSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the button when clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(button.classList).toContain('selected');
  });
});
