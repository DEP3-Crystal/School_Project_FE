import {UserInfo} from "../model/user-info.model";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/enum/role";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserRegistration } from "../model/registrations/user-registration.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo?: UserInfo;
  redirectUrl!: string;
  constructor(private router: Router,private http: HttpClient) {
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

  signOut() {
    localStorage.removeItem('userInfo');
  }

  getUserRole(): Role | undefined {
    return this.getUserInfo()?.role
  }
  private _isModalOpen$ = new BehaviorSubject<boolean>(false);

 

  getModalOpen() {
    return this._isModalOpen$.asObservable();
  }

  setModalOpen(value: boolean) {
    this._isModalOpen$.next(value);
  }


  getUsers() {
    return this.http.get('http://localhost:8080/users') as Observable<UserInfo[]>
  }

  getUser(id: number) {
    return this.http.get('http://localhost:8080/users/' + id) as Observable<UserInfo>
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:8080/user/' + id) as Observable<UserInfo>
  }

  updateUser(user: UserInfo) {
    return this.http.put('http://localhost:8080/user/updateInfo' + user.id, user) as Observable<UserInfo>
  }

  addUser(user: UserInfo) {
    return this.http.post('http://localhost:8080/users/add', user) as Observable<UserInfo>
  }


}
