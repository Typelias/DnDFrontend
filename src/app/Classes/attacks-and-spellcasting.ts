import { Weapon } from './weapon';
import { IAttacksAndSpellcasting } from '../Interfaces/i-attacks-and-spellcasting';

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

  constructor(data?: IAttacksAndSpellcasting) {
    if (data) {
      Object.assign(this, data);
    }

  }

}
