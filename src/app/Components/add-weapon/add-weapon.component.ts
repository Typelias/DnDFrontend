import { Component, OnInit } from '@angular/core';
import {ActiveCampaignService} from '../../Services/active-campaign.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Weapon} from '../../Classes/weapon';

@Component({
  selector: 'app-add-weapon',
  templateUrl: './add-weapon.component.html',
  styleUrls: ['./add-weapon.component.scss']
})
export class AddWeaponComponent implements OnInit {

  newWeapon: Weapon = new Weapon();

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<AddWeaponComponent>) {
    this.newWeapon.damage = '';
    this.newWeapon.name = '';
    this.newWeapon.amount = 0;
  }

  ngOnInit(): void {
  }

  addWeapon() {
    if (this.newWeapon.name === '' || this.newWeapon.damage === '' || this.newWeapon.amount === 0) {
      alert('Name, Damage or amount was empty');
      return;
    }
    this.ac.activeCharacter.attacksAndSpellcasting.addWeapon(this.newWeapon);
    this.dialogRef.close();

  }

}
