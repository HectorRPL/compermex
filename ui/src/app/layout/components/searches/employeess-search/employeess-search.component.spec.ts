import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeessSearchComponent } from './employeess-search.component';

describe('EmployeessSearchComponent', () => {
  let component: EmployeessSearchComponent;
  let fixture: ComponentFixture<EmployeessSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeessSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeessSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
