import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSupportingProgrammesComponent } from './self-supporting-programmes.component';

describe('SelfSupportingProgrammesComponent', () => {
  let component: SelfSupportingProgrammesComponent;
  let fixture: ComponentFixture<SelfSupportingProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfSupportingProgrammesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfSupportingProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
