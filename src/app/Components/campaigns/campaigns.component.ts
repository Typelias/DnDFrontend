import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Campain } from 'src/app/Classes/campain';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  numbers: any;
  campain: Campain

  constructor() {
    this.numbers = new Array(10)
    this.campain = new Campain();
    this.campain.name = "Wow such campain";
    this.campain.dm = "typelias";
    this.campain.players = ["Typelias", "Max", "Mari"]
    this.campain.Image = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  }

  ngOnInit(): void {
  }

}
