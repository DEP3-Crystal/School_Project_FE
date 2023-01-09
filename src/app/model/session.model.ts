import {SchedulerEvent} from "@progress/kendo-angular-scheduler";
import {RoomWithoutRef} from "./without_ref/room-without-ref.model";
import {DepartmentWithoutRef} from "./without_ref/department-without-ref.model";
import {TeacherInfoWithoutRef} from "./without_ref/teacher-info-without-ref.model";
import {SessionRatingWithoutRef} from "./without_ref/session-rating-without.ref";
import { StudentGradeWithoutRef } from "./without_ref/student-grade-without-ref.model";
import { StudentRegistrationWithoutRef } from "./without_ref/student-registration-without.ref";

export class Session implements SchedulerEvent {
  id?: Number;
  title!: string;
  description?: string;
  start!: Date;
  end!: Date;
  regDate!: Date;
  isOptional?: boolean;
  difficultyLevel?: string;
  keywords?: string;
  sessionRatings?: SessionRatingWithoutRef[];
  room!: RoomWithoutRef;
  department!: DepartmentWithoutRef;
  teacher!: TeacherInfoWithoutRef;
  studentGrades!:StudentGradeWithoutRef[];
  studentRegistrations!:StudentRegistrationWithoutRef[];
  // constructor(id: number, title: string, start: Date, end: Date) {
  //   this.id = id;
  //   this.title = title;
  //   this.start = start;
  //   this.end = end;
  // }
}
