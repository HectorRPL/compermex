import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStrengthsSearchComponent } from './material-strengths-search.component';

describe('MaterialStrengthsSearchComponent', () => {
  let component: MaterialStrengthsSearchComponent;
  let fixture: ComponentFixture<MaterialStrengthsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStrengthsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStrengthsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
