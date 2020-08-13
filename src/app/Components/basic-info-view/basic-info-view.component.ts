import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';

@Component({
  selector: 'app-basic-info-view',
  templateUrl: './basic-info-view.component.html',
  styleUrls: ['./basic-info-view.component.scss']
})
export class BasicInfoViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService) { }

  ngOnInit(): void {

  }

}
