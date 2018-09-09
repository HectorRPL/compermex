import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialsComponent } from './modal-materials.component';

describe('ModalMaterialsComponent', () => {
  let component: ModalMaterialsComponent;
  let fixture: ComponentFixture<ModalMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
