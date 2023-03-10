import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AssistanceSelectionComponent } from 'src/app/features/assistance-selection/assistance-selection.component';
import { HomeComponent } from './home.component';
import { GradeLevelSelectionComponent } from 'src/app/features/grade-level-selection/grade-level-selection.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AssistanceSelectionComponent, GradeLevelSelectionComponent, HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
