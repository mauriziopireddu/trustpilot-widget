import { Component, Input } from '@angular/core';
import { Review } from "app/shared/review";

@Component({
  selector: 'review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.sass']
})
export class ReviewDetailComponent {
  @Input() 
  review: Review;

  constructor() { }

  getStartsImg():string {
    if(this.review.starRating != 1)
      return `assets/${this.review.starRating}-stars-260x48.png`;
    return `assets/${this.review.starRating}-star-260x48.png`;
  }

  getReviewTitle(): string {
    if(this.review.reviewTitle.length > 40)
      return this.review.reviewTitle.substr(0, 40) + "...";
    return this.review.reviewTitle;
  }

  getReviewBody(): string {
    if(this.review.reviewBody.length > 140)
      return this.review.reviewBody.substr(0, 140) + " [...]";
    return this.review.reviewBody;
  }
}
