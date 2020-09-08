import { Spell } from './spell';
import { ISpellList } from '../Interfaces/i-spell-list';

export class SpellList {


  spellList: Array<Spell> = [];

  lvl1SpellSlots: number = 0;
  lvl2SpellSlots: number = 0;
  lvl3SpellSlots: number = 0;
  lvl4SpellSlots: number = 0;
  lvl5SpellSlots: number = 0;
  lvl6SpellSlots: number = 0;
  lvl7SpellSlots: number = 0;
  lvl8SpellSlots: number = 0;
  lvl9SpellSlots: number = 0;

  lvl1SpellSlutsUsed: number = 0;
  lvl2SpellSlutsUsed: number = 0;
  lvl3SpellSlutsUsed: number = 0;
  lvl4SpellSlutsUsed: number = 0;
  lvl5SpellSlutsUsed: number = 0;
  lvl6SpellSlutsUsed: number = 0;
  lvl7SpellSlutsUsed: number = 0;
  lvl8SpellSlutsUsed: number = 0;
  lvl9SpellSlutsUsed: number = 0;



  addSpell(spell: Spell) {
    this.spellList.push(spell);
  }

  removeSpell(index: number) {
    this.spellList.splice(index, 1)

  }

  edditSpell(newSpell: Spell, index: number) {
    this.spellList[index] = newSpell;
  }


  constructor(data?: ISpellList) {
    if (data) {
      Object.assign(this, data);
      this.spellList = [];
      data.spellList.forEach(spell => {
        this.spellList.push(new Spell(spell));
      });
    }

  }

}
