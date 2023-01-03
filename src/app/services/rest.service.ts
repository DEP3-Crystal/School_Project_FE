import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Session } from '../model/session.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  sessionList:any;
  constructor(private http:HttpClient) { 
    this.sessionList=[];
  }
  
 getSessionList(){
  
 }
  getSessions(){
    
     this.http.get('localhost:8080/sessions');
  }
  
}
