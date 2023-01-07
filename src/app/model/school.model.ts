import {Department} from "./department.model";
import {Room} from "./room.model";
import {DepartmentWithoutRef} from "./without_ref/department-without-ref.model";
import {RoomWithoutRef} from "./without_ref/room-without-ref.model";

export class School {
  schoolId!: number;
  location!: string;
  name!: string;
  rooms!: RoomWithoutRef[];
  departments!: DepartmentWithoutRef[];
}
