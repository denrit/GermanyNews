import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSourcesComponent } from './show-sources.component';

describe('ShowSourcesComponent', () => {
  let component: ShowSourcesComponent;
  let fixture: ComponentFixture<ShowSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
