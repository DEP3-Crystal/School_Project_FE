import {StudentGradeId} from "../id/studentGradeId";
import {UserInfo} from "../user-info.model";

export class StudentGradeOld {
  studentGradeId!: StudentGradeId;
  grade!: number;
  student!: UserInfo;

}
