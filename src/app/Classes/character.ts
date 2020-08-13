import { Stats } from './stats';
import { SavingThrows } from './saving-throws';
import { Skills } from './skills';
import { HP } from './hp';
import { Personality } from './personality';
import { AttacksAndSpellcasting } from './attacks-and-spellcasting';
import { Equipment } from './equipment';
import { OtherProficienciesAndLanguages } from './other-proficiencies-and-languages';
import { FeaturesAndTraits } from './features-and-traits';
import { SpellList } from './spell-list';
import { Icharacter } from '../Interfaces/icharacter';

export class Character {
  characterName: string = "";
  characterClass: string = "";
  level: number = 0;
  exp: number = 0;
  background: string = "";
  race: string = "";
  alignment: string = "";
  playerName: string = "";
  expPoints: number = 0;
  stats: Stats;
  inspiration: boolean = false;
  proficiencyBonus: number = 0;
  savingThrows: SavingThrows;
  skills: Skills
  hp: HP
  personality: Personality;
  attacksAndSpellcasting: AttacksAndSpellcasting;
  passiveInvestigation: number = 0;
  passivePerception: number = 0;
  passiveInsight: number = 0;
  otherProficienciesAndLanguages: OtherProficienciesAndLanguages;
  equipment: Equipment;
  featuresAndTraits: FeaturesAndTraits;
  spellcastingAbility: string = "";
  spellSaveDC: number = 0;
  spellAttackBonus: number = 0;
  spellList: SpellList
  classAttributes: Array<string> = [];


  constructor(data?: Icharacter) {
    if (data) {
      Object.assign(this, data);
      this.savingThrows = new SavingThrows(data.savingThrows);
      this.skills = new Skills(data.skills);
      this.hp = new HP(data.hp);
      this.personality = new Personality(data.personality);
      this.attacksAndSpellcasting = new AttacksAndSpellcasting(data.attacksAndSpellcasting);
      this.otherProficienciesAndLanguages = new OtherProficienciesAndLanguages(data.otherProficienciesAndLanguages);
      this.equipment = new Equipment(data.equipment);
      this.featuresAndTraits = new FeaturesAndTraits();
      this.spellList = new SpellList(data.spellList);
      this.stats = new Stats(data.stats);
    } else {
      this.savingThrows = new SavingThrows();
      this.skills = new Skills();
      this.hp = new HP();
      this.personality = new Personality();
      this.attacksAndSpellcasting = new AttacksAndSpellcasting();
      this.otherProficienciesAndLanguages = new OtherProficienciesAndLanguages();
      this.equipment = new Equipment();
      this.featuresAndTraits = new FeaturesAndTraits();
      this.spellList = new SpellList();
      this.stats = new Stats();
    }


  }

}