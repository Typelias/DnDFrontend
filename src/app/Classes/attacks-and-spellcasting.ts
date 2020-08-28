import { Weapon } from './weapon';
import { IattacksAndSpellcasting } from '../Interfaces/iattacks-and-spellcasting';

export class AttacksAndSpellcasting {
  weapons: Array<Weapon> = [];

  addWeapon(weapon: Weapon) {
    this.weapons.push(weapon);
  }

  removeWeapon(index: number) {
    this.weapons.splice(index, 1);
  }

  editWeapon(index: number, newWeapon: Weapon) {
    this.weapons[index] = newWeapon;
  }

  constructor(data?: IattacksAndSpellcasting) {
    if (data) {
      Object.assign(this, data);
    }

  }

}
