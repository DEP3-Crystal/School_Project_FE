import {Room} from "./room.model";
import {StudentRegistrationId} from "./id/student-registration.id";

export class StudentRegistration {
  studentRegistrationId!: StudentRegistrationId;
  regDate!: Date;
  room!: Room;

}
