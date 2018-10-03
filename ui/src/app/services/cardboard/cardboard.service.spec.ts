import { TestBed } from '@angular/core/testing';

import { CardboardService } from './cardboard.service';

describe('CardboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardboardService = TestBed.get(CardboardService);
    expect(service).toBeTruthy();
  });
});
