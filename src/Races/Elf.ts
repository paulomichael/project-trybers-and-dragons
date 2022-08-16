import Race from './Race';

class Elf extends Race {
  _maxLifePoints = 99;
  static _members = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
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
