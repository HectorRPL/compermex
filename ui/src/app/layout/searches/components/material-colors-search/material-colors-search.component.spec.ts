import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialColorsSearchComponent } from './material-colors-search.component';

describe('MaterialColorsSearchComponent', () => {
  let component: MaterialColorsSearchComponent;
  let fixture: ComponentFixture<MaterialColorsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialColorsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialColorsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
