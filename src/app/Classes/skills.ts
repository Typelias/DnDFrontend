import { ISkills } from '../Interfaces/ISkills';

export class Skills {
  acrobatics = false
  acrobaticsBonus = 0;
  animalHandling = false;
  animalHandlingBonus = 0;
  arcana = false;
  arcanaBonus = 0;
  athletics = false;
  athleticsBonus = 0;
  deception = false;
  deceptionBonus = 0;
  history = false;
  historyBonus = 0;
  insight = false;
  insightBonus = 0;
  intimidation = false;
  intimidationBonus = 0;
  investigation = false;
  investigationBonus = 0;
  medicine = false;
  medicineBonus = 0;
  nature = false;
  natureBonus = 0;
  perception = false;
  perceptionBonus = 0;
  performance = false;
  performanceBonus = 0;
  persuasion = false;
  persuasionBonus = 0;
  religion = false;
  religionBonus = 0;
  slightOfHand = false;
  slightOfHandBonus = 0;
  stealth = false;
  stealthBonus = 0;
  survival = false;
  survivalBonus = 0;

  constructor(data?: ISkills) {
    if (data) {
      Object.assign(this, data);
    }

  }
}
