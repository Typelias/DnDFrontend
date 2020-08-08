import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addEquipment() {
    const dialogRef = this.dialog.open(AddEquipmentComponent, { width: "30%", hasBackdrop: true });
    dialogRef.afterClosed().subscribe(res => {
      this.ac.save();
    });
  }

  editEquipment(index: number) {

    const dialogRef = this.dialog.open(EditEquipmentComponent, { width: "20%", hasBackdrop: true, data: index })

  }

}
