import {Room} from "../room.model";
import {StudentRegistrationId} from "../id/student-registration.id";
import {Session} from "../session.model";

export class StudentRegistration {
  studentRegistrationId!: StudentRegistrationId;
  regDate!: Date;
  session!: Session;

}
