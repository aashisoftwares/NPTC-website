import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAntiRaggingCommitteeComponent } from './about-anti-ragging-committee.component';

describe('AboutAntiRaggingCommitteeComponent', () => {
  let component: AboutAntiRaggingCommitteeComponent;
  let fixture: ComponentFixture<AboutAntiRaggingCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAntiRaggingCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAntiRaggingCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
