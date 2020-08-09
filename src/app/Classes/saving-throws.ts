import { IsavingThrows } from '../Interfaces/isaving-throws';

export class SavingThrows {
  strength: boolean = false;
  dexterity: boolean = false;
  constitution: boolean = false;
  intelligence: boolean = false;
  wisdom: boolean = false;
  charisma: boolean = false;

  constructor(data?: IsavingThrows) {
    if (data) {
      Object.assign(this, data);
    }

  }
}
