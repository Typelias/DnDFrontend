import { Component, OnInit } from '@angular/core';
import {ActiveCampaignService} from '../../Services/active-campaign.service';
import {MatDialog} from '@angular/material/dialog';
import {AddWeaponComponent} from '../add-weapon/add-weapon.component';

@Component({
  selector: 'app-weapon-view',
  templateUrl: './weapon-view.component.html',
  styleUrls: ['./weapon-view.component.scss']
})
export class WeaponViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addWeapon() {
    const dialogRef = this.dialog.open(AddWeaponComponent, {width:"20%", hasBackdrop: true});

    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });

  }

}
