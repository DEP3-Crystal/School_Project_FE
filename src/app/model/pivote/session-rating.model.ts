import {UserInfo} from "../user-info.model";
import {SessionRatingId} from "../id/session-ratingId";
import {SessionWithoutRef} from "../without_ref/session-without-ref.model";
import {StudentInfoWithoutRef} from "../without_ref/student-info-without-ref.model";

export class SessionRating {
  sessionRatingId!: SessionRatingId;
  rating!: number;
  student!: StudentInfoWithoutRef;
  session!: SessionWithoutRef

}
