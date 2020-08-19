import { Component, OnInit, Inject } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndexHelper } from 'src/app/Classes/index-helper';
import { CategoryItem } from 'src/app/Classes/category-item';

@Component({
  selector: 'app-edit-category-item',
  templateUrl: './edit-category-item.component.html',
  styleUrls: ['./edit-category-item.component.scss']
})
export class EditCategoryItemComponent implements OnInit {

  newItem: CategoryItem = new CategoryItem();

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditCategoryItemComponent>, @Inject(MAT_DIALOG_DATA) private helper: IndexHelper) {
    this.newItem.name = this.ac.activeCharacter.otherProficienciesAndLanguages.categories[this.helper.catIndex].items[this.helper.itemIndex].name
    this.newItem.description = this.ac.activeCharacter.otherProficienciesAndLanguages.categories[this.helper.catIndex].items[this.helper.itemIndex].description;
    this.newItem.amount = this.ac.activeCharacter.otherProficienciesAndLanguages.categories[this.helper.catIndex].items[this.helper.itemIndex].amount;
    this.newItem.showAmount = this.ac.activeCharacter.otherProficienciesAndLanguages.categories[this.helper.catIndex].items[this.helper.itemIndex].showAmount;
  }

  ngOnInit(): void {
  }

  edditItem() {

    if (!this.newItem) {
      this.newItem.amount = 1;
    }

    if (this.newItem.name != "" && this.newItem.amount > 0) {
      if (this.helper.name === "OPAL") {
        this.ac.activeCharacter.otherProficienciesAndLanguages.editItemInCat(this.helper.catIndex, this.helper.itemIndex, this.newItem);
        this.dialogRef.close();
      }
      if (this.helper.name === "FAT") {
        this.ac.activeCharacter.featuresAndTraits.editItemInCat(this.helper.catIndex, this.helper.itemIndex, this.newItem);
        this.dialogRef.close();
      }
    }


  }

}
