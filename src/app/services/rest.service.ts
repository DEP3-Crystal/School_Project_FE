import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  sessionList: any;

  constructor(private http: HttpClient) {
    this.sessionList = [];
  }

  getSessionList() {

  }

  getSessions() {

    this.http.get('localhost:8080/sessions');
  }

}
