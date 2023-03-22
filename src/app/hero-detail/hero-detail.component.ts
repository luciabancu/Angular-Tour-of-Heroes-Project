import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  powerStatKeys: string[] = ['combat', 'speed', 'intelligence', 'strength'];

  ngOnInit(): void {
    if (this.hero) {
      this.hero.overallRating = this.calculateOverallRating(this.hero);
    }
  }

  calculateOverallRating(hero: Hero): number | null {
    const powerStatValues = Object.values(hero.powerStats);
    const sum = powerStatValues.reduce((acc, value) => acc + value, 0);
    if (powerStatValues.some((value) => isNaN(value))) {
      return null;
    } else {
      return Math.round(sum);
    }
  }

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
