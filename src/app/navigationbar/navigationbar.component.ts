import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../model/user-info.model";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
