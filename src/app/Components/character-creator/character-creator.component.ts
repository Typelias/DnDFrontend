import { Component, OnInit } from '@angular/core';
import { Character} from '../../Classes/character';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss']
})
export class CharacterCreatorComponent implements OnInit {

  character: Character;
  customCharacter = false;
  currentStatBonus: number;
  curentStatName: string;

  constructor() { }

  ngOnInit(): void {
    this.character = new Character();
  }

  printCharacter() {
    this.calculateStatBonus();
    console.log(this.character);
  }

  formatBonusPrint(name: string, amount: number): string {
    if (amount > -1) {
      return name + ' stat bonus +' + amount;
    }
    return name + ' stat bonus ' + amount;
  }

  calculateStatBonus() {
    Object.keys(this.character.stats).forEach(key => {
      if (key.includes('Modifier')) {
        const index = key.indexOf('M');
        const attribute = key.substring(0, index);
        this.character.stats[key] = this.calculateBonus(this.character.stats[attribute]);
      }
    });
  }

  calculateBonus(stat: number): number {
    stat -= 10;
    stat = Math.floor(stat / 2);
    return  stat;
  }

  raceAutoFill(raceName: string) {
    this.customCharacter = false;
    if (raceName === 'custom') {
      this.customCharacter = true;
      return;
    }
    this.character.race = raceName;
  }

  levelAutoFill(lvl: any) {
    lvl = Number(lvl);
    this.character.hp.numberOfHutDice = lvl;
  }

  classAutoFill(className: string) {
    this.clearSavingThrows();
    switch (className) {
      case 'barbarian':
        this.character.savingThrows.strength = true;
        this.character.savingThrows.constitution = true;
        this.character.spellcastingAbility = 'none';
        this.character.hp.hitDice = 'd12';
        break;
      case 'bard':
        this.character.savingThrows.dexterity = true;
        this.character.savingThrows.charisma = true;
        this.character.spellcastingAbility = 'Charisma';
        this.character.hp.hitDice = 'd8';
        break;
      case 'cleric':
        this.character.savingThrows.wisdom = true;
        this.character.savingThrows.charisma = true;
        this.character.spellcastingAbility = 'Wisdom';
        this.character.hp.hitDice = 'd8';
        break;
      case 'druid':
        this.character.savingThrows.intelligence = true;
        this.character.savingThrows.wisdom = true;
        this.character.spellcastingAbility = 'Wisdom';
        this.character.hp.hitDice = 'd8';
        break;
      case 'fighter':
        this.character.savingThrows.strength = true;
        this.character.savingThrows.constitution = true;
        this.character.spellcastingAbility = 'Intelligence';
        this.character.hp.hitDice = 'd10';
        break;
      case 'monk':
        this.character.savingThrows.strength = true;
        this.character.savingThrows.dexterity = true;
        this.character.spellcastingAbility = 'none';
        this.character.hp.hitDice = 'd8';
        break;
      case 'paladin':
        this.character.savingThrows.wisdom = true;
        this.character.savingThrows.charisma = true;
        this.character.spellcastingAbility = 'Charisma';
        this.character.hp.hitDice = 'd10';
        break;
      case 'ranger':
        this.character.savingThrows.strength = true;
        this.character.savingThrows.dexterity = true;
        this.character.spellcastingAbility = 'Wisdom';
        this.character.hp.hitDice = 'd10';
        break;
      case 'rogue':
        this.character.savingThrows.dexterity = true;
        this.character.savingThrows.intelligence = true;
        this.character.spellcastingAbility = 'Intelligence';
        this.character.hp.hitDice = 'd8';
        break;
      case 'sorcerer':
        this.character.savingThrows.constitution = true;
        this.character.savingThrows.charisma = true;
        this.character.sorcPoints = 0;
        this.character.usedSorcPoints = 0;
        this.character.spellcastingAbility = 'Charisma';
        this.character.hp.hitDice = 'd6';
        break;
      case 'warlock':
        this.character.savingThrows.wisdom = true;
        this.character.savingThrows.charisma = true;
        this.character.spellcastingAbility = 'Charisma';
        this.character.hp.hitDice = 'd8';
        break;
      case 'wizard':
        this.character.savingThrows.intelligence = true;
        this.character.savingThrows.wisdom = true;
        this.character.spellcastingAbility = 'Intelligence';
        this.character.hp.hitDice = 'd6';
        break;
      case 'artificer':
        this.character.savingThrows.constitution = true;
        this.character.savingThrows.intelligence = true;
        this.character.spellcastingAbility = 'Intelligence';
        this.character.hp.hitDice = 'd8';
        break;
      case 'bloodHunter':
        this.character.savingThrows.dexterity = true;
        this.character.savingThrows.intelligence = true;
        this.character.spellcastingAbility = 'Charisma';
        this.character.hp.hitDice = 'd10';
        break;
    }
  }

  clearSavingThrows() {
    for (const savingThrowsKey in this.character.savingThrows) {
      this.character.savingThrows[savingThrowsKey] = false;
    }
  }

}
