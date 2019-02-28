import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperboardComponent } from './paperboard.component';

describe('PaperboardComponent', () => {
  let component: PaperboardComponent;
  let fixture: ComponentFixture<PaperboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
