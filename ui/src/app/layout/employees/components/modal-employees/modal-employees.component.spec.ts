import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployeesComponent } from './modal-employees.component';

describe('ModalEmployeesComponent', () => {
  let component: ModalEmployeesComponent;
  let fixture: ComponentFixture<ModalEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
