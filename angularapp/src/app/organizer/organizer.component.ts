import { Component, OnInit } from '@angular/core';
import { OrganizerService } from '../services/organizer.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private organizerService:OrganizerService) { }

  ngOnInit(): void {
  }

  public getUnsoldPlayers(){
    this.organizerService.getUnsoldPlayers().subscribe((data:any)=>{
      console.log(data);
    })
  }

  public getTeams(){
    this.organizerService.getTeams().subscribe((data:any)=>{
    console.log(data);
  })
  }

  public assignPlayerToTeam(playerId: number, teamId: number){
    this.organizerService.assignPlayerToTeam(playerId,teamId).subscribe((data:any)=>{
    console.log(data);
  })
  }

  public releasePlayerFromTeam(playerId: number){
    this.organizerService.releasePlayerFromTeam(playerId).subscribe((data:any)=>{
      console.log(data);
    })
  }
}
