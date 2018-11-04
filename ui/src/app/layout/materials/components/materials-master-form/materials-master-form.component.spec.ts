import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsMasterFormComponent } from './materials-master-form.component';

describe('MaterialsMasterFormComponent', () => {
  let component: MaterialsMasterFormComponent;
  let fixture: ComponentFixture<MaterialsMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
