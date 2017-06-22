import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'review-star-rating',
  templateUrl: './review-star-rating.component.html',
  styleUrls: ['./review-star-rating.component.sass']
})
export class ReviewStarRatingComponent implements OnInit {
  @Input() starRating: number;
  @Input() viewCompleteRating: boolean = false;
  private stars;
  private emptyStars;

  constructor() { }

  ngOnInit() {
    console.log('rating: ',this.starRating);
    this.stars = this.range(1, this.starRating);
    if(this.viewCompleteRating)
      this.emptyStars = this.range(1, 5 - this.starRating);
  }

  private range(start: number, end: number) {
    const stars: number[] = [];
    for (let i = start; i <= end; i++) {
      stars.push(i);
    }
    return stars;
  }

}
