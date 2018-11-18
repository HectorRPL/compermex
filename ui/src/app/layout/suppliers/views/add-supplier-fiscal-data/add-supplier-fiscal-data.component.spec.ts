import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierFiscalDataComponent } from './add-supplier-fiscal-data.component';

describe('AddSupplierFiscalDataComponent', () => {
  let component: AddSupplierFiscalDataComponent;
  let fixture: ComponentFixture<AddSupplierFiscalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierFiscalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierFiscalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
