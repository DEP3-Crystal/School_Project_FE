import {SessionRating} from "./pivote/session-rating.model";
import {SchedulerEvent} from "@progress/kendo-angular-scheduler";

export class Session implements SchedulerEvent {
  id: number;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  isOptional?: boolean;
  difficultyLevel?: string;
  keywords?: string;
  ratingSum?: number;
  ratingCount?: number;
  sessionRatings?: SessionRating[];

  constructor(id: number, title: string, start: Date, end: Date) {
    this.id = id;
    this.title = title;
    this.start = start;
    this.end = end;
  }
}
