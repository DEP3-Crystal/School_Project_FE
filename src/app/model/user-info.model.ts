import {Gender} from "./enum/gender";
import {StudentRegistration} from "./pivote/student-registration.model";
import {Role} from "./enum/role";
import {Image} from "./image.model";

export class UserInfo {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: Gender;
  biography!: string;
  role!: Role;
  profilePicture!: Image;
  studentRegistrations!: StudentRegistration[];

}
