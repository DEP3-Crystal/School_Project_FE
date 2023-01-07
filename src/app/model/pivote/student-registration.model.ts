import {StudentRegistrationId} from "../id/student-registration.id";
import {Session} from "../session.model";
import {UserInfoWithoutRef} from "../without_ref/user-info-without-ref.model";

export class StudentRegistration {
  studentRegistrationId!: StudentRegistrationId;
  regDate!: Date;
  student!: UserInfoWithoutRef
  session!: Session;

}
