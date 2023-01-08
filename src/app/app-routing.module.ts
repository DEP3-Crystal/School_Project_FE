import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {LogoutComponent} from './logout/logout.component';
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
import {UploadImagesComponent} from "./upload-images/upload-images.component";
import {SessionmodalComponent} from './sessionmodal/sessionmodal.component';
import {AuthGuard} from "./auth-gaurd";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";
import {Role} from "./model/enum/role";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'login', component: UserLoginComponent},
  {
    path: 'logout', component:
    LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component:
    DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register', component:
    RegisterformComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.ORGANIZER]}
  },
  {
    path: 'grades', component: GradesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'session', component: SessionsPageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'classroom', component: ClassroomComponent},
  {
    path: 'schedule', component: ScheduleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mandatory', component: MandatorysubjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'optional', component: OptionalsubjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload-image', component: UploadImagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'session/modal', component: SessionmodalComponent,
    canActivate: [AuthGuard]
  }

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
