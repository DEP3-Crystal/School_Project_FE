import {EmployeeInfo} from "./employee-info.model";
import {TeacherRatingWithoutRef} from "./without_ref/teacher-rating-without.ref";
import {DepartmentWithoutRef} from "./without_ref/department-without-ref.model";

export class TeacherInfo extends EmployeeInfo {
  credentials!: string;
  department!: DepartmentWithoutRef;
  teacherRatings!: TeacherRatingWithoutRef[];

}
