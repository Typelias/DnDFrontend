import { Cantrips } from './cantrips';
import { Spell } from './spell';
import { LevelSpells } from './level-spells';
import { IspellList } from '../Interfaces/ispell-list';

export class SpellList {
  // Cantrips
  cantrips: Cantrips

  lvl1Spells: LevelSpells;
  lvl2Spells: LevelSpells;
  lvl3Spells: LevelSpells;
  lvl4Spells: LevelSpells;
  lvl5Spells: LevelSpells;
  lvl6Spells: LevelSpells;
  lvl7Spells: LevelSpells;
  lvl8Spells: LevelSpells;
  lvl9Spells: LevelSpells;


  constructor(data?: IspellList) {
    this.cantrips = new Cantrips(data.cantrips);
    this.lvl1Spells = new LevelSpells(data.lvl1Spells);
    this.lvl2Spells = new LevelSpells(data.lvl2Spells);
    this.lvl3Spells = new LevelSpells(data.lvl3Spells);
    this.lvl4Spells = new LevelSpells(data.lvl4Spells);
    this.lvl5Spells = new LevelSpells(data.lvl5Spells);
    this.lvl6Spells = new LevelSpells(data.lvl6Spells);
    this.lvl7Spells = new LevelSpells(data.lvl7Spells);
    this.lvl8Spells = new LevelSpells(data.lvl8Spells);
    this.lvl9Spells = new LevelSpells(data.lvl9Spells);

  }


  // Cantrips
  addCantrip(spell: Spell) {
    this.cantrips.addSpell(spell);
  }
  removeCantrip(spell: Spell) {
    this.cantrips.removeSpell(spell);
  }



  // LVL 1
  addLvl1Spell(spell: Spell) {
    this.lvl1Spells.addSpell(spell);
  }

  removeLvl1Spell(spell: Spell) {
    this.lvl1Spells.removeSpell(spell);
  }

  uppdateLvl1(newAmount: number) {
    this.lvl1Spells.updateSpellSlots(newAmount);
  }

  resetLvl1Expended() {
    this.lvl1Spells.resetExpended();
  }

  addLvl1Expended() {
    this.lvl1Spells.addExpended();
  }

  // LVL 2
  addLvl2Spell(spell: Spell) {
    this.lvl2Spells.addSpell(spell);
  }

  removeLvl2Spell(spell: Spell) {
    this.lvl2Spells.removeSpell(spell);
  }

  uppdateLvl2(newAmount: number) {
    this.lvl2Spells.updateSpellSlots(newAmount);
  }

  resetLvl2Expended() {
    this.lvl2Spells.resetExpended();
  }

  addLvl2Expended() {
    this.lvl2Spells.addExpended();
  }

  // LVL 3
  addLvl3Spell(spell: Spell) {
    this.lvl3Spells.addSpell(spell);
  }

  removeLvl3Spell(spell: Spell) {
    this.lvl3Spells.removeSpell(spell);
  }

  uppdateLvl3(newAmount: number) {
    this.lvl3Spells.updateSpellSlots(newAmount);
  }

  resetLvl3Expended() {
    this.lvl3Spells.resetExpended();
  }

  addLvl3Expended() {
    this.lvl3Spells.addExpended();
  }

  // LVL 4
  addLvl4Spell(spell: Spell) {
    this.lvl4Spells.addSpell(spell);
  }

  removeLvl4Spell(spell: Spell) {
    this.lvl4Spells.removeSpell(spell);
  }

  uppdateLvl4(newAmount: number) {
    this.lvl4Spells.updateSpellSlots(newAmount);
  }

  resetLvl4Expended() {
    this.lvl4Spells.resetExpended();
  }

  addLvl4Expended() {
    this.lvl4Spells.addExpended();
  }

  // LVL 5
  addLvl5Spell(spell: Spell) {
    this.lvl5Spells.addSpell(spell);
  }

  removeLvl5Spell(spell: Spell) {
    this.lvl5Spells.removeSpell(spell);
  }

  uppdateLvl5(newAmount: number) {
    this.lvl5Spells.updateSpellSlots(newAmount);
  }

  resetLvl5Expended() {
    this.lvl5Spells.resetExpended();
  }

  addLvl5Expended() {
    this.lvl5Spells.addExpended();
  }

  // LVL 6
  addLvl6Spell(spell: Spell) {
    this.lvl6Spells.addSpell(spell);
  }

  removeLvl6Spell(spell: Spell) {
    this.lvl6Spells.removeSpell(spell);
  }

  uppdateLvl6(newAmount: number) {
    this.lvl6Spells.updateSpellSlots(newAmount);
  }

  resetLvl6Expended() {
    this.lvl6Spells.resetExpended();
  }

  addLvl6Expended() {
    this.lvl6Spells.addExpended();
  }

  // LVL 7
  addLvl7Spell(spell: Spell) {
    this.lvl7Spells.addSpell(spell);
  }

  removeLvl7Spell(spell: Spell) {
    this.lvl7Spells.removeSpell(spell);
  }

  uppdateLvl7(newAmount: number) {
    this.lvl7Spells.updateSpellSlots(newAmount);
  }

  resetLvl7Expended() {
    this.lvl7Spells.resetExpended();
  }

  addLvl7Expended() {
    this.lvl7Spells.addExpended();
  }

  // LVL 8
  addLvl8Spell(spell: Spell) {
    this.lvl8Spells.addSpell(spell);
  }

  removeLvl8Spell(spell: Spell) {
    this.lvl8Spells.removeSpell(spell);
  }

  uppdateLvl8(newAmount: number) {
    this.lvl8Spells.updateSpellSlots(newAmount);
  }

  resetLvl8Expended() {
    this.lvl8Spells.resetExpended();
  }

  addLvl8Expended() {
    this.lvl8Spells.addExpended();
  }

  // LVL 9
  addLvl9Spell(spell: Spell) {
    this.lvl9Spells.addSpell(spell);
  }

  removeLvl9Spell(spell: Spell) {
    this.lvl9Spells.removeSpell(spell);
  }

  uppdateLvl9(newAmount: number) {
    this.lvl9Spells.updateSpellSlots(newAmount);
  }

  resetLvl9Expended() {
    this.lvl9Spells.resetExpended();
  }

  addLvl9Expended() {
    this.lvl9Spells.addExpended();
  }

}
