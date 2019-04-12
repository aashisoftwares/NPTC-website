import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlacementComponent } from './about-placement.component';

describe('AboutPlacementComponent', () => {
  let component: AboutPlacementComponent;
  let fixture: ComponentFixture<AboutPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
