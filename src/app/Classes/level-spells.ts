import {Spell} from './spell';

export class LevelSpells {
  spells: Array<Spell> = [];

  spellSlotTotal: number;
  spellSlotExpended = 0;

  addSpell(spell: Spell) {
    this.spells.push(spell);
  }

  removeSpell(spell: Spell) {
    delete this.spells[this.spells.indexOf(spell)];
  }

  updateSpellSlots(newAmount: number) {
    this.spellSlotTotal = newAmount;
  }

  resetExpended() {
    this.spellSlotExpended = 0;
  }

  addExpended() {
    this.spellSlotExpended++;
  }

}
