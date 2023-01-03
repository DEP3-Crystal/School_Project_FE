import {EmployeeInfo} from "./employee-info.model";
import {TeacherInfo} from "./teacher-info.model";
import {UserInfo} from "./user-info.model";
import {Session} from "./session.model";

export class Department {
  departmentId!: number;
  name!: string;
  employee!: EmployeeInfo;
  teachers!: TeacherInfo[];
  users!: UserInfo[];
  sessions!: Session[];

  // no need for getters, setters, or constructor in TypeScript
}
