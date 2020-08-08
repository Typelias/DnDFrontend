import { IsavingThrows } from '../Interfaces/isaving-throws';

export class SavingThrows {
  strength: boolean = false;
  dexterity: boolean = false;
  constitution: boolean = false;
  intelligence: boolean = false;
  wisdom: boolean = false;
  charisma: boolean = false;

  constructor(data?: IsavingThrows) {
    Object.assign(this, data);
  }
}
