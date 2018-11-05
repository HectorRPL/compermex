import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionSearchComponent } from './reception-search.component';

describe('ReceptionSearchComponent', () => {
  let component: ReceptionSearchComponent;
  let fixture: ComponentFixture<ReceptionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
