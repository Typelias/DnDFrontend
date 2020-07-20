import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { Campain } from 'src/app/Classes/campain';
import { AuthService } from 'src/app/Services/auth.service';
import { Character } from 'src/app/Classes/character';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  players = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  playerList: string[];
  newCampaign: Campain = new Campain;

  constructor(private sr: ServerRequestService, private auth: AuthService) { }

  ngOnInit(): void {
    this.sr.getUsers().subscribe(res => this.playerList = res);

  }

  convertToBase64(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.newCampaign.Image = reader.result.toString();
    }

  }

  printSelect() {
    console.log(this.players.value);
  }

  createCampaign() {
    this.newCampaign.Dm = this.auth.getUsername();
    if (!this.newCampaign.Name) {
      return;
    }
    if (!this.newCampaign.Image) {
      return;
    }
    if (!this.players.value) {
      return;
    }

    this.newCampaign.Players = this.players.value;

    console.log(this.newCampaign);

    this.sr.addCampaign(this.newCampaign).subscribe(res => console.log(res));


  }

}
