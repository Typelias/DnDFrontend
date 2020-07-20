import { Component, OnInit, Input } from '@angular/core';
import { Campain } from 'src/app/Classes/campain';
import { AuthService } from 'src/app/Services/auth.service';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';

@Component({
  selector: 'app-campaign-icon',
  templateUrl: './campaign-icon.component.html',
  styleUrls: ['./campaign-icon.component.scss']
})
export class CampaignIconComponent implements OnInit {
  @Input()
  campain: Campain

  constructor(private auth: AuthService, private campaignService: ActiveCampaignService) { }

  ngOnInit(): void {
    console.log(this.campain);
  }

  setActiveCampaign() {
    this.campaignService.setActiveCampaign(this.campain);
  }

  isDM(): boolean {
    if (this.campain.Dm === this.auth.getUsername()) {
      return true;
    }

    return false;

  }

}
