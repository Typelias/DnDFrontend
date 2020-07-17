import { Injectable } from '@angular/core';
import { Campain } from '../Classes/campain';

@Injectable({
  providedIn: 'root'
})
export class ActiveCampaignService {

  private activeCampaign: Campain

  constructor() { }

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
