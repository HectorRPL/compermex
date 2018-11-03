import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardboardsComponent } from './list-cardboards.component';

describe('ListCardboardsComponent', () => {
  let component: ListCardboardsComponent;
  let fixture: ComponentFixture<ListCardboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
