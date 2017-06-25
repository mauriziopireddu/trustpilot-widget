import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../shared/review.service';
import { Review } from "app/shared/review";

@Component({
  selector: 'reviews-widget',
  templateUrl: './reviews-widget.component.html',
  styleUrls: ['./reviews-widget.component.sass'],
  providers: [ReviewService]
})
export class ReviewsWidgetComponent implements OnInit {
  private reviews:Review[];
  private averageRating: number = 0;
  private averageRatingScale10: number = 0;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews()
      .then(res => this.reviews = res)
      .catch(err => console.log(err));

    this.reviewService.getAverageRating()
      .then(res => this.averageRating = res)
      .then(averageRating => this.averageRatingScale10 = this.averageRating * 10 / 5)
      .catch(err => console.log(err))
  }


}
