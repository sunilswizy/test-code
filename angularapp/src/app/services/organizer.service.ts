import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin123'),
      'Access-Control-Allow-Origin': 'https://8081-dcedfdcbcfcffddecbadfcfbdfaaabadc.premiumproject.examly.io'
    })
  };

  baseUrl:string="https://8080-dcedfdcbcfcffddecbadfcfbdfaaabadc.premiumproject.examly.io";

public getUnsoldPlayers():Observable<Object>{
  return this.httpClient.get(this.baseUrl+"/api/organizer/unsold-players").pipe();
}

public getTeams():Observable<Object>{
  return this.httpClient.get(this.baseUrl+"/api/admin/teams").pipe();
}

public assignPlayerToTeam(playerId: number, teamId: number):Observable<Object>{
  return this.httpClient.get(this.baseUrl+"/api/organizer/{"+playerId+"}/{"+teamId+"}").pipe();
}

public releasePlayerFromTeam(playerId: number):Observable<Object>{
  return this.httpClient.delete(this.baseUrl+"/api/organizer/{"+playerId+"}").pipe();
}
}
