import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Session } from '../model/session.model';


@Component({
  selector: 'app-mandatorysubjects',
  templateUrl: './mandatorysubjects.component.html',
  styleUrls: ['./mandatorysubjects.component.css']
})
export class MandatorysubjectsComponent {

  // sessions:Session[]=[];
  sessionList:Session[]=[];
  title:any;
  page:number = 1;
  
  constructor(private http:HttpClient){
  }
  ngOnInit():void{
    this.getSessionList();
  }
  getSessionList(){
    this.http.get('http://localhost:8080/sessions').subscribe((result:any)=>{
      this.sessionList=result;
    })
  }
  Search(){
    if(this.title == ''){
      this.ngOnInit();
    }else{
      this.sessionList = this.sessionList.filter((res: { title: string; })=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }
  key:string ='id';
  reverse:boolean = false;
  sort(key:string){
  this.key =key;
  this.reverse=!this.reverse;
  }
  }