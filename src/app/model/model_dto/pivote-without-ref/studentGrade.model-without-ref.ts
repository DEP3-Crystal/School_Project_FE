import { StudentGradeId } from "../../id/studentGradeId";
import { UserInfoWithoutRef } from "../user-info-without-ref";


export class StudentGradeOldWithoutRef {
  studentGradeId!: StudentGradeId;
  grade!: number;
  student!: UserInfoWithoutRef;

}
