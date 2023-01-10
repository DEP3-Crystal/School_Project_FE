import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
import {LogoutComponent} from './logout/logout.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {RegisterformComponent} from './registerform/registerform.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {GradesPageComponent} from './grades-page/grades-page.component';
import {SessionsPageComponent} from './sessions-page/sessions-page.component';
import {ClassroomComponent} from './classroom/classroom.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {OptionalsubjectsComponent} from './optionalsubjects/optionalsubjects.component';
import {MandatorysubjectsComponent} from './mandatorysubjects/mandatorysubjects.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
// import {SchedulerModule} from "@progress/kendo-angular-scheduler";
import {SchedulerModule} from "@progress/kendo-angular-scheduler";
import {UploadImagesComponent} from './upload-images/upload-images.component';
import {SessionmodalComponent} from './sessionmodal/sessionmodal.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {UsersComponent} from "./users/users.component";
import { DatePipe } from '@angular/common';
import { StudentModalComponent } from './student-modal/student-modal.component';
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LogoutComponent,
    DashboardComponent,
    NavigationBarComponent,
    GradesPageComponent,
    SessionsPageComponent,
    ClassroomComponent,
    ScheduleComponent,
    ProfileComponent,
    SettingsComponent,
    RegisterformComponent,
    OptionalsubjectsComponent,
    MandatorysubjectsComponent,
    UploadImagesComponent,
    SessionmodalComponent,
    UnauthorizedComponent,
    UsersComponent,
    SessionsPageComponent,
    StudentModalComponent,
    EmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BsDatepickerModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    SchedulerModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
