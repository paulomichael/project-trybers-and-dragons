import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(protected player: Fighter) {
    super(player);   
  }
}

export default PVP;
