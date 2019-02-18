import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsPaperboardFormComponent } from './materials-paperboard-form.component';

describe('MaterialsPaperboardFormComponent', () => {
  let component: MaterialsPaperboardFormComponent;
  let fixture: ComponentFixture<MaterialsPaperboardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsPaperboardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsPaperboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
