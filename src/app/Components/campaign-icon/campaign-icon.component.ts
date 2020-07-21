import { Component, OnInit, Input } from '@angular/core';
import { Campain } from 'src/app/Classes/campain';
import { AuthService } from 'src/app/Services/auth.service';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign-icon',
  templateUrl: './campaign-icon.component.html',
  styleUrls: ['./campaign-icon.component.scss']
})
export class CampaignIconComponent implements OnInit {
  @Input()
  campain: Campain

  constructor(private auth: AuthService, private campaignService: ActiveCampaignService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setActiveCampaign() {
    this.campaignService.setActiveCampaign(this.campain);
  }

  openDialog() {

  }



  isDM(): boolean {
    if (this.campain.DM === this.auth.getUsername()) {
      return true;
    }

    return false;

  }

}
