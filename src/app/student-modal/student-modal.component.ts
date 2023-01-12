
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subscription } from 'rxjs';
import { toGender, toRole } from '../model/enum/enumImplicits';
import { UserRegistration } from '../model/registrations/user-registration.model';
import { UserInfo } from '../model/user-info.model';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css'],
  providers: [DatePipe]
})
export class StudentModalComponent {

  constructor(private httpClient: HttpClient,
    public bsModalRef: BsModalRef,
    private userService: UserService,
    private datePipe: DatePipe) {

  }
  @Input()
  selectedUser: UserRegistration = new UserRegistration();
  @Output()
  afterServerSaveEvent = new EventEmitter<boolean>();

  private _isModalOpen$ = new BehaviorSubject<boolean>(false);
  userUpdateSubscription = new Subscription();
  userAddSubscription = new Subscription();
  formNameSubscription = new Subscription();
  userList: UserInfo[] = [];
  list: any[] = [];

  ngOnInit(): void {
    this.getUserList();
    if (this.selectedUser) {
      this.fillUserModal()
    }
  }

  selectedRole!: string;
  hide = true;

  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    // fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    biography: new FormControl(''),
    role: new FormControl('', [Validators.required]),
    profilePicture: new FormControl(''),
    birthDate: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  private fillUserModal() {
    this.selectedUser = this.list[0].value;
    if (this.selectedUser.id) {

      this.userForm.controls.firstName.setValue(this.selectedUser.firstName);
      this.userForm.controls.lastName.setValue(this.selectedUser.lastName);
      // this.userForm.controls.fullName.setValue(this.selectedUser.fullName);
      this.userForm.controls.email.setValue(this.selectedUser.email);
      this.userForm.controls.gender.setValue(this.selectedUser.gender);
      this.userForm.controls.biography.setValue(this.selectedUser.biography);
      this.userForm.controls.role.setValue(this.selectedUser.role);
      // this.userForm.controls.profilePicture.setValue(JSON.stringify(this.selectedUser.profilePicture));
      this.userForm.controls.birthDate.setValue(this.datePipe.transform(this.selectedUser.birthDate, 'yyyy-MM-dd','es-ES'));
      this.userForm.controls.password.setValue(this.selectedUser.password);

    }

  }
  gender?: string;

  getUserData():
    UserRegistration {

    return {
      id: this.selectedUser.id,
      firstName: this.userForm.controls.firstName.value ? this.userForm.controls.firstName.value : '',
      lastName: this.userForm.controls.lastName.value || '',
      fullName: this.userForm.controls.firstName.value + ' ' + this.userForm.controls.firstName.value || '',
      email: this.userForm.controls.email.value || '',
      gender: toGender(this.userForm.controls.gender.value || ''),
      biography: this.userForm.controls.biography.value || '',
      role: toRole(this.userForm.controls.role.value || ''),
      // profilePicture: JSON.parse(this.userForm.controls.profilePicture.value || ''),
      birthDate: new Date(this.userForm.controls.birthDate.value ? new Date().toDateString() + ' ' + this.userForm.controls.birthDate.value : ''),
      password: this.userForm.controls.password.value || ''
    }
  }

  addUser() {
    const user: UserRegistration = this.getUserData();
    console.log(this.userForm);
    console.log(user);

    console.log(this.userForm)

    this.userAddSubscription = this.userService.addUser(user).subscribe(() => {
      this.afterServerSaveEvent.emit(true);
    })

  }


  updateUser() {

    let user: UserRegistration = this.getUserData();

    this.userUpdateSubscription = this.userService.updateUser(user).subscribe(() => {
      this.afterServerSaveEvent.emit(true);
    })

  }

  getUserList() {
    this.httpClient.get<UserInfo[]>('http://localhost:8080/users').subscribe((result: any) => {
      this.userList = result;
    })
  }

  
  ngOnDestroy(): void {
    this.userUpdateSubscription.unsubscribe();
    this.userAddSubscription.unsubscribe();
    this.formNameSubscription.unsubscribe();
  }
}
