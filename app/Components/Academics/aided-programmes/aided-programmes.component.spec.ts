import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidedProgrammesComponent } from './aided-programmes.component';

describe('AidedProgrammesComponent', () => {
  let component: AidedProgrammesComponent;
  let fixture: ComponentFixture<AidedProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidedProgrammesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidedProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
