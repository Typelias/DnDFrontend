import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/Classes/character';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  @Input()
  charcter: Character

  constructor() { }

  ngOnInit(): void {
  }

}
