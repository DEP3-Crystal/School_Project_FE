import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl:'./user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  
  constructor(private loginuserservice: LoginUserService,private route: ActivatedRoute, private router: Router) {
  }


  model: any = {};
  loading = false;
  returnUrl!: string;

  ngOnInit(): void {
    // this.loginuserservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  userLogin() {
    this.loginuserservice.loginUser({ email: this.emailValue, password: this.passwordValue })
      .subscribe(data => {
        // alert("Login Successfully")
        this.router.navigate([this.returnUrl]);
        localStorage.setItem('currentUser',this.emailValue);
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
