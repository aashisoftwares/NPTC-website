import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaInstitutionsComponent } from './nia-institutions.component';

describe('NiaInstitutionsComponent', () => {
  let component: NiaInstitutionsComponent;
  let fixture: ComponentFixture<NiaInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiaInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiaInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
