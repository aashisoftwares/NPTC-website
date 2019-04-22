import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRecruitersComponent } from './our-recruiters.component';

describe('OurRecruitersComponent', () => {
  let component: OurRecruitersComponent;
  let fixture: ComponentFixture<OurRecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
