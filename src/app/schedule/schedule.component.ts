import {Component, OnInit} from '@angular/core';
import {displayDate, sampleData} from "./events-utc";
import {SchedulerEvent} from "@progress/kendo-angular-scheduler";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  ngOnInit(): void {
  }
}
