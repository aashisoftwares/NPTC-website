import { TestBed } from '@angular/core/testing';

import { AmenitiesAndFacilitiesService } from './amenities-and-facilities.service';

describe('AmenitiesAndFacilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmenitiesAndFacilitiesService = TestBed.get(AmenitiesAndFacilitiesService);
    expect(service).toBeTruthy();
  });
});
