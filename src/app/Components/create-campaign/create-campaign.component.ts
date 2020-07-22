import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { Campain } from 'src/app/Classes/campain';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  players = new FormControl();
  playerList: string[];
  newCampaign: Campain = new Campain;
  nameList: string[] = [];
  errorText: string = "";
  nameMatch: boolean = false;

  constructor(private sr: ServerRequestService, private auth: AuthService, private dialogRef: MatDialogRef<CreateCampaignComponent>) { }

  ngOnInit(): void {
    this.sr.getUsers().subscribe(res => this.playerList = res);
    this.sr.getAllCampaigns().subscribe(res => {
      res.forEach(camp => {
        this.nameList.push(camp.Name);
      });
    });

  }

  checkName() {
    this.errorText = "";
    const temp = this.nameList.find(x => x === this.newCampaign.Name);
    if (temp) {
      this.nameMatch = true;
      this.errorText = "Name already in use";
    } else {
      this.nameMatch = false;
    }

  }

  convertToBase64(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newCampaign.Image = reader.result.toString();
    }

  }

  printSelect() {
    console.log(this.players.value);
  }

  createCampaign() {
    this.errorText = "";
    if (this.nameMatch) {
      this.errorText = "Name already in use";
      return;
    }
    this.newCampaign.DM = this.auth.getUsername();
    if (!this.newCampaign.Name) {
      this.errorText = "No name was entered"
      return;
    }
    if (!this.newCampaign.Image) {
      this.errorText = "No image was upploaded"
      return;
    }
    if (!this.players.value) {
      this.errorText = "No players where selected"
      return;
    }

    this.newCampaign.Players = this.players.value;

    const temp = this.newCampaign.Players.find(x => x === this.auth.getUsername())
    if (!temp) {
      this.newCampaign.Players.push(this.auth.getUsername());
    }

    console.log(this.newCampaign);

    this.sr.addCampaign(this.newCampaign).subscribe(res => { console.log(res); this.dialogRef.close() });


  }

}
