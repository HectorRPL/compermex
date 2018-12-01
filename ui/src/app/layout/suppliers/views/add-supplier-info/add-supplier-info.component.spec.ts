import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierInfoComponent } from './add-supplier-info.component';

describe('AddSupplierInfoComponent', () => {
  let component: AddSupplierInfoComponent;
  let fixture: ComponentFixture<AddSupplierInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
