import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[]=[];
  afficheHobbies=false;
  btnName="Afficher"
  constructor() { }

  ngOnInit(): void {
    this.users.push({name:"sal",email:'sal@sal',hobbies:["Sprot","Voyage"]},
    {name:"bilel",email:'sal@sal',hobbies:["Sprot","Voyage"]})
  }

  afficher(){
    if(this.btnName=="Afficher"){
      this.afficheHobbies=true
      this.btnName="Masquer"
    }
    else if(this.btnName=="Masquer"){
      this.afficheHobbies=false
      this.btnName="Afficher"
    }
  
  }
  supprimer(i:number,j:number){
    this.users[i].hobbies.splice(j,1)
  }

}
