import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.scss']
})
export class EquipmentViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addEquipment() {
    const dialogRef = this.dialog.open(AddEquipmentComponent, { width: '20%', hasBackdrop: true });
    dialogRef.afterClosed().subscribe(res => {
      this.ac.save();
    });
  }

  deleteEquipment(index: number) {
    this.ac.activeCharacter.equipment.removeEquipment(index);
    this.ac.save();
  }

  editEquipment(index: number) {

    const dialogRef = this.dialog.open(EditEquipmentComponent, { width: '20%', hasBackdrop: true, data: index });
    dialogRef.afterClosed().subscribe(res => {
      this.ac.save();
    });

  }

  decreaseAmount(index: number) {
    this.ac.activeCharacter.equipment.decreaseAmount(index);
    this.ac.save();
  }

  increseAmount(index: number) {
    this.ac.activeCharacter.equipment.increaseAmount(index);
    this.ac.save();
  }

}
