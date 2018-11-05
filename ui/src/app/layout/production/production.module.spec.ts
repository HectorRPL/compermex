import { ProductionModule } from './production.module';

describe('ProductionModule', () => {
  let productionModule: ProductionModule;

  beforeEach(() => {
    productionModule = new ProductionModule();
  });

  it('should create an instance', () => {
    expect(productionModule).toBeTruthy();
  });
});
