import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySearchComponent } from './quality-search.component';

describe('QualitySearchComponent', () => {
  let component: QualitySearchComponent;
  let fixture: ComponentFixture<QualitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
