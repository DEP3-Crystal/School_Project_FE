import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'localhost:8080';

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string) {
    return this.http.post('${this.apiUrl}/login', {username, password})
      .pipe(

      )
    if (username === "eliaomeri" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    }
    return false;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
