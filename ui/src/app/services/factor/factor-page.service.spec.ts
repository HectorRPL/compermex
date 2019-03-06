import { TestBed } from '@angular/core/testing';

import { FactorPageService } from './factor-page.service';

describe('FactorPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactorPageService = TestBed.get(FactorPageService);
    expect(service).toBeTruthy();
  });
});
