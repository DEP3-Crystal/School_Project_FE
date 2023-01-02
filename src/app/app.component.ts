import {Component} from '@angular/core';
import {UserInfo} from "./model/user-info.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School';
  user!: UserInfo;

}
