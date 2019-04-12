import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtNPTCComponent } from './life-at-nptc.component';

describe('LifeAtNPTCComponent', () => {
  let component: LifeAtNPTCComponent;
  let fixture: ComponentFixture<LifeAtNPTCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeAtNPTCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtNPTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
