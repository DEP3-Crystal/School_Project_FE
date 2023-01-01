import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  private url = "http://localhost:8080/users/add";
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }
  hide = true;
  show = true;
  // employee=false;
  // @ViewChild('role') roles!: ElementRef;
	// selectedRole:String = this.roles.nativeElement.value;
	// onSelected():boolean {
    
		
  //   console.log(this.selectedRole);
  //   if(this.selectedRole === 'employee'){
  //       !this.employee;
  //     }else{
  //       this.employee;
  //     }
  //     return this.employee;
  //     ;
  // }
  //   ;


	}
