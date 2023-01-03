import {SessionRating} from "./session-rating.model";

export class Session {
  sessionId!: number;
  title!: string;
  description!: string;
  startTime!: Date;
  endTime!: Date;
  isOptional!: boolean;
  difficultyLevel!: string;
  keywords!: string;
  ratingSum!: number;
  ratingCount!: number;
  sessionRatings!: SessionRating[];

}
