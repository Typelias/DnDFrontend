import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Campain } from 'src/app/Classes/campain';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaignList: Campain[];

  constructor(private sr: ServerRequestService, private auth: AuthService) {

    this.sr.getUserCampaign(this.auth.getUsername()).subscribe(res => {
      this.campaignList = res;
      console.log(res);
    });


  }

  ngOnInit(): void {
  }

}
