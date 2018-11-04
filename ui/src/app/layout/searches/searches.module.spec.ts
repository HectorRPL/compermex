import { SearchesModule } from './searches.module';

describe('SearchesModule', () => {
  let searchesModule: SearchesModule;

  beforeEach(() => {
    searchesModule = new SearchesModule();
  });

  it('should create an instance', () => {
    expect(searchesModule).toBeTruthy();
  });
});
