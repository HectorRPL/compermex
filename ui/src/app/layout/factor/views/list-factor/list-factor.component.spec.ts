import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactorComponent } from './list-factor.component';

describe('ListFactorComponent', () => {
  let component: ListFactorComponent;
  let fixture: ComponentFixture<ListFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
