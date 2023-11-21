import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Player } from 'src/models/player.model';
import { Team } from 'src/models/team.model';
import { tap, delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin123'),
      'Access-Control-Allow-Origin': 'https://8081-aefaacacebcdffddecbadfcfbdfaaabadc.premiumproject.examly.io'
    })
  };

  baseUrl:string="https://8080-aefaacacebcdffddecbadfcfbdfaaabadc.premiumproject.examly.io";

  public getTeams():Observable<Object>{
    return this.http.get(this.baseUrl+"/api/admin/teams").pipe();
  }

  public createTeam(team:Team):Observable<Object>{
    const result=this.http.post(this.baseUrl+"/api/admin/teams",team).pipe();
     return of(team);
  }

  public updateTeam(teamId: number, team: Team):Observable<Object>{
    return this.http.put(this.baseUrl+"/api/admin/teams/{"+teamId+"}",team).pipe();
  }

  public deleteTeam(teamId: number):Observable<Object>{
    return this.http.delete(this.baseUrl+"/api/admin/teams/{"+teamId+"}").pipe();
  }

  public getPlayers():Observable<Object>{
    return this.http.get(this.baseUrl+"/api/admin/players").pipe();
  }


  public createPlayer(player: Player):Observable<Object>{
    return this.http.post(this.baseUrl+"/api/admin/players",player).pipe();
  }

  public updatePlayer(playerId: number, player: Player):Observable<Object>{
    return this.http.put(this.baseUrl+"/api/admin/players/{"+playerId+"}",player).pipe();
  }

  public deletePlayer(playerId: number):Observable<Object>{
    return this.http.delete(this.baseUrl+"/api/organizer/{"+playerId+"}").pipe();
  }


}
