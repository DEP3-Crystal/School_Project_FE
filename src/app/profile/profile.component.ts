import {Component, OnInit} from '@angular/core';
import { UserInfo } from '../model/user-info.model';
import { UserService } from '../services/user-service';

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

}
