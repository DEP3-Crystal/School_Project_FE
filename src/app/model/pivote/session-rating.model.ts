import {UserInfo} from "../user-info.model";
import {SessionRatingId} from "../id/session-ratingId";

export class SessionRating {
  sessionRatingId!: SessionRatingId;
  rating!: number;
  student!: UserInfo;

}
