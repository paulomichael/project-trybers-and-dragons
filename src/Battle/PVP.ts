import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player1: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player2);   
    this._player1 = player1;
  }

  get player1(): Fighter {
    return this._player1;
  }

  fight(): number {
    while (this._player1.lifePoints !== -1 && this.player.lifePoints !== -1) {
      this._player1.attack(this.player);
      this.player.attack(this._player1);
    }

    if (this._player1.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}

export default PVP;
