import {Weapon} from './weapon';

export class AttacksAndSpellcasting {
  weapons: Array<Weapon> = [];

  addWeapon(weapon: Weapon) {
    this.weapons.push(weapon);
  }

  removeWeapon(weapon: Weapon) {
    delete this.weapons[this.weapons.indexOf(weapon)];
  }

}
