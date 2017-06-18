import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsWidgetComponent } from './reviews-widget.component';

describe('ReviewsWidgetComponent', () => {
  let component: ReviewsWidgetComponent;
  let fixture: ComponentFixture<ReviewsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
