import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const TOKEN_KEY_ExpireDate= 'access_token_expireDate';
const REFRESH_TOKEN_KEY_ExpireDate= 'access_token_expireDate';
const USER_KEY = 'auth-user';
const All_USER_KEY = 'all-auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  static isLogInSuccess = false;
  static isAdmin: boolean = false;
  constructor() { }
  signOut() {
    window.sessionStorage.clear();
  }

  public static saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    window.sessionStorage.setItem(TOKEN_KEY,'Bearer ' +token.access_token);
    window.sessionStorage.setItem(TOKEN_KEY_ExpireDate,expireDate.toString());

    //console.log('Obtained Access token');
    //window.location.href = 'http://localhost:8089';
  }

  public static saveRefreshTtoken(refToken) {
    var expireDate = new Date().getTime() + (1000 * refToken.refresh_expires_in);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refToken.access_token);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY_ExpireDate,expireDate.toString());

    //console.log('Obtained Access token');
    //window.location.href = 'http://localhost:8089';
  }

  public static removeToken()
  {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY_ExpireDate);
  }

  public static removeRefreshToken()
  {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY_ExpireDate);
  }

  public static getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public static getRefToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public static getTokenExpDate():string{
    return sessionStorage.getItem(TOKEN_KEY_ExpireDate);
  }

  public static getRefTokenExpDate():string{
    return sessionStorage.getItem(REFRESH_TOKEN_KEY_ExpireDate);
  }

  public static saveUser(user:UserModule) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public static moveUser()
  {
    window.sessionStorage.removeItem(USER_KEY)
  }

  public static saveCompleteUser(completeUser:UserModule) {
    window.sessionStorage.removeItem(All_USER_KEY);
    window.sessionStorage.setItem(All_USER_KEY, JSON.stringify(completeUser));
  }
  public static removeCompleteUser()
  {
    window.sessionStorage.removeItem(All_USER_KEY);
  }
  public static getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}

