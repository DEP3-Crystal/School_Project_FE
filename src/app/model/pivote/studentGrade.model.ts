import {StudentGradeId} from "../id/studentGradeId";
import {UserInfo} from "../user-info.model";
import {SessionWithoutRef} from "../without_ref/session-without-ref.model";

export class StudentGrade {
  studentGradeId!: StudentGradeId;
  grade!: number;
  student!: UserInfo;
  session!: SessionWithoutRef

}
