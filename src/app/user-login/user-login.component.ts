import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginUserService} from '../login-user.service';
import {catchError, throwError} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService, private loginUserService: LoginUserService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }


  model: any = {};
  loading = false;
  returnUrl!: string;

  ngOnInit(): void {
    // this.loginuserservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    if(this.userService.isLoggedIn())
      this.router.navigate(['dashboard'])
  }

  userLogin() {
    this.loginUserService.loginUser({email: this.emailValue, password: this.passwordValue})
      .pipe(
        catchError((error) => {
          alert(error.message)
          return throwError(error);
        })
      )
      .subscribe(userInfo => {
          // alert("Login Successfully")
          this.router.navigate([this.returnUrl]);
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          this.authenticationService.isUserLoggedIn()
          this.userService.setUserInfo(userInfo);
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
