import Race from './Race';

class Dwarf extends Race {
  _maxLifePoints = 80;
  static _members = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf._members += 1;
  }

  static createdRacesInstances():number {
    // throw new Error('Not implemented');
    return Dwarf._members;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  } 
}

export default Dwarf;
