import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of, Subscription, tap } from 'rxjs';
import { UserInfo } from '../model/user-info.model';
import { RegisterformComponent } from '../registerform/registerform.component';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [BsModalService]
})
export class UsersComponent {
  page: number = 1;
  fullName:any;
  @Input()
  user: UserInfo = new UserInfo();

  @Output()
  getUsersEvent = new EventEmitter<string>();

  @Output()
  editUsersEvent = new EventEmitter<UserInfo>();
  userSubscription = new Subscription();
  selectedUserId: string = '';
  selectedUser: UserInfo = new UserInfo();
  userList: UserInfo[] = [];
  
  isModalOpen$: Observable<boolean> = of(false);
  bsModalRef?: BsModalRef;

  userDeleteSubscription = new Subscription();
  constructor(private http: HttpClient,public usersService: UserService,
    private modalService: BsModalService,private route: ActivatedRoute){}

  getUsers() {

    this.userSubscription = this.usersService.getUsers().subscribe((response) => {
      this.userList= response;
    })
  }

  ngOnInit(): void {

    this.isModalOpen$ = this.usersService.getModalOpen().pipe(
      tap((value) => {
        if (!value) {
          this.selectedUser = new UserInfo();
        }
      })
    )

    this.getUsers();

    this.route.queryParams
      .subscribe(params => {
          console.log(params);
        }
      );
  }

  openModalWithComponent(user: UserInfo) {
    console.log(user)

    this.selectedUser = user;
    const initialState = {
      list: [{"value": this.selectedUser}]
    };
    // this.bsModalRef = this.modalService.show(RegisterformComponent,{initialState});
    // this.bsModalRef.content.closeBtnName = 'Close';
  }

  

  // editSession(session: Session) {
  //   console.log(session)
  //   this.selectedSession = session;
  // }

  afterDone() {
    this.getUsers();
    this.closeModalAndClearSelectedUser();
  }

  closeModalAndClearSelectedUser() {
    this.selectedUser = new UserInfo();
  }

  addUser() {
    this.usersService.setModalOpen(true);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  deleteUser(id: any) {
    this.userDeleteSubscription = this.usersService.deleteUser(id).subscribe(() => {
      this.triggerGetUsers();
    })
  }


  triggerEditUser() {
    this.editUsersEvent.emit(this.user);
    this.usersService.setModalOpen(true);
  }

  triggerGetUsers() {
    this.getUsersEvent.emit('');
  }

  onAdd() {
    this.openModalWithComponent(new UserInfo());
  }
  Search(){
    this.getUsers();
    if(this.fullName == ''){
       
    }else{
        this.userList = this.userList.filter((user) => 
        user.fullName.toLowerCase().includes(this.fullName.toLocaleLowerCase()))
        
      
      };
    }
  
    
  // Search() {
  //   if (this.title == '') {
  //     this.ngOnInit();
  //   } else {
  //     this.sessionList = this.sessionList.filter((res: { title: string; }) => {
  //       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
  //     });
  //   }
  // }
  
}
