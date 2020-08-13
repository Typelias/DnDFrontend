import { Component, OnInit, Input, Inject } from '@angular/core';
import { Category } from 'src/app/Classes/category';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  newCategory: Category;

  constructor(private ac: ActiveCampaignService, private dialogRef: MatDialogRef<AddCategoryComponent>, @Inject(MAT_DIALOG_DATA) private destination: string) {
    this.newCategory = new Category();
  }

  ngOnInit(): void {
  }

  addCategory() {
    if (this.newCategory.name === "") {
      alert("Name was not givven");
      return;
    }
    if (this.destination === "OPAL") {
      this.ac.activeCharacter.otherProficienciesAndLanguages.addCategory(this.newCategory);
      this.dialogRef.close();
    } else if (this.destination == "FAT") {
      this.ac.activeCharacter.featuresAndTraits.addCategory(this.newCategory);
      this.dialogRef.close();
    }
  }

}
