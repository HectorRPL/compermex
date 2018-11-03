import { TestBed } from '@angular/core/testing';

import { CardboardsService } from './cardboards.service';

describe('CardboardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardboardsService = TestBed.get(CardboardsService);
    expect(service).toBeTruthy();
  });
});
