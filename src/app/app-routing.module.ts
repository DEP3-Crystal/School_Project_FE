import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterformComponent } from './registerform/registerform.component';
const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch:'full'},
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  {path: 'c' , component: DashboardComponent},
  {path:'register', component:RegisterformComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
