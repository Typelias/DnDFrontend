import { Component, OnInit } from '@angular/core';
import { Character} from '../../Classes/character';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss']
})
export class CharacterCreatorComponent implements OnInit {

  character: Character;

  constructor() { }

  ngOnInit(): void {
    this.character = new Character();
  }

  printCharacter() {
    console.log(this.character);
  }

}
