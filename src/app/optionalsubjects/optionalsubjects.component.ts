import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Session} from '../model/session.model';

// import { Subjects } from 'src/app/model/subjects';

@Component({
  selector: 'app-optionalsubjects',
  templateUrl: './optionalsubjects.component.html',
  styleUrls: ['./optionalsubjects.component.css']
})
export class OptionalsubjectsComponent {

  // sessions:Session[]=[];
  sessionList: Session[] = [];


  title: any;
  page: number = 1;
  isOptional: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getSessionList();
  }


  getSessionList() {
    this.http.get<Session[]>('http://localhost:8080/sessions').subscribe((result) => {
      this.sessionList = result.filter((session) => session.isOptional === true);
    })
  }

  Search() {
    if (this.title == '') {
      this.ngOnInit();
    } else {
      this.sessionList = this.sessionList.filter((res: { title: string; }) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}

