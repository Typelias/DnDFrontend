import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/Classes/campaign';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaignList: Campaign[];

  constructor(private sr: ServerRequestService, private auth: AuthService) {

    this.sr.getUserCampaign(this.auth.getUsername()).subscribe(res => {
      this.campaignList = res;
    });


  }

  ngOnInit(): void {
  }

}
