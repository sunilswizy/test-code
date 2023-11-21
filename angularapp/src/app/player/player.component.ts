import { Component, OnInit } from '@angular/core';
import{ Player} from '../../models/player.model';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent{

  public players:Player[]=[{ id: 0, name: "", age: 0, category: "",biddingPrice: 0 }];
  public newPlayer:Player={id:1,name:"",age:0,category:"",biddingPrice:0}
  public p:any=this.players.push(this.newPlayer);

  public biddingpricestatus:any="Good bidding";

  public bidding(input:any){
    //this.biddingpricestatus=input.form.controls.biddingprice.value;
    // this.players.push({name:input.form.controls.pname.value,age:input.form.controls.page.value,category:input.form.controls.pcategory.value,biddingPrice:input.form.controls.biddingprice.value});
   // this.newPlayer.biddingPrice = this.biddingpricestatus;
   this.biddingpricestatus=input.biddingprice;
    this.players.push({name:input.name,age:input.age,category:input.category,biddingPrice:input.biddingprice});
    this.newPlayer.biddingPrice=this.biddingpricestatus;
  }

  constructor(private adminService:AdminService){}
  public getPlayers(){
    this.adminService.getPlayers().subscribe((data:any)=>{
      console.log(data);
    })
  }

  public createPlayer(player: Player){
    this.adminService.createPlayer(player).subscribe((data:any)=>{
      console.log(data);
    })
  }

  public updatePlayer(playerId: number, player: Player){
      this.adminService.updatePlayer(playerId,player).subscribe((data:any)=>{
      console.log(data);
      })
  }

  public deletePlayer(playerId: number){
      this.adminService.deletePlayer(playerId).subscribe((data:any)=>{
      console.log(data);
      })
  }
}
