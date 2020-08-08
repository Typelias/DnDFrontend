import { Component, OnInit, Input, Inject } from '@angular/core';
import { CategoryItem } from 'src/app/Classes/category-item';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss']
})
export class EditEquipmentComponent implements OnInit {


  newItem: CategoryItem;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditEquipmentComponent>, @Inject(MAT_DIALOG_DATA) private index: number) {
    this.newItem = ac.activeCharacter.equipment.equipmentList[this.index];
  }

  ngOnInit(): void {
  }

  editEquipment() {

  }

}
