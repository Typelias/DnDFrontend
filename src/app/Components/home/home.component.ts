import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;
  username: string = ""
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.loggedIn = this.auth.isLoggedIn();

    this.username = this.auth.getUsername();

  }

}
