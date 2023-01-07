import { StudentRegistrationId } from "../../id/student-registration.id";
import { SessionWithoutRef } from "../session-without-ref";


export class StudentRegistrationWithoutRef {
  studentRegistrationId!: StudentRegistrationId;
  regDate!: Date;
  session!: SessionWithoutRef;

}
