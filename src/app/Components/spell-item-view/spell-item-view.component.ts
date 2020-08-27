import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Spell } from 'src/app/Classes/spell';

@Component({
  selector: 'app-spell-item-view',
  templateUrl: './spell-item-view.component.html',
  styleUrls: ['./spell-item-view.component.scss']
})
export class SpellItemViewComponent implements OnInit {

  @Input()
  spell: Spell

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter();
  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
