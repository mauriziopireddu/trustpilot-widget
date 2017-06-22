import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'review-star-rating',
  templateUrl: './review-star-rating.component.html',
  styleUrls: ['./review-star-rating.component.sass']
})
export class ReviewStarRatingComponent implements OnInit {
  @Input() starRating: number;
  private stars;

  constructor() { }

  ngOnInit() {
    this.stars = this.range(1, this.starRating);
  }

  private range(start: number, end: number) {
    const foo: number[] = [];
    for (let i = start; i <= end; i++) {
      foo.push(i);
    }
    return foo;
  }

}
