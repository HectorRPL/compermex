import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardsFormComponent } from './cardboards-form.component';

describe('CardboardsFormComponent', () => {
  let component: CardboardsFormComponent;
  let fixture: ComponentFixture<CardboardsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
