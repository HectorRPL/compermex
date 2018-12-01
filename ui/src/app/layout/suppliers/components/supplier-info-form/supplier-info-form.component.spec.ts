import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInfoFormComponent } from './supplier-info-form.component';

describe('SupplierInfoFormComponent', () => {
  let component: SupplierInfoFormComponent;
  let fixture: ComponentFixture<SupplierInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
