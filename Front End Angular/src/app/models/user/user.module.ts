import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  Id : number;
  lastName: string;
  firstName: string;
  isFamele: boolean;
  birtheDate: Date;
  password: string;
  phone: string;
  adress: string;
  zipCode: string;
  username : string;
  email :string;
  city: string;
  roles : Role[];
 }

 export enum ERole{
	  ROLE_USER,
    ROLE_MODERATOR,
    ROLE_ADMIN
 }

 export class Role{
   name : ERole;
 }
