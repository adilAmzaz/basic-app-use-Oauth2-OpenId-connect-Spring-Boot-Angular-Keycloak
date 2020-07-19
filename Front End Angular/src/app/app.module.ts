import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './shared/home/home/home.component';
import { NavigationComponent } from './shared/home/navigation/navigation.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { BoardUserComponent } from './user/board-user/board-user.component';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { TokenInterceptor } from './user/token-interceptor';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { Oauth2Component } from './user/oauth2App/oauth2/oauth2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NavigationComponent,
    SignUpComponent,
    LogInComponent,
    BoardUserComponent,
    UserAuthComponent,
    ListUsersComponent,
    Oauth2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
