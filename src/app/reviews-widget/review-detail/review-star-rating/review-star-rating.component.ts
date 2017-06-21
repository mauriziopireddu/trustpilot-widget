import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'review-star-rating',
  templateUrl: './review-star-rating.component.html',
  styleUrls: ['./review-star-rating.component.sass']
})
export class ReviewStarRatingComponent implements OnInit {
  @Input() starRating: number;
  fullStars;

  constructor() { }

  ngOnInit() {
    console.log(this.starRating);
    this.fullStars = Array(3).fill(1);
    console.log(this.fullStars);
  }

}
