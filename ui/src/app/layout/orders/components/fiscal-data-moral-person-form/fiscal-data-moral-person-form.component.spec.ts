import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalDataMoralPersonFormComponent } from './fiscal-data-moral-person-form.component';

describe('FiscalDataMoralPersonFormComponent', () => {
  let component: FiscalDataMoralPersonFormComponent;
  let fixture: ComponentFixture<FiscalDataMoralPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalDataMoralPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalDataMoralPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
