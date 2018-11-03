import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardsComponent } from './cardboards.component';

describe('CardboardsComponent', () => {
  let component: CardboardsComponent;
  let fixture: ComponentFixture<CardboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
