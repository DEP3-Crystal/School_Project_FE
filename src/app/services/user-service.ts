import {UserInfo} from "../model/user-info.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: UserInfo;

  getCurrentUser(): UserInfo {
    return this.user
  }
}
