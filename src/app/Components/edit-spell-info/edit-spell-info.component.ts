import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-spell-info',
  templateUrl: './edit-spell-info.component.html',
  styleUrls: ['./edit-spell-info.component.scss']
})
export class EditSpellInfoComponent implements OnInit {

  spellSave: number;
  spellAttack: number;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditSpellInfoComponent>) { }

  ngOnInit(): void {
    this.spellSave = this.ac.activeCharacter.spellSaveDC;
    this.spellAttack = this.ac.activeCharacter.spellAttackBonus;
  }

  edit() {

    if (this.spellSave === 0 || this.spellAttack === 0) {
      alert('Fields are empty');
      return;
    }

    this.ac.activeCharacter.spellSaveDC = this.spellSave;
    this.ac.activeCharacter.spellAttackBonus = this.spellAttack;

    this.dialogRef.close();

  }

}
