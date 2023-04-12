import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAssistanceSelectionComponent } from 'src/app/shared/_spec-tools/components/mock-assistance-selection-component.spec';
import { MockGradeLevelSelectionComponent } from 'src/app/shared/_spec-tools/components/mock-grade-level-selection-component.spec';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        HomeComponent,

        MockAssistanceSelectionComponent,
        MockGradeLevelSelectionComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects "init" to trigger getTest', () => {
    spyOn(component['api'], 'getTest').and.stub();

    component.init();
    expect(component['api'].getTest).toHaveBeenCalled();
  });

  it('expects "handler" to store the data and keys', () => {
    const data: any = {
      KEY1: 'data1',
      KEY2: 'data2',
    };

    component.handler(data);
    expect(component.originalData).toEqual(data);
    expect(component.data).toEqual(['KEY1', 'KEY2']);
  });

  it('expects "triggerDetails" to console.log a key', () => {
    component.originalData = {
      KEY: [0, 1, 2],
    };

    component.triggerDetails('KEY');
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
