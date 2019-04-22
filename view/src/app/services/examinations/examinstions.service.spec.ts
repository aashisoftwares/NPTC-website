import { TestBed } from '@angular/core/testing';

import { ExaminstionsService } from './examinstions.service';

describe('ExaminstionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExaminstionsService = TestBed.get(ExaminstionsService);
    expect(service).toBeTruthy();
  });
});
