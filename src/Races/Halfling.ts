import Race from './Race';

class Halfling extends Race {
  _maxLifePoints = 60;
  static _members = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling._members += 1;
  }

  static createdRacesInstances():number {
    // throw new Error('Not implemented');
    return Halfling._members;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  } 
}

export default Halfling;
