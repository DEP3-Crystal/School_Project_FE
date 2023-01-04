import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session.model';

@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css']
})
export class SessionsPageComponent implements OnInit {
  sessionList:Session[]=[];
  page:number = 1;
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.getSessionList();
  }
  getSessionList(){
    this.http.get<Session[]>('http://localhost:8080/sessions').subscribe((result: any[])=>{
      this.sessionList=result.filter((session: { isOptional: boolean; })=>session.isOptional === true);
    })
  }
  editSession(){
    
  }
}
