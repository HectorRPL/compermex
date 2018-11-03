import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardboardComponent } from './add-cardboard.component';

describe('AddCardboardComponent', () => {
  let component: AddCardboardComponent;
  let fixture: ComponentFixture<AddCardboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
