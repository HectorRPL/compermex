import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesOrdersComponent } from './add-sales-orders.component';

describe('AddSalesOrdersComponent', () => {
  let component: AddSalesOrdersComponent;
  let fixture: ComponentFixture<AddSalesOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
