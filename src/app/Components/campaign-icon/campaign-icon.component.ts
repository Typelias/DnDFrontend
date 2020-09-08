import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/Classes/campaign';
import { AuthService } from 'src/app/Services/auth.service';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-icon',
  templateUrl: './campaign-icon.component.html',
  styleUrls: ['./campaign-icon.component.scss']
})
export class CampaignIconComponent implements OnInit {
  @Input()
  campaign: Campaign;

  constructor(private auth: AuthService, private campaignService: ActiveCampaignService, private router: Router) { }

  ngOnInit(): void {
  }

  setActiveCampaign() {
    this.campaignService.setActiveCampaign(this.campaign);
    this.router.navigate(['/gameScreen']);

  }



  isDM(): boolean {
    if (this.campaign.DM === this.auth.getUsername()) {
      return true;
    }

    return false;

  }

}
