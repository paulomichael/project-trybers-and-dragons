import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _members = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._members += 1;
  }

  static createdRacesInstances():number {
    // throw new Error('Not implemented');
    return Elf._members;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  } 
}

export default Elf;
