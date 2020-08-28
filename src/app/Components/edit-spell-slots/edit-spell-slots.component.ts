import { Component, OnInit } from '@angular/core';
import { SpellList } from 'src/app/Classes/spell-list';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-spell-slots',
  templateUrl: './edit-spell-slots.component.html',
  styleUrls: ['./edit-spell-slots.component.scss']
})
export class EditSpellSlotsComponent implements OnInit {

  newSpellList: SpellList;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditSpellSlotsComponent>) { }

  ngOnInit(): void {
    this.newSpellList = new SpellList(this.ac.activeCharacter.spellList);
  }

  edit() {
    this.ac.activeCharacter.spellList = this.newSpellList;
    this.dialogRef.close();

  }

}
