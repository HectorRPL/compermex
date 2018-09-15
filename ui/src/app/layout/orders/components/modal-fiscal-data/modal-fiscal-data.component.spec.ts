import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFiscalDataComponent } from './modal-fiscal-data.component';

describe('ModalFiscalDataComponent', () => {
  let component: ModalFiscalDataComponent;
  let fixture: ComponentFixture<ModalFiscalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFiscalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFiscalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
