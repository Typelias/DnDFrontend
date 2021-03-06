import { ISavingThrows } from '../Interfaces/i-saving-throws';

export class SavingThrows {
  strength: boolean = false;
  dexterity: boolean = false;
  constitution: boolean = false;
  intelligence: boolean = false;
  wisdom: boolean = false;
  charisma: boolean = false;

  constructor(data?: ISavingThrows) {
    if (data) {
      Object.assign(this, data);
    }

  }
}
