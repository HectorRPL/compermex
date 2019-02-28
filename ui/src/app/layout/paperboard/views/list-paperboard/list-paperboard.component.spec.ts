import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaperboardComponent } from './list-paperboard.component';

describe('ListPaperboardComponent', () => {
  let component: ListPaperboardComponent;
  let fixture: ComponentFixture<ListPaperboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaperboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaperboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
