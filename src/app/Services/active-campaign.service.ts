import { Injectable } from '@angular/core';
import { Campaign } from '../Classes/campaign';
import { Character } from '../Classes/character';
import { AuthService } from './auth.service';
import { ServerRequestService } from './server-request.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveCampaignService {

  public activeCampaign: Campaign;
  private characters: Record<string, Character> = {};
  public activeID: string = '';
  public activeCharacter: Character;
  public done: BehaviorSubject<boolean>;

  constructor(private auth: AuthService, private sr: ServerRequestService, private router: Router) {
    this.done = new BehaviorSubject<boolean>(false);
    this.getActiveCampaign();
  }

  setActiveCharacter(): boolean {
    this.activeID = '';
    for (const key in this.characters) {
      if (this.characters[key].playerName === this.auth.getUsername()) {
        this.activeCharacter = this.characters[key];
        this.activeID = key;
        break;
      }
    }
    if (this.activeID === '') {
      return false;
    }
    return true;
  }

  getActiveCampaign() {
    const activeCampaignString = localStorage.getItem('activeCampaign');
    if (activeCampaignString == null) {
      this.done.next(false);
      this.router.navigate(['']);
      return;
    }
    this.sr.getCampaignByName(activeCampaignString).subscribe(res => {
      this.activeCampaign = res;
      this.getCharacters();
    });

  }

  ready(): Observable<boolean> {
    return this.done.asObservable();

  }

  save() {
    this.sr.updateCharacter(this.activeCharacter, this.activeID).subscribe();
  }

  getCharacters() {
    this.sr.getMultiCharacter(this.activeCampaign.Characters).subscribe(res => {

      if (res != null) {
        res.forEach(mulitCh => {
          this.characters[mulitCh.id] = new Character(mulitCh.character);
        });
      }

      this.done.next(true);
    });

  }

  setActiveCampaign(campain: Campaign) {
    this.done.next(false);
    this.activeCampaign = campain;
    localStorage.setItem('activeCampaign', campain.Name);
    this.getCharacters();

  }
}
