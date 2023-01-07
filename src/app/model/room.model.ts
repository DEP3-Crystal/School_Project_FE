import {SchoolWithoutRef} from "./without_ref/school.-without-refmodel";
import {SessionWithoutRef} from "./without_ref/session-without-ref.model";

export class Room {
  roomId!: number;
  floor!: number;
  doorNumber!: number;
  type!: string;
  capacity!: number;
  school!: SchoolWithoutRef
  sessionRegistrations!: SessionWithoutRef;

}

