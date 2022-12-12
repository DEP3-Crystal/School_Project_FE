import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignupComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
