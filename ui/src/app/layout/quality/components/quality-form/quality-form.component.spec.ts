import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityFormComponent } from './quality-form.component';

describe('QualityFormComponent', () => {
  let component: QualityFormComponent;
  let fixture: ComponentFixture<QualityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
