import {Gender} from "./enum/gender";
import {StudentRegistration} from "./student-registration.model";
import {Role} from "./enum/role";

export class UserInfo {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: Gender;
  biography!: string;
  role!: Role;
  profilePicture!: string;
  studentRegistrations!: StudentRegistration[];

}
