import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConfig } from '../global-config';
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  static isAdmin : boolean = false;
  static completeName : string = " ";

  constructor(private _http: HttpClient) { }

  addUser(user: UserModule): Observable<UserModule>
  {
    return this._http.post<UserModule>(GlobalConfig.addUser, user);
  }

  getUserUserName(username: String): Observable<UserModule>
  {
    return this._http.get<UserModule>(GlobalConfig.getUserByUsername+"/"+ username);
  }

  getAllUsers(): Observable<UserModule[]>
  {
    return this._http.get<UserModule[]>(GlobalConfig.getAllUsers);
  }
  test() : Observable<String>
  {
    return this._http.get<String>(GlobalConfig.test);
  }
}
