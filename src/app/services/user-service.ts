import {UserInfo} from "../model/user-info.model";
import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: UserInfo;
  constructor(private http: HttpClient) {
  }


  private _isModalOpen$ = new BehaviorSubject<boolean>(false);

  getCurrentUser(): UserInfo {
    return this.user
  }

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
    return this.http.delete('http://localhost:8080/session/' + id) as Observable<UserInfo>
  }

  updateUser(user: UserInfo) {
    return this.http.put('http://localhost:8080/session' + user.id, user) as Observable<UserInfo>
  }

  addUser(user: UserInfo) {
    return this.http.post('http://localhost:8080/users/add', user) as Observable<UserInfo>
  }
  
}
