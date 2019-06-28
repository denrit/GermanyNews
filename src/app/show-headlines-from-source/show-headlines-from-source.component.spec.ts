import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeadlinesFromSourceComponent } from './show-headlines-from-source.component';

describe('ShowHeadlinesFromSourceComponent', () => {
  let component: ShowHeadlinesFromSourceComponent;
  let fixture: ComponentFixture<ShowHeadlinesFromSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeadlinesFromSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeadlinesFromSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
