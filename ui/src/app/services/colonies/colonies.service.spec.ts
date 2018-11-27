import { TestBed } from '@angular/core/testing';

import { ColoniesService } from './colonies.service';

describe('ColoniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoniesService = TestBed.get(ColoniesService);
    expect(service).toBeTruthy();
  });
});
