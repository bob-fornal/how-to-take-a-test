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

  it('should have no level selected at first', () => {
    expect(component.selected).toEqual('');
  })

  it('handleSelectLevel should change the selected level', () => {
    const key: string = "TEST";

    component.selectGradeLevel(key);
    expect(component.selected).toEqual(key);
  })

  it('should give buttons a "selected" class when clicked', () => {
    const button = fixture.nativeElement.querySelector('#id-low');

    button.click();
    fixture.detectChanges();
    expect(button.classList).toContain('selected');
  })

});
