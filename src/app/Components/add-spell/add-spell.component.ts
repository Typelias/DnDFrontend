import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/Classes/spell';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-spell',
  templateUrl: './add-spell.component.html',
  styleUrls: ['./add-spell.component.scss']
})
export class AddSpellComponent implements OnInit {

  newSpell: Spell;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<AddSpellComponent>) { }

  ngOnInit(): void {
    this.newSpell = new Spell();
    this.newSpell.name = "";
    this.newSpell.level = "";
  }

  addSpell() {
    if (this.newSpell.name === "" || this.newSpell.level === "") {
      alert("Name or Type was not defined");
      return;
    }

    this.ac.activeCharacter.spellList.addSpell(this.newSpell);
    this.dialogRef.close();

  }

}
