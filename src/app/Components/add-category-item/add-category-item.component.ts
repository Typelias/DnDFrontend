import { Component, OnInit, Inject } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndexHelper } from 'src/app/Classes/index-helper';
import { CategoryItem } from 'src/app/Classes/category-item';

@Component({
  selector: 'app-add-category-item',
  templateUrl: './add-category-item.component.html',
  styleUrls: ['./add-category-item.component.scss']
})
export class AddCategoryItemComponent implements OnInit {

  newItem: CategoryItem = new CategoryItem;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<AddCategoryItemComponent>, @Inject(MAT_DIALOG_DATA) private helper: IndexHelper) {
    this.newItem.showAmount = false;
  }


  ngOnInit(): void {
  }

  addItem() {
    console.log(this.helper.catIndex)
    if (!this.newItem.showAmount) {
      this.newItem.amount = 1;
    }
    if (this.newItem.name != "" && this.newItem.amount > 0) {
      if (this.helper.name === "OPAL") {
        this.ac.activeCharacter.otherProficienciesAndLanguages.addToCategory(this.helper.catIndex, this.newItem);
        this.dialogRef.close();
      } else if (this.helper.name === "FAT") {
        this.ac.activeCharacter.featuresAndTraits.addToCategory(this.helper.catIndex, this.newItem);
        this.dialogRef.close();
      }
    }

  }

}
