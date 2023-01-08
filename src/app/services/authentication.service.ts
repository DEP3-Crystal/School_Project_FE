import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserInfo} from "../model/user-info.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost8080/users/login'
  private user!: UserInfo;

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): boolean {
    this.http.get<UserInfo>(this.url).subscribe(data => this.user = data)
    if (this.user.id !== undefined) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  singOut() {
    sessionStorage.removeItem('username')
  }
}
