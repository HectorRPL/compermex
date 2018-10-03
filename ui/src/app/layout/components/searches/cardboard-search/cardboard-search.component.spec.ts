import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardSearchComponent } from './cardboard-search.component';

describe('CardboardSearchComponent', () => {
  let component: CardboardSearchComponent;
  let fixture: ComponentFixture<CardboardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
