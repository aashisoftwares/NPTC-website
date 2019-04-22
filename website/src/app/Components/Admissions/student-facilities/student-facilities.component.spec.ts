import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFacilitiesComponent } from './student-facilities.component';

describe('StudentFacilitiesComponent', () => {
  let component: StudentFacilitiesComponent;
  let fixture: ComponentFixture<StudentFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
