import { CardboardsModule } from './cardboards.module';

describe('CardboardsModule', () => {
  let cardboardsModule: CardboardsModule;

  beforeEach(() => {
    cardboardsModule = new CardboardsModule();
  });

  it('should create an instance', () => {
    expect(cardboardsModule).toBeTruthy();
  });
});
