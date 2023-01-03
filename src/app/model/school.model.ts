import {Department} from "./department.model";
import {Room} from "./room.model";

export class School {
  schoolId!: number;
  location!: string;
  name!: string;
  rooms!: Room[];
  departments!: Department[];
}
