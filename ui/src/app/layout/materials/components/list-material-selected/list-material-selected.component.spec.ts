import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialSelectedComponent } from './list-material-selected.component';

describe('ListMaterialSelectedComponent', () => {
  let component: ListMaterialSelectedComponent;
  let fixture: ComponentFixture<ListMaterialSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaterialSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaterialSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
