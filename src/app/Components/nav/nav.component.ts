import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authServicer: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authServicer.isLoggedIn();
  }

  loggOut() {
    this.authServicer.loggOut();
    this.router.navigate([''])

  }

}
