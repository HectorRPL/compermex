import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDirectionComponent } from './modal-direction.component';

describe('ModalDirectionComponent', () => {
  let component: ModalDirectionComponent;
  let fixture: ComponentFixture<ModalDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
