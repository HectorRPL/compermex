import { TestBed } from '@angular/core/testing';

import { PaperboardService } from './paperboard.service';

describe('PaperboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperboardService = TestBed.get(PaperboardService);
    expect(service).toBeTruthy();
  });
});
