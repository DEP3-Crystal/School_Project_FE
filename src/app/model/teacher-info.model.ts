import {TeacherRating} from "./teacher-rating.model";
import {EmployeeInfo} from "./employee-info.model";

export class TeacherInfo extends EmployeeInfo {
  credentials!: string;
  ratingSum!: number;
  ratingCount!: number;
  teacherRatings!: TeacherRating[];

}
