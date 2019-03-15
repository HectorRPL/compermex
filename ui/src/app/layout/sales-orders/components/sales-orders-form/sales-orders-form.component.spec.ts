import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrdersFormComponent } from './sales-orders-form.component';

describe('SalesOrdersFormComponent', () => {
  let component: SalesOrdersFormComponent;
  let fixture: ComponentFixture<SalesOrdersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrdersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrdersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
