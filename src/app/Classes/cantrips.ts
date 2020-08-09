import { Spell } from './spell';
import { Icantrips } from '../Interfaces/icantrips';

export class Cantrips {
  spellList: Array<Spell> = [];

  addSpell(spell: Spell) {
    this.spellList.push(spell);
  }

  removeSpell(spell: Spell) {
    delete this.spellList[this.spellList.indexOf(spell)];
  }

  constructor(data?: Icantrips) {
    if (data) {
      Object.assign(this, data);
    }

  }

}
