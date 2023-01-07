import {EmployeeInfo} from "./employee-info.model";
import {TeacherRatingWithoutRef} from "./without_ref/teacher-rating-without.ref";

export class TeacherInfo extends EmployeeInfo {
  credentials!: string;
  ratingSum!: number;
  ratingCount!: number;
  override teacherRatings!: TeacherRatingWithoutRef[];

}
