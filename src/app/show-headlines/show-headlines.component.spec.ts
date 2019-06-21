import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeadlinesComponent } from './show-headlines.component';

describe('ShowHeadlinesComponent', () => {
  let component: ShowHeadlinesComponent;
  let fixture: ComponentFixture<ShowHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
