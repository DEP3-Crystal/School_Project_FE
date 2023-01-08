import {UserInfo} from "../model/user-info.model";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/enum/role";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo?: UserInfo;
  redirectUrl!: string;

  constructor(private router: Router) {
  }

  setUserInfo(userInfo: UserInfo) {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl])
    }
    this.userInfo = userInfo;
  }

  getUserInfo(): UserInfo | undefined {
    let userInfoJson = localStorage.getItem('userInfo');
    if (userInfoJson != null) {
      return <UserInfo>JSON.parse(userInfoJson)
    }
    return undefined;
  }

  isLoggedIn(): boolean {
    return !!this.getUserInfo()
  }

  singOut() {
    localStorage.removeItem('userInfo');
  }

  getUserRole(): Role | undefined {
    return this.getUserInfo()?.role
  }
}
