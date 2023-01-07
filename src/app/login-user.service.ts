import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';
import {UserInfo} from "./model/user-info.model";

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private url = "http://localhost:8080/users/login";

  constructor(private httpClient: HttpClient) {
  }

  loginUser(user: User): Observable<UserInfo> {
    console.log(user);
    return this.httpClient.post<UserInfo>(`${this.url}`, user);

  }
}
