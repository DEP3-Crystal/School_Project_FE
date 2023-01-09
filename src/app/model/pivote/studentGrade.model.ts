import {StudentGradeId} from "../id/studentGradeId";
import {SessionWithoutRef} from "../without_ref/session-without-ref.model";
import {StudentInfoWithoutRef} from "../without_ref/student-info-without-ref.model";

export class StudentGrade {
  studentGradeId!: StudentGradeId;
  grade!: number;
  student!: StudentInfoWithoutRef;
  session!: SessionWithoutRef

}
