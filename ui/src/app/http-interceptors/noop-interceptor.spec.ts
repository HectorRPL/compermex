import { TestBed } from '@angular/core/testing';

import { NoopInterceptro } from './noop-interceptor';

describe('NoopInterceptroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoopInterceptro = TestBed.get(NoopInterceptro);
    expect(service).toBeTruthy();
  });
});
