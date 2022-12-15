import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  
  constructor(private loginuserservice: LoginUserService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.loginuserservice.loginUser({email:this.emailValue,password:this.passwordValue}).subscribe(data => {
      alert("Login Successfully")
    }
    );
  }
  hide = true;

  emailValue: string = '';
  passwordValue: string = '';
  clearEmailInput() {
    this.emailValue = '';
  }

  clearPasswordInput() {
    this.passwordValue = '';
  }



}