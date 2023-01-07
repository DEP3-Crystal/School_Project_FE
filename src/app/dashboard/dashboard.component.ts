import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  returnUrl!: string;
  show = false;

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
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
