import { Component, OnInit, Input } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddCategoryItemComponent } from '../add-category-item/add-category-item.component';
import { IndexHelper } from '../../Classes/index-helper';
import { EditCategoryItemComponent } from '../edit-category-item/edit-category-item.component';

@Component({
  selector: 'app-opalview',
  templateUrl: './opalview.component.html',
  styleUrls: ['./opalview.component.scss']
})
export class OPALViewComponent implements OnInit {

  @Input()
  viewType: string;

  title: string;

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    if (this.viewType === 'OPAL') {
      this.title = 'Other Proficiencies And Languages';
    } else if (this.viewType === 'FAT') {
      this.title = 'Features And Traits';
    }
  }

  deleteCategory(index: number) {
    if (this.viewType === 'OPAL') {
      this.ac.activeCharacter.otherProficienciesAndLanguages.removeCategory(index);
      this.ac.save();
    } else if (this.viewType === 'FAT') {
      this.ac.activeCharacter.featuresAndTraits.removeCategory(index);
      this.ac.save();
    }

  }

  addItemToCategory(index: number) {
    const helper = new IndexHelper(this.viewType, index, 0);
    const dialogRef = this.dialog.open(AddCategoryItemComponent, { width: '20%', hasBackdrop: true, data: helper });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, { width: '20%', hasBackdrop: true, data: this.viewType });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });
  }

  decreaseAmount(catIndex: number, itemIndex: number) {
    if (this.viewType === 'OPAL') {
      this.ac.activeCharacter.otherProficienciesAndLanguages.categories[catIndex].decreaseAmount(itemIndex);
      this.ac.save();
    } else if (this.viewType === 'FAT') {
      this.ac.activeCharacter.featuresAndTraits.categories[catIndex].decreaseAmount(itemIndex);
      this.ac.save();
    }

  }

  increseAmount(catIndex: number, itemIndex: number) {
    if (this.viewType === 'OPAL') {
      this.ac.activeCharacter.otherProficienciesAndLanguages.categories[catIndex].increaseAmount(itemIndex);
      this.ac.save();
    } else if (this.viewType === 'FAT') {
      this.ac.activeCharacter.featuresAndTraits.categories[catIndex].increaseAmount(itemIndex);
      this.ac.save();
    }

  }

  removeItem(catIndex: number, itemIndex: number) {
    if (this.viewType === 'OPAL') {
      this.ac.activeCharacter.otherProficienciesAndLanguages.removeFromCategory(catIndex, itemIndex);
      this.ac.save();
    } else if (this.viewType === 'FAT') {
      this.ac.activeCharacter.featuresAndTraits.removeFromCategory(catIndex, itemIndex);
      this.ac.save();
    }

  }

  edditCatItem(catIndex: number, itemIndex: number) {
    const helper = new IndexHelper(this.viewType, catIndex, itemIndex);
    const dialogRef = this.dialog.open(EditCategoryItemComponent, { width: '20%', hasBackdrop: true, data: helper });
    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    });

  }

}
