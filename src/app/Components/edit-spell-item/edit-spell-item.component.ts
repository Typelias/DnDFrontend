import { Component, OnInit, Inject } from '@angular/core';
import { Spell } from 'src/app/Classes/spell';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-spell-item',
  templateUrl: './edit-spell-item.component.html',
  styleUrls: ['./edit-spell-item.component.scss']
})
export class EditSpellItemComponent implements OnInit {

  newSpell: Spell;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditSpellItemComponent>,
              @Inject(MAT_DIALOG_DATA) private index: number) { }

  ngOnInit(): void {
    this.newSpell = new Spell(this.ac.activeCharacter.spellList.spellList[this.index]);
  }

  editSpell() {
    if (this.newSpell.name === '' || this.newSpell.level === '') {
      alert('Name or Type was not defined');
      return;
    }
    this.ac.activeCharacter.spellList.edditSpell(this.newSpell, this.index);
    this.dialogRef.close();


  }

}
