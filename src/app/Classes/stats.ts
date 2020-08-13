import { Istats } from '../Interfaces/istats';

export class Stats {
  strength = 0;
  strengthModifier = 0;
  dexterity = 0;
  dexterityModifier = 0;
  constitution = 0;
  constitutionModifier = 0;
  intelligence = 0;
  intelligenceModifier = 0;
  wisdom = 0;
  wisdomModifier = 0;
  charisma = 0;
  charismaModifier = 0;

  constructor(data?: Istats) {
    if (data) {
      Object.assign(this, data);
    }
  }


}
