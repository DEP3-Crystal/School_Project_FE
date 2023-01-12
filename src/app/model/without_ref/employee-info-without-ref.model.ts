import {UserInfoWithoutRef} from "./user-info-without-ref.model";

export class EmployeeInfoWithoutRef extends UserInfoWithoutRef {
  phoneNumber!: string;
  title!: string;
  hireDate!: Date;
  salary!: number;
}
