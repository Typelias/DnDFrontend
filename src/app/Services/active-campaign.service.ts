import { Injectable } from '@angular/core';
import { Campain } from '../Classes/campain';
import { Character } from '../Classes/character';
import { AuthService } from './auth.service';
import { ServerRequestService } from './server-request.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveCampaignService {

  private activeCampaign: Campain;
  private characters: Record<string, Character>;
  public activeID: string = "";
  public activeCharacter: Character;

  constructor(private auth: AuthService, private sr: ServerRequestService) { }

  setActiveCharacter(): boolean {
    for (let key in this.characters) {
      if (this.characters[key].playerName === this.auth.getUsername()) {
        this.activeCharacter = this.characters[key];
        this.activeID = key;
        break;
      }
    }
    if (this.activeID === "") {
      return false;
    }
    return true;
  }



  getCampaign(): Campain {
    if (this.activeCampaign != null) {
      return this.activeCampaign;
    }
    return null
  }

  setActiveCampaign(campain: Campain) {
    this.activeCampaign = campain;
    console.log(this.activeCampaign);
  }
}
