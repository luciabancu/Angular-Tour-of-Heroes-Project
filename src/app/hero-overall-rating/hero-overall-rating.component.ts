import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.css'],
})
export class HeroOverallRatingComponent {
  @Input() hero?: Hero;

  getOverallRatingColor(
    overallRating: number | null | undefined
  ): string | null {
    if (overallRating === null || overallRating === undefined) {
      return null;
    } else if (overallRating <= 10) {
      return '#ff3f34';
    } else if (overallRating <= 20) {
      return '#ffd32a';
    } else if (overallRating <= 30) {
      return '#05c46b';
    } else {
      return '#3c40c6';
    }
  }
}
