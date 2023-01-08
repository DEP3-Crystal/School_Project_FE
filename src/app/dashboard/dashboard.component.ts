import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../services/user-service";
import {ImageService} from "../services/image-service";
import {Observable} from "rxjs";
import {UserInfo} from "../model/user-info.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageUrl?: string;
  userInfo!: UserInfo;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private imageService: ImageService) {
  }

  returnUrl!: string;
  show = false;

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    this.userInfo = this.userService.getUserInfo() || new UserInfo();
    this.imageService.getImage(this.userInfo.profilePicture.id ||0)
      .subscribe(data => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.imageUrl = reader.result as string;
        }, false);

        if (data) {
          reader.readAsDataURL(data);
        }
      });
  }

  logoutFunction() {
    this.router.navigate([this.returnUrl]);
    localStorage.removeItem('currentUserEmail');
  }

  getEmail() {
    return localStorage.getItem('currentUserEmail');
  }

  getUserName() {
    return localStorage.getItem('currentUserName');
  }

  showSubjects(): boolean {
    this.show = !this.show;
    return this.show;
  }


}
