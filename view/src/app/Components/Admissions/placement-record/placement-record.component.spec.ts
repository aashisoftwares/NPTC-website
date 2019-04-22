import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementRecordComponent } from './placement-record.component';

describe('PlacementRecordComponent', () => {
  let component: PlacementRecordComponent;
  let fixture: ComponentFixture<PlacementRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
