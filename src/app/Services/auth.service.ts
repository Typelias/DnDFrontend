import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = "http://172.25.240.76:8081";
  helper: JwtHelperService;
  adminStatus: boolean = null;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    this.helper = new JwtHelperService;
  }

  doLogin(u: string, p: string) {
    const headers = { 'Content-Type': 'application/json' };
    const ret = this.http.post(this.baseURL + '/signin', { username: u, password: p }, { headers, withCredentials: true });
    return ret;
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

  getUsername(): string {
    if (!this.cookieService.check('token')) {
      return;
    }
    const token = this.cookieService.get('token');
    return this.helper.decodeToken(token)['username']
  }

  isAdmin(): boolean {

    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      // console.log(this.helper.decodeToken(token));
      if (this.helper.decodeToken(token)['Type'] === 'Admin') {
        this.adminStatus = true;
        return true;
      }
    }

    return false
  }
}
