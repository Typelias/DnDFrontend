import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSpellComponent } from '../add-spell/add-spell.component';

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
    const dialogRef = this.dialog.open(AddSpellComponent, { width: "30%", hasBackdrop: true });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  deleteSpell(index: number) {
    this.ac.activeCharacter.spellList.removeSpell(index);
    this.ac.save();
  }

}
