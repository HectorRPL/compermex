import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersSearchCopyComponent } from './suppliers-search-copy.component';

describe('SuppliersSearchCopyComponent', () => {
  let component: SuppliersSearchCopyComponent;
  let fixture: ComponentFixture<SuppliersSearchCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersSearchCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersSearchCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
