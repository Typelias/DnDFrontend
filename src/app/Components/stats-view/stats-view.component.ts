import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { EditStatsComponent } from '../edit-stats/edit-stats.component';

@Component({
  selector: 'app-stats-view',
  templateUrl: './stats-view.component.html',
  styleUrls: ['./stats-view.component.scss']
})
export class StatsViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edditStats() {
    const dialogRef = this.dialog.open(EditStatsComponent, { width: '20%', hasBackdrop: true });
    dialogRef.afterClosed().subscribe(res => {
      this.ac.activeCharacter.hp.initiative = this.ac.activeCharacter.stats.dexterityModifier;
      this.ac.save();
    });
  }

}
