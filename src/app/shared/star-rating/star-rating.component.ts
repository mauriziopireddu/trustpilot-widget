import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {
  @Input() starRating: number;
  @Input() viewCompleteRating: boolean = false;
  private stars;
  private emptyStars;

  constructor() { }

  ngOnInit() {
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
