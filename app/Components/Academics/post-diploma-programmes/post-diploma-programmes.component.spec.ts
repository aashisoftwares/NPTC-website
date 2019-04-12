import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDiplomaProgrammesComponent } from './post-diploma-programmes.component';

describe('PostDiplomaProgrammesComponent', () => {
  let component: PostDiplomaProgrammesComponent;
  let fixture: ComponentFixture<PostDiplomaProgrammesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDiplomaProgrammesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDiplomaProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
