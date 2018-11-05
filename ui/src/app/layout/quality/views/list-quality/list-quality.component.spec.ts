import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQualityComponent } from './list-quality.component';

describe('ListQualityComponent', () => {
  let component: ListQualityComponent;
  let fixture: ComponentFixture<ListQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
