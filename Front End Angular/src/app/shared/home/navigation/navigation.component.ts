import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/user/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
import { UserComponent } from 'src/app/user/user.component';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/user/user-http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  completeName : string ="";
  constructor(private _http: HttpClient, private _router : Router) { }
  ngOnInit(): void {
  }

  isConnected(){
    if(TokenStorageService.isLogInSuccess == true)
      this.completeName = UserHttpService.completeName;
    return TokenStorageService.isLogInSuccess;
  }

  logOut()
  {
    TokenStorageService.removeToken();
    TokenStorageService.removeCompleteUser();
    TokenStorageService.isLogInSuccess = false;
    UserHttpService.isAdmin = false
    this._router.navigate(['/home']);
  }
  isAdmin()
  {
    return UserHttpService.isAdmin;
  }


}
