import {TeacherRatingId} from "../id/teacherRatingId";
import {TeacherInfoWithoutRef} from "../without_ref/teacher-info-without-ref.model";
import {UserInfoWithoutRef} from "../without_ref/user-info-without-ref.model";
import {StudentInfoWithoutRef} from "../without_ref/student-info-without-ref.model";

export class TeacherRating {
  teacherRatingId!: TeacherRatingId;
  rating!: number;
  comment!: string;
  teacher!: TeacherInfoWithoutRef;
  student!: StudentInfoWithoutRef;
}
