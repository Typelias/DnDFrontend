import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { MatDialog } from '@angular/material/dialog';
import { EditHpComponentComponent } from '../edit-hp-component/edit-hp-component.component';

@Component({
  selector: 'app-hpview',
  templateUrl: './hpview.component.html',
  styleUrls: ['./hpview.component.scss']
})
export class HPViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editHp() {
    const dialogRef = this.dialog.open(EditHpComponentComponent, { width: "20%", hasBackdrop: true })

    dialogRef.afterClosed().subscribe(resp => {
      this.ac.save();
    })
  }

  addHP() {
    if (this.ac.activeCharacter.hp.currHP >= this.ac.activeCharacter.hp.maxHP) {
      return;
    }
    this.ac.activeCharacter.hp.currHP += 1;
    this.ac.save();
  }

  removeHP() {
    if (this.ac.activeCharacter.hp.currHP <= 0) {
      return;
    }
    this.ac.activeCharacter.hp.currHP -= 1;
    this.ac.save();
  }

}
