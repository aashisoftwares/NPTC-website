import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbrochureComponent } from './ebrochure.component';

describe('EbrochureComponent', () => {
  let component: EbrochureComponent;
  let fixture: ComponentFixture<EbrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
