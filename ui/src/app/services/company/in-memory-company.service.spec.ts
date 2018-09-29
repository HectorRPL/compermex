import { TestBed } from '@angular/core/testing';

import { InMemoryCompanyService } from './in-memory-company.service';

describe('InMemoryCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCompanyService = TestBed.get(InMemoryCompanyService);
    expect(service).toBeTruthy();
  });
});
