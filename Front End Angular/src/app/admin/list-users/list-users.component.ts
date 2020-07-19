import { Component, OnInit } from '@angular/core';
import { UserModule, ERole } from 'src/app/models/user/user.module';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
import { UserHttpService } from 'src/app/user/user-http.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listeOfRules : string[] = ["hello","hello2"];
  showSave : boolean = false;
  listUsers : UserModule[] = [];
  constructor(private _userService : UserHttpService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      users => {
        this.listUsers = users;
        console.log(this.listUsers);
        console.log(this.listUsers[0].roles[0])
      }
    )
  }

  listeOfMissingRules(rule  : string){
    for (let index = 0; index < 3; index++) {
      if(ERole[index]===rule)
      {
        return  new Array( ERole[(index +1)%3],ERole[(index+2)%3])
      }
    }
    return new Array();
  }

  toggled(rule  : number)
  {
    return true;
  }

}
