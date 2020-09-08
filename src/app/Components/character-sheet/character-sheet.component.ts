import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ActiveCampaignService } from 'src/app/Services/active-campaign.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  status: string = '';
  acServiceDone: boolean = false;

  constructor(private auth: AuthService, public ac: ActiveCampaignService) { }

  ngOnInit(): void {
    this.ac.ready().subscribe(res => {
      if (res) {
        if (this.ac.activeCampaign.DM === this.auth.getUsername()) {
          this.status = 'dm';
        } else if (this.ac.setActiveCharacter()) {
          this.status = 'ok';
        } else {
          this.status = 'create';
        }
        this.acServiceDone = res;
      }
    });

  }

}
