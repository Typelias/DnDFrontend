import { Istats } from "./istats";
import { IsavingThrows } from "./isaving-throws";
import { Iskills } from "./iskills";
import { Ihp } from "./ihp";
import { Ipersonality } from "./ipersonality";
import { IattacksAndSpellcasting } from "./iattacks-and-spellcasting"
import { IotherProficienciesAndLanguages } from "./iother-proficiencies-and-languages"
import { Iequipment } from "./iequipment";
import { IfeaturesAndTraits } from "./ifeatures-and-traits"
import { IspellList } from "./ispell-list"

export interface Icharacter {
    characterName: string;
    characterClass: string;
    level: number;
    exp: number;
    background: string;
    race: string;
    alignment: string;
    playerName: string;
    expPoints: number;
    stats: Istats
    inspiration: boolean;
    proficiencyBonus: number;
    savingThrows: IsavingThrows
    skills: Iskills;
    hp: Ihp;
    personality: Ipersonality;
    attacksAndSpellcasting: IattacksAndSpellcasting;
    passiveInvestigation: number;
    passivePerception: number;
    passiveInsight: number;
    otherProficienciesAndLanguages: IotherProficienciesAndLanguages;
    equipment: Iequipment;
    featuresAndTraits: IfeaturesAndTraits;
    spellcastingAbility: string;
    spellSaveDC: number;
    spellAttackBonus: number;
    spellList: IspellList;
    classAttributes: Array<string>;
}
