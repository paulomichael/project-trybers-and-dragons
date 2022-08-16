import Race from './Race';

class Orc extends Race {
  _maxLifePoints = 74;
  static _members = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc._members += 1;
  }

  static createdRacesInstances():number {
    // throw new Error('Not implemented');
    return Orc._members;
  }
  
  get maxLifePoints():number {
    return this._maxLifePoints;
  } 
}

export default Orc;
