import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistanceLevel } from 'src/app/core/interfaces/assistance-level';
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

  it('handleSelectLevel should change the selected level', () => {
    const comp = new AssistanceSelectionComponent();
    expect(comp.selectedLevel).withContext('will have nothing selected at first').toBe('')

    const testLevel: AssistanceLevel = {key: "TEST", title: "TEST"}
    comp.handleSelectLevel(testLevel)

    expect(comp.selectedLevel).withContext('will have TEST button selected after click').toBe('TEST')
  })

  it('should give buttons a "selected" class when clicked', () => {
    const button = fixture.nativeElement.querySelector('#id-low');
    button.click();
    fixture.detectChanges();
    expect(button.classList).toContain('selected');
  })

});
