import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
//import { error } from 'protractor';
import { TokenStorageService } from '../token-storage.service';
import { UserModule, ERole } from 'src/app/models/user/user.module';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';
import { error } from 'protractor';
import { Oauth2Service } from '../oauth2App/oauth2-service.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _http: HttpClient, private _router : Router,private _userService : UserHttpService,
                private _oauth2Service : Oauth2Service) { }

  ngOnInit(): void {
  }
  userLogInForm = new FormGroup({
    username: new FormControl(null, [
        Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
  ])
})

public  login(){
  TokenStorageService.removeToken();
  TokenStorageService.removeRefreshToken();
  this._oauth2Service.retrieveToken(this.userLogInForm.controls['username'].value,this.userLogInForm.controls['password'].value).subscribe(
    data =>{
      let obj = JSON.parse(JSON.stringify(data));

      TokenStorageService.saveToken( obj);
      TokenStorageService.saveUser(this.userLogInForm.value);
      TokenStorageService.isLogInSuccess = true;
      var headers = new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Bearer '+TokenStorageService.getToken()});
        console.log("token is ")
        console.log(TokenStorageService.getToken())
        console.log("data")
        console.log(data)
      this._http.get<UserModule>(GlobalConfig.getUserByUsername+this.userLogInForm.controls['username'].value).subscribe(
        infos =>{
          console.log("infos")
          console.log(infos)
          let obj2 =JSON.parse(JSON.stringify(infos))

          TokenStorageService.saveCompleteUser(obj2);
          if(obj2!= null){
           UserHttpService.completeName = obj2.firstName+" "+obj2.lastName;
          
           if(obj2.roles[0].name === ERole[2])
            UserHttpService.isAdmin = true;
          }
          this._router.navigate(['/home']);
        },
        error =>{
          console.log(error)
        }
      )
    },
    error =>
    {
      console.log(error)
    }
  )
  
    
}

getCompleteUser() {
  if(TokenStorageService.isLogInSuccess){
;
    return true;
  }
  return false;
}


}
