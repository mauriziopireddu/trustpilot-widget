import { Component, Input } from '@angular/core';
import { Review } from "app/shared/review";

@Component({
  selector: 'review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.sass']
})
export class ReviewDetailComponent {
  @Input() review: Review;

  constructor() { }

  getReviewTitle(): string {
    if(this.review.reviewTitle.length > 20)
      return this.review.reviewTitle.substr(0, 20) + "...";
    return this.review.reviewTitle;
  }

  getReviewBody(): string {
    if(this.review.reviewBody.length > 140)
      return this.review.reviewBody.substr(0, 140) + " [...]";
    return this.review.reviewBody;
  }
}
