import {HttpClient} from "@angular/common/http";
import {Session} from "../model/session.model";
import {Injectable} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _isModalOpen$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
  }
  getModalOpen() {
    return this._isModalOpen$.asObservable();
  }

  setModalOpen(value: boolean) {
    this._isModalOpen$.next(value);
  }


// teacherList:TeacherInfo[]=[];
// credentials:any;
// roomId:any;
// departmentName:any;
// difficultyLevel:any;
// sessionList:Session[]=[];
// roomList:Room[]=[];
// departmentList:Department[]=[];
ngOnInit():void{
  // this.getTeacherList();
  // this.getRoomList();
  // this.getDepartmentList();
  // this.getSessionList();
}

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

  getSessions() {
    return this.http.get('http://localhost:8080/sessions') as Observable<Session[]>
  }

  getSession(id: number) {
    return this.http.get('http://localhost:8080/sessions/' + id) as Observable<Session>
  }

  deleteSession(id: number) {
    return this.http.delete('http://localhost:8080/sessions/'+ id) as Observable<Session>
  }

  updateSession(session: Session) {
    return this.http.put('http://localhost:8080/session'+ session.id, session) as Observable<Session>
  }

  addSession(session: Session) {
    return this.http.post('http://localhost:8080/session/add', session) as Observable<Session>
  }
}
