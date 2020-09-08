import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/Classes/campaign';
import { FormControl } from '@angular/forms';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {

  campaigns: Campaign[] = [];
  campaignToEdit: Campaign;
  newImage: string = '';
  newPlayers = new FormControl();
  playerList: string[] = [];



  constructor(private sr: ServerRequestService, private auth: AuthService, private dialogRef: MatDialogRef<EditCampaignComponent>) {
    this.sr.getDMCampaign(auth.getUsername()).subscribe(res => this.campaigns = res);
    this.sr.getUsers().subscribe(res => this.playerList = res);
  }

  setValues() {
    this.newPlayers.setValue(this.campaignToEdit.Players);
  }

  convertToBase64(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newImage = reader.result.toString();
    };
  }

  updateCampaign() {
    this.campaignToEdit.Players = this.newPlayers.value;
    if (this.newImage !== '') {
      this.campaignToEdit.Image = this.newImage;
    }

    this.sr.updateCampaign(this.campaignToEdit.Name, this.campaignToEdit).subscribe(res => this.dialogRef.close());



  }

  deleteCampaign() {
    this.sr.deleteCampaign(this.campaignToEdit.Name).subscribe(res => this.dialogRef.close());

  }

  ngOnInit(): void {
  }

}
