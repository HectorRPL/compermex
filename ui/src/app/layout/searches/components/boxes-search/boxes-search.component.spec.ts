import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesSearchComponent } from './boxes-search.component';

describe('BoxesSearchComponent', () => {
  let component: BoxesSearchComponent;
  let fixture: ComponentFixture<BoxesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
