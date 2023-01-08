import {StudentRegistrationId} from "../id/student-registration.id";
import {UserInfoWithoutRef} from "../without_ref/user-info-without-ref.model";
import {SessionWithoutRef} from "../without_ref/session-without-ref.model";

export class StudentRegistration {
  studentRegistrationId!: StudentRegistrationId;
  regDate!: Date;
  student!: UserInfoWithoutRef
  session!: SessionWithoutRef;

}
