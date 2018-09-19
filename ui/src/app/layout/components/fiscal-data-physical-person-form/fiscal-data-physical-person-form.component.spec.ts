import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalDataPhysicalPersonFormComponent } from './fiscal-data-physical-person-form.component';

describe('FiscalDataPhysicalPersonFormComponent', () => {
  let component: FiscalDataPhysicalPersonFormComponent;
  let fixture: ComponentFixture<FiscalDataPhysicalPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalDataPhysicalPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalDataPhysicalPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
