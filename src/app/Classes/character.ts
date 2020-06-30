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

export class Character {
  characterName: string = "";
  characterClass: string;
  level: number;
  exp: number;
  background: string;
  race: string;
  alignment: string;
  playerName: string;
  expPoints: number;
  stats = new Stats();
  inspiration: boolean;
  proficiencyBonus: number;
  savingThrows = new SavingThrows();
  skills = new Skills();
  hp = new HP();
  personality = new Personality();
  attacksAndSpellcasting = new AttacksAndSpellcasting();
  passiveInvestigation: number;
  passivePerception: number;
  passiveInsight: number;
  otherProficienciesAndLanguages = new OtherProficienciesAndLanguages();
  equipment = new Equipment();
  featuresAndTraits = new FeaturesAndTraits();
  spellcastingAbility: string;
  spellSaveDC: number;
  spellAttackBonus: number;
  spellList = new SpellList();
  classAttributes: Array<string> = [];
}