import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {StudentGrade} from "../model/pivote/student-grade.model";

@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.css']
})
export class GradesPageComponent implements OnInit {
  private url = 'http://localhost:8080/student-grade'
  studentGrades!: StudentGrade[];
  constructor(private http: HttpClient, ) {
  }

  ngOnInit(): void {
    let id = localStorage.getItem('currentUserId');
    // alert(id)
    this.http.get<StudentGrade[]>(`${this.url}/${id}`).subscribe(data=> this.studentGrades = data)
  }

}
