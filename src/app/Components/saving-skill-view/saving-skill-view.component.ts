import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-saving-skill-view',
  templateUrl: './saving-skill-view.component.html',
  styleUrls: ['./saving-skill-view.component.scss']
})
export class SavingSkillViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  editMode: boolean = false;

  ngOnInit(): void {
  }

  edit() {
    this.editMode = !this.editMode;

    if (!this.editMode) {
      this.ac.save();
    }
  }

}
