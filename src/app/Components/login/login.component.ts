import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorResponse = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      alert('You are already logged in!');
      this.router.navigate(['']);
    }
  }

  login(event) {
    event.preventDefault();
    if (this.username !== '' && this.password != '') {
      this.authService.doLogin(this.username, this.password).subscribe(res => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['']);
        }
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorResponse = 'No match for the credentials you entered';
        } else {
          this.errorResponse = 'Server error';
        }
      });
    } else {
      this.errorResponse = 'One or more of the fields was empty';
    }
  }

}
