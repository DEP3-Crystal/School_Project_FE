import {UserInfo} from "./user-info.model";
import {TeacherRatingId} from "./id/teacherRatingId";

export class TeacherRating {
  teacherRatingId!: TeacherRatingId;
  rating!: number;
  student!: UserInfo;
}
