import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Observable, of, Subscription, tap} from 'rxjs';
import {Session} from '../model/session.model';
import {SessionService} from '../services/session-service';
import {SessionmodalComponent} from '../sessionmodal/sessionmodal.component';

@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css'],
  providers: [BsModalService]
})
export class SessionsPageComponent implements OnInit {

  @Input()
  session: Session = new Session();

  @Output()
  getSessionsEvent = new EventEmitter<string>();

  @Output()
  editSessionsEvent = new EventEmitter<Session>();

  sessionDeleteSubscription = new Subscription();


  sessionSubscription = new Subscription();
  //selectedSessionId: string = '';
  selectedSession: Session = new Session();
  sessionList: Session[] = [];
  page: number = 1;
  isModalOpen$: Observable<boolean> = of(false);
  bsModalRef?: BsModalRef;


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              public sessionService: SessionService,
              private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    // this.getSessionList();

    this.isModalOpen$ = this.sessionService.getModalOpen().pipe(
      tap((value) => {
        if (!value) {
          this.selectedSession = new Session();
        }
      })
    )

    this.getSessions();

    this.route.queryParams
      .subscribe(params => {
          console.log(params);
        }
      );
  }

  openModalWithComponent(session: Session) {
    console.log(session)

    this.selectedSession = session;
    // const initialState: ModalOptions = {
    //   initialState: {
    //     list: [this.selectedSession],
    //     title: 'Add/Edit Session'
    //   }
    const initialState = {
      list: [{"value": this.selectedSession}]
    };
    this.bsModalRef = this.modalService.show(SessionmodalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  getSessions() {

    this.sessionSubscription = this.sessionService.getSessions().subscribe((response) => {
      this.sessionList = response;
    })
  }

  // editSession(session: Session) {
  //   console.log(session)
  //   this.selectedSession = session;
  // }

  afterDone() {
    this.getSessions();
    this.closeModalAndClearSelectedSession();
  }

  closeModalAndClearSelectedSession() {
    this.selectedSession = new Session();
  }

  addSession() {
    this.sessionService.setModalOpen(true);
  }

  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe();
  }

  deleteSession(id: any) {
    if(!this.selectedSession.studentGrades || !this.selectedSession.studentRegistrations || !this.selectedSession.sessionRatings){
      alert("You cannot delete this session since it has session ratings and students.");
    }else{
    this.sessionDeleteSubscription = this.sessionService.deleteSession(id).subscribe(() => {
      this.triggerGetSessions();
    })
  }
  }


  triggerEditSession() {
    this.editSessionsEvent.emit(this.session);
    this.sessionService.setModalOpen(true);
  }

  triggerGetSessions() {
    this.getSessionsEvent.emit('');
  }

  onAdd() {
    this.openModalWithComponent(new Session());
  }

  
}
