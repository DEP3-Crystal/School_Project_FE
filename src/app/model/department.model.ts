
import {UserInfoWithoutRef} from "./without_ref/user-info-without-ref.model";
import {TeacherInfoWithoutRef} from "./without_ref/teacher-info-without-ref.model";
import {SessionWithoutRef} from "./without_ref/session-without-ref.model";
import {EmployeeInfoWithoutRef} from "./without_ref/employee-info-without-ref.model";

export class Department {
  departmentId!: number;
  name!: string;
  employee!: EmployeeInfoWithoutRef;
  sessions!: SessionWithoutRef[];
  teachers!: TeacherInfoWithoutRef[];
  students!: UserInfoWithoutRef[];

}
