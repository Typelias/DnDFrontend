import { Spell } from './spell';
import { IspellList } from '../Interfaces/ispell-list';

export class SpellList {


  spellList: Array<Spell> = [];

  lvl1SpellSlots: number;
  lvl2SpellSlots: number;
  lvl3SpellSlots: number;
  lvl4SpellSlots: number;
  lvl5SpellSlots: number;
  lvl6SpellSlots: number;
  lvl7SpellSlots: number;
  lvl8SpellSlots: number;
  lvl9SpellSlots: number;

  lvl1SpellSlutsUsed: number;
  lvl2SpellSlutsUsed: number;
  lvl3SpellSlutsUsed: number;
  lvl4SpellSlutsUsed: number;
  lvl5SpellSlutsUsed: number;
  lvl6SpellSlutsUsed: number;
  lvl7SpellSlutsUsed: number;
  lvl8SpellSlutsUsed: number;
  lvl9SpellSlutsUsed: number;



  addSpell(spell: Spell) {
    this.spellList.push(spell);
  }


  constructor(data?: IspellList) {
    if (data) {
      Object.assign(data);
    }
  }

}
