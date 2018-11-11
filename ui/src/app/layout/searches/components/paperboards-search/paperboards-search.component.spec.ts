import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperboardsSearchComponent } from './paperboards-search.component';

describe('PaperboardsSearchComponent', () => {
  let component: PaperboardsSearchComponent;
  let fixture: ComponentFixture<PaperboardsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperboardsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperboardsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
