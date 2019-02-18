import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialPaperboardComponent } from './add-material-paperboard.component';

describe('AddMaterialPaperboardComponent', () => {
  let component: AddMaterialPaperboardComponent;
  let fixture: ComponentFixture<AddMaterialPaperboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaterialPaperboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialPaperboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
