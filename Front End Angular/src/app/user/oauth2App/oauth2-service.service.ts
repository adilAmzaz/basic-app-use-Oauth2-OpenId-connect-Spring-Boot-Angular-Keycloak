import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {


  public clientId = 'user_service';
  public redirectUri = 'http://localhost:4200/';
  constructor(private _http: HttpClient) { }

  retrieveToken(username,password) { 
    let params = new URLSearchParams();   
    params.append('grant_type','client_credentials');
    params.append('client_id', this.clientId);
    params.append('password', password);
    //params.append('redirect_uri', 'http://localhost:8083/user/get/username/aa@gmail.com');
    params.append('username',username);
    params.append('client_secret','24407356-883e-433e-9d38-b720394746e0');

    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
       
     return this._http.post(GlobalConfig.getToken, 
        params.toString(), { headers: headers })

  }



}


