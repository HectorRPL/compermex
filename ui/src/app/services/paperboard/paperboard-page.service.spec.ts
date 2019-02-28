import { TestBed } from '@angular/core/testing';

import { PaperboardPageService } from './paperboard-page.service';

describe('PaperboardPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperboardPageService = TestBed.get(PaperboardPageService);
    expect(service).toBeTruthy();
  });
});
