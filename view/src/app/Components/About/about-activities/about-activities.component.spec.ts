import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutActivitiesComponent } from './about-activities.component';

describe('AboutActivitiesComponent', () => {
  let component: AboutActivitiesComponent;
  let fixture: ComponentFixture<AboutActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
