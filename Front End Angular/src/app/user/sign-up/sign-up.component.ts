import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _http : HttpClient,private _router : Router) { }
  repeatedPassword : string = "";
  showErrorMessage:boolean = true ;
  showErrorPasswordMessage:boolean =true;
  showErrorEmailMessage : boolean = true;
  ngOnInit(): void {
  }

  userForm = new FormGroup({
    lastName: new FormControl(null, [
        Validators.required
    ]),
    firstName: new FormControl(null, [
      Validators.required
  ]),
  isFamele: new FormControl(null, [
      Validators.required
  ]),
    birtheDate: new FormControl(null, [
      Validators.required
  ]),
    //adminRights: new FormControl(),
    //userId: new FormControl(),
    username: new FormControl(null, [
      Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  ]),
    password: new FormControl(null, [
      Validators.required
  ]),
    phone: new FormControl(null, [
      Validators.required
  ]),
    adress: new FormControl(null, [
      Validators.required
  ]),
    zipCode: new FormControl(null, [
      Validators.required
  ]),
    city: new FormControl(null, [
      Validators.required
  ])
  });
  

  signUp() {
    this.showErrorMessage = this.shouldShowFormRequiredError();
    this.isEmailValid();
    this.comparePasswords();
    if(this.shouldShowFormRequiredError() && this.comparePasswords() ){
      let  user :UserModule =new UserModule();
      user.lastName = this.userForm.controls['lastName'].value;
      user.firstName = this.userForm.controls['firstName'].value;
      user.isFamele = this.userForm.controls['isFamele'].value;
      user.birtheDate = this.userForm.controls['birtheDate'].value;
      user.password = this.userForm.controls['password'].value;
      user.phone = this.userForm.controls['phone'].value;
      user.adress = this.userForm.controls['adress'].value;
      user.zipCode = this.userForm.controls['zipCode'].value;
      user.city = this.userForm.controls['city'].value;
      user.username = this.userForm.controls['username'].value;
      this._http.post(GlobalConfig.addUser, user).subscribe(
        data => {
          this._router.navigate(['/log-in']);
        },
        error => 
        {
          console.log("error")
          console.log(error);
        }
          
      );
    }
  
  }
  ​
  shouldShowFormRequiredError() {
    return this.userForm.valid  ;
  }

  modifyRepeatedPassword(event : any)
  {
    this.repeatedPassword = event.target.value ;

  }
  comparePasswords()
  {
    this.showErrorPasswordMessage = this.repeatedPassword === String( this.userForm.controls['password'].value);
    return this.repeatedPassword === String( this.userForm.controls['password'].value);
  }

  isEmailValid()
  {
    this.showErrorEmailMessage = this.userForm.controls['username'].valid;
    return this.userForm.controls['username'].valid;
  }
  /*signUp(){
    this._http.post<UserModule>(GlobalConfig.addUser,this.userForm.value).subscribe(
      data =>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }
  */
}
