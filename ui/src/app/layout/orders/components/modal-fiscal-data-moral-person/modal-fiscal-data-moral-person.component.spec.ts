import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFiscalDataMoralPersonComponent } from './modal-fiscal-data-moral-person.component';

describe('ModalFiscalDataMoralPersonComponent', () => {
  let component: ModalFiscalDataMoralPersonComponent;
  let fixture: ComponentFixture<ModalFiscalDataMoralPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFiscalDataMoralPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFiscalDataMoralPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
