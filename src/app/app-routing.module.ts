import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './services/auth-gaurd.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterformComponent} from './registerform/registerform.component';
import {GradesPageComponent} from './grades-page/grades-page.component';
import {SessionsPageComponent} from './sessions-page/sessions-page.component';
import {ClassroomComponent} from './classroom/classroom.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {MandatorysubjectsComponent} from './mandatorysubjects/mandatorysubjects.component';
import {OptionalsubjectsComponent} from './optionalsubjects/optionalsubjects.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterformComponent},
  {path: 'grades', component: GradesPageComponent},
  {path: 'session', component: SessionsPageComponent},
  {path: 'classroom', component: ClassroomComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'mandatory', component: MandatorysubjectsComponent},
  {path: 'optional', component: OptionalsubjectsComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
