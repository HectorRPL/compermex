import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSearchCopyComponent } from './clients-search-copy.component';

describe('ClientsSearchCopyComponent', () => {
  let component: ClientsSearchCopyComponent;
  let fixture: ComponentFixture<ClientsSearchCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsSearchCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsSearchCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
