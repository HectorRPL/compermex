import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesOrdersComponent } from './list-sales-orders.component';

describe('ListSalesOrdersComponent', () => {
  let component: ListSalesOrdersComponent;
  let fixture: ComponentFixture<ListSalesOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSalesOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
