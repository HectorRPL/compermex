import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientsComponent } from './modal-clients.component';

describe('ModalClientsComponent', () => {
  let component: ModalClientsComponent;
  let fixture: ComponentFixture<ModalClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
