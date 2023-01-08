import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Department} from '../model/department.model';
import {Room} from '../model/room.model';
import {Session} from '../model/session.model';
import {TeacherInfo} from '../model/teacher-info.model';
import {SessionService} from '../services/session-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {TeacherInfoWithoutRef} from "../model/without_ref/teacher-info-without-ref.model";
import {TeacherMapper} from "../mapper/teacher-mapper";
import { StudentGrade } from '../model/pivote/studentGrade.model';

@Component({
  selector: 'app-sessionmodal',
  templateUrl: './sessionmodal.component.html',
  styleUrls: ['./sessionmodal.component.css'],
  providers: [DatePipe, BsModalService]
})
export class SessionmodalComponent implements OnInit, OnDestroy {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];


  teacherList: TeacherInfo[] = [];
// credentials:any;
  roomId!: number;
  departmentId!: number;
  teacherId!: number;
  difficultyLevel: any;
  sessionList: Session[] = [];
  roomList: Room[] = [];
  departmentList: Department[] = [];
  studentGradesList:StudentGrade[]=[];
  private mapper = TeacherMapper.instance;
  
  @Input()
  selectedSession: Session = new Session();

  @Output()
  afterServerSaveEvent = new EventEmitter<boolean>();

  private _isModalOpen$ = new BehaviorSubject<boolean>(false);
  sessionUpdateSubscription = new Subscription();
  sessionAddSubscription = new Subscription();
  formNameSubscription = new Subscription();

  constructor(private http: HttpClient,
              public bsModalRef: BsModalRef,
              private sessionService: SessionService,
              private datePipe: DatePipe
  ) {
  }

  sessionForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl(''),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    regDate: new FormControl('', [Validators.required]),
    isOptional: new FormControl('', [Validators.required]),
    difficultyLevel: new FormControl('', [Validators.required]),
    keywords: new FormControl(''),
    roomId: new FormControl('', [Validators.required]),
    departmentId: new FormControl('', [Validators.required]),
    teacherId: new FormControl('', [Validators.required]),
    studentGradeId: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.getTeacherList();
    this.getRoomList();
    this.getDepartmentList();
    this.getSessionList();
    this.fillSessionModal();

  }


  private fillSessionModal() {
    this.selectedSession = this.list[0].value;
    if (this.selectedSession.id) {

      this.sessionForm.controls.title.setValue(this.selectedSession.title);
      this.sessionForm.controls.keywords.setValue(this.selectedSession.keywords!);
      this.sessionForm.controls.description.setValue(this.selectedSession.description!);
      this.sessionForm.controls.start.setValue(this.datePipe.transform(this.selectedSession.start, 'HH:mm'));
      this.sessionForm.controls.end.setValue(this.datePipe.transform(this.selectedSession.end, 'HH:mm'));
      this.sessionForm.controls.regDate.setValue(this.datePipe.transform(this.selectedSession.regDate));
      this.sessionForm.controls.isOptional.setValue(this.selectedSession.isOptional + '');
      this.sessionForm.controls.difficultyLevel.setValue(this.selectedSession.difficultyLevel!);
      this.sessionForm.controls.roomId.setValue(this.selectedSession.room.roomId + '');
      this.sessionForm.controls.teacherId.setValue(this.selectedSession.teacher.id + '');
      this.sessionForm.controls.departmentId.setValue(this.selectedSession.department.departmentId + '');
      this.sessionForm.controls.studentGradeId.setValue(this.selectedSession.studentGrade.studentGradeId + '')
    }

  }

  getSessionData():
    Session {
    let room_Id = Number(this.sessionForm.controls.roomId.value ? this.sessionForm.controls.roomId.value : '');
    let room = this.roomList.find((room) => room.roomId === room_Id) || new Room();
    let teacher_Id = Number(this.sessionForm.controls.teacherId.value ? this.sessionForm.controls.teacherId.value : '');
    let teacher = this.mapper.toTeacherWithoutRef(this.teacherList.find((teacher) => teacher.id === teacher_Id) || new TeacherInfo());
    let department_Id = Number(this.sessionForm.controls.departmentId.value ? this.sessionForm.controls.departmentId.value : '');
    let department = this.departmentList.find((department) => department.departmentId === department_Id) || new Department();
   let studentGrade_Id = (this.sessionForm.controls.studentGradeId.value ? this.sessionForm.controls.studentGradeId.value : '');
    let studentGrade = this.studentGradesList.find((studentGrade)=> studentGrade.studentGradeId === studentGrade_Id) || new StudentGrade();
    return {
      id: this.selectedSession.id,
      title: this.sessionForm.controls.title.value ? this.sessionForm.controls.title.value : '',
      description: this.sessionForm.controls.description.value ? this.sessionForm.controls.description.value : '',
      start: new Date(this.sessionForm.controls.start.value ? new Date().toDateString() + ' ' + this.sessionForm.controls.start.value : ''),
      end: new Date(this.sessionForm.controls.end.value ? new Date().toDateString() + ' ' + this.sessionForm.controls.end.value : ''),
      regDate: new Date(this.sessionForm.controls.regDate.value ? this.sessionForm.controls.regDate.value : ''),
      isOptional: Boolean(this.sessionForm.controls.isOptional.value),
      difficultyLevel: this.sessionForm.controls.difficultyLevel.value ? this.sessionForm.controls.difficultyLevel.value : '',
      keywords: this.sessionForm.controls.keywords.value ? this.sessionForm.controls.keywords.value : '',
      room: room,
      department: department,
      teacher: teacher,
      studentGrade:studentGrade
    }
  }

  updateSession() {

    let session: Session = this.getSessionData();

    this.sessionUpdateSubscription = this.sessionService.updateSession(session).subscribe(() => {
      this.afterServerSaveEvent.emit(true);
    })

  }

  addSession() {
    const session: Session = this.getSessionData();
    console.log(this.sessionForm);
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

  getTeacherList() {
    this.http.get<TeacherInfo[]>('http://localhost:8080/teachers').subscribe((result: any) => {
      this.teacherList = result;
    })
  }

  getRoomList() {
    this.http.get<Room[]>('http://localhost:8080/rooms').subscribe((result: any) => {
      this.roomList = result;
    })
  }

  getDepartmentList() {
    this.http.get<Department[]>('http://localhost:8080/departments').subscribe((result: any) => {
      this.departmentList = result;
    })
  }

  getSessionList() {
    this.http.get<Session[]>('http://localhost:8080/sessions').subscribe((result: any) => {
      this.sessionList = result;
    })
  }
  saveSession(session:Session){

    return this.http.post('http://localhost:8080/sessions', session) as Observable<Session>;

}
}

// ngOnInit():void{

// }

//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }

// getTeacherList(){
//   this.http.g// getDepartmentList(){
//   this.http.get<Department[]>('http://localhost:8080/departments').subscribe((result:any)=>{
//     this.departmentList=result;
//   })
// }et<TeacherInfo[]>('http://localhost:8080/teachers').subscribe((result:any)=>{
//     this.teacherList=result;
//   })
// }
// getRoomList(){
//   this.http.get<Room[]>('http://localhost:8080/rooms').subscribe((result:any)=>{
//     this.roomList=result;
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



