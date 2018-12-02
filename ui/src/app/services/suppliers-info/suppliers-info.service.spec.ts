import { TestBed } from '@angular/core/testing';

import { SuppliersInfoService } from './suppliers-info.service';

describe('SuppliersInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppliersInfoService = TestBed.get(SuppliersInfoService);
    expect(service).toBeTruthy();
  });
});
