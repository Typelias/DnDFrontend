import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSpellComponent } from '../add-spell/add-spell.component';
import { EditSpellSlotsComponent } from '../edit-spell-slots/edit-spell-slots.component';
import { EditSpellItemComponent } from '../edit-spell-item/edit-spell-item.component';
import { EditSpellInfoComponent } from '../edit-spell-info/edit-spell-info.component';

@Component({
  selector: 'app-spells-view',
  templateUrl: './spells-view.component.html',
  styleUrls: ['./spells-view.component.scss']
})
export class SpellsViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.ac.activeCharacter.spellList.spellList);
  }

  addSpell() {
    const dialogRef = this.dialog.open(AddSpellComponent, { width: '30%', hasBackdrop: true });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  editSpellSlots() {
    const dialogRef = this.dialog.open(EditSpellSlotsComponent, { width: '20%', hasBackdrop: true });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  deleteSpell(index: number) {
    this.ac.activeCharacter.spellList.removeSpell(index);
    this.ac.save();
  }

  editSpell(index: number) {
    const dialogRef = this.dialog.open(EditSpellItemComponent, { width: '30%', hasBackdrop: true, data: index });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  editInfo() {
    const dialogRef = this.dialog.open(EditSpellInfoComponent, { width: '20%', hasBackdrop: true });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  resetSpellSlots() {
    this.ac.activeCharacter.spellList.lvl1SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl2SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl3SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl4SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl5SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl6SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl7SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl8SpellSlutsUsed = 0;
    this.ac.activeCharacter.spellList.lvl9SpellSlutsUsed = 0;
    this.ac.save();
  }

  useSpellSlot(index: number) {
    switch (index) {
      case 1: this.ac.activeCharacter.spellList.lvl1SpellSlutsUsed++;
              break;
      case 2: this.ac.activeCharacter.spellList.lvl2SpellSlutsUsed++;
              break;
      case 3: this.ac.activeCharacter.spellList.lvl3SpellSlutsUsed++;
              break;
      case 4: this.ac.activeCharacter.spellList.lvl4SpellSlutsUsed++;
              break;
      case 5: this.ac.activeCharacter.spellList.lvl5SpellSlutsUsed++;
              break;
      case 6: this.ac.activeCharacter.spellList.lvl6SpellSlutsUsed++;
              break;
      case 7: this.ac.activeCharacter.spellList.lvl7SpellSlutsUsed++;
              break;
      case 8: this.ac.activeCharacter.spellList.lvl8SpellSlutsUsed++;
              break;
      case 9: this.ac.activeCharacter.spellList.lvl9SpellSlutsUsed++;
              break;
    }
    this.ac.save();
  }

}
