import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from "../add-category/add-category.component"
import { AddCategoryItemComponent } from "../add-category-item/add-category-item.component"
import { IndexHelper } from "../../Classes/index-helper"

@Component({
  selector: 'app-opalview',
  templateUrl: './opalview.component.html',
  styleUrls: ['./opalview.component.scss']
})
export class OPALViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCategory(index: number) {
    this.ac.activeCharacter.otherProficienciesAndLanguages.removeCategory(index);
    this.ac.save();
  }

  addItemToCategory(index: number) {
    const helper = new IndexHelper("OPAL", index);
    const dialogRef = this.dialog.open(AddCategoryItemComponent, { width: "20%", hasBackdrop: true, data: helper });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, { width: "20%", hasBackdrop: true, data: "OPAL" })
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  decreaseAmount(catIndex: number, itemIndex: number) {
    this.ac.activeCharacter.otherProficienciesAndLanguages.categories[catIndex].decreaseAmount(itemIndex);
    this.ac.save();
  }

  increseAmount(catIndex: number, itemIndex: number) {
    this.ac.activeCharacter.otherProficienciesAndLanguages.categories[catIndex].increaseAmount(itemIndex);
    this.ac.save();
  }

}
