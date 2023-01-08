import {Gender} from "./enum/gender";
import {Role} from "./enum/role";
import {Image} from "./image.model";
import {StudentGradeWithoutRef} from "./without_ref/student-grade-without-ref.model";
import {DepartmentWithoutRef} from "./without_ref/department-without-ref.model";
import {StudentRegistrationWithoutRef} from "./without_ref/student-registration-without.ref";
import {SessionRatingWithoutRef} from "./without_ref/session-rating-without.ref";
import {TeacherRatingWithoutRef} from "./without_ref/teacher-rating-without.ref";
import {UserInfo} from "./user-info.model";

export class StudentInfo extends UserInfo{

  department!: DepartmentWithoutRef;

  studentRegistrations: StudentRegistrationWithoutRef[] = [];

  studentGrades: StudentGradeWithoutRef[] = [];

  sessionRatings: SessionRatingWithoutRef[] = [];

  teacherRatings: TeacherRatingWithoutRef[] = [];
}
