import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperboardFormComponent } from './paperboard-form.component';

describe('PaperboardFormComponent', () => {
  let component: PaperboardFormComponent;
  let fixture: ComponentFixture<PaperboardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperboardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
