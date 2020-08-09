import { Ihp } from '../Interfaces/ihp';

export class HP {
  armorClass: number = 0;
  initiative: number = 0;
  speed: number = 0;
  maxHP: number = 0;
  currHP: number = 0;
  tempHP: number = 0;
  hitDice: string = "";
  numberOfHutDice: number = 0;

  constructor(data?: Ihp) {
    if (data) {
      Object.assign(this, data);
    }

  }

}
