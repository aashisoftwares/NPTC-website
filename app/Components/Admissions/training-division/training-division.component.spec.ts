import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDivisionComponent } from './training-division.component';

describe('TrainingDivisionComponent', () => {
  let component: TrainingDivisionComponent;
  let fixture: ComponentFixture<TrainingDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
