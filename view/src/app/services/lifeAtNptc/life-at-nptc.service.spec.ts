import { TestBed } from '@angular/core/testing';

import { LifeAtNptcService } from './life-at-nptc.service';

describe('LifeAtNptcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeAtNptcService = TestBed.get(LifeAtNptcService);
    expect(service).toBeTruthy();
  });
});
