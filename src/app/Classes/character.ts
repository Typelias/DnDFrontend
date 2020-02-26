import {Stats} from './stats';
import {SavingThrows} from './saving-throws';
import {Skills} from './skills';
import {HP} from './hp';
import {Personality} from './personality';
import {AttacksAndSpellcasting} from './attacks-and-spellcasting';
import {Equipment} from './equipment';
import {OtherProficienciesAndLanguages} from './other-proficiencies-and-languages';
import {FeaturesAndTraits} from './features-and-traits';
import {SpellList} from './spell-list';

export class Character {
  characterName: string;
  characterClass: string;
  level: number;
  exp: number;
  background: string;
  race: string;
  alignment: string;
  playerName: string;
  expPoints: number;
  stats: Stats;
  inspiration: boolean;
  proficiencyBonus: number;
  savingThrows: SavingThrows;
  skills: Skills;
  hp: HP;
  personality: Personality;
  attacksAndSpellcasting: AttacksAndSpellcasting;
  passiveInvestigation: number;
  passivePerception: number;
  passiveInsight: number;
  otherProficienciesAndLanguages: OtherProficienciesAndLanguages;
  equipment: Equipment;
  featuresAndTraits: FeaturesAndTraits;
  spellcastingAbility: string;
  spellSaveDC: number;
  spellAttackBonus: number;
  spellList: SpellList;
  sorcPoints ? = 0;
  usedSorcPoints ? = 0;

  useSorcPoint() {
    this.usedSorcPoints++;
  }

  resetSorcPoints() {
    this.usedSorcPoints = 0;
  }

}
