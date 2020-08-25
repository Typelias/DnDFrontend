import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HP } from 'src/app/Classes/hp';

@Component({
  selector: 'app-edit-hp-component',
  templateUrl: './edit-hp-component.component.html',
  styleUrls: ['./edit-hp-component.component.scss']
})
export class EditHpComponentComponent implements OnInit {

  newHP: HP;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditHpComponentComponent>) { }

  ngOnInit(): void {
    this.newHP = new HP(this.ac.activeCharacter.hp);
  }

  edit() {

    this.ac.activeCharacter.hp = this.newHP;

    this.dialogRef.close();

  }

}
