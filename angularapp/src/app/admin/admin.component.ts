import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  public output;
  ngOnInit(): void {
  }

public getTeams() {
  this.adminService.getTeams().subscribe((data:any)=>{
    console.log(data);
    this.output=data;
  })
}

}
