type SimpleFighterType = {
  lifePoints: number;
  strength: number;
};

interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighterType): void;
  receiveDamage(attackPoints: number): number;
}

export default SimpleFighter;
