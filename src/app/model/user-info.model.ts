import {Gender} from "./enum/gender";
import {Role} from "./enum/role";
import {Image} from "./image.model";
import {
  StudentGradeWithoutRef
} from "./without_ref/student-grade-without-ref.model";
import {DepartmentWithoutRef} from "./without_ref/department-without-ref.model";
import {StudentRegistrationWithoutRef} from "./without_ref/student-registration-without.ref";
import {SessionRatingWithoutRef} from "./without_ref/session-rating-without.ref";
import {TeacherRatingWithoutRef} from "./without_ref/teacher-rating-without.ref";

export class UserInfo {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: Gender;
  biography!: string;
  role!: Role;
  profilePicture!: Image;
  department!: DepartmentWithoutRef;

  studentRegistrations: StudentRegistrationWithoutRef[] = [];

  studentGrades: StudentGradeWithoutRef[] = [];

  sessionRatings: SessionRatingWithoutRef[] = [];

  teacherRatings: TeacherRatingWithoutRef[] = [];
}
