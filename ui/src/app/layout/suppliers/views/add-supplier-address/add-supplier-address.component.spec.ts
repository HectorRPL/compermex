import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierAddressComponent } from './add-supplier-address.component';

describe('AddSupplierAddressComponent', () => {
  let component: AddSupplierAddressComponent;
  let fixture: ComponentFixture<AddSupplierAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
