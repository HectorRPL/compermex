import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaperboardComponent } from './add-paperboard.component';

describe('AddPaperboardComponent', () => {
  let component: AddPaperboardComponent;
  let fixture: ComponentFixture<AddPaperboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaperboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaperboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
