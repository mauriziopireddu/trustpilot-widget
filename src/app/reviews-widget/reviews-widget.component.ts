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

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews()
      .then(res => this.reviews = res)
      .catch(err => console.log(err));
  }

}
