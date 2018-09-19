import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFiscalDataPhysicalPersonComponent } from './modal-fiscal-data-physical-person.component';

describe('ModalFiscalDataPhysicalPersonComponent', () => {
  let component: ModalFiscalDataPhysicalPersonComponent;
  let fixture: ComponentFixture<ModalFiscalDataPhysicalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFiscalDataPhysicalPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFiscalDataPhysicalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
