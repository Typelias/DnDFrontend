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


  newItem: CategoryItem = new CategoryItem();

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditEquipmentComponent>, @Inject(MAT_DIALOG_DATA) private index: number) {
    this.newItem.name = this.ac.activeCharacter.equipment.equipmentList[this.index].name;
    this.newItem.description = this.ac.activeCharacter.equipment.equipmentList[this.index].description;
    this.newItem.amount = this.ac.activeCharacter.equipment.equipmentList[this.index].amount;
  }

  ngOnInit(): void {
  }

  editEquipment() {

    if (this.newItem.name != "" && this.newItem.amount > 0) {
      this.ac.activeCharacter.equipment.edditEquipment(this.newItem, this.index)
      this.dialogRef.close()
    }



  }

}
