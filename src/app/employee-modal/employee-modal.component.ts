import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subscription } from 'rxjs';
import { toGender, toRole } from '../model/enum/enumImplicits';
import { EmployeeRegistration } from '../model/registrations/employee-registration.model';
import { UserRegistration } from '../model/registrations/user-registration.model';
import { UserInfo } from '../model/user-info.model';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css'],
  providers:[DatePipe]
})
export class EmployeeModalComponent {

  constructor(private httpClient: HttpClient,
    public bsModalRef: BsModalRef,
    private userService: UserService,
    private datePipe: DatePipe) {

  }
  @Input()
  selectedUser: UserRegistration = new UserRegistration();
  selectedEmployee:EmployeeRegistration = new EmployeeRegistration();
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


  employeeForm= new FormGroup({
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
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    hireDate: new FormControl('', [Validators.required, Validators.minLength(2)]),
    salary: new FormControl(0, [Validators.required, Validators.minLength(2)])
    

  })

  private fillEmployeeFields(){
    this.selectedEmployee = this.list[0].value;
    if (this.selectedEmployee.id) {

      this.employeeForm.controls.phoneNumber.setValue(this.selectedEmployee.phoneNumber);
      this.employeeForm.controls.title.setValue(this.selectedEmployee.lastName);
      this.employeeForm.controls.hireDate.setValue(this.datePipe.transform(this.selectedEmployee.hireDate,'dd/MM/YYYY'));
      this.employeeForm.controls.salary.setValue(this.selectedEmployee.salary);
  }
}

getEmployeeData():
EmployeeRegistration {

return {
  id: this.selectedUser.id,
  firstName: this.userForm.controls.firstName.value ? this.userForm.controls.firstName.value : '',
  lastName: this.userForm.controls.lastName.value || '',
  fullName: this.userForm.controls.firstName.value+' '+this.userForm.controls.firstName.value || '',
  email: this.userForm.controls.email.value || '',
  gender: toGender(this.userForm.controls.gender.value || ''),
  biography: this.userForm.controls.biography.value ||  '',
  role: toRole(this.userForm.controls.role.value ||''),
  profilePicture: JSON.parse(this.userForm.controls.profilePicture.value || '') ,
  birthDate: new Date(this.userForm.controls.birthDate.value ? new Date().toDateString() + ' ' + this.userForm.controls.birthDate.value : ''),
  password: this.userForm.controls.password.value||'',
  phoneNumber: this.selectedEmployee.phoneNumber,
  title: this.selectedEmployee.title,
  salary: this.employeeForm.controls.salary.value ? this.employeeForm.controls.salary.value : 0,
  hireDate: new Date(this.employeeForm.controls.hireDate.value ? new Date().toDateString() + ' ' + this.employeeForm.controls.hireDate.value : '')
  
}
}

  gender?:string;

  getUserData():
    UserRegistration {

    return {
      id: this.selectedUser.id,
      firstName: this.userForm.controls.firstName.value ? this.userForm.controls.firstName.value : '',
      lastName: this.userForm.controls.lastName.value || '',
      fullName: this.userForm.controls.firstName.value+' '+this.userForm.controls.firstName.value || '',
      email: this.userForm.controls.email.value || '',
      gender: toGender(this.userForm.controls.gender.value || ''),
      biography: this.userForm.controls.biography.value ||  '',
      role: toRole(this.userForm.controls.role.value ||''),
      profilePicture: JSON.parse(this.userForm.controls.profilePicture.value || '') ,
      birthDate: new Date(this.userForm.controls.birthDate.value ? new Date().toDateString() + ' ' + this.userForm.controls.birthDate.value : ''),
      password: this.userForm.controls.password.value||''
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
