import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersNavigationComponent } from './suppliers-navigation.component';

describe('SuppliersNavigationComponent', () => {
  let component: SuppliersNavigationComponent;
  let fixture: ComponentFixture<SuppliersNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
