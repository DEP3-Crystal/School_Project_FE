import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Department } from '../model/department.model';
import { Room } from '../model/room.model';
import { Session } from '../model/session.model';
import { TeacherInfo } from '../model/teacher-info.model';
import { SessionService } from '../services/session-service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-sessionmodal',
  templateUrl: './sessionmodal.component.html',
  styleUrls: ['./sessionmodal.component.css'],
  providers:[DatePipe]
})
export class SessionmodalComponent implements OnInit, OnDestroy {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
  @Input()
  selectedSession: Session = new Session();

  @Output()
  afterServerSaveEvent = new EventEmitter<boolean>();

  private _isModalOpen$ = new BehaviorSubject<boolean>(false);
  sessionUpdateSubscription = new Subscription();
  sessionAddSubscription = new Subscription();
  formNameSubscription = new Subscription();
  
  constructor(private http:HttpClient,
    public bsModalRef: BsModalRef,
    private sessionService: SessionService,
    private datePipe :DatePipe
    ){}

    sessionForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl(''),
      start: new FormControl( '', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      isOptional: new FormControl('', [Validators.required]),
      difficultyLevel: new FormControl('', [Validators.required]),
      keywords: new FormControl('', [Validators.required])
    })

    ngOnInit(): void {
    
      this.sessionForm.controls.title.setValue(this.selectedSession.title);
      this.sessionForm.controls.description.setValue(this.selectedSession.description!);
      this.sessionForm.controls.start.setValue(this.datePipe.transform(this.selectedSession.start));
      this.sessionForm.controls.end.setValue(this.datePipe.transform(this.selectedSession.end));
      this.sessionForm.controls.isOptional.setValue(this.selectedSession.isOptional + '');
      this.sessionForm.controls.difficultyLevel.setValue(this.selectedSession.difficultyLevel!);
      this.sessionForm.controls.keywords.setValue(this.selectedSession.keywords!);
      
    }


    updateSession() {
      const session: Session = {
        id: this.selectedSession.id,
        title: this.sessionForm.controls.title.value ? this.sessionForm.controls.title.value : '',
        description: this.sessionForm.controls.description.value ? this.sessionForm.controls.description.value : '',
        start: new Date(this.sessionForm.controls.start.value?this.sessionForm.controls.start.value:''),
        end: new Date(this.sessionForm.controls.end.value?this.sessionForm.controls.end.value:''),
        isOptional:Boolean(this.sessionForm.controls.isOptional.value) ,
        difficultyLevel: this.sessionForm.controls.difficultyLevel.value ? this.sessionForm.controls.difficultyLevel.value : '',
        keywords: this.sessionForm.controls.keywords.value ? this.sessionForm.controls.keywords.value : ''
        
      }
  
      this.sessionUpdateSubscription = this.sessionService.updateSession(session).subscribe(() => {
        this.afterServerSaveEvent.emit(true);
      })
  
    }

    addSession() {
      const session: Session = {
        // id: this.selectedSession.id,
        title: this.sessionForm.controls.title.value ? this.sessionForm.controls.title.value : '',
        description: this.sessionForm.controls.description.value ? this.sessionForm.controls.description.value : '',
        start: new Date(this.sessionForm.controls.start.value? new Date().toDateString() + ' ' + this.sessionForm.controls.start.value:''),
        end: new Date(this.sessionForm.controls.end.value? new Date().toDateString() + ' ' + this.sessionForm.controls.end.value:''),
        isOptional:Boolean(this.sessionForm.controls.isOptional.value),
        difficultyLevel: this.sessionForm.controls.difficultyLevel.value ? this.sessionForm.controls.difficultyLevel.value : '',
        keywords: this.sessionForm.controls.keywords.value ? this.sessionForm.controls.keywords.value : '',
        
      }
      console.log(session);
  
      console.log(this.sessionForm)
  
      this.sessionAddSubscription = this.sessionService.addSession(session).subscribe(() => {
        this.afterServerSaveEvent.emit(true);
      })
  
    }
    ngOnDestroy(): void {
      this.sessionUpdateSubscription.unsubscribe();
      this.sessionAddSubscription.unsubscribe();
      this.formNameSubscription.unsubscribe();
    }
  
  }
// teacherList:TeacherInfo[]=[];
// credentials:any;
// roomId:any;
// departmentName:any;
// difficultyLevel:any;
// sessionList:Session[]=[];
// roomList:Room[]=[];
// departmentList:Department[]=[];
// ngOnInit():void{
//   this.getTeacherList();
//   this.getRoomList();
//   this.getDepartmentList();
  // this.getSessionList();
// }

//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }
  
// getTeacherList(){
//   this.http.get<TeacherInfo[]>('http://localhost:8080/teachers').subscribe((result:any)=>{
//     this.teacherList=result;
//   })
// }
// getRoomList(){
//   this.http.get<Room[]>('http://localhost:8080/rooms').subscribe((result:any)=>{
//     this.roomList=result;
//   })
// }
// getDepartmentList(){
//   this.http.get<Department[]>('http://localhost:8080/departments').subscribe((result:any)=>{
//     this.departmentList=result;
//   })
// }
// getSessionList(){
//   this.http.get<Session[]>('http://localhost:8080/sessions').subscribe((result:any)=>{
//     this.sessionList=result;
//   })
// }
  // Search(){
  //   if(this.credentials == ''){
  //     this.ngOnInit();
  //   }else{
  //     this.teacherList = this.teacherList.filter((res: { credentials: string; })=>{
  //       return res.credentials.toLocaleLowerCase().match(this.credentials.toLocaleLowerCase());
  //     });
  //   }
  // }

  // saveSession(session:Session){
   
  //     return this.http.post('http://localhost:8080/sessions', session) as Observable<Session>;
    
  // }



