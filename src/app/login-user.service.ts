import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private url="http://localhost:8081/user/login";
  constructor(private httpClient: HttpClient) { }
  
  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.url}`,user);

  }
}
