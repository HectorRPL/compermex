import { CommonFormsModule } from './common-forms.module';

describe('CommonFormsModule', () => {
  let commonFormsModule: CommonFormsModule;

  beforeEach(() => {
    commonFormsModule = new CommonFormsModule();
  });

  it('should create an instance', () => {
    expect(commonFormsModule).toBeTruthy();
  });
});
