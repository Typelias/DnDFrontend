import { Weapon } from './weapon';
import { IattacksAndSpellcasting } from '../Interfaces/iattacks-and-spellcasting';

export class AttacksAndSpellcasting {
  weapons: Array<Weapon> = [];

  addWeapon(weapon: Weapon) {
    this.weapons.push(weapon);
  }

  removeWeapon(weapon: Weapon) {
    delete this.weapons[this.weapons.indexOf(weapon)];
  }

  constructor(data?: IattacksAndSpellcasting) {
    if (data) {
      Object.assign(this, data);
    }

  }

}
