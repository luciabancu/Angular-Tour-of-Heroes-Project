export interface Hero {
  id: number;
  name: string;
  powerStats: {
    combat: number;
    speed: number;
    intelligence: number;
    strength: number;
  };
  overallRating?: number | null;
}

//export function calculateOverallRating(hero: Hero): number {
//  const { combat, speed, intelligence, strength } = hero.powerStats;
//  return combat + speed + intelligence + strength;
//}
