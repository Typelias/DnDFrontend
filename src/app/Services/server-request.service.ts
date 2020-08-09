import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campain } from '../Classes/campain';
import { Character } from '../Classes/character';
import { Icharacter } from "../Interfaces/icharacter"
import { MultiCharacterGetHelper } from '../Classes/multi-character-get-helper'

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseURL: string = "http://localhost:8081"
  headers = { 'Content-Type': 'application/json' };
  constructor(private http: HttpClient) { }



  getUsers() {
    return this.http.get<string[]>(this.baseURL + "/getUserList", { withCredentials: true })
  }

  createUser(u: string, p: string, r: string) {
    return this.http.post(this.baseURL + '/addUser', { username: u, password: p, userrole: r }, { headers: this.headers, withCredentials: true });
  }

  deleteUser(u: string) {
    return this.http.post(this.baseURL + '/deleteUser', { username: u }, { headers: this.headers, withCredentials: true });
  }

  updateUser(updateName: string, u: string, p: string, r: string) {
    return this.http.post(this.baseURL + '/updateUser', { userToUpdate: updateName, user: { username: u, password: p, userrole: r } }, { headers: this.headers, withCredentials: true });
  }

  addCampaign(campaign: Campain) {
    return this.http.post(this.baseURL + '/addCampaign', campaign, { headers: this.headers, withCredentials: true })
  }

  getUserCampaign(username: string) {
    return this.http.post<Campain[]>(this.baseURL + '/getUserCampaign', { username: username }, { headers: this.headers, withCredentials: true })
  }

  getDMCampaign(username: string) {
    return this.http.post<Campain[]>(this.baseURL + '/getDMCampaign', { username: username }, { headers: this.headers, withCredentials: true })
  }

  getCampaignByName(name: string) {
    return this.http.post<Campain>(this.baseURL + '/getCampaignByName', { name: name }, { headers: this.headers, withCredentials: true })
  }

  getAllCampaigns() {
    return this.http.get<Campain[]>(this.baseURL + '/getAllCampaigns', { headers: this.headers, withCredentials: true })
  }

  deleteCampaign(name: string) {
    return this.http.post(this.baseURL + '/deleteCampaign', { name: name }, { headers: this.headers, withCredentials: true })

  }

  updateCampaign(name: string, camp: Campain) {
    return this.http.post(this.baseURL + '/updateCampaign', { name: name, campaign: camp }, { headers: this.headers, withCredentials: true });
  }

  getCharacter(id: string) {
    return this.http.post<Icharacter>(this.baseURL + "/getCharacter", { id: id }, { headers: this.headers, withCredentials: true });
  }

  getMultiCharacter(ids: string[]) {
    return this.http.post<MultiCharacterGetHelper[]>(this.baseURL + "/getMultiCharacter", { ids: ids }, { headers: this.headers, withCredentials: true });
  }

  addCharacter(character: Character, campaignName: string) {
    return this.http.post(this.baseURL + "/addCharacter", { character: character, name: campaignName }, { headers: this.headers, withCredentials: true })
  }

  updateCharacter(character: Character, id: string) {
    return this.http.post(this.baseURL + "/updateCharacter", { character: character, id: id }, { headers: this.headers, withCredentials: true })
  }

}
