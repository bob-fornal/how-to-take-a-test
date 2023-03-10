import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceSelectionComponent } from './assistance-selection.component';

describe('AssistanceSelectionComponent', () => {
  let component: AssistanceSelectionComponent;
  let fixture: ComponentFixture<AssistanceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistanceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
