import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseURL: string = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<string[]>(this.baseURL + "/getUserList", { withCredentials: true })
  }

  createUser(u: string, p: string, r: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.baseURL + '/addUser', { username: u, password: p, userrole: r }, { headers, withCredentials: true });
  }

  deleteUser(u: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.baseURL + '/deleteUser', { username: u }, { headers, withCredentials: true });
  }

  updateUser(updateName: string, u: string, p: string, r: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.baseURL + '/updateUser', { userToUpdate: updateName, user: { username: u, password: p, userrole: r } }, { headers, withCredentials: true });
  }





}