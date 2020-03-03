import {Spell} from './spell';

export class Cantrips {
  spellList: Array<Spell> = [];

  addSpell(spell: Spell) {
    this.spellList.push(spell);
  }

  removeSpell(spell: Spell) {
    delete this.spellList[this.spellList.indexOf(spell)];
  }

}
