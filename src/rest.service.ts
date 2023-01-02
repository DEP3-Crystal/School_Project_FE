import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subjects} from './subjects';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  url: string = "http://localhost:3000/Subjects";

  getSubjects() {
    return this.http.get<Subjects[]>(this.url);
  }
}
