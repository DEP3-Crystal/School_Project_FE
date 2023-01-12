import {Component, OnInit} from '@angular/core';
import { Role } from '../model/enum/role';
import { UserInfo } from '../model/user-info.model';
import { UserService } from '../services/user-service';
// import { Role } from '../model/enum/role.ts';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserInfo = this.userService.getUserInfo() || new UserInfo();
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
  }
  statusStudent = Role.STUDENT;
  statusEmployee=Role.ADMIN || Role.EMPLOYEE || Role .ORGANIZER || Role.TEACHER;

}
