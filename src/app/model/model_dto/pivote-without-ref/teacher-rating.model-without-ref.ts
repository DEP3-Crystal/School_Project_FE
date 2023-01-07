import { TeacherRatingId } from "../../id/teacherRatingId";
import { UserInfoWithoutRef } from "../user-info-without-ref";


export class TeacherRatingWithoutRef {
  teacherRatingId!: TeacherRatingId;
  rating!: number;
  student!: UserInfoWithoutRef;
}
