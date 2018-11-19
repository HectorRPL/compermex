import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePaperboardFormComponent } from './receive-paperboard-form.component';

describe('ReceivePaperboardFormComponent', () => {
  let component: ReceivePaperboardFormComponent;
  let fixture: ComponentFixture<ReceivePaperboardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePaperboardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePaperboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
