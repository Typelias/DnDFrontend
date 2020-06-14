import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = "http://localhost:8080";
  helper: JwtHelperService;
  adminStatus: boolean = null;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    this.helper = new JwtHelperService;
  }

  doLogin(u: string, p: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.baseURL + '/signin', { username: u, password: p }, { headers, withCredentials: true });
  }

  isLoggedIn(): boolean {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      return !this.helper.isTokenExpired(token);
    }
    return false;
  }

  loggOut() {
    this.cookieService.delete('token');
  }

  isAdmin(): boolean {
    if (this.adminStatus != null) {
      return this.adminStatus;
    }
    if (this.isLoggedIn()) {
      const token = this.cookieService.get('token');
      if (this.helper.decodeToken(token)['Type'] === 'Admin') {
        this.adminStatus = true;
        return true;
      }
    }
    this.adminStatus = false;
    return false;
  }
}
