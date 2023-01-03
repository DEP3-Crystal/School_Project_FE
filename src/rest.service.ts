import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from './app/model/session.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:3000/Subjects";
  getSessions(){
    return this.http.get<Session[]>(this.url);
  }
}
