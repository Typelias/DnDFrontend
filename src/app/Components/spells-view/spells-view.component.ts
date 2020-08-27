import { Component, OnInit } from '@angular/core';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';

@Component({
  selector: 'app-spells-view',
  templateUrl: './spells-view.component.html',
  styleUrls: ['./spells-view.component.scss']
})
export class SpellsViewComponent implements OnInit {

  constructor(public ac: ActiveCampaignService) { }

  ngOnInit(): void {
  }

}
