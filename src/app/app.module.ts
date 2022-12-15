import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LogoutComponent,
    RegisterformComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
