import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReceivePaperboardComponent } from './modal-receive-paperboard.component';

describe('ModalReceivePaperboardComponent', () => {
  let component: ModalReceivePaperboardComponent;
  let fixture: ComponentFixture<ModalReceivePaperboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReceivePaperboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReceivePaperboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
