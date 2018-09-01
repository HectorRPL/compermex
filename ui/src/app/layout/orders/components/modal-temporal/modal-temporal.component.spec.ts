import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemporalComponent } from './modal-temporal.component';

describe('ModalTemporalComponent', () => {
  let component: ModalTemporalComponent;
  let fixture: ComponentFixture<ModalTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
