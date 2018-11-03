import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboardsSearchComponent } from './cardboards-search.component';

describe('CardboardsSearchComponent', () => {
  let component: CardboardsSearchComponent;
  let fixture: ComponentFixture<CardboardsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboardsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
