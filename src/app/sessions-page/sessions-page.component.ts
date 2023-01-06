import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable, of, Subscription, tap } from 'rxjs';
import { Session } from '../model/session.model';
import { SessionService } from '../services/session-service';
import { SessionmodalComponent } from '../sessionmodal/sessionmodal.component';

@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css'],
  providers:[BsModalService]
})
export class SessionsPageComponent implements OnInit {
  sessionSubscription = new Subscription();
  selectedSessionId:string='';
  selectedSession:Session = new Session();
  sessionList:Session[]=[];
  page:number = 1;
  isModalOpen$: Observable<boolean> = of(false);
  bsModalRef?: BsModalRef;



  constructor(private http: HttpClient,
    private route:ActivatedRoute,
    public sessionService: SessionService,
    private modalService: BsModalService
    ) { }

  ngOnInit():void{
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
  }  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [this.selectedSession],
        title: 'Add/Edit Session'
      }
    };
    this.bsModalRef = this.modalService.show(SessionmodalComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  getSessions() {

    this.sessionSubscription = this.sessionService.getSessions().subscribe((response) => {
      this.sessionList =  response;
    })
  }

  editSession(session: Session) {
    this.selectedSession = session;
  }

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
}
