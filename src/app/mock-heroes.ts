import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    id: 12,
    name: 'Dr.Nice',
    powerStats: {
      combat: 5,
      speed: 6,
      intelligence: 8,
      strength: 5,
    },
    overallRating: null,
  },
  {
    id: 13,
    name: 'Bombasto',
    powerStats: {
      combat: 1,
      speed: 1,
      intelligence: 1,
      strength: 1,
    },
    overallRating: null,
  },
  {
    id: 14,
    name: 'Celeritas',
    powerStats: {
      combat: 0,
      speed: 0,
      intelligence: 0,
      strength: 2,
    },
    overallRating: null,
  },
  {
    id: 15,
    name: 'Magneta',
    powerStats: {
      combat: 9,
      speed: 2,
      intelligence: 3,
      strength: 6,
    },
    overallRating: null,
  },
  {
    id: 16,
    name: 'RubberMan',
    powerStats: {
      combat: 6,
      speed: 7,
      intelligence: 5,
      strength: 4,
    },
    overallRating: null,
  },
  {
    id: 17,
    name: 'Dynama',
    powerStats: {
      combat: 8,
      speed: 3,
      intelligence: 3,
      strength: 3,
    },
    overallRating: null,
  },
  {
    id: 18,
    name: 'Dr. IQ',
    powerStats: {
      combat: 3,
      speed: 8,
      intelligence: 10,
      strength: 1,
    },
    overallRating: null,
  },
  {
    id: 19,
    name: 'Magma',
    powerStats: {
      combat: 2,
      speed: 4,
      intelligence: 5,
      strength: 5,
    },
    overallRating: null,
  },
  {
    id: 20,
    name: 'Tornado',
    powerStats: {
      combat: 10,
      speed: 9,
      intelligence: 2,
      strength: 7,
    },
    overallRating: null,
  },
];

// calculate overallRating for each hero
HEROES.forEach((hero) => {
  const { combat, speed, intelligence, strength } = hero.powerStats;
  hero.overallRating = combat + speed + intelligence + strength;
});
