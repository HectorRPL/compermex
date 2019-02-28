import { PaperboardModule } from './paperboard.module';

describe('PaperboardModule', () => {
  let paperboardModule: PaperboardModule;

  beforeEach(() => {
    paperboardModule = new PaperboardModule();
  });

  it('should create an instance', () => {
    expect(paperboardModule).toBeTruthy();
  });
});
