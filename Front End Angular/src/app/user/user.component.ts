import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModule } from '../models/user/user.module';
import { UserHttpService } from './user-http.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private _userHttpService: UserHttpService,) { }

  showErrorMessage:boolean = true ;
  ngOnInit(): void {
  }
;





}


