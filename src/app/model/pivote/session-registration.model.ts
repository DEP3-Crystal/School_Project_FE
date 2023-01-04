import {Session} from "../session.model";
import {SessionRegistrationId} from "../id/session-registration.id";

export class SessionRegistration {
  sessionRegistrationId!: SessionRegistrationId;
  regDate!: Date;
  session!: Session;

}
