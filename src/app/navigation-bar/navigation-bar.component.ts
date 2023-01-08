import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service";
import {UserInfo} from "../model/user-info.model";
import {ImageService} from "../services/image-service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  userInfo!: UserInfo;
  showDropdown = false;
  imageUrl!: string | undefined;

  constructor(public userService: UserService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo() || new UserInfo();
    this.imageService.getImage(this.userInfo?.profilePicture.id).subscribe(data => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result as string;
      }, false);

      if (data) {
        reader.readAsDataURL(data);
      }
    })
  }

}
