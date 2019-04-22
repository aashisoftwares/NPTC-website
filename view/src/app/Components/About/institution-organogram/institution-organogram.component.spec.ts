import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionOrganogramComponent } from './institution-organogram.component';

describe('InstitutionOrganogramComponent', () => {
  let component: InstitutionOrganogramComponent;
  let fixture: ComponentFixture<InstitutionOrganogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionOrganogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionOrganogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
