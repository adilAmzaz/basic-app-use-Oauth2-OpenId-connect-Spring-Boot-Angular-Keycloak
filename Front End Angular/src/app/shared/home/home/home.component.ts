import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from 'src/app/user/user.component';
import { GlobalConfig } from 'src/app/global-config';
import { TokenStorageService } from 'src/app/user/token-storage.service';
import { UserModule } from 'src/app/models/user/user.module';
import { Oauth2Service } from 'src/app/user/oauth2App/oauth2-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpClient, private _service : Oauth2Service) { }

  ngOnInit(): void {
  }

  test()
  {
    this._http.get<Object>('http://localhost:8080/auth/realms/dev/protocol/openid-connect/userinfo').subscribe(
      data => console.log(data),
      error => console.log(error)
    )
}
  
}
