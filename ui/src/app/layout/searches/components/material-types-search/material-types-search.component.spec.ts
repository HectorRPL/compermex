import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypesSearchComponent } from './material-types-search.component';

describe('MaterialTypesSearchComponent', () => {
  let component: MaterialTypesSearchComponent;
  let fixture: ComponentFixture<MaterialTypesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
