import { TestBed } from '@angular/core/testing';

import { IsbndbService } from './isbndb.service';

describe('IsbndbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsbndbService = TestBed.get(IsbndbService);
    expect(service).toBeTruthy();
  });
});
