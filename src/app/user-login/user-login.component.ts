import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  visible:boolean = true;
  changetype:boolean = true;
  constructor(private loginuserservice:LoginUserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully")
    }
    );
  }


  viewPassword(){
    this.visible = !this.visible;
    this.changetype=!this.changetype;
  }
}
