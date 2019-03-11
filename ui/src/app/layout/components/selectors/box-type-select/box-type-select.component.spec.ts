import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTypeSelectComponent } from './box-type-select.component';

describe('BoxTypeSelectComponent', () => {
  let component: BoxTypeSelectComponent;
  let fixture: ComponentFixture<BoxTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
