import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { CategoryItem } from 'src/app/Classes/category-item';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  name: string = "";
  description: string = "";
  amount: number = 0;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<AddEquipmentComponent>) { }

  ngOnInit(): void {
  }

  addEquipment() {

    console.log(this.ac.activeCharacter);

    if (this.name === "" || this.amount === 0) {
      alert("One or more fields where empty");
      return;
    }

    let newItem: CategoryItem = new CategoryItem();

    newItem.name = this.name;
    newItem.description = this.description;
    newItem.amount = this.amount;

    this.ac.activeCharacter.equipment.addEquipment(newItem);

    this.dialogRef.close();



  }

}
