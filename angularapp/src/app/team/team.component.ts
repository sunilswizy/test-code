import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { AdminService } from '../services/admin.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent{
  @Input() maximumBudget: string = '2000';
  public teams:Team[]=[{id:1,name:"test",maximumBudget:10}];
  public newTeam:Team={id:2,name:"test2",maximumBudget:2000}
  public t:any=this.teams.push(this.newTeam);
  public maximumbudgetstatus:any="Good Budget";
  public newTeam1:Team[];

  public team:Team[];

public maxbud(teaminput:any){
  this.teams.push({name:teaminput.form.controls.tname.value,maximumBudget:teaminput.form.controls.maximumBudget.value});
  this.maximumbudgetstatus=teaminput.form.controls.maximumBudget;
}
constructor(private adminService:AdminService){}

public getTeams(){
this.adminService.getTeams().subscribe((data:any)=>{
      console.log(data);
      this.team=data;
      console.log(this.team);
})
}

public createTeam(team:Team){
  this.adminService.createTeam(team).subscribe((data:any)=>{
      console.log(data);
  })
}

public updateTeam(teamId: number, team: Team){
this.adminService.updateTeam(teamId,team).subscribe((data:any)=>{
  console.log(data);
})
}

public deleteTeam(teamId: number){
this.adminService.deleteTeam(teamId).subscribe((data:any)=>{
  console.log(data);
})
}

}

