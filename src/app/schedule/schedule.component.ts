import {Component, OnInit} from '@angular/core';
import {displayDate, sampleData} from "./events-utc";
import {SchedulerEvent} from "@progress/kendo-angular-scheduler";
import {SessionService} from "../services/session-service";
import {UserService} from "../services/user-service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  constructor(private sessionService: SessionService, private userService: UserService) {
  }

  ngOnInit(): void {
    // // let user = this.userService.getCurrentUser();
    // let id: number = +(localStorage.getItem('currentUserId') || "-1")
    // if(id=== -1) {alert("user is not logged in"); return}
    // this.sessionService.getSessions(id)
    //   .pipe(catchError(err => {
    //       alert(err.message)
    //       throw throwError(err.message)
    //     }
    //   ))
    //   .subscribe(data => {
    //     // alert("sessions loaded")
    //     //TODO: fix the implementation of scheduleEvent
    //     // this.events = data
    //   })


  }
}
