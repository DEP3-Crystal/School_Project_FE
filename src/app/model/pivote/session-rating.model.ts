import {UserInfo} from "../user-info.model";
import {SessionRatingId} from "../id/session-ratingId";
import {SessionWithoutRef} from "../without_ref/session-without-ref.model";

export class SessionRating {
  sessionRatingId!: SessionRatingId;
  rating!: number;
  student!: UserInfo;
  session!: SessionWithoutRef

}
