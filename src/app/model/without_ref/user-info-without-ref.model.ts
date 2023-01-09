import {Gender} from "../enum/gender";
import {Role} from "../enum/role";
import {Image} from "../image.model";

export class UserInfoWithoutRef {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: Gender;
  biography!: string;
  role!: Role;
  profilePicture?: Image;
}
