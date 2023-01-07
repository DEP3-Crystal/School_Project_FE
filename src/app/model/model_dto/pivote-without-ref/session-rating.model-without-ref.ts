import { SessionRatingId } from "../../id/session-ratingId";
import { UserInfoWithoutRef } from "../user-info-without-ref";


export class SessionRatingWithoutRef {
  sessionRatingId!: SessionRatingId;
  rating!: number;
  student!: UserInfoWithoutRef;

}
