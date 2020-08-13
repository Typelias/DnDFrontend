import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { Stats } from 'src/app/Classes/stats';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-stats',
  templateUrl: './edit-stats.component.html',
  styleUrls: ['./edit-stats.component.scss']
})
export class EditStatsComponent implements OnInit {

  newStats: Stats;

  constructor(public ac: ActiveCampaignService, private dialogRef: MatDialogRef<EditStatsComponent>) {
    this.newStats = new Stats(ac.activeCharacter.stats);
    console.log(this.newStats);
  }

  ngOnInit(): void {
  }

  editStats() {
    this.calculateStatBonus();
    this.ac.activeCharacter.stats = this.newStats;
    this.dialogRef.close();

  }

  calculateStatBonus() {
    Object.keys(this.newStats).forEach(key => {
      if (key.includes('Modifier')) {
        const index = key.indexOf('M');
        const attribute = key.substring(0, index);
        this.newStats[key] = this.calculateBonus(this.newStats[attribute]);
      }
    });
  }

  calculateBonus(stat: number): number {
    stat -= 10;
    stat = Math.floor(stat / 2);
    return stat;
  }



}
